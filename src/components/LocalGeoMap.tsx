"use client";

import React, { useState } from "react";
import { StoreEntity } from "@/types/store";
import { 
  MapPin, 
  Clock, 
  Check, 
  Copy, 
  ExternalLink, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";

interface LocalGeoMapProps {
  store: StoreEntity;
}

export default function LocalGeoMap({ store }: LocalGeoMapProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const fullAddress = `${store.address.streetAddress}, ${store.address.addressLocality}, ${store.address.addressRegion} ${store.address.postalCode}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  // Current day of week determined in useEffect for SSR hydration stability
  const [todayName, setTodayName] = useState<string>("");

  React.useEffect(() => {
    setTodayName(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <section className="py-12 border-b border-slate-800 bg-slate-900/30" aria-label="Store Location and Hours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              GEO Entity Coordinates
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Lat: {store.geo.latitude} • Long: {store.geo.longitude}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Store Location, Operating Hours &amp; Amenities
          </h2>
          <p className="mt-1 text-sm text-slate-400 max-w-2xl">
            Physical retail entity grounded with high-precision GIS coordinates for Google Maps, Apple Maps, and local search bots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Styled Map Card */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            {/* Visual Simulated Map View */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-800">
              {/* Map grid lines aesthetic */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#1e293b 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px"
                }}
              />
              
              {/* Road vectors simulation */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-800/80 fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,150 Q200,80 500,220 T1000,100" strokeWidth="6" className="stroke-slate-700/60" />
                <path d="M120,-20 L250,400" strokeWidth="4" className="stroke-slate-700/50" />
                <path d="M350,-20 Q320,180 600,350" strokeWidth="8" className="stroke-blue-500/30" />
                <path d="M-20,260 L800,240" strokeWidth="3" className="stroke-red-500/20" />
              </svg>

              {/* Central Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-red-500/20 animate-ping" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 border-2 border-white">
                    <MapPin className="w-6 h-6 fill-white" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-white text-xs font-bold shadow-xl flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{store.name.split(" - ")[1]}</span>
                </div>
              </div>

              {/* Geo Coordinate HUD Overlays */}
              <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-cyan-300">
                WGS84: {store.geo.latitude.toFixed(6)}° N, {Math.abs(store.geo.longitude).toFixed(6)}° W
              </div>

              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a
                  href={store.geo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-900/30 transition-transform hover:scale-105"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Address Details & Copy */}
            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Physical Storefront Address
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  {store.address.streetAddress}
                </div>
                <div className="text-xs text-slate-300">
                  {store.address.addressLocality}, {store.address.addressRegion} {store.address.postalCode} (United States)
                </div>
              </div>

              <button
                onClick={copyAddress}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors flex items-center gap-2 shrink-0"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Operating Hours & Amenities Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hours Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white">Store &amp; Curbside Hours</h3>
                </div>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Now
                </span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                {store.regularHours.map((h) => {
                  const isToday = h.dayOfWeek.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={h.dayOfWeek}
                      className={`flex justify-between items-center py-1.5 px-2.5 rounded-lg transition-colors ${
                        isToday
                          ? "bg-red-500/10 text-red-300 font-bold border border-red-500/20"
                          : "text-slate-300 hover:bg-slate-900/60"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-red-400" />}
                        <span>{h.dayOfWeek}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-sans font-black text-red-400 bg-red-950 px-1.5 py-0.2 rounded">
                            Today
                          </span>
                        )}
                      </span>
                      <span>
                        {h.opens} - {h.closes}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Local Store Amenities */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Store Features &amp; Accessibility
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {store.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
