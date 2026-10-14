import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { STORES_DATA } from "@/data/storesData";
import { DevViewProvider } from "@/context/DevViewContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaDrawerModal from "@/components/SchemaDrawerModal";
import { 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Package, 
  Layers,
  Flame,
  CheckCircle2,
  Navigation
} from "lucide-react";

export const metadata: Metadata = {
  title: "Store Directory | Apex Sports + Outdoors Local Entity Hub",
  description: "Browse physical store entities with live in-store inventory, department services, and Schema.org LocalBusiness feeds.",
};

export default function StoreDirectoryPage() {
  const featuredStore = STORES_DATA[0]; // Austin, Texas

  return (
    <DevViewProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500/30 selection:text-white">
        <Header currentSlug={featuredStore.slug} />

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {/* Header intro */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Physical Store Directory
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Local Store Entity Hubs
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Each store is modeled as a pristine, independent Knowledge Graph entity feeding real-time inventory and department services directly to AI search agents and local search engines.
            </p>
          </div>

          {/* Featured Austin Store Banner */}
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/30 to-red-950/30 border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-bold text-xs uppercase tracking-wider">
                    Flagship Showcase
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                    Yeti Authorized Cooler Wall
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {featuredStore.storeNumber}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {featuredStore.name}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {featuredStore.description}
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {featuredStore.address.streetAddress}, {featuredStore.address.addressLocality}, {featuredStore.address.addressRegion}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    Open Today until 9:00 PM
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Package className="w-3.5 h-3.5" />
                    Yeti Tundra 45 in stock (Aisle 14B)
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/stores/${featuredStore.slug}`}
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-red-900/30 group-hover:scale-105"
                  >
                    <span>Explore Austin Store Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={featuredStore.geo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  AI &quot;Near Me&quot; Query Target
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 italic">
                  &quot;Where can I buy a Yeti cooler near me right now?&quot;
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Grounds directly to 8944 Research Blvd, Austin TX</span>
                </div>
              </div>
            </div>
          </div>

          {/* All Stores Grid */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>All Active Physical Store Entities</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STORES_DATA.map((store) => (
                <div
                  key={store.id}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900 transition-all hover:shadow-xl group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          {store.storeNumber}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mt-0.5">
                          {store.name.split(" - ")[1]}
                        </h3>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                        OPEN
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {store.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span className="truncate">{store.address.streetAddress}, {store.address.addressLocality}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{store.departments.length} Sub-Store Departments</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Package className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{store.inventory.length} In-Stock Verified SKUs</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <Link
                      href={`/stores/${store.slug}`}
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                    >
                      <span>View Store Hub &amp; Inventory</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] text-slate-500 font-mono">
                      /stores/{store.slug}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
        <SchemaDrawerModal store={featuredStore} />
      </div>
    </DevViewProvider>
  );
}
