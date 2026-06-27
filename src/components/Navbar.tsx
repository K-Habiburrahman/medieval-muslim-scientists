/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Compass, Menu, X, Clock } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Update museum localized time
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toUTCString().replace("GMT", "UTC"));
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled || isMobileMenuOpen
            ? "bg-[#0b3d2e]/90 backdrop-blur-md border-[#D4AF37]/35 py-3 shadow-[0_10px_30px_rgba(11,61,46,0.3)] shadow-[#D4AF37]/5"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo & Geometric Ring */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37]/40 overflow-hidden bg-[#0B3D2E]/40 group-hover:border-[#D4AF37] transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {/* Geometric golden lattice decoration inside */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] animate-pulse" />
              <Compass className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-700" />
            </div>
            <div>
              <span className="font-decorative font-bold tracking-[0.15em] text-[#D4AF37] text-xs sm:text-sm block leading-none mb-0.5">
                BAIT AL-HIKMAH
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#98FF98]/70 tracking-[0.12em] block">
                ISLAMIC SCIENCE EXHIBITION
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
            {[
              { id: "hero", label: "Archive" },
              { id: "timeline", label: "Timeline" },
              { id: "inventions", label: "Scientists" },
              { id: "categories", label: "Disciplines" },
              { id: "impact", label: "Modern Impact" },
            ].map((item) => (
              <button
                id={`nav-btn-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 tracking-wider ${
                  activeSection === item.id
                    ? "text-[#D4AF37]"
                    : "text-white/60 hover:text-[#98FF98]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Action Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-[#D4AF37]/30 rounded-sm bg-[#0B3D2E]/40 text-[#D4AF37] hover:text-[#98FF98] hover:border-[#98FF98]/60 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Floating Full-Width Mobile Navigation Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#041511]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center px-8 border-b border-[#D4AF37]/20 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Islamic Mesh */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="w-full max-w-sm flex flex-col gap-6 text-center z-10">
          <span className="font-mono text-[9px] text-[#D4AF37] tracking-[0.25em] uppercase font-bold block border-b border-[#D4AF37]/15 pb-2">
            MUSEUM SECTIONS GATES
          </span>

          {[
            { id: "hero", label: "Archive Entry" },
            { id: "timeline", label: "Astrolabe Chronology" },
            { id: "inventions", label: "Polymaths Scientifics" },
            { id: "categories", label: "The Core Disciplines" },
            { id: "impact", label: "Modern Fields Linkage" },
          ].map((item) => (
            <button
              id={`mobile-nav-btn-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-serif text-xl py-3 border border-white/5 rounded-sm bg-white/2 hover:border-[#D4AF37] transition-all tracking-wider relative overflow-hidden ${
                activeSection === item.id
                  ? "text-[#D4AF37] bg-[#0b3d2e]/30 border-[#D4AF37]/40"
                  : "text-white/70"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
              )}
            </button>
          ))}

          {/* Coordinate ticking timer inside Drawer */}
          <div className="flex flex-col items-center gap-2 mt-8 p-4 rounded-sm border border-white/5 bg-black/25">
            <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase block flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#98FF98]" />
              CHRONOLOGY TIME COORDINATION
            </span>
            <span className="font-mono text-[10px] text-[#98FF98] tracking-widest font-bold">
              {time || "SYNCHRONIZING..."}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
