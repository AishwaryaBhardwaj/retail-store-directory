"use client";

import React from "react";
import { StoreEntity } from "@/types/store";
import { useDevView } from "@/context/DevViewContext";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  Star, 
  ShieldCheck, 
  Code2, 
  Share2, 
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

interface StoreHeroProps {
  store: StoreEntity;
}

export default function StoreHero({ store }: StoreHeroProps) {
  const { openDevView } = useDevView();

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* Background Graphic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity filter blur-[1px]"
        style={{ backgroundImage: `url(${store.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-blue-950/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Local Announcements Banner */}
        {store.localAnnouncements && store.localAnnouncements.length > 0 && (
          <div className="mb-6 rounded-xl bg-red-950/40 border border-red-500/30 p-3 sm:p-4 text-xs text-red-200 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <span className="flex h-2 w-2 rounded-full bg-red-400 animate-ping shrink-0" />
              <span className="font-bold text-red-400 uppercase tracking-wider text-[11px] shrink-0">
                Austin Store Alert:
              </span>
              <p className="truncate text-slate-200 font-medium">
                {store.localAnnouncements[0]}
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById("in-store-availability-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs font-bold text-red-400 hover:text-red-300 underline shrink-0 whitespace-nowrap"
            >
              View Shelf Stock &rarr;
            </button>
          </div>
        )}

        {/* Breadcrumb row */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
          <a href="/" className="hover:text-slate-200">Apex Sports</a>
          <span>/</span>
          <a href="/stores" className="hover:text-slate-200">Stores</a>
          <span>/</span>
          <span className="text-white font-medium">{store.address.addressLocality}, {store.address.addressRegion}</span>
        </div>

        {/* Main Store Identity & Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 text-xs font-bold rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                {store.storeNumber}
              </span>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN NOW until 9:00 PM</span>
              </div>

              {/* Curbside Ready Badge */}
              <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-cyan-400" />
                <span>Curbside Ready: ~60 mins</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {store.name}
            </h1>

            <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
              {store.description}
            </p>

            {/* Quick Micro Details (Address, Phone, Ratings) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>
                  {store.address.streetAddress}, {store.address.addressLocality}, {store.address.addressRegion} {store.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${store.telephone}`} className="hover:text-emerald-300 underline font-mono">
                  {store.telephone}
                </a>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="font-bold text-white">{store.aggregateRating.ratingValue}</span>
                <span className="text-slate-400">
                  ({store.aggregateRating.reviewCount.toLocaleString()} Google &amp; Local Reviews)
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={store.geo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-red-900/30 hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("in-store-availability-section");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-600 flex items-center gap-2 transition-all"
              >
                <Car className="w-4 h-4 text-cyan-400" />
                <span>Curbside Pickup (Ready in 1h)</span>
              </button>

              <button
                onClick={() => openDevView("raw")}
                className="px-4 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold text-xs sm:text-sm border border-amber-500/30 flex items-center gap-2 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>Inspect Entity Schema</span>
              </button>
            </div>
          </div>

          {/* Right Highlight Box: GEO Search Grounding Card */}
          <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                GEO &amp; Local Entity Status
              </span>
              <span className="text-emerald-400 font-mono font-bold">100% Grounded</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Target Entity Type:</span>
                <span className="font-mono text-cyan-300 font-semibold">SportingGoodsStore</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">GPS Coordinates:</span>
                <span className="font-mono text-emerald-300 font-semibold">{store.geo.latitude}, {store.geo.longitude}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Connected Departments:</span>
                <span className="font-bold text-white">{store.departments.length} Sub-Store Entities</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Live Inventory SKUs:</span>
                <span className="font-bold text-amber-300">{store.inventory.length} Verified Products</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Primary AI Intent:</span>
                <span className="text-purple-300 font-medium text-right">&quot;Yeti cooler near me right now&quot;</span>
              </div>
            </div>

            <button
              onClick={() => openDevView("ai")}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 text-xs font-semibold border border-purple-500/40 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Simulate AI &quot;Near Me&quot; Query</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
