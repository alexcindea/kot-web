import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy for the public site.
 *
 * `script-src` still carries 'unsafe-inline' because Next inlines its own
 * bootstrap and the streamed RSC payload; locking that down needs per-request
 * nonces, which means middleware and giving up static rendering on every
 * page. Not worth it here. The rest of the policy is real though: nothing can
 * frame us, no plugins, no base-tag rewriting, forms can only post to us, and
 * the only third-party origins the browser will fetch from are the ones the
 * map and the CMS actually use.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  // 'unsafe-eval' is Turbopack's hot reload — development only.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  // styled-components writes real inline <style> tags.
  "style-src 'self' 'unsafe-inline'",
  // next/image proxies Sanity and Unsplash through our own origin; the Leaflet
  // map tiles are fetched by the browser directly.
  "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com https://*.basemaps.cartocdn.com",
  // next/font/google self-hosts at build time, so no Google origin needed.
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'none'",
  // Pointless against a dev server on plain http.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

/**
 * Sanity Studio is a large third-party app that loads workers, blobs and its
 * own API hosts, and Vision evaluates GROQ at runtime. Policing it from here
 * means breaking it on their next release, so /studio keeps only the headers
 * that do not care what the page loads. It is login-gated by Sanity and
 * disallowed in robots.ts.
 */
const studioContentSecurityPolicy = "frame-ancestors 'none'";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  // Nothing gains from announcing the framework and version.
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.1.134"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
      // Same key, later entry — Next lets this override the line above.
      {
        source: "/studio/:path*",
        headers: [
          { key: "Content-Security-Policy", value: studioContentSecurityPolicy },
        ],
      },
      {
        source: "/studio",
        headers: [
          { key: "Content-Security-Policy", value: studioContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
