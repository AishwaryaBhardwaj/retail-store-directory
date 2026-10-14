"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDevView } from "@/context/DevViewContext";
import { STORES_DATA } from "@/data/storesData";
import { 
  Code2, 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  Terminal, 
  Layers, 
  Search,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

interface HeaderProps {
  currentSlug?: string;
}

export default function Header({ currentSlug = "austin" }: HeaderProps) {
  const router = useRouter();
  const { toggleDevView, isOpen, openDevView } = useDevView();
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);

  const currentStore = STORES_DATA.find((s) => s.slug === currentSlug) || STORES_DATA[0];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md text-white">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 border-b border-slate-800/60 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">GEO Entity Engine Active</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 hidden sm:inline">Feeding pristine Schema.org LocalBusiness data to AI Search & Google</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => openDevView("ai")}
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulate AI Prompt: &quot;Where can I buy a Yeti cooler near me?&quot;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Hub Logo */}
        <div className="flex items-center gap-6">
          <Link href={`/stores/${currentSlug}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-blue-700 flex items-center justify-center shadow-lg shadow-red-900/20 font-black text-xl tracking-tight border border-white/10 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-red-400 transition-colors">
                  Apex Sports
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-red-500/20 text-red-400 border border-red-500/30">
                  Entity Hub
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Local SEO & GEO Knowledge Architecture</p>
            </div>
          </Link>

          {/* Quick Store Location Switcher Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setStoreDropdownOpen(!storeDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 transition-all hover:bg-slate-800/70"
              aria-label="Select store location"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span className="max-w-[160px] truncate">{currentStore.address.addressLocality}, {currentStore.address.addressRegion}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${storeDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {storeDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setStoreDropdownOpen(false)}
              >
                <div className="px-2 py-1 text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                  Select Physical Store Entity
                </div>
                {STORES_DATA.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => {
                      setStoreDropdownOpen(false);
                      router.push(`/stores/${store.slug}`);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      store.slug === currentSlug
                        ? "bg-red-500/10 text-red-400 border border-red-500/20 font-semibold"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="font-medium">{store.name.split(" - ")[1]}</div>
                      <div className="text-[11px] text-slate-500">{store.storeNumber}</div>
                    </div>
                    {store.slug === currentSlug && (
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right action area: Navigation & Specialized Dev View Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/stores"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>Store Directory</span>
          </Link>

          {/* Dev View: View Entity Schema UI Toggle Switch */}
          <button
            id="dev-view-schema-toggle"
            onClick={toggleDevView}
            className={`relative group px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all duration-200 border shadow-md ${
              isOpen
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border-amber-300 shadow-amber-500/20 ring-2 ring-amber-400/50"
                : "bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border-amber-500/40 hover:border-amber-400"
            }`}
            title="Inspect backend JSON-LD schema (Alt+S)"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500/30">
              <Code2 className="w-3.5 h-3.5" />
            </span>
            <div className="text-left">
              <div className="leading-tight flex items-center gap-1.5">
                <span>Dev View: View Entity Schema</span>
                <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-slate-950" : "bg-emerald-400 animate-ping"}`} />
              </div>
            </div>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800/80 text-amber-200/80 border border-amber-500/30">
              Alt+S
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
