"use client";

import React from "react";
import Link from "next/link";
import { STORES_DATA } from "@/data/storesData";
import { useDevView } from "@/context/DevViewContext";
import { 
  Code2, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  const { openDevView } = useDevView();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: About the Entity Hub Architecture */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-blue-700 flex items-center justify-center font-black text-white text-base">
                A
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                Apex Sports &amp; Outdoors
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Local Entity Hub
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              Engineered to establish pristine physical entity authority across Google Local Pack, Apple Maps, Perplexity, and conversational AI agents answering &quot;near me&quot; queries with zero ambiguity.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => openDevView("raw")}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Dev View: View Entity Schema (Alt+S)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Retail Store Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Physical Store Entities</span>
            </h4>
            <ul className="space-y-2">
              {STORES_DATA.map((store) => (
                <li key={store.id}>
                  <Link
                    href={`/stores/${store.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{store.name.split(" - ")[1]}</span>
                    <span className="text-[10px] font-mono text-slate-500">{store.storeNumber.split(" ")[1]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: GEO & Technical SEO Specs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GEO &amp; SEO Standards</span>
            </h4>
            <ul className="space-y-1.5 text-slate-400 font-mono text-[11px]">
              <li>• Schema.org/SportingGoodsStore</li>
              <li>• Schema.org/OfferCatalog (Stock)</li>
              <li>• Schema.org/department</li>
              <li>• Schema.org/FAQPage</li>
              <li>• WGS84 GeoCoordinates</li>
              <li>• ISO 8601 OpeningHours</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 Apex Sports + Outdoors Local Entity Hub. Built for GEO &amp; Local SEO Supremacy.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Pristine Knowledge Graph Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
