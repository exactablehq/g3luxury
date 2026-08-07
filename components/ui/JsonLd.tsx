import { SERVICES } from "@/data/services";
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
    "@id": `${SITE_URL}/#spa`,
    name: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/opengraph-image.png`,
    description:
      "Indulge in premium, holistic wellness at G3 Luxury Massage & Spa — the best spa in Daman, serving guests from Vapi, Udvada, Valsad, and Silvassa. Experience professional Swedish, Deep Tissue, and Aromatherapy massages, steam baths, and custom couple packages.",
    telephone: ORG_PHONE_E164,
    email: ORG_EMAIL,
    priceRange: "₹₹",
    creator: {
      "@type": "Organization",
      name: "Exactable",
      url: "https://exactable.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Exactable",
      url: "https://exactable.in",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG_ADDRESS_LINES[0],
      addressLocality: "Nani Daman",
      postalCode: "396210",
      addressRegion: "Daman & Diu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.4124",
      longitude: "72.8364",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Daman" },
      { "@type": "AdministrativeArea", name: "Vapi" },
      { "@type": "AdministrativeArea", name: "Udvada" },
      { "@type": "AdministrativeArea", name: "Valsad" },
      { "@type": "AdministrativeArea", name: "Silvassa" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Wellness Therapies",
      itemListElement: SERVICES.map((service) => {
        // Extract a clean numeric value for pricing schema
        const priceVal = service.price
          ? service.price
          : service.prices && service.prices[0]
            ? service.prices[0].price
            : "₹2500";
        const numericPrice = priceVal.replace(/[^\d]/g, "");

        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription || service.description,
          },
          price: numericPrice,
          priceCurrency: "INR",
        };
      }),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
