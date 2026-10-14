"use client";

import React, { useState, useMemo } from "react";
import { StoreEntity, InStoreProduct } from "@/types/store";
import { useDevView } from "@/context/DevViewContext";
import { 
  Package, 
  Search, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  SlidersHorizontal,
  Flame,
  CheckCircle,
  AlertCircle,
  ShoppingBag,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface InStoreAvailabilityProps {
  store: StoreEntity;
}

export default function InStoreAvailability({ store }: InStoreAvailabilityProps) {
  const { openDevView } = useDevView();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [onlyInStock, setOnlyInStock] = useState(true);

  // Derive unique categories from store inventory
  const categories = useMemo(() => {
    const set = new Set<string>();
    store.inventory.forEach((item) => set.add(item.category));
    return ["All", ...Array.from(set)];
  }, [store.inventory]);

  // Filter inventory
  const filteredProducts = useMemo(() => {
    return store.inventory.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.aisle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nearMeQueryIntent.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStock = !onlyInStock || item.availability === "InStock";
      return matchesCategory && matchesSearch && matchesStock;
    });
  }, [store.inventory, selectedCategory, searchQuery, onlyInStock]);

  return (
    <section 
      id="in-store-availability-section"
      className="scroll-mt-20 py-12 border-b border-slate-800 bg-slate-900/40 relative"
      aria-label="In-Store Availability & Inventory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Live In-Store Inventory Feed
              </span>
              <span className="text-xs text-slate-400 font-medium">
                • Verified physical shelf count at {store.storeNumber}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              In-Store Availability &amp; Trending Products
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Real-time physical aisle locations, on-hand counts, and 60-minute drive-up readiness for the{" "}
              <span className="text-slate-200 font-semibold">{store.address.addressLocality}</span> market. Optimized for AI entity queries.
            </p>
          </div>

          {/* AI Query Callout Pill */}
          <div className="shrink-0">
            <button
              onClick={() => openDevView("ai")}
              className="group p-3 rounded-xl bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-500/40 hover:border-purple-400 text-left transition-all shadow-lg flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1">
                  <span>AI Prompt Matcher</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  &quot;Where can I buy a Yeti cooler near me?&quot;
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search in-store items like 'Yeti', 'Coolers', 'Garmin', 'Rawlings glove'..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* In-Stock Toggle */}
            <label className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 cursor-pointer select-none hover:bg-slate-800/60 transition-colors">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="rounded text-red-500 focus:ring-red-400 focus:ring-offset-slate-900"
              />
              <span>In-Stock Only</span>
            </label>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px] shrink-0 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" /> Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white font-semibold shadow-md shadow-red-900/30"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80"
                }`}
              >
                {cat}
                {cat === "Coolers & Ice Chests" && " 🔥 (Yeti Depot)"}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-950 border border-slate-800">
            <Package className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No items matching your criteria</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search query or reset category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setOnlyInStock(false);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const isYeti = product.brand.toLowerCase() === "yeti";
              return (
                <div
                  key={product.sku}
                  className={`group rounded-2xl bg-slate-950 border transition-all duration-200 flex flex-col justify-between overflow-hidden hover:shadow-xl ${
                    isYeti
                      ? "border-amber-500/30 hover:border-amber-400 hover:shadow-amber-500/10"
                      : "border-slate-800 hover:border-slate-700 hover:shadow-slate-800/20"
                  }`}
                >
                  <div>
                    {/* Image & Quick Badges */}
                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />

                      {/* Brand Pill */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 uppercase tracking-wider">
                        {product.brand}
                      </span>

                      {/* Stock Quantity Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/90 text-slate-950 font-bold text-xs shadow-md">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{product.quantityOnHand} In Stock</span>
                      </div>

                      {/* Aisle & Bay Indicator Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-300 font-mono font-bold">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{product.aisle}</span>
                          {product.bay && <span className="text-slate-400 font-normal">• {product.bay}</span>}
                        </div>

                        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-300 text-[11px]">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span>Ready in {product.pickupTimeMinutes}m</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 space-y-3">
                      {/* Near Me AI Search Trigger Tag */}
                      <div className="text-[11px] p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <div className="line-clamp-2">
                          <span className="text-purple-300 font-semibold">AI Match:</span> &quot;{product.nearMeQueryIntent}&quot;
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-white">
                          ${(product.salePrice ?? product.price).toFixed(2)}
                        </span>
                        {product.salePrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400">SKU: {product.sku}</span>
                      </div>

                      {/* Highlights */}
                      <ul className="text-xs text-slate-400 space-y-1 pt-1 border-t border-slate-800/80">
                        {product.highlights.slice(0, 2).map((hl, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => openDevView("raw")}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-800 hover:border-red-500 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Reserve for Curbside Drive-Up</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
