"use client";

import React, { useState } from "react";
import { useDevView } from "@/context/DevViewContext";
import { StoreEntity } from "@/types/store";
import { generateStoreJsonLd } from "@/lib/schemaGenerator";
import { 
  X, 
  Copy, 
  Check, 
  Code2, 
  Network, 
  Bot, 
  ShieldCheck, 
  ExternalLink,
  Layers,
  MapPin,
  Clock,
  Package,
  Sparkles,
  HelpCircle,
  Building2
} from "lucide-react";

interface SchemaDrawerModalProps {
  store: StoreEntity;
}

export default function SchemaDrawerModal({ store }: SchemaDrawerModalProps) {
  const { isOpen, closeDevView, activeTab, setActiveTab } = useDevView();
  const [copied, setCopied] = useState(false);
  const [activeEntityNode, setActiveEntityNode] = useState<string>("root");

  if (!isOpen) return null;

  const { storeSchema, breadcrumbSchema, faqSchema, fullCombinedGraph } = generateStoreJsonLd(store);
  const formattedJson = JSON.stringify(fullCombinedGraph, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-6xl h-[92vh] max-h-[900px] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="schema-inspector-title"
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-4 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="schema-inspector-title" className="text-base sm:text-lg font-bold text-white">
                  Dev View: LocalBusiness Entity Architecture
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Schema.org Valid
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Pristine structured data for {store.name} ({store.storeNumber})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              title="Copy formatted JSON-LD to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied JSON-LD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" />
                  <span>Copy JSON-LD</span>
                </>
              )}
            </button>

            <a
              href="https://validator.schema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-xs font-medium text-blue-400 border border-blue-500/30 transition-colors"
            >
              <span>Schema Validator</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={closeDevView}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-5 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("raw")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "raw"
                ? "border-amber-400 text-amber-400 bg-amber-500/5"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Raw JSON-LD Code</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
              ~{Math.round(formattedJson.length / 1024)} KB
            </span>
          </button>

          <button
            onClick={() => setActiveTab("tree")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "tree"
                ? "border-amber-400 text-amber-400 bg-amber-500/5"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Network className="w-4 h-4" />
            <span>Entity Relationship Graph</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono">
              6 Nodes
            </span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "ai"
                ? "border-amber-400 text-amber-400 bg-amber-500/5"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI Search Engine Parser</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono">
              Yeti Query Simulation
            </span>
          </button>

          <button
            onClick={() => setActiveTab("audit")}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "audit"
                ? "border-amber-400 text-amber-400 bg-amber-500/5"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>GEO & Local SEO Audit</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              100% Score
            </span>
          </button>
        </div>

        {/* Modal Body / Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/90 font-sans">
          {/* TAB 1: RAW JSON-LD */}
          {activeTab === "raw" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400">&lt;script type=&quot;application/ld+json&quot;&gt;</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">Live schema injected into document &lt;head&gt;</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>Types: <span className="text-amber-400 font-mono">SportingGoodsStore</span>, <span className="text-blue-400 font-mono">OfferCatalog</span>, <span className="text-emerald-400 font-mono">FAQPage</span></span>
                </div>
              </div>

              {/* Code viewer with custom styling */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner max-h-[600px]">
                <pre className="text-slate-300 selection:bg-amber-500/30 selection:text-white">
                  <code>
                    {formattedJson.split("\n").map((line, idx) => {
                      // Simple syntax colorizer for keys and string values
                      let styledLine = line;
                      const isKey = line.match(/^(\s*"[^"]+":)/);
                      return (
                        <div key={idx} className="table-row hover:bg-slate-900/80 transition-colors">
                          <span className="table-cell pr-4 text-right select-none text-slate-600 font-mono text-[11px] w-10">
                            {idx + 1}
                          </span>
                          <span className="table-cell whitespace-pre">
                            {line.includes('"@type"') || line.includes('"@context"') || line.includes('"@id"') ? (
                              <span className="text-purple-400 font-semibold">{line}</span>
                            ) : line.includes('"name":') || line.includes('"brand":') ? (
                              <span className="text-cyan-300">{line}</span>
                            ) : line.includes('"geo":') || line.includes('"latitude":') || line.includes('"longitude":') ? (
                              <span className="text-emerald-400 font-bold">{line}</span>
                            ) : line.includes('"availability":') || line.includes('"InStock"') ? (
                              <span className="text-green-300 font-bold">{line}</span>
                            ) : line.includes('"department":') || line.includes('"hasOfferCatalog":') ? (
                              <span className="text-amber-400 font-bold">{line}</span>
                            ) : isKey ? (
                              <span className="text-blue-300">{line}</span>
                            ) : (
                              <span>{line}</span>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: ENTITY RELATIONSHIP GRAPH */}
          {activeTab === "tree" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-400" />
                  Knowledge Graph Topology (LocalBusiness &rarr; Connected Physical Nodes)
                </h3>
                <p className="text-xs text-slate-400">
                  Search engines like Google, Bing, and AI crawlers map this interconnected graph to answer proximity & inventory queries with zero ambiguity.
                </p>
              </div>

              {/* Visual Node Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Node 1: Root Store Entity */}
                <div 
                  onClick={() => setActiveEntityNode("root")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "root" 
                      ? "bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-blue-500/20 text-blue-400 font-bold">
                      Root Entity: SportingGoodsStore
                    </span>
                    <Building2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{store.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">@id: {store.slug}#store</p>
                  <div className="mt-3 text-xs text-slate-300 space-y-1">
                    <div>• Brand: {store.brand}</div>
                    <div>• Phone: {store.telephone}</div>
                    <div>• Price Range: {store.priceRange}</div>
                  </div>
                </div>

                {/* Node 2: GeoCoordinates & Address */}
                <div 
                  onClick={() => setActiveEntityNode("geo")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "geo" 
                      ? "bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      GEO & PostalAddress
                    </span>
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Precise Coordinates</h4>
                  <p className="text-xs text-emerald-300 font-mono">
                    Lat: {store.geo.latitude}, Lng: {store.geo.longitude}
                  </p>
                  <div className="mt-3 text-xs text-slate-300 space-y-1">
                    <div>• {store.address.streetAddress}</div>
                    <div>• {store.address.addressLocality}, {store.address.addressRegion} {store.address.postalCode}</div>
                    <div>• AreaServed: {store.address.addressLocality} Metro Area</div>
                  </div>
                </div>

                {/* Node 3: Opening Hours */}
                <div 
                  onClick={() => setActiveEntityNode("hours")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "hours" 
                      ? "bg-purple-950/40 border-purple-500 ring-2 ring-purple-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-500/20 text-purple-400 font-bold">
                      OpeningHoursSpecification
                    </span>
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">7 Days Structured Hours</h4>
                  <p className="text-xs text-purple-300 font-mono">
                    Mon-Sat: 09:00 - 21:00 / Sun: 10:00 - 20:00
                  </p>
                  <div className="mt-3 text-xs text-slate-300 space-y-1">
                    <div>• Curbside Ready: Within 60 minutes</div>
                    <div>• Live Open/Closed Status verified</div>
                  </div>
                </div>

                {/* Node 4: Department Entities */}
                <div 
                  onClick={() => setActiveEntityNode("departments")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "departments" 
                      ? "bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/20 text-amber-400 font-bold">
                      department (Sub-Stores)
                    </span>
                    <Layers className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{store.departments.length} Department Entities</h4>
                  <div className="mt-2 text-xs text-slate-300 space-y-1">
                    {store.departments.slice(0, 3).map((d) => (
                      <div key={d.id} className="truncate">• {d.name}</div>
                    ))}
                    <div className="text-amber-400 font-medium">+{store.departments.length - 3} more department sub-entities</div>
                  </div>
                </div>

                {/* Node 5: OfferCatalog & In-Store Inventory */}
                <div 
                  onClick={() => setActiveEntityNode("inventory")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "inventory" 
                      ? "bg-red-950/40 border-red-500 ring-2 ring-red-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-red-500/20 text-red-400 font-bold">
                      hasOfferCatalog (Live Inventory)
                    </span>
                    <Package className="w-4 h-4 text-red-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Physical Stock with Aisle Locations</h4>
                  <div className="mt-2 text-xs text-slate-300 space-y-1">
                    <div>• Yeti Tundra 45 (Aisle 14B - 8 in stock)</div>
                    <div>• Yeti Roadie 24 (Aisle 14B - 14 in stock)</div>
                    <div>• Garmin Sonar (Aisle 21A - 4 in stock)</div>
                  </div>
                </div>

                {/* Node 6: FAQ Knowledge Base */}
                <div 
                  onClick={() => setActiveEntityNode("faq")}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    activeEntityNode === "faq" 
                      ? "bg-cyan-950/40 border-cyan-500 ring-2 ring-cyan-500/30" 
                      : "bg-slate-950 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-500/20 text-cyan-400 font-bold">
                      FAQPage Schema
                    </span>
                    <HelpCircle className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{store.faqs.length} Structured Q&amp;As</h4>
                  <div className="mt-2 text-xs text-slate-300 space-y-1">
                    <div>• &quot;Where can I buy a Yeti cooler near me?&quot;</div>
                    <div>• &quot;Can I get a Texas hunting license?&quot;</div>
                    <div>• &quot;Do you steam baseball gloves?&quot;</div>
                  </div>
                </div>
              </div>

              {/* Node Detail Inspector Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                <div className="text-slate-400 mb-2 uppercase tracking-wider font-bold">
                  Inspecting Node: <span className="text-amber-400">{activeEntityNode.toUpperCase()}</span>
                </div>
                <div className="text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 overflow-x-auto">
                  {activeEntityNode === "root" && JSON.stringify({
                    "@type": storeSchema["@type"],
                    "@id": storeSchema["@id"],
                    name: storeSchema.name,
                    telephone: storeSchema.telephone,
                    priceRange: storeSchema.priceRange,
                    areaServed: storeSchema.areaServed
                  }, null, 2)}
                  {activeEntityNode === "geo" && JSON.stringify({
                    geo: storeSchema.geo,
                    address: storeSchema.address,
                    hasMap: storeSchema.hasMap
                  }, null, 2)}
                  {activeEntityNode === "hours" && JSON.stringify(storeSchema.openingHoursSpecification, null, 2)}
                  {activeEntityNode === "departments" && JSON.stringify(storeSchema.department, null, 2)}
                  {activeEntityNode === "inventory" && JSON.stringify(storeSchema.hasOfferCatalog, null, 2)}
                  {activeEntityNode === "faq" && JSON.stringify(faqSchema, null, 2)}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI SEARCH ENGINE SIMULATOR */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-950 to-blue-950/40 border border-purple-500/30">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>The Omnichannel Entity Strategy in Action</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When a consumer asks Perplexity, ChatGPT Search, or Google Gemini: 
                  <strong className="text-white ml-1">&quot;Where can I buy a Yeti cooler near me right now?&quot;</strong>, 
                  the AI does not merely scan keywords. It queries its grounded index for a 
                  <strong className="text-amber-400 ml-1">physical entity</strong> matching 
                  <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">itemOffered.brand: &quot;Yeti&quot;</code>, 
                  <code className="text-emerald-300 bg-slate-900 px-1 py-0.5 rounded">availability: InStock</code>, and proximity coordinates.
                </p>
              </div>

              {/* Simulation Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional Old Retail Page */}
                <div className="p-4 rounded-xl bg-slate-950 border border-red-900/40 text-xs">
                  <div className="flex items-center justify-between text-red-400 font-bold mb-3 pb-2 border-b border-red-900/30">
                    <span>❌ Traditional Store Locator (Keyword Heavy)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300">AI Hallucination Risk: HIGH</span>
                  </div>
                  <div className="space-y-2 text-slate-400">
                    <p className="italic bg-slate-900 p-2.5 rounded border border-slate-800">
                      &quot;Welcome to Apex Austin! We sell coolers, shoes, tents, and guns. Call store for stock.&quot;
                    </p>
                    <p className="text-red-300">
                      &bull; <strong>Why AI fails:</strong> No schema-linked inventory. AI cannot confirm whether the Yeti is on shelf or out of stock. AI tells the user to &quot;check online or call&quot;.
                    </p>
                  </div>
                </div>

                {/* Apex Local Entity Hub */}
                <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-bold mb-3 pb-2 border-b border-emerald-900/30">
                    <span>✅ Apex Local Entity Hub (JSON-LD Grounded)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">Entity Precision: 100%</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="bg-slate-900 p-2.5 rounded border border-emerald-500/30 font-mono text-[11px] text-emerald-200">
                      <div>Product: Yeti Tundra 45 Hard Cooler</div>
                      <div>Status: InStock (8 units) @ Aisle 14B</div>
                      <div>Store: {store.name}</div>
                      <div>Curbside: Ready in 60 mins</div>
                    </div>
                    <p className="text-emerald-300">
                      &bull; <strong>AI Search Engine Answer:</strong> &quot;You can buy a Yeti Tundra 45 right now at Apex Sports in North Austin (8944 Research Blvd). They have 8 units in stock in Aisle 14B, open until 9:00 PM, with 1-hour curbside pickup available.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Entity Matching Matrix */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  AI Entity Resolution Mapping
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-500">
                        <th className="pb-2">User Natural Language Vector</th>
                        <th className="pb-2">Target Schema Field</th>
                        <th className="pb-2">Entity Hub Resolution</th>
                        <th className="pb-2 text-right">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-2 text-purple-300">&quot;buy a Yeti cooler&quot;</td>
                        <td className="py-2 text-cyan-400">hasOfferCatalog.itemOffered.brand</td>
                        <td className="py-2 text-emerald-300">Yeti (Tundra 45 / Roadie 24)</td>
                        <td className="py-2 text-right text-emerald-400">0.998</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-purple-300">&quot;near me&quot;</td>
                        <td className="py-2 text-cyan-400">geo.latitude, geo.longitude</td>
                        <td className="py-2 text-emerald-300">{store.geo.latitude}, {store.geo.longitude}</td>
                        <td className="py-2 text-right text-emerald-400">1.000</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-purple-300">&quot;right now&quot;</td>
                        <td className="py-2 text-cyan-400">openingHoursSpecification + InStock</td>
                        <td className="py-2 text-emerald-300">Open until 9 PM (8 on shelf)</td>
                        <td className="py-2 text-right text-emerald-400">0.994</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-purple-300">&quot;which aisle?&quot;</td>
                        <td className="py-2 text-cyan-400">itemOffered.description (Aisle 14B)</td>
                        <td className="py-2 text-emerald-300">Aisle 14B - Cooler Wall Bay 3</td>
                        <td className="py-2 text-right text-emerald-400">0.991</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AUDIT */}
          {activeTab === "audit" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Schema.org Technical Validation Score</h3>
                    <p className="text-xs text-emerald-400">
                      All Google Search Central &amp; Bing Local mandatory properties are fully resolved.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400">100 / 100</div>
                  <div className="text-[11px] text-slate-400 font-mono">0 Warnings &bull; 0 Errors</div>
                </div>
              </div>

              {/* Property Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {[
                  { name: "@context", desc: "Valid https://schema.org declaration", status: "Pass" },
                  { name: "@type", desc: "['SportingGoodsStore', 'Store', 'LocalBusiness']", status: "Pass" },
                  { name: "geo", desc: "GeoCoordinates with exact latitude/longitude", status: "Pass" },
                  { name: "address", desc: "PostalAddress (street, city, region, postalCode, country)", status: "Pass" },
                  { name: "openingHoursSpecification", desc: "Structured dayOfWeek, opens, closes", status: "Pass" },
                  { name: "department", desc: "Connected sub-store entities with services", status: "Pass" },
                  { name: "hasOfferCatalog", desc: "Live in-store product inventory with InStock status", status: "Pass" },
                  { name: "telephone & email", desc: "Direct store line and customer contact point", status: "Pass" },
                  { name: "aggregateRating", desc: "Grounded customer review count and average score", status: "Pass" },
                  { name: "FAQPage schema", desc: "Q&A entities optimized for conversational AI answers", status: "Pass" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div>
                      <div className="font-mono font-bold text-cyan-300">{item.name}</div>
                      <div className="text-slate-400 text-[11px]">{item.desc}</div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <Check className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-800 bg-slate-950 px-5 py-3 text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-mono">Entity ID:</span>
            <span className="text-slate-300 font-mono">{store.slug}#store</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Keyboard toggle:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              Alt + S
            </kbd>
            <span className="text-slate-500">or</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
              Esc to close
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
