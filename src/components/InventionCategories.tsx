/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Binary, HeartPulse, Orbit, Cpu, Eye, FlaskConical, CircleDot, Compass } from "lucide-react";
import { categories } from "../data/scientists";

const iconMap: Record<string, React.ComponentType<any>> = {
  Binary: Binary,
  Stethoscope: HeartPulse,
  Orbit: Orbit,
  Settings: Cpu,
  Eye: Eye,
  FlaskConical: FlaskConical,
};

export default function InventionCategories() {
  return (
    <section id="categories" className="py-24 px-6 bg-[#041511]/95 relative border-b border-[#D4AF37]/15">
      {/* Background Islamic Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-full opacity-[0.03] text-[#D4AF37] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="islamic-mesh-pat" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 30,0 L 60,30 L 30,60 L 0,30 Z M 0,0 L 60,60 M 0,60 L 60,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamic-mesh-pat)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto position relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#D4AF37]/35 bg-[#0B3D2E]/40 text-xs font-mono text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
            <CircleDot className="w-3 h-3 text-[#98FF98]" />
            Scholarly Divisions
          </div>
          <h2 className="font-arabic-style font-medium text-3xl sm:text-4xl text-white tracking-wide">
            The Six Core <span className="text-[#D4AF37] font-decorative font-bold">Scientific Disciplines</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto mt-3">
            Explore how research was organized inside the House of Wisdom and Islamic courts, leading to groundbreaking instruments and paradigms.
          </p>
        </div>

        {/* Categories Grid (Floating Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Compass;
            return (
              <div
                id={`field-card-${cat.id}`}
                key={cat.id}
                className="group relative bg-[#0b3d2e]/25 backdrop-blur-xl border border-white/5 hover:border-[#D4AF37] rounded-sm p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_15px_30px_rgba(11,61,46,0.3)] hover:shadow-yellow-500/5 flex flex-col justify-between"
                style={{
                  background: `linear-gradient(135deg, rgba(11, 61, 46, 0.35) 0%, rgba(4, 21, 17, 0.65) 100%)`,
                }}
              >
                {/* Subtle golden bottom halo glow */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D4AF37]/15 transition-all duration-500" />
                
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-[#0B3D2E]/80 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#98FF98] group-hover:text-[#98FF98] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] text-[#98FF98]/40 tracking-[0.2em] uppercase font-semibold">
                      ERA ACCOMPLISHMENTS
                    </span>
                  </div>

                  {/* Title & Narrative */}
                  <h3 className="font-sans font-semibold text-lg text-white mb-2 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-white/60 text-xs tracking-wide leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Realistic Scientific Instrument Spotlight */}
                  <div className="bg-black/35 border border-[#D4AF37]/15 p-4 rounded-sm mb-6">
                    <span className="font-mono text-[8px] text-[#D4AF37] font-semibold tracking-widest block mb-1">
                      INSTRUMENT OF FOCUS:
                    </span>
                    <h4 className="font-sans font-medium text-xs text-white uppercase mb-1">
                      {cat.instrumentName}
                    </h4>
                    <p className="text-white/50 text-[11px] leading-relaxed font-light">
                      {cat.instrumentDescription}
                    </p>
                  </div>

                  {/* Featured Inventions bullet items */}
                  <div>
                    <span className="font-mono text-[8px] text-[#98FF98] block mb-3 uppercase tracking-widest font-bold">
                      EXHIBIT BENCHMARKS:
                    </span>
                    <ul className="space-y-2">
                      {cat.featuredInventions.map((inv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0 animate-ping" />
                          <span className="font-light tracking-wide">{inv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-white/35">
                    SECTION FIELD {cat.id.toUpperCase().slice(0, 3)}
                  </span>
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("exhibit-select-discipline", { detail: cat.title }));
                      const el = document.getElementById("inventions-anchor");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="font-mono text-[9px] text-[#D4AF37] hover:underline cursor-pointer tracking-wider bg-transparent border-none outline-none p-0 focus:outline-none"
                  >
                    EXPLORE COLLECTION →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
