/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Eye, Compass, Quote } from "lucide-react";
import { Scientist, Discipline } from "../types";
import ImageWithFallback from "./ImageWithFallback";
import { getAdditionalInventions } from "../utils/additionalInventions";

interface InventionCardsProps {
  scientists: Scientist[];
  onSelectScientist: (s: Scientist) => void;
}

const getShortName = (name: string): string => {
  const match = name.match(/\(([^)]+)\)/);
  if (match) {
    return match[1];
  }
  
  const customMap: { [key: string]: string } = {
    "Muhammad ibn Musa al-Khwarizmi": "Al-Khwarizmi",
    "Abu Rayhan al-Biruni": "Al-Biruni",
    "Abbas ibn Firnas": "Ibn Firnas",
    "Badi al-Zaman al-Jazari": "Al-Jazari",
    "Nasir al-Din al-Tusi": "Al-Tusi",
    "Umar Khayyam": "Umar Khayyam",
    "Ala al-Din Ali Qushji": "Ali Qushji",
    "Taqi al-Din al-Shami": "Taqi al-Din",
    "Ibn al-Nafis": "Ibn al-Nafis",
    "Abu Yusuf ya'qub al-Kindi": "Al-Kindi",
    "Ahmad ibn Muhammad al-Farghani": "Al-Farghani",
    "Ibn Battuta": "Ibn Battuta",
    "Piri Reis": "Piri Reis",
    "Muhammad al-Idrisi": "Al-Idrisi",
    "Ibn Yunus al-Sadafi": "Ibn Yunus"
  };

  if (customMap[name]) {
    return customMap[name];
  }

  const parts = name.trim().split(" ");
  return parts[parts.length - 1];
};

