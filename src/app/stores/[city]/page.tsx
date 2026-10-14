import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStoreBySlug, getAllStoreSlugs } from "@/data/storesData";
import { generateStoreJsonLd } from "@/lib/schemaGenerator";
import { DevViewProvider } from "@/context/DevViewContext";
import Header from "@/components/Header";
import StoreHero from "@/components/StoreHero";
import InStoreAvailability from "@/components/InStoreAvailability";
import DepartmentGrid from "@/components/DepartmentGrid";
import LocalGeoMap from "@/components/LocalGeoMap";
import LocalFaqSection from "@/components/LocalFaqSection";
import Footer from "@/components/Footer";
import SchemaDrawerModal from "@/components/SchemaDrawerModal";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllStoreSlugs();
  return slugs.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const store = getStoreBySlug(city);

  if (!store) {
    return {
      title: "Store Not Found | Apex Sports + Outdoors",
      description: "Physical retail location could not be located.",
    };
  }

  const title = `${store.name} | Live Inventory, Hours & Yeti Coolers`;
  const description = `${store.description} Check real-time shelf stock for Yeti coolers, guns, fishing bait, and sports gear at ${store.address.streetAddress}, ${store.address.addressLocality}, ${store.address.addressRegion}. Curbside pickup ready in 60 mins.`;

  return {
    title,
    description,
    keywords: [
      `Apex Sports ${store.address.addressLocality}`,
      `Yeti cooler ${store.address.addressLocality} near me`,
      `Where to buy Yeti cooler ${store.address.addressLocality}`,
      `hunting license ${store.address.addressLocality}`,
      `sporting goods store ${store.address.addressLocality} ${store.address.addressRegion}`,
      `fishing live bait near me`,
      `baseball glove steaming ${store.address.addressLocality}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.apexoutdoors.com/stores/${store.slug}`,
      images: [
        {
          url: store.heroImage,
          width: 1200,
          height: 630,
          alt: store.name,
        },
      ],
      siteName: "Apex Sports + Outdoors",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [store.heroImage],
    },
    other: {
      "geo.position": `${store.geo.latitude};${store.geo.longitude}`,
      "geo.placename": `${store.address.addressLocality}, ${store.address.addressRegion}`,
      "geo.region": `US-${store.address.addressRegion}`,
      "ICBM": `${store.geo.latitude}, ${store.geo.longitude}`,
    },
  };
}

export default async function StorePage({ params }: PageProps) {
  const { city } = await params;
  const store = getStoreBySlug(city);

  if (!store) {
    notFound();
  }

  const { fullCombinedGraph } = generateStoreJsonLd(store);

  return (
    <DevViewProvider>
      {/* 
        PRISTINE JSON-LD LOCALBUSINESS & SPORTINGGOODSSTORE SCHEMA
        Injected into document head for Google Search, Bing, and AI Search Crawlers (ChatGPT/Perplexity/SGE)
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fullCombinedGraph),
        }}
      />

      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500/30 selection:text-white">
        <Header currentSlug={store.slug} />

        <main className="flex-1">
          <StoreHero store={store} />
          <InStoreAvailability store={store} />
          <DepartmentGrid store={store} />
          <LocalGeoMap store={store} />
          <LocalFaqSection store={store} />
        </main>

        <Footer />

        {/* Specialized UI Dev View Schema Overlay */}
        <SchemaDrawerModal store={store} />
      </div>
    </DevViewProvider>
  );
}
