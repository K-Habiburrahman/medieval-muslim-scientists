/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Compass, Eye, HeartHandshake, History, Microscope, ZoomIn, ZoomOut } from "lucide-react";
import { Scientist } from "../types";
import ImageWithFallback from "./ImageWithFallback";

interface TimelineProps {
  scientists: Scientist[];
  onSelectScientist: (s: Scientist) => void;
}

export default function Timeline({ scientists, onSelectScientist }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>("al-khwarizmi");
  const [zoomLevel, setZoomLevel] = useState<"compact" | "normal" | "expanded">("normal");

  // Intercept scroll wheel events to scroll horizontally instead of vertically
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Sort chronologically by birthYear
  const sortedScientists = [...scientists].sort((a, b) => a.birthYear - b.birthYear);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const activeScientist = scientists.find((s) => s.id === activeId) || sortedScientists[0];

  return (
    <section id="timeline" className="py-24 px-6 bg-[#041511], relative border-b border-[#D4AF37]/15">
      {/* Background Lighting Grid */}
      <div className="absolute inset-0 bg-[#0B3D2E]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
              <History className="w-5 h-5 text-[#98FF98]" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold text-[#D4AF37]">
                Golden Chronology Archive
              </span>
            </div>
            <h2 className="font-arabic-style font-medium text-3xl sm:text-4xl text-white tracking-wide">
              <span className="text-[#D4AF37] font-decorative font-bold">Timeline</span>
            </h2>
          </div>
          <div className="text-white/50 text-xs font-mono max-w-sm">
            Drag horizontally or click side controls to explore the milestones and lifespans over 800 years of revolutionary discoveries.
          </div>
        </div>

        {/* Outer Grid showing active Holographic Preview on Left (or Right) and Horizontal Grid next to it */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* A. Futuristic Holographic Preview Card (4 Cols on Large) */}
          <div className="lg:col-span-4 bg-[#0b3d2e]/40 backdrop-blur-xl border border-[#D4AF37]/35 rounded-sm p-6 shadow-[0_15px_35px_rgba(4,21,17,0.6)] relative overflow-hidden group">
            {/* Ambient Gold glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-r from-[#014D40] via-[#D4AF37] to-[#98FF98]" />
            
            <div className="relative z-10">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#98FF98] bg-[#014D40]/60 px-2.5 py-1 rounded-sm uppercase inline-block mb-4">
                Selected Era: {activeScientist.lifespan}
              </span>
              
              {/* Image with strict no-portrait, realistic rules */}
              <div className="w-full h-44 rounded-sm overflow-hidden border border-[#D4AF37]/30 mb-4 bg-black/40 relative">
                <ImageWithFallback
                  src={activeScientist.imageUrl}
                  alt={activeScientist.inventionTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none grayscale-[15%] group-hover:grayscale-0"
                  field={activeScientist.field}
                  seed={activeScientist.name.length}
                  scientistId={activeScientist.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041511] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/40 tracking-wider">
                  MUSEUM IMAGE SEED #{(activeScientist.name.length * 7) % 1000}
                </div>
              </div>

              <h3 className="font-serif italic font-normal text-xl text-[#D4AF37] mb-1">
                {activeScientist.name}
                <span className="font-sans font-medium text-white text-xs not-italic mt-1.5 tracking-widest uppercase block opacity-85">
                  {activeScientist.nickname}
                </span>
              </h3>
              
              <span className="font-mono text-[10px] text-white/50 tracking-wider block mb-3">
                Field of Study: <strong className="text-[#98FF98] font-normal">{activeScientist.field}</strong>
              </span>

              <p className="text-white/90 text-[13.5px] font-corbel tracking-wide leading-relaxed mb-5 h-[72px] overflow-y-auto pr-1 border-l-2 border-[#D4AF37]/50 pl-3 bg-[#014D40]/30 py-1.5 rounded-r-xs">
                {activeScientist.shortSummary}
              </p>

              <button
                id={`timeline-view-modal-${activeScientist.id}`}
                onClick={() => onSelectScientist(activeScientist)}
                className="w-full py-2.5 rounded-sm border border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-white hover:text-[#041511] font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
              >
                Inspect Mechanism Detail
              </button>
            </div>
          </div>

          {/* B. Horizontal Timeline Slider Track (8 Cols on Large) */}
          <div className="lg:col-span-8 flex flex-col justify-center h-full">
            {/* Slider Navigation & Zoom Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4 border-b border-white/5 pb-4">
              {/* Zoom Controls */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                  Chronology Zoom:
                </span>
                <div className="flex bg-white/5 border border-white/10 rounded-sm p-0.5 shadow-inner">
                  <button
                    id="zoom-compact-btn"
                    onClick={() => setZoomLevel("compact")}
                    className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                      zoomLevel === "compact"
                        ? "bg-[#D4AF37] text-[#041511] font-bold shadow-[0_1px_5px_rgba(212,175,55,0.3)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    title="Collapse for a broad history overview"
                  >
                    Broad
                  </button>
                  <button
                    id="zoom-normal-btn"
                    onClick={() => setZoomLevel("normal")}
                    className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                      zoomLevel === "normal"
                        ? "bg-[#D4AF37] text-[#041511] font-bold shadow-[0_1px_5px_rgba(212,175,55,0.3)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    title="Standard Era View"
                  >
                    Standard
                  </button>
                  <button
                    id="zoom-expanded-btn"
                    onClick={() => setZoomLevel("expanded")}
                    className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                      zoomLevel === "expanded"
                        ? "bg-[#D4AF37] text-[#041511] font-bold shadow-[0_1px_5px_rgba(212,175,55,0.3)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    title="Expand to see detailed milestones"
                  >
                    Detailed
                  </button>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button
                  id="timeline-prev-btn"
                  onClick={() => scroll("left")}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm bg-white/5 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] text-white/70 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="timeline-next-btn"
                  onClick={() => scroll("right")}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm bg-white/5 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] text-white/70 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Timeline Container */}
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto flex gap-6 pb-6 pt-16 scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth relative"
              style={{ scrollbarWidth: "thin", WebkitOverflowScrolling: "touch" }}
            >
              {/* Connecting golden coordinate line */}
              <div className="absolute top-[82px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent pointer-events-none" />

               {sortedScientists.map((scientist, idx) => {
                const isActive = activeId === scientist.id;
                
                // Determine layout properties based on dynamic Zoom Level
                const nodeWidthClass = 
                  zoomLevel === "compact" 
                    ? "w-36" 
                    : zoomLevel === "expanded" 
                      ? "w-76" 
                      : "w-56";

                return (
                  <div
                    key={scientist.id}
                    id={`timeline-node-${scientist.id}`}
                    onClick={() => setActiveId(scientist.id)}
                    className={`flex-shrink-0 ${nodeWidthClass} flex flex-col items-center group cursor-pointer snap-center transition-all duration-500`}
                  >
                    {/* Golden Hologram Node Year */}
                    <span className="font-mono text-xs text-[#D4AF37] mb-3 group-hover:text-[#98FF98] transition-colors duration-300">
                      C. {scientist.birthYear} CE
                    </span>

                    {/* Timeline Node Point (glowing circle) */}
                    <div className="relative mb-5 z-10 flex items-center justify-center">
                      {/* Interactive ring animation */}
                      <span
                        className={`absolute w-8 h-8 rounded-full border border-dashed text-transparent transition-all duration-500 scale-125 ${
                          isActive
                            ? "border-[#D4AF37] animate-spin"
                            : "border-transparent group-hover:border-[#98FF98]/40"
                        }`}
                      />
                      
                      {/* Core Glowing Dot */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border transition-all duration-500 ${
                          isActive
                            ? "bg-[#D4AF37] border-white scale-125 shadow-[0_0_15px_#D4AF37]"
                            : "bg-[#0B3D2E] border-[#D4AF37] hover:bg-[#98FF98]/70 hover:border-[#98FF98]"
                        }`}
                      />
                    </div>

                    {/* Miniature details panel */}
                    <div
                      className={`text-center p-3 rounded-sm border w-full transition-all duration-500 bg-[#0B3D2E]/20 overflow-hidden ${
                        isActive
                          ? "border-[#D4AF37] bg-[#0b3d2e]/60 shadow-[0_5px_15px_rgba(212,175,55,0.06)]"
                          : "border-white/5 hover:border-white/20"
                      }`}
                    >
                      <h4
                        className={`font-sans font-medium text-xs tracking-wide truncate ${
                          isActive ? "text-[#D4AF37]" : "text-white/80"
                        }`}
                        title={scientist.nickname}
                      >
                        {scientist.nickname}
                      </h4>
                      
                      {zoomLevel !== "compact" && (
                        <p className="font-mono text-[9px] text-white/40 uppercase mt-1">
                          {scientist.field}
                        </p>
                      )}

                      {zoomLevel === "expanded" && (
                        <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-white/60 animate-fade-in text-left">
                          <span className="block font-mono text-[8px] opacity-40 uppercase leading-none mb-0.5">Invention:</span>
                          <span className="line-clamp-2 leading-tight font-serif italic">{scientist.inventionTitle}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Quick Summary of Sorted List range */}
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-white/30 border-t border-white/5 pt-4">
              <span>EST. START: 721 CE</span>
              <span>MEDIEVAL ENCYCLOPEDIC ERA</span>
              <span>EST. END: 1585 CE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
