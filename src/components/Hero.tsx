/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Compass, Calendar, ArrowDown, HelpCircle, GraduationCap } from "lucide-react";
import astrolabeHero from "../assets/images/astrolabe_hero_1779445625266.png";
import { scientists } from "../data/scientists";

// Import premium background slides
import slideJabir from "../assets/images/hero_slide_jabir_1781420902065.jpg";
import slideKhwarizmi from "../assets/images/hero_slide_khwarizmi_new_1781421334433.jpg";
import slideZahrawi from "../assets/images/hero_slide_zahrawi_1781420936748.jpg";
import slideHaytham from "../assets/images/hero_slide_haytham_1781420952448.jpg";
import slideJazari from "../assets/images/hero_slide_jazari_1781420969465.jpg";
import slidePiri from "../assets/images/hero_slide_piri_1781420985916.jpg";

interface HeroProps {
  onExploreClick: () => void;
  onTimelineClick: () => void;
}

const SLIDES = [
  { img: slideJabir, title: "Jabir ibn Hayyan", desc: "Distillation Alembic & Retorts" },
  { img: slideKhwarizmi, title: "Al-Khwarizmi", desc: "Algebra & Positional Zero System" },
  { img: slideZahrawi, title: "Al-Zahrawi", desc: "200+ Surgical Instruments" },
  { img: slideHaytham, title: "Ibn al-Haytham", desc: "Camera Obscura & Optical Instruments" },
  { img: slideJazari, title: "Al-Jazari", desc: "Magnificent Elephant Clock" },
  { img: slidePiri, title: "Piri Reis", desc: "Comprehensive World Chart" },
];

export default function Hero({ onExploreClick, onTimelineClick }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Rotate slide background every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center px-6 bg-[#041511]"
    >
      {/* 1. Cinematic Background Layer with Parallax Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out scale-105"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              transform: `translateY(${offsetY * 0.15}px)`,
              backgroundImage: `radial-gradient(circle at 60% 40%, rgba(11, 61, 46, 0.45) 0%, rgba(4, 21, 17, 0.95) 80%), url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* 2. Islamic Geometric Lattice & Glowing Star Overlays */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M 60,0 L 120,60 L 60,120 L 0,60 Z M 60,0 L 60,120 M 0,60 L 120,60 M 30,30 L 90,90 M 30,90 L 90,30"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
                strokeDasharray="1,12"
              />
              <circle cx="60" cy="60" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
              <polygon points="60,45 64,56 75,60 64,64 60,75 56,64 45,60 56,56" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-grid)" />
        </svg>
      </div>

      {/* 3. Glowing Atmosphere Spheres and Lantern Flares */}
      <div className="absolute top-1/4 right-[20%] w-[500px] h-[500px] rounded-full bg-radial from-[#D4AF37]/10 to-transparent blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-1/4 left-[15%] w-[400px] h-[400px] rounded-full bg-radial from-[#98FF98]/5 to-transparent blur-[100px] pointer-events-none" />

      {/* 4. Falling Gold Dust Particles Stream */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(24)].map((_, i) => {
          const randLeft = `${10 + (i * 3.7) % 80}%`;
          const randDelay = `${(i * 0.4).toFixed(1)}s`;
          const randDuration = `${8 + (i % 6)}s`;
          const randSize = `${1.5 + (i % 3)}px`;
          return (
            <span
              key={i}
              className="absolute bg-[#D4AF37] rounded-full opacity-60 animate-bounce"
              style={{
                left: randLeft,
                top: `${(i * 123) % 90}%`,
                width: randSize,
                height: randSize,
                boxShadow: "0 0 8px #D4AF37",
                animation: `float-particle ${randDuration} infinite linear`,
                animationDelay: randDelay,
              }}
            />
          );
        })}
      </div>

      {/* 5. Central Glassmorphism Document Box */}
      <div className="relative z-20 max-w-[950px] text-center px-4 flex flex-col items-center">
        {/* Main Exhibition Heading */}
        <h1 className="w-full max-w-[950px] font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-[1.3] mb-6 drop-shadow-[0_4px_20px_rgba(4,21,17,0.95)]">
          <span 
            className="block text-[#c5e7a4] drop-shadow-[0_0_20px_rgba(197,231,164,0.5)] normal-case select-none max-w-full mx-auto"
            style={{ 
              height: "auto", 
              width: "100%", 
              fontFamily: '"Parisienne", "Allura", "Tangerine", "Great Vibes", cursive', 
              fontSize: "58px", 
              lineHeight: "1.1", 
              fontStyle: "normal", 
              fontWeight: "bold" 
            }}
          >
            Legacy of Golden Age Discoveries
          </span>
          <span 
            className="block mt-6 tracking-widest drop-shadow-[0_0_20px_rgba(154,239,132,0.4)]"
            style={{
              color: '#9aef84',
              fontFamily: '"Courier New", Courier, monospace',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: '42px',
              lineHeight: '52px',
              textTransform: 'uppercase'
            }}
          >
            Muslim Scholars Who
            <br />
            Shaped Civilization
          </span>
        </h1>

        {/* Subtitle / Narrative Copy */}
        <p className="text-white/70 max-w-2xl text-sm sm:text-base md:text-lg tracking-wide font-light leading-relaxed mb-10 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
          Step into a futuristic digital exhibition honoring the inventions, mathematical triumphs, and chemical
          apparatuses of the greatest Islamic Golden Age scholars who paved the road to the modern age.
        </p>

        {/* Action Buttons - Futuristic Glassmorphism Styling */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-[#0B3D2E]/80 to-[#014D40]/80 backdrop-blur-md border border-[#D4AF37] text-white hover:text-[#041511] font-mono text-xs tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.15)] cursor-pointer"
          >
            {/* Hover sliding bg */}
            <div className="absolute inset-0 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold select-none">
              Explore Discoveries
              <Compass className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
            </span>
          </button>

          <button
            id="hero-timeline-btn"
            onClick={onTimelineClick}
            className="group w-full sm:w-auto px-8 py-4 rounded-sm bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#98FF98]/60 text-[#D4AF37] hover:text-[#98FF98] font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2">
              View Chronology
              <Calendar className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      {/* Manual Slideshow Indicators & Info */}
      <div className="hidden absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3.5 z-30 select-none">
        <div className="flex items-center gap-2.5 bg-[#041511]/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(4,21,17,0.5)]">
          {SLIDES.map((slide, idx) => (
            <button
              key={idx}
              id={`slide-dot-${idx}`}
              onClick={() => setCurrentSlide(idx)}
              className="relative w-2.5 h-2.5 rounded-full transition-all duration-300 group/dot overflow-visible cursor-pointer"
            >
              <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? "bg-[#D4AF37] scale-120 shadow-[0_0_8px_#D4AF37]" 
                  : "bg-white/20 hover:bg-white/50"
              }`} />
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1 bg-[#014D40]/95 border border-[#D4AF37]/45 text-white text-[9px] font-mono tracking-widest uppercase rounded shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
        <div className="text-center font-mono text-[9px] tracking-[0.2em] text-[#D4AF37]/85 min-h-[14px] uppercase">
          {SLIDES[currentSlide].title} — <span className="text-[#98FF98]">{SLIDES[currentSlide].desc}</span>
        </div>
      </div>

      {/* Decorative Bottom Corner Frame Brackets & Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase animate-bounce pointer-events-none z-10 select-none">
        <span>DESCEND INTO ARCHIVES</span>
        <ArrowDown className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
      </div>

      {/* Styles for particles float */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-450px) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
}
