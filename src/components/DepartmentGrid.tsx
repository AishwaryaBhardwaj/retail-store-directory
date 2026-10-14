"use client";

import React from "react";
import { StoreEntity } from "@/types/store";
import { useDevView } from "@/context/DevViewContext";
import { 
  Layers, 
  Target, 
  Tent, 
  Fish, 
  Shirt, 
  Activity, 
  Award, 
  Compass, 
  Phone, 
  Check, 
  Tag, 
  ArrowUpRight,
  Code2
} from "lucide-react";

interface DepartmentGridProps {
  store: StoreEntity;
}

export default function DepartmentGrid({ store }: DepartmentGridProps) {
  const { openDevView } = useDevView();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target": return <Target className="w-5 h-5 text-red-400" />;
      case "Tent": return <Tent className="w-5 h-5 text-amber-400" />;
      case "Fish": return <Fish className="w-5 h-5 text-cyan-400" />;
      case "Shirt": return <Shirt className="w-5 h-5 text-emerald-400" />;
      case "Activity": return <Activity className="w-5 h-5 text-purple-400" />;
      case "Award": return <Award className="w-5 h-5 text-orange-400" />;
      default: return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-12 border-b border-slate-800 bg-slate-950" aria-label="Department Entities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Department Sub-Entities
              </span>
              <span className="text-xs text-slate-400">
                • Schema property: <code className="text-amber-400 font-mono font-bold">department: [&#123;&quot;@type&quot;: &quot;Store&quot;&#125;]</code>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              In-Store Specialized Departments &amp; Pro Services
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Each department is mapped as an individual physical sub-entity with specialized licenses, authorized dealer status, and certified on-site technicians.
            </p>
          </div>

          <button
            onClick={() => openDevView("tree")}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>View Department Graph Node</span>
          </button>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {store.departments.map((dept) => (
            <div
              key={dept.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-900/50"
            >
              <div className="space-y-4">
                {/* Header: Icon, Name, Ext */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(dept.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {dept.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 font-mono">
                        Entity ID: #{dept.slug}
                      </div>
                    </div>
                  </div>

                  {dept.phoneExtension && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {dept.phoneExtension}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {dept.description}
                </p>

                {/* Featured In-Store Services */}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Pro Services Offered Here:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {dept.featuredServices.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-slate-300">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending Keywords / KnowsAbout */}
                <div className="pt-3 border-t border-slate-800/60">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-slate-400" />
                    <span>Schema &quot;knowsAbout&quot; Vectors:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.trendingKeywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Department Manager footnote */}
              {dept.manager && (
                <div className="mt-4 pt-3 border-t border-slate-800/40 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Manager: <strong className="text-slate-300 font-medium">{dept.manager}</strong></span>
                  <span className="text-emerald-400 font-mono text-[10px]">Active Shift</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
