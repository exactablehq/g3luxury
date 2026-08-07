import {
  ORG_ADDRESS_LINES,
  ORG_EMAIL,
  ORG_LEGAL_NAME,
  ORG_PHONE_E164,
  SITE_URL,
} from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: ORG_LEGAL_NAME,
    url: SITE_URL,
    telephone: ORG_PHONE_E164,
    email: ORG_EMAIL,
    image: `${SITE_URL}/opengraph-image.png`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG_ADDRESS_LINES[0],
      addressLocality: "Nani Daman",
      postalCode: "396210",
      addressRegion: "Daman & Diu",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
