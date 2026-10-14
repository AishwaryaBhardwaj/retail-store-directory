"use client";

import React, { useState } from "react";
import { StoreEntity } from "@/types/store";
import { useDevView } from "@/context/DevViewContext";
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Code2, 
  Bot, 
  CheckCircle 
} from "lucide-react";

interface LocalFaqSectionProps {
  store: StoreEntity;
}

export default function LocalFaqSection({ store }: LocalFaqSectionProps) {
  const { openDevView } = useDevView();
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-3">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Overview &amp; Conversational Search Grounding</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Local Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            These questions directly map to our <code className="text-amber-400 font-mono">FAQPage</code> Schema.org markup, enabling instant citation in Google AI Overviews and ChatGPT search.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {store.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 space-y-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Grounded with Austin Store #0142 telemetry
                      </span>
                      <button
                        onClick={() => openDevView("raw")}
                        className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono text-[11px]"
                      >
                        <Code2 className="w-3 h-3" />
                        <span>View FAQ Schema</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
