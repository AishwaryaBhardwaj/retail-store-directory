import { StoreEntity } from "@/types/store";

export function generateStoreJsonLd(store: StoreEntity, baseUrl: string = "https://www.apexoutdoors.com") {
  const storeUrl = `${baseUrl}/stores/${store.slug}`;
  const storeEntityId = `${storeUrl}#store`;

  // 1. Core LocalBusiness / SportingGoodsStore Schema
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": ["SportingGoodsStore", "Store", "LocalBusiness"],
    "@id": storeEntityId,
    "name": store.name,
    "alternateName": [
      `${store.brand} ${store.address.addressLocality}`,
      `${store.storeNumber}`,
      `Apex Sports ${store.address.addressLocality} ${store.address.addressRegion}`
    ],
    "description": store.description,
    "url": storeUrl,
    "telephone": store.telephone,
    "email": store.email,
    "priceRange": store.priceRange,
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Apple Pay, Google Pay, Apex Gift Card",
    "image": [
      store.heroImage,
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "logo": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80",
    "hasMap": store.geo.mapUrl || `https://maps.google.com/?q=${store.geo.latitude},${store.geo.longitude}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": store.address.streetAddress,
      "addressLocality": store.address.addressLocality,
      "addressRegion": store.address.addressRegion,
      "postalCode": store.address.postalCode,
      "addressCountry": store.address.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": store.geo.latitude,
      "longitude": store.geo.longitude,
    },
    "openingHoursSpecification": store.regularHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.dayOfWeek,
      "opens": h.opens,
      "closes": h.closes,
    })),
    "department": store.departments.map((dept) => ({
      "@type": "Store",
      "@id": `${storeUrl}#dept-${dept.slug}`,
      "name": dept.name,
      "description": dept.description,
      "telephone": store.telephone,
      "parentOrganization": {
        "@id": storeEntityId,
      },
      "knowsAbout": dept.trendingKeywords,
      "makesOffer": dept.featuredServices.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
        },
      })),
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Live In-Store Inventory at ${store.name}`,
      "itemListElement": store.inventory.map((item, idx) => ({
        "@type": "Offer",
        "position": idx + 1,
        "price": item.price,
        "priceCurrency": "USD",
        "availability":
          item.availability === "InStock"
            ? "https://schema.org/InStock"
            : item.availability === "LimitedAvailability"
            ? "https://schema.org/LimitedAvailability"
            : "https://schema.org/OutOfStock",
        "inventoryLevel": {
          "@type": "QuantitativeValue",
          "value": item.quantityOnHand,
          "unitCode": "C62",
        },
        "itemOffered": {
          "@type": "Product",
          "name": item.name,
          "sku": item.sku,
          "gtin": item.gtin,
          "brand": {
            "@type": "Brand",
            "name": item.brand,
          },
          "category": item.category,
          "image": item.imageUrl,
          "description": `${item.name} physically stocked at ${store.name} in ${item.aisle}. ${item.highlights.join(". ")}`,
        },
        "availableAtOrFrom": {
          "@id": storeEntityId,
        },
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "value": item.pickupTimeMinutes,
          "unitCode": "MIN",
          "description": `Ready for Curbside Drive-Up Pickup in ${item.pickupTimeMinutes} minutes`,
        },
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": store.aggregateRating.ratingValue,
      "reviewCount": store.aggregateRating.reviewCount,
      "bestRating": store.aggregateRating.bestRating,
      "worstRating": 1,
    },
    "amenityFeature": store.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true,
    })),
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${store.address.addressLocality} Metropolitan Area`,
    },
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Apex Sports + Outdoors",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Store Locator",
        "item": `${baseUrl}/stores`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${store.address.addressLocality}, ${store.address.addressRegion}`,
        "item": storeUrl,
      },
    ],
  };

  // 3. FAQPage Schema for AI Search Engines (Perplexity, SGE, ChatGPT)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": store.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return {
    storeSchema,
    breadcrumbSchema,
    faqSchema,
    fullCombinedGraph: {
      "@context": "https://schema.org",
      "@graph": [storeSchema, breadcrumbSchema, faqSchema],
    },
  };
}
