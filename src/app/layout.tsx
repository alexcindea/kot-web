import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knights Of Transylvania · Cheerleading",
  description:
    "Performanță și spectacol în inima Transilvaniei. Peste 130 de sportivi, 20+ titluri naționale, ICU Cheerleading Worlds 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${bebas.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
