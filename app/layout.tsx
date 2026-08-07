import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import JsonLd from "@/components/ui/JsonLd";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import AnalyticsScripts from "@/components/ui/AnalyticsScripts";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "G3 Luxury | Best Spa in Daman, Vapi & Udvada", //"G3 Luxury | Massage & Wellness Spa in Nani Daman"
    template: "%s | G3 Luxury",
  },
  description:
    "Indulge in a premium, holistic wellness experience at G3 Luxury — the best spa in Daman, Vapi, Udvada, Valsad, and Silvassa. Experience elite therapies, custom steam baths, and organic oil massages.",
  keywords: [
    "best spa in daman",
    "best spa in vapi",
    "best spa in udvada",
    "luxury spa daman",
    "spa near vapi",
    "wellness spa daman",
    "massage in daman",
    "body massage vapi",
    "couple spa daman",
    "massage parlour in daman",
    "spa silvassa",
    "spa valsad",
    "G3 Luxury Spa Daman",
    "massage therapist daman",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "G3 Luxury | Massage & Wellness Spa",
    description:
      "Premium, holistic wellness experiences in Nani Daman — certified therapists, organic oils, and high-end sensory treatments.",
    url: SITE_URL,
    siteName: "G3 Luxury",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G3 Luxury | Massage & Wellness Spa",
    description:
      "Premium, holistic wellness experiences in Nani Daman — certified therapists, organic oils, and high-end sensory treatments.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <JsonLd />
        {children}
        <CookieConsentBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
