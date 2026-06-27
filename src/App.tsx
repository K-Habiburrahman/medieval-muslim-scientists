/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import InventionCards from "./components/InventionCards";
import InventionCategories from "./components/InventionCategories";
import InventionModal from "./components/InventionModal";
import { scientists } from "./data/scientists";
import { Scientist } from "./types";
import { Compass, Cpu, History, ArrowUpRight, Award, Footprints, Globe, Sparkles } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);

  // Pathways IntersectionObserver and state
  const pathwaysRef = useRef<HTMLDivElement | null>(null);
  const [pathwaysVisible, setPathwaysVisible] = useState(false);

  useEffect(() => {
    const el = pathwaysRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPathwaysVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "0px 0px -50px 0px", // Trigger when the element is 50px inside viewport
      }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  // Smooth scroll tracking via IntersectionObserver
  useEffect(() => {
    const sections = ["hero", "timeline", "inventions", "categories", "impact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the middle view area
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#020B08] text-white/90 min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-hidden relative">
      
      {/* Cinematic Ambient Atmosphere Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Deep background mesh patterns */}
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-radial from-[#0B3D2E]/20 to-transparent blur-[140px] opacity-60" />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[55vw] bg-radial from-[#D4AF37]/5 to-transparent blur-[160px] opacity-40" />
        <div className="absolute bottom-[10%] left-[15%] w-[45vw] h-[45vw] bg-radial from-[#98FF98]/4 to-transparent blur-[130px] opacity-50" />
      </div>

      {/* Global Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 1. Hero / Main Gate section */}
      <Hero
        onExploreClick={() => handleScrollTo("inventions")}
        onTimelineClick={() => handleScrollTo("timeline")}
      />

      {/* 2. Interactive Horizontal Timeline Section */}
      <div id="timeline-anchor">
        <Timeline
          scientists={scientists}
          onSelectScientist={(s) => setSelectedScientist(s)}
        />
      </div>

      {/* 3. The Dynamic Polymaths Master Grid Catalogue */}
      <div id="inventions-anchor">
        <InventionCards
          scientists={scientists}
          onSelectScientist={(s) => setSelectedScientist(s)}
        />
      </div>

      {/* 4. Disciplines / Divisions */}
      <InventionCategories />

      {/* 5. Dedicated Modern Impact & Legacy Section (id="impact") */}
      <section id="impact" className="py-28 px-6 bg-[#030e0a] border-t border-[#D4AF37]/15 relative overflow-hidden">
        {/* Geometric Accent background */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020B08] to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3  py-1 rounded-sm border border-[#D4AF37]/30 bg-[#0B3D2E]/40 text-xs font-mono text-[#D4AF37] uppercase tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <Globe className="w-3.5 h-3.5 text-[#98FF98] animate-pulse" />
              Scientific Transmission Pathways
            </div>
            <h2 className="font-arabic-style font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-none">
              Medieval Seeds to <span className="text-[#D4AF37] font-decorative font-bold">Modern Fields</span>
            </h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
              Examine the historical blueprint evolution showing how key Islamic inventions were translated through Andalusia, Byzantium, and Sicily to construct the foundations of contemporary global engineering.
            </p>
          </div>

          {/* Interactive Transmission Comparison Grid */}
          <div ref={pathwaysRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20 overflow-hidden pb-4">
            
            {/* Left Box: Mathematical & Optics Ancestry map */}
            <div className={`bg-[#0b3d2e]/25 backdrop-blur-xl border border-[#D4AF37]/30 rounded-sm p-8 flex flex-col justify-between relative group overflow-hidden shadow-[0_15px_35px_rgba(4,21,17,0.5)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              pathwaysVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#D4AF37]/5 to-transparent blur-2xl group-hover:bg-[#D4AF37]/10 transition-colors" />
              <div>
                <span className="font-mono text-[9px] text-[#98FF98]/60 uppercase tracking-widest block mb-1">
                  TRANS-ANDALUSIAN PATHWAY
                </span>
                <h3 className="font-serif italic text-2xl text-[#D4AF37] mb-6">
                  Logic, Algebra & Spatial Sensors
                </h3>
                
                <p className="text-white/70 text-xs leading-relaxed tracking-wider mb-8">
                  From Baghdad's House of Wisdom to Cordoba, manuscripts on algorithmics, camera lenses, and geometric spherical coordinates were translated by Gerard of Cremona and Adelard of Bath, sparking the Renaissance scientific revolution.
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1145</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Robert of Chester Translates Algebra</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Introduced Al-Khwarizmi's core logic solver to Christian Europe.</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1242</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Pulmonary Circulation by Ibn al-Nafis</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Discovered heart-to-lung blood oxygen cycles, laying the foundations for cardiology.</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1270</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Kitab al-Manazir Published in Latin</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Ibn al-Haytham’s optics guide became the study manual for Roger Bacon.</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1272</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Tusi-Couple & Maragheh Star Maps</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Supplied the trigonometric models Copernicus used to formulate the heliocentric theory.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/30">
                <span>SECT // CODE TRANSLATION</span>
                <button
                  onClick={() => {
                    const polymath = scientists.find((s) => s.id === "al-khwarizmi");
                    if (polymath) setSelectedScientist(polymath);
                  }}
                  className="text-[#D4AF37] flex items-center gap-1 group-hover:text-[#98FF98] cursor-pointer bg-transparent border-none outline-none p-0 focus:outline-none font-mono text-[10px]"
                >
                  MAP VECTOR Blueprints <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right Box: Mechanical & Fluidics Automation map */}
            <div className={`bg-[#0b3d2e]/25 backdrop-blur-xl border border-[#D4AF37]/30 rounded-sm p-8 flex flex-col justify-between relative group overflow-hidden shadow-[0_15px_35px_rgba(4,21,17,0.5)] transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              pathwaysVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#98FF98]/4 to-transparent blur-2xl group-hover:bg-[#98FF98]/8 transition-colors" />
              <div>
                <span className="font-mono text-[9px] text-[#98FF98]/60 uppercase tracking-widest block mb-1">
                  AUTOMATION & FLUID MECHANICS
                </span>
                <h3 className="font-serif italic text-2xl text-[#D4AF37] mb-6">
                  Crankshafts, Gear Trains & Valve Control
                </h3>
                
                <p className="text-white/70 text-xs leading-relaxed tracking-wider mb-8">
                  Al-Jazari and the Banu Musa brothers engineered self-regulating machinery, water valves, double-acting suction pumps, and camshaft control mechanisms that paved the way for automated assemblies and modern robotics.
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1000</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Surgical Handbooks by Al-Zahrawi</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">'Al-Tasrif' introduced specialized catgut sutures and medical layout tools still utilized in ORs.</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1206</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Crank-Connection Invention by Al-Jazari</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Converted rotary motion to linear stroke, the backbone of modern internal combustion.</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1229</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Astrolabe Gear-Trains in Toledo & Sicily</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Laid mechanical blueprints for astronomical gear clocks and chronometers.</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4 items-center bg-black/35 p-3 rounded-sm border border-white/5">
                    <div className="text-center font-mono font-bold text-[#D4AF37] bg-[#020B08]/80 border border-[#D4AF37]/35 w-12 py-1.5 rounded-sm">
                      <span className="block text-[8px] opacity-40 leading-none">Y.</span>
                      <span className="text-xs leading-none">1570</span>
                    </div>
                    <div className="text-xs">
                      <strong className="text-white block font-sans tracking-wide">Steam Suction Turbines by Taqi al-Din</strong>
                      <span className="text-white/50 block font-mono text-[10px] mt-0.5">Pioneered early industrial water jets, precursor to current hydraulic pumps.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/30">
                <span>SECT // FLUID MECHANICAL CHRONICLES</span>
                <button
                  onClick={() => {
                    const polymath = scientists.find((s) => s.id === "al-jazari");
                    if (polymath) setSelectedScientist(polymath);
                  }}
                  className="text-[#D4AF37] flex items-center gap-1 group-hover:text-[#98FF98] cursor-pointer bg-transparent border-none outline-none p-0 focus:outline-none font-mono text-[10px]"
                >
                  EXAMINE bluePRINT SPECFILES <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Golden Quote from the Caliph/Historian with realistic illustration */}
          <div className="relative bg-[#0b3d2e]/40 border border-[#D4AF37]/30 p-8 sm:p-10 rounded-sm overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-[0_10px_30px_rgba(4,21,17,0.4)]">
            <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.06)_0%,transparent_60%) pointer-events-none" />
            
            {/* Compass / Astrolabe aesthetic frame center */}
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-[#D4AF37]/45 bg-[#020B08] group flex-shrink-0">
              <Compass className="w-8 h-8 text-[#D4AF37] animate-spin-slow" style={{ animationDuration: "12s" }} />
              <Sparkles className="w-4 h-4 text-[#98FF98] absolute top-1 right-1" />
            </div>

            <div>
              <span className="font-mono text-[9px] text-[#98FF98] uppercase tracking-[0.25em] block mb-2 font-bold">
                MUSEUM SUMMATION & HISTORICAL RECORD
              </span>
              <p className="font-serif italic text-white/80 text-sm sm:text-base leading-relaxed max-w-4xl mb-4">
                "Science is a cosmic tree whose roots lie in Baghdad, Cairo, and Bukhara, whose trunk branched through Toledo and Cordoba, and whose fruits are gathered globally in the spaceships, digital computers, and medicine hubs of today."
              </p>
              <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest block uppercase font-medium">
                — EXCELSIOR HISTORICAL COMPILER // GLOBAL LEGACY DESK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: Luxurious Museum Footer */}
      <footer className="bg-[#020B08] border-t border-[#D4AF37]/20 py-16 px-6 relative z-10 text-center sm:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5">
            <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-[0.2em] block mb-2">
              AL-ANDALUS & BAGHDAD ARCHIVE
            </span>
            <p className="text-white/40 text-xs tracking-wider max-w-sm leading-relaxed mx-auto sm:mx-0">
              A futuristic Islamic scientific museum, engineered with glassmorphism architecture. Designed to preserve the blueprints of pioneers who revolutionized civilization.
            </p>
          </div>

          <div className="md:col-span-3 font-mono text-[10px] tracking-wider text-white/50 space-y-2">
            <span className="block text-[#D4AF37] text-xs font-bold font-mono tracking-widest mb-3 uppercase">MUSEUM METADATA</span>
            <span className="block">LATITUDE: 33.3152° N (Baghdad)</span>
            <span className="block">LONGITUDE: 4.7794° W (Cordoba)</span>
            <span className="block text-white/30 text-[9px]">PROJECT MODEL ID: {`#AIS-${scientists.length * 85}`}</span>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end gap-3">
            <button
              id="footer-back-to-top"
              onClick={() => handleScrollTo("hero")}
              className="px-5 py-2.5 rounded-sm border border-[#D4AF37]/40 bg-[#0B3D2E]/25 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#020B08] transition-all duration-500 cursor-pointer"
            >
              ASPIRE TO GATEWAYS ↑
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-white/35 gap-4">
          <span>© 1000 - 2026 THE ISLAMIC GOLDEN AGE EXPERIMENTAL EXHIBITION. PERSISTENT HERITAGE RECORD.</span>
          <span className="text-[#98FF98] tracking-[0.15em] font-semibold uppercase bg-[#0B3D2E]/55 px-3 py-1 rounded-sm border border-[#98FF98]/25 shadow-[0_0_10px_rgba(152,255,152,0.1)]">
            Made by KHAN KHWAJA HABIBURRAHMAN KHWAJA ANIQURRAHMAN
          </span>
          <span className="mt-2 sm:mt-0">SECURE SHELF INDEXING // STYLED IN ATMOSPHERIC EMERALD & GOLD</span>
        </div>
      </footer>

      {/* Floating Detailed Discovery Inspector Modal (Rendered on selection) */}
      <AnimatePresence>
        {selectedScientist && (
          <InventionModal
            scientist={selectedScientist}
            onClose={() => setSelectedScientist(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
