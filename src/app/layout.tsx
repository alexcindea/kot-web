import type { Metadata } from "next";
import { Big_Shoulders, Archivo } from "next/font/google";
import 'leaflet/dist/leaflet.css'
import "./globals.css";
import ScrollFx from './components/ScrollFx'
import { getSiteUrl, siteDescription, siteLocale, siteName } from './seo'

const bigShoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Impact", "sans-serif"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: '/',
  },
  category: 'sports',
  keywords: [
    'Knights Of Transylvania',
    'KOT',
    'cheerleading Cluj',
    'cheerleading Cluj-Napoca',
    'cheerleading România',
    'sport copii Cluj',
    'sport juniori Cluj',
  ],
  openGraph: {
    type: 'website',
    locale: siteLocale,
    siteName,
    url: '/',
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${bigShoulders.variable} ${archivo.variable}`}>
      <body>
        <ScrollFx />
        {children}
      </body>
    </html>
  );
}
