/**
 * Prints a photo slot's notation inside the slot while it is still empty.
 * The code matches the field title in the Studio ("G3 · U13 Fete"), so an
 * editor who spots `G3` on the page knows which field to upload into.
 * Once a photo lands in the slot this disappears entirely.
 */
export default function SlotCode({ code }: { code: string }) {
  return (
    <span className="kot-slot-code" title={`Slot Sanity ${code}`}>
      <span className="kot-slot-code__code">{code}</span>
      <span className="kot-slot-code__hint">Slot liber</span>
    </span>
  )
}
