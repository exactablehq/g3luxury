import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./style.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "G3 Luxury | Massage & Wellness Spa",
  description:
    "Indulge in a premium, holistic wellness experience at G3 Luxury. Certified therapists, organic oils, and high-end sensory treatments designed for ultimate restoration.",
  keywords: [
    "luxury spa",
    "wellness center",
    "massage therapy",
    "facial treatment",
    "steam therapy",
    "hot stone massage",
    "couple spa",
    "organic products",
    "g3 luxury",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