export default function InventionCards({ scientists, onSelectScientist }: InventionCardsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("All");

  React.useEffect(() => {
    const handleSelectDiscipline = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedField(customEvent.detail);
        setSearchQuery(""); // Clear search so the whole discipline class is visible
      }
    };
    window.addEventListener("exhibit-select-discipline", handleSelectDiscipline);
    return () => {
      window.removeEventListener("exhibit-select-discipline", handleSelectDiscipline);
    };
  }, []);

  const fields = useMemo(() => {
    return ["All", ...Object.values(Discipline)];
  }, []);

  const filteredScientists = useMemo(() => {
    return scientists.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.inventionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesField = selectedField === "All" || s.field === selectedField;
      
      return matchesSearch && matchesField;
    });
  }, [scientists, searchQuery, selectedField]);

  return (
    <section id="inventions" className="py-24 px-6 bg-[#041511] relative">
      {/* Background Lighting Decors */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-[#014D40]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto position relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#D4AF37]/35 bg-[#0B3D2E]/40 text-xs font-mono text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#98FF98] animate-spin-slow" style={{ animationDuration: "10s" }} />
            The Master Catalogue of Polymaths
          </div>
          <h2 className="font-arabic-style font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight">
            Scientific Exhibition & <span className="text-[#D4AF37] font-decorative font-bold">Inventions</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto mt-3">
            Search and filter the greatest thinkers of the Islamic Golden Age. Examine their blueprints, devices, and historical mechanisms.
          </p>
        </div>

        {/* Search & Filter Bar Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-[#0b3d2e]/30 backdrop-blur-md border border-[#D4AF37]/20 p-4 rounded-sm mb-12 shadow-[0_5px_20px_rgba(4,21,17,0.4)]">
          
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              id="search-input-scientists"
              type="text"
              placeholder="Search scientist, invention..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#041511]/60 text-white border border-[#D4AF37]/25 rounded-sm pl-10 pr-4 py-2.5 text-xs font-mono tracking-wide placeholder-white/35 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_10px_rgba(212,175,55,0.15)] transition-all duration-300"
            />
          </div>

          {/* Discipline filters horizontal scrollable list */}
          <div className="flex items-center gap-2 w-full overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37] mr-1 flex-shrink-0" />
            </div>
            {fields.map((f) => (
              <button
                id={`filter-field-${f.toLowerCase()}`}
                key={f}
                onClick={() => setSelectedField(f)}
                className={`flex-shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-sm border font-mono text-[10px] tracking-wider transition-all duration-300 ${
                  selectedField === f
                    ? "bg-[#D4AF37] border-white text-[#041511] font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                    : "bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/45"
                }`}
              >
                {f === "All" ? "ALL DISCIPLINES" : f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Total stats notification banner */}
        <div className="flex justify-between items-center text-xs font-mono text-white/40 mb-6 bg-white/2 p-2 px-4 rounded-sm border border-white/5">
          <span>CATALOGUE DIRECTORY QUERY LISTING</span>
          <span className="text-[#98FF98]">{filteredScientists.length} INVENTORS MATCHING</span>
        </div>

        {/* Dynamic Scientist Cards Grid Grid */}
        {filteredScientists.length === 0 ? (
          <div className="text-center py-20 bg-white/2 border border-dashed border-[#D4AF37]/30 rounded-sm">
            <Quote className="w-10 h-10 text-[#D4AF37] mx-auto opacity-30 mb-4" />
            <h3 className="font-serif italic text-lg text-white mb-1">No Archives Discovered</h3>
            <p className="text-white/40 text-xs font-mono">Refine your search tokens and parameters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredScientists.map((s, idx) => (
              <div
                id={`scientist-card-${s.id}`}
                key={s.id}
                onClick={() => onSelectScientist(s)}
                className="group relative bg-[#0b3d2e]/35 backdrop-blur-xl border border-[#D4AF37]/25 rounded-sm overflow-hidden hover:border-[#D4AF37] hover:shadow-[0_15px_30px_rgba(4,21,17,0.7)] hover:shadow-cyan-400/5 transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Glass Edge shines glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-1 right-1 font-mono text-[9px] text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div>
                  {/* Realistic Image - Strict No Face Portrait Policy */}
                  <div className="relative w-full h-44 overflow-hidden bg-black/40 border-b border-[#D4AF37]/15">
                    <ImageWithFallback
                      src={s.imageUrl}
                      alt={s.inventionTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[10%] group-hover:grayscale-0 select-none"
                      field={s.field}
                      seed={idx}
                      scientistId={s.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041511]/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Corner Tag for Lifespan */}
                    <div className="absolute bottom-2 left-2 rounded-sm bg-black/75 px-2 py-0.5 border border-[#D4AF37]/30 text-[9px] font-mono text-white tracking-widest uppercase">
                      {s.lifespan}
                    </div>
                  </div>

                  {/* Card Content body */}
                  <div className="p-5">
                    {/* Scientific Field Flag */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] text-[#98FF98] tracking-widest uppercase bg-[#014D40]/60 p-1 px-2 rounded-sm">
                        {s.field}
                      </span>
                      <span className="font-mono text-[9px] text-[#D4AF37] tracking-wider uppercase bg-[#D4AF37]/5 px-2 py-0.5 rounded-sm border border-[#D4AF37]/20">
                        {getAdditionalInventions(s).length} Inventions
                      </span>
                    </div>

                    {/* Scientist title names */}
                    <h3 className="font-serif font-semibold text-sm text-[#D4AF37] tracking-wider leading-tight mb-2">
                      {s.name}
                      <span className="font-sans font-medium text-xs text-white block tracking-wide mt-1 truncate">
                        {s.nickname}
                      </span>
                    </h3>

                    {/* Invention Title & Description */}
                    <h4 className="font-mono text-[10px] text-white font-medium tracking-wide uppercase mt-3 mb-2 underline decoration-[#D4AF37]/50 underline-offset-4">
                      {s.inventionTitle}
                    </h4>
                    
                    <p className="text-white/60 text-xs tracking-wide leading-relaxed mt-2 line-clamp-3">
                      {s.shortSummary}
                    </p>
                  </div>
                </div>

                {/* Inspect and Badge actions */}
                <div className="p-5 pt-0 mt-3 flex gap-2">
                  <button
                    id={`scientist-card-expand-${s.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectScientist(s);
                    }}
                    className="w-full py-2 border border-white/10 bg-white/5 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white/90 hover:text-[#D4AF37] font-mono text-[9px] tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    INSPECT
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
