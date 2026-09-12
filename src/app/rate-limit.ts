/**
 * Rate limiting for the contact form.
 *
 * The honeypot in the server action catches lazy bots; this catches anything
 * that bothers to POST the action directly in a loop. Two ceilings, because
 * they fail differently:
 *
 *   - per visitor, so one source cannot flood the inbox;
 *   - across everyone, so a spread-out flood cannot burn the month's Resend
 *     allowance and take genuine enquiries down with it.
 *
 * State lives in memory, which means it is per server instance and resets on
 * a cold start. That is the right trade for a club site: no extra service to
 * run, and the worst case is a determined attacker getting a few more
 * messages through than the numbers below suggest. Move to a shared store
 * (Redis, Vercel KV) only if that ever stops being true.
 */

type Counter = { count: number; resetAt: number }

const PER_VISITOR = { limit: 3, windowMs: 15 * 60_000 }
const OVERALL = { limit: 60, windowMs: 60 * 60_000 }

/** Bounds memory if someone cycles through addresses. `OVERALL` is the real
 *  backstop for that case — this just stops the map growing without end. */
const MAX_TRACKED_VISITORS = 5_000

const visitors = new Map<string, Counter>()
let overall: Counter = { count: 0, resetAt: 0 }

export type RateLimitVerdict = { allowed: true } | { allowed: false; retryAfterSeconds: number }

/**
 * Who is asking. Behind a proxy the socket address is the proxy's, so the
 * client address arrives in a header the platform sets — on Vercel both of
 * these are written by the edge and cannot be forged by the caller. Anywhere
 * that is not true, these headers are attacker-controlled and this key needs
 * revisiting.
 */
export function contactRateLimitKey(headerList: Headers): string {
  const realIp = headerList.get('x-real-ip')?.trim()
  if (realIp) {
    return realIp
  }

  const forwarded = headerList.get('x-forwarded-for')?.split(',')[0]?.trim()
  if (forwarded) {
    return forwarded
  }

  // No address to key on (local dev, an unusual host). Everyone shares one
  // bucket rather than everyone skipping the limit.
  return 'unknown'
}

function currentWindow(counter: Counter | undefined, now: number, windowMs: number): Counter {
  if (!counter || counter.resetAt <= now) {
    return { count: 0, resetAt: now + windowMs }
  }

  return counter
}

function prune(now: number) {
  for (const [key, counter] of visitors) {
    if (counter.resetAt <= now) {
      visitors.delete(key)
    }
  }

  if (visitors.size > MAX_TRACKED_VISITORS) {
    visitors.clear()
  }
}

/**
 * Claims one send. Call it immediately before handing the message to Resend,
 * never earlier — a visitor who mistypes their email three times should not
 * spend their allowance on failed validation.
 */
export function consumeContactSlot(key: string): RateLimitVerdict {
  const now = Date.now()
  prune(now)

  const visitor = currentWindow(visitors.get(key), now, PER_VISITOR.windowMs)
  if (visitor.count >= PER_VISITOR.limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((visitor.resetAt - now) / 1000) }
  }

  const everyone = currentWindow(overall, now, OVERALL.windowMs)
  if (everyone.count >= OVERALL.limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((everyone.resetAt - now) / 1000) }
  }

  // Both ceilings checked before either is charged, so a blocked visitor
  // never eats into the shared allowance.
  visitor.count += 1
  everyone.count += 1
  visitors.set(key, visitor)
  overall = everyone

  return { allowed: true }
}
