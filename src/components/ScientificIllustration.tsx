/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Discipline } from "../types";

interface IllustrationProps {
  scientistId: string;
  field: Discipline;
  type: "hexagon-left" | "hexagon-right" | "centerpiece" | "mosaic";
  className?: string;
}

// Deterministic seed-based random number generator for uniqueness
function getSeededRandom(seedStr: string) {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  return {
    next: () => {
      hash = (hash + 0x9e3779b9) | 0;
      let z = hash;
      z ^= z >>> 16;
      z = Math.imul(z, 0x21f0aa7b);
      z ^= z >>> 15;
      z = Math.imul(z, 0x735a2d97);
      z ^= z >>> 15;
      return (z >>> 0) / 4294967296;
    },
    pick: <T extends unknown>(arr: T[]): T => {
      hash = (hash + 0x9e3779b9) | 0;
      let z = hash;
      z ^= z >>> 16;
      z = Math.imul(z, 0x21f0aa7b);
      z ^= z >>> 15;
      z = Math.imul(z, 0x735a2d97);
      z ^= z >>> 15;
      const idx = Math.floor(((z >>> 0) / 4294967296) * arr.length);
      return arr[idx];
    }
  };
}

export default function ScientificIllustration({
  scientistId,
  field,
  type,
  className = "",
}: IllustrationProps) {
  const normId = scientistId.toLowerCase();
  const randy = getSeededRandom(normId);

  // Color Palette Theme base
  const strokeColor = "#4A321B"; // Sepia dark
  const blueColor = "#008B8B";   // Teal blueprint
  const goldColor = "#A37B45";   // Vintage gold
  const neonCyan = "#0D9488";    // Emerald/teal highlights

  // ==================== MOSAIC RENDERER ====================
  if (type === "mosaic") {
    // Generate unique colorful style based on scientist ID to avoid duplicates
    const palettes = [
      { base: "#EADFCB", border: "#4A321B", accent1: "#0D9488", accent2: "#D97706", starColor: "#A37B45", core: "#0F766E", polygon: "#EADFCB" }, // original teal/ochre
      { base: "#F2E8D5", border: "#1E293B", accent1: "#1E40AF", accent2: "#0284C7", starColor: "#D97706", core: "#1E3A8A", polygon: "#F59E0B" }, // cobalt/cyan
      { base: "#ECE2D0", border: "#3F2E1E", accent1: "#059669", accent2: "#D97706", starColor: "#D97706", core: "#047857", polygon: "#FBBF24" }, // emerald/orange
      { base: "#E9DFCC", border: "#451A1A", accent1: "#DC2626", accent2: "#E11D48", starColor: "#D97706", core: "#991B1B", polygon: "#FDE047" }, // ruby/crimson
      { base: "#EBE1CD", border: "#3B1F45", accent1: "#7C3AED", accent2: "#B45309", starColor: "#8B5CF6", core: "#4C1D95", polygon: "#F472B6" }, // amethyst/violet
      { base: "#DFD3BC", border: "#522B1E", accent1: "#C2410C", accent2: "#EA580C", starColor: "#B45309", core: "#7C2D12", polygon: "#FFCC80" }, // terracotta/rust
    ];

    const style = randy.pick(palettes);
    const angleOffset = Math.floor(randy.next() * 45);

    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-16 md:w-20 md:h-20 select-none ${className}`}
      >
        <rect width="100" height="100" fill={style.base} rx="2" />
        {/* Frame lines */}
        <rect x="3" y="3" width="94" height="94" stroke={style.border} strokeWidth="0.75" />
        <rect x="6" y="6" width="88" height="88" stroke={style.starColor} strokeWidth="0.5" strokeDasharray="2, 1" />

        {/* Diagonal Intersecting Bands */}
        <path d="M50 6 L94 50 L50 94 L6 50 Z" fill="#F7F2E8" stroke={style.border} strokeWidth="0.75" />
        <path d="M6 6 L94 6 L94 94 L6 94 Z" stroke={style.border} strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Concentric Circle Grid */}
        <circle cx="50" cy="50" r="44" stroke={style.border} strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="50" cy="50" r="30" stroke={style.border} strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Unique star triangles */}
        <path d="M50 6 L62 25 L38 25 Z" fill={style.accent1} stroke={style.border} strokeWidth="0.5" />
        <path d="M50 94 L62 75 L38 75 Z" fill={style.accent1} stroke={style.border} strokeWidth="0.5" />
        <path d="M6 50 L25 38 L25 62 Z" fill={style.accent1} stroke={style.border} strokeWidth="0.5" />
        <path d="M94 50 L75 38 L75 62 Z" fill={style.accent1} stroke={style.border} strokeWidth="0.5" />

        <path d="M19 19 L38 25 L25 38 Z" fill={style.accent2} stroke={style.border} strokeWidth="0.5" />
        <path d="M81 19 L62 25 L75 38 Z" fill={style.accent2} stroke={style.border} strokeWidth="0.5" />
        <path d="M19 81 L38 75 L25 62 Z" fill={style.accent2} stroke={style.border} strokeWidth="0.5" />
        <path d="M81 81 L62 75 L75 62 Z" fill={style.accent2} stroke={style.border} strokeWidth="0.5" />

        {/* Central Geometric Octagram with custom angle rotate */}
        <g transform={`translate(50,50) rotate(${angleOffset})`}>
          {Array.from({ length: 8 }).map((_, idx) => {
            const angleDeg = idx * 45;
            return (
              <g key={idx} transform={`rotate(${angleDeg})`}>
                <path
                  d="M0 -30 L8 -12 L0 0 L-8 -12 Z"
                  fill={style.starColor}
                  stroke={style.border}
                  strokeWidth="0.5"
                />
                <circle cx="0" cy="-18" r="1.5" fill="#F7F2E8" />
              </g>
            );
          })}
          {/* Inner Core */}
          <circle cx="0" cy="0" r="12" fill="#F7F2E8" stroke={style.border} strokeWidth="0.75" />
          <circle cx="0" cy="0" r="8" fill={style.core} stroke={style.border} strokeWidth="0.5" />
          <polygon points="0,-4 3,3 -4,-1 4,-1 -3,3" fill={style.polygon} />
        </g>
      </svg>
    );
  }

  // ==================== HEXAGON LEFT BLUEPRINT BRANDING ====================
  if (type === "hexagon-left") {
    const numTeeth = randy.pick([6, 8, 10, 12, 14, 16]);
    const dAngle = 360 / numTeeth;
    const initialRot = Math.floor(randy.next() * 30);
    const numStarLines = randy.pick([6, 8, 12, 16]);
    const dStarAngle = (Math.PI * 2) / numStarLines;
    const scaleLineLen = 22 + Math.floor(randy.next() * 6);

    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-14 h-14 md:w-16 md:h-16 select-none bg-[#0B251E]/15 rounded-sm p-1 border border-[#4A321B]/30 ${className}`}
      >
        {/* Blueprint Hexagon Outer Boundary */}
        <polygon
          points="50,5 90,28 90,72 50,95 10,72 10,28"
          stroke={goldColor}
          strokeWidth="1.5"
          fill="#113B30"
          fillOpacity="0.08"
        />
        <polygon
          points="50,9 86,30 86,70 50,91 14,70 14,30"
          stroke={strokeColor}
          strokeWidth="0.5"
          strokeDasharray="2, 1"
        />

        {/* Circular Coordinate Compass Design */}
        <circle cx="50" cy="50" r="30" stroke={blueColor} strokeWidth="0.75" />
        <circle cx="50" cy="50" r="22" stroke={blueColor} strokeWidth="0.5" strokeDasharray="3, 3" />
        
        {/* Crosshairs */}
        <line x1="15" y1="50" x2="85" y2="50" stroke={blueColor} strokeWidth="0.5" />
        <line x1="50" y1="15" x2="50" y2="85" stroke={blueColor} strokeWidth="0.5" />

        {field === Discipline.Engineering || field === Discipline.Chemistry ? (
          <g transform={`translate(50,50) rotate(${initialRot})`}>
            {/* Unique Gear teeth based on seed */}
            {Array.from({ length: numTeeth }).map((_, i) => (
              <rect
                key={i}
                x="-3"
                y="-26"
                width="6"
                height="8"
                fill={goldColor}
                stroke={strokeColor}
                strokeWidth="0.5"
                transform={`rotate(${i * dAngle})`}
              />
            ))}
            <circle cx="0" cy="0" r="18" fill="#113B30" stroke={strokeColor} strokeWidth="1" />
            <circle cx="0" cy="0" r="6" fill="#EADFCB" stroke={strokeColor} strokeWidth="0.5" />
          </g>
        ) : (
          /* Seeded Astrolabe Star-Points */
          <g transform={`translate(50,50) rotate(${initialRot})`}>
            {Array.from({ length: numStarLines }).map((_, i) => {
              const angle = i * dStarAngle;
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={Math.cos(angle) * scaleLineLen}
                  y2={Math.sin(angle) * scaleLineLen}
                  stroke={goldColor}
                  strokeWidth="1"
                />
              );
            })}
            <circle cx="0" cy="0" r="5" fill="#EADFCB" stroke={strokeColor} strokeWidth="1" />
          </g>
        )}
      </svg>
    );
  }

  // ==================== HEXAGON RIGHT BLUEPRINT BRANDING ====================
  if (type === "hexagon-right") {
    const chamberW = 14 + Math.floor(randy.next() * 10);
    const chamberH = 55 + Math.floor(randy.next() * 18);
    const numPlanets = randy.pick([2, 3, 4, 5]);
    const rotSpeedOffset = randy.next() * 360;

    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-14 h-14 md:w-16 md:h-16 select-none bg-[#0B251E]/15 rounded-sm p-1 border border-[#4A321B]/30 ${className}`}
      >
        {/* Blueprint Hexagon Outer Boundary */}
        <polygon
          points="50,5 90,28 90,72 50,95 10,72 10,28"
          stroke={goldColor}
          strokeWidth="1.5"
          fill="#113B30"
          fillOpacity="0.08"
        />
        <polygon
          points="50,9 86,30 86,70 50,91 14,70 14,30"
          stroke={strokeColor}
          strokeWidth="0.5"
          strokeDasharray="2, 1"
        />

        <g transform="translate(50,50)">
          {field === Discipline.Engineering || field === Discipline.Physics ? (
            <g>
              {/* Unique cylinder gauge and mechanical plunger */}
              <rect x={-chamberW / 2} y={-chamberH / 2} width={chamberW} height={chamberH} stroke={blueColor} strokeWidth="1" />
              <rect x={-chamberW / 2 + 3} y={-chamberH / 2 + 4} width={chamberW - 6} height={chamberH - 8} stroke={blueColor} strokeWidth="0.5" fill="#113B30" fillOpacity="0.1" />
              <circle cx="0" cy="-8" r="13" stroke={goldColor} strokeWidth="0.75" />
              <line x1="-22" y1="14" x2="22" y2="14" stroke={strokeColor} strokeWidth="1" />
              <circle cx="0" cy="14" r="4" fill="#EADFCB" stroke={strokeColor} strokeWidth="0.5" />
            </g>
          ) : (
            <g transform={`rotate(${rotSpeedOffset})`}>
              {/* Concentric Spheres / Planetary orbit lines with unique counts */}
              <circle cx="0" cy="0" r="32" stroke={blueColor} strokeWidth="0.5" />
              <circle cx="0" cy="0" r="22" stroke={blueColor} strokeWidth="0.5" />
              <circle cx="0" cy="0" r="12" stroke={goldColor} strokeWidth="1" />
              
              {/* Generate unique orbital bodies positions */}
              {Array.from({ length: numPlanets }).map((_, pIdx) => {
                const orbAngle = (pIdx * Math.PI * 2) / numPlanets + 0.5;
                const orbRad = pIdx % 2 === 0 ? 16 : 26;
                const bodySize = pIdx === 0 ? 3.5 : 2;
                return (
                  <circle
                    key={pIdx}
                    cx={Math.cos(orbAngle) * orbRad}
                    cy={Math.sin(orbAngle) * orbRad}
                    r={bodySize}
                    fill={pIdx % 2 === 0 ? goldColor : blueColor}
                    stroke={strokeColor}
                    strokeWidth="0.5"
                  />
                );
              })}
              <line x1="-35" y1="0" x2="35" y2="0" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="1, 2" />
            </g>
          )}
        </g>
      </svg>
    );
  }

  // ==================== MAIN CENTERPIECE INVENTION ILLUSTRATION ====================
  if (type === "centerpiece") {
    // Unique data lookup helpers for prominent scholars to perfectly reflect their specific creations
    const getProceduralDetails = () => {
      if (normId.includes("khwarizmi")) {
        return {
          title: "AL-JABR QUADRATIC EQUATION PROOF",
          formula: "x² + 10x = 39",
          label1: "GEOMETRIC AREA RESTORATION",
          label2: "HINDU-ARABIC DECIMAL LOGIC",
        };
      }
      if (normId.includes("sina")) {
        return {
          title: "THE CANON CLINICAL SYSTEM",
          formula: "Al-Qanun fi al-Tibb",
          label1: "QUARANTINE CONTAGEON ISOLATION",
          label2: "DOUBLE-BLIND DRUG TRIALS",
        };
      }
      if (normId.includes("haytham") || normId.includes("sahl")) {
        return {
          title: "KITAB AL-MANAZIR OPTICAL PATHS",
          formula: "n₁ · sin(θ₁) = n₂ · sin(θ₂)",
          label1: "BAYT AL-MUZLIM PINHOLE PROJECTION",
          label2: "SPHERICAL GLASS REFRACTION SCALE",
        };
      }
      if (normId.includes("hayyan") || normId.includes("majriti")) {
        return {
          title: "AL-ANBIQ CHEMICAL RETORT",
          formula: "2HgO + Δ → 2Hg + O₂",
          label1: "CONDENSATION DISTILLATION",
          label2: "CRYSTALLINE METAL COHESION",
        };
      }
      if (normId.includes("jazari") || normId.includes("musa") || normId.includes("muradi")) {
        return {
          title: "INGENIOUS CAMSHAFT DRIVES",
          formula: "Feedback Loop ratio = 1 : 1",
          label1: "AUTOMATA FLOAT CONTROL REGULATOR",
          label2: "EPICYCLIC REDUCTION GEAR TEETH",
        };
      }
      if (normId.includes("tusi")) {
        return {
          title: "TUSI SYSTEM ORBIT TRANSFORMER",
          formula: "r_inner = R_outer / 2",
          label1: "GEARED PLANETARY REVERSION",
          label2: "TRIGONOMETRY SEPARATION FIELD",
        };
      }
      if (normId.includes("khayyam")) {
        return {
          title: "CUBIC ROOT CONIC SECTION",
          formula: "x³ + ax² + bx = c",
          label1: "PARABOLIC HYPERBOLA OVERLAYS",
          label2: "JALALI HIGH-PRECISION SOLAR ORBIT",
        };
      }
      if (normId.includes("qushji")) {
        return {
          title: "EARTH GEOCENTRIC ROTATION",
          formula: "ω_axial = 360° / 24 hrs",
          label1: "EMPIRICAL STELLAR OBSERVATORY",
          label2: "% NON-PHILOSOPHICAL ASTRONOMY",
        };
      }
      if (normId.includes("taqi")) {
        return {
          title: "SIX-CYLINDER ENGINE STEAM VALVE",
          formula: "6x Double-Action Cam Levers",
          label1: "MONOBLOCK PISTON HYDRAULICS",
          label2: "PRECISION SPRING-DRIVEN TIME ESCAPE",
        };
      }
      if (normId.includes("nafis")) {
        return {
          title: "PULMONARY HEART CIRCULATION",
          formula: "Ventricle Transit (Capillaries predicted)",
          label1: "SOLID VENTRICULAR SEPTUM",
          label2: "CARDIOVASCULAR OXYGEN TRANSIT",
        };
      }
      if (normId.includes("zahrawi")) {
        return {
          title: "AL-TASRIF SURGICAL STEEL",
          formula: "200+ Specialized Scalpels, Syringes",
          label1: "DISSOLVABLE CATGUT SUTURES",
          label2: "METALLURGICAL CAUTERY FORCEPS",
        };
      }
      if (normId.includes("kindi")) {
        return {
          title: "FREQUENCY ANALYSIS CODEBREAKER",
          formula: "P(char) = count / Total_Sample_Size",
          label1: "LANG LETTER PROBABILITY SCANNER",
          label2: "CRYPTOGRAPHIC DECRYPT ALGORITHM",
        };
      }
      if (normId.includes("farghani")) {
        return {
          title: "AL-RAWDA FLOOD NILOMETER",
          formula: "Conduit Water Height (16 Cubits)",
          label1: "OCTAGONAL MARBLE SENSOR TANK",
          label2: "CIVIL FLUID METRIC TELEMETRY",
        };
      }
      if (normId.includes("reis") || normId.includes("battuta") || normId.includes("idrisi")) {
        return {
          title: "WORLD GEOGRAPHIC CHARTING",
          formula: "Azimuthal Equidistant Grid Projection",
          label1: "Nautical Windrose Navigation",
          label2: "Three-Dimensional Silver Globe Sphere",
        };
      }

      // Procedural Fallbacks using getSeededRandom to avoid duplicates
      const mathFormulas = [
        "x³ + ax = b", "sin²(θ) + cos²(θ) = 1", "Area = p · q · sin(A)", "2^n · (3 · 2^(n-1) - 1)", 
        "cot(A) · cot(B) = c", "f(x) = ∑ a_n · x^n"
      ];
      const astroFormulas = [
        "h = 90° - φ + δ", "T² = a³ · G", "sin(Alt) = sin(Lat) · sin(Decl)", "Ecliptic obliquity = 23.4°"
      ];
      const physFormulas = [
        "n₁ · sin(θ₁) = n₂ · sin(θ₂)", "v = f · λ", "P_refract = (n - 1) / R", "E_absorbed = h · ν"
      ];
      const chemFormulas = [
        "As₂S₃ + 3H₂O", "Sb₂S₃", "Hg + S → HgS", "CaSO₄ · 2H₂O"
      ];
      const medFormulas = [
        "Pulse_rate = ΔP / Resistance", "Q = Cardiac_Output", "Suture_diameter = Gauge_Scale"
      ];

      if (field === Discipline.Mathematics) {
        return {
          title: "MATHEMATICAL INDUCTION GEOMETRY",
          formula: randy.pick(mathFormulas),
          label1: randy.pick(["TRIGONOMETRIC RATIOS", "AMICABLE NUMBER CONGRUENCE", "ARITHMETIC SERIES SUMS"]),
          label2: randy.pick(["SPHERICAL GEODESY RATIOS", "ALGEBRAIC VARIABLE PROOFS", "DECIMAL CONVERSION GRID"]),
        };
      }
      if (field === Discipline.Astronomy) {
        return {
          title: "STELLAR ORBIT SPHERICAL TABLE",
          formula: randy.pick(astroFormulas),
          label1: randy.pick(["DECLINATION COMPASS SENSOR", "ZODIAC CONSTELLATION NODES", "CELESTIAL NAVIGATION MAP"]),
          label2: randy.pick(["LUNAR ECLIPSE GNOMON", "ALTITUDE ANGLE LATITUDE", "EQUIVALENT STAR HEIGHT"]),
        };
      }
      if (field === Discipline.Physics) {
        return {
          title: "EMPIRICAL LIGHT PROPAGATION",
          formula: randy.pick(physFormulas),
          label1: randy.pick(["LIGHT RAY WAVEFORM FOCUS", "SPHERICAL MIRROR CONVEX", "SUNLIGHT SPECTRUM DIVISION"]),
          label2: randy.pick(["REFRACTIVE MEDIA INTERFACE", "LINEAR RAY DIRECTION", "ATMOSPHERIC DUST FILTER"]),
        };
      }
      if (field === Discipline.Chemistry) {
        return {
          title: "SUBLIMATION CHEMICAL MATRIX",
          formula: randy.pick(chemFormulas),
          label1: randy.pick(["BOILING AL-ANBIQ CONDENSER", "CALCINATION NITRIC FLASK", "POTASSIUM NITRATE RESIDUE"]),
          label2: randy.pick(["AQUEOUS ACID EXTRAC", "CRYSTAL LATTICE ATOM JOIN", "FURNACE COMBUSTION AIR"]),
        };
      }
      return {
        title: "CLINICAL ANATOMY OBSERVATION",
        formula: randy.pick(medFormulas),
        label1: randy.pick(["PULSE DIAGNOSTIC WAVES", "BOTANICAL EXTRACT DOSAGE", "TRACHEOTOMY RESPIRATORY SECT"]),
        label2: randy.pick(["HYPODERMIC SYRINGE PLUNGER", "DISSOLVABLE CATGUT LINK", "ANATOMICAL HEART VALVE LOGIC"]),
      };
    };

    const info = getProceduralDetails();

    return (
      <div className="relative w-full h-48 md:h-56 bg-[#122A22]/5 border border-[#4A321B]/35 rounded-sm p-4 overflow-hidden flex items-center justify-center select-none bg-grid-pattern">
        {/* Subtle coordinate matrix overlay background */}
        <div className="absolute inset-0 opacity-[0.06] text-[#4A321B]" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
        
        {/* Blueprint Framing Lines */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-dashed border-[#4A321B]/15 pointer-events-none" />

        {/* Dynamic, responsive vector rendering */}
        {(() => {
          if (field === Discipline.Engineering) {
            const leftGearRad = 24 + Math.floor(randy.next() * 8);
            const rightGearRad = 48 - leftGearRad;
            return (
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
                {/* Isometric grid background */}
                <line x1="20" y1="180" x2="380" y2="180" stroke="#4A321B" strokeWidth="0.5" strokeOpacity="0.2" />
                
                {/* 3D Isometric Base Machine Chassis */}
                <g stroke="#4A321B" strokeWidth="1" fill="#F7F2E8" fillOpacity="0.9">
                  <polygon points="120,150 140,140 280,140 260,150" />
                  <polygon points="120,150 120,165 130,170 130,152" />
                  <polygon points="260,150 260,165 270,170 270,152" />
                  <polygon points="120,150 120,155 260,155 260,150" />

                  {/* Interconnected double gears with unique radiuses */}
                  <g className="animate-spin-slow" style={{ transformOrigin: "170px 105px" }}>
                    <circle cx="170" cy="105" r={leftGearRad} fill="#EADFCB" strokeWidth="1.5" />
                    <circle cx="170" cy="105" r={leftGearRad - 8} fill="none" strokeWidth="0.5" strokeDasharray="3, 2" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <line
                        key={i}
                        x1="170"
                        y1="105"
                        x2={170 + Math.cos((i * Math.PI) / 4) * (leftGearRad + 6)}
                        y2={105 + Math.sin((i * Math.PI) / 4) * (leftGearRad + 6)}
                        strokeWidth="1.5"
                      />
                    ))}
                    <circle cx="170" cy="105" r="5" fill="#113B30" />
                  </g>

                  <g className="animate-spin-reverse" style={{ transformOrigin: "230px 105px" }}>
                    <circle cx="230" cy="105" r={rightGearRad} fill="#EADFCB" strokeWidth="1.5" />
                    <circle cx="230" cy="105" r={rightGearRad - 8} fill="none" strokeWidth="0.5" strokeDasharray="3, 2" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <line
                        key={i}
                        x1="230"
                        y1="105"
                        x2={230 + Math.cos((i * Math.PI) / 4 + Math.PI / 8) * (rightGearRad + 6)}
                        y2={105 + Math.sin((i * Math.PI) / 4 + Math.PI / 8) * (rightGearRad + 6)}
                        strokeWidth="1.5"
                      />
                    ))}
                    <circle cx="230" cy="105" r="5" fill="#113B30" />
                  </g>

                  {/* Floating cylinder level and valve rod */}
                  <rect x="70" y="60" width="35" height="100" fill="#113B30" fillOpacity="0.05" />
                  <line x1="88" y1="50" x2="88" y2="130" strokeWidth="2" stroke={neonCyan} />
                  <circle cx="88" cy="50" r="4" fill={goldColor} />
                  
                  {/* Gauge dial */}
                  <circle cx="310" cy="100" r="18" fill="#F7F2E8" />
                  <line x1="310" y1="100" x2="322" y2="92" stroke={neonCyan} strokeWidth="2" />
                  <circle cx="310" cy="100" r="3" fill="#4A321B" />
                </g>

                {/* Highly specific customized labels to avoid duplicate text */}
                <text x="88" y="40" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.label1}</text>
                <text x="200" y="155" textAnchor="middle" className="font-mono text-[7.5px]" fill="#4A321B" fontWeight="bold">{info.title}</text>
                <text x="310" y="128" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.label2}</text>
              </svg>
            );
          }

          if (field === Discipline.Astronomy) {
            const orbitRot = Math.floor(randy.next() * 30);
            return (
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
                <circle cx="200" cy="100" r="88" stroke="#4A321B" strokeWidth="0.5" strokeOpacity="0.1" />
                <circle cx="200" cy="100" r="66" stroke="#4A321B" strokeWidth="0.5" strokeOpacity="0.15" />
                <circle cx="200" cy="100" r="44" stroke="#4A321B" strokeWidth="0.5" strokeOpacity="0.2" />

                <path d="M50,150 C120,170 280,170 350,150" fill="none" stroke={blueColor} strokeWidth="1.5" />
                <line x1="200" y1="100" x2="330" y2="152" stroke={neonCyan} strokeWidth="1" strokeDasharray="3, 2" />
                <line x1="200" y1="100" x2="200" y2="162" stroke={neonCyan} strokeWidth="1" />
                
                {/* Dynamic degree values */}
                <path d="M200,135 A35,35 0 0,1 230,131" fill="none" stroke={goldColor} strokeWidth="1.5" />
                <text x="245" y="128" className="font-mono text-[8px]" fill={goldColor}>{info.formula}</text>

                {/* Rotating Astrolabe with custom angle */}
                <g className="animate-spin-slow" style={{ transformOrigin: "200px 100px", transform: `rotate(${orbitRot}deg)` }}>
                  <circle cx="200" cy="100" r="54" stroke="#4A321B" strokeWidth="1.5" fill="none" />
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i * Math.PI) / 8;
                    return (
                      <line
                        key={i}
                        x1={200 + Math.cos(angle) * 44}
                        y1={100 + Math.sin(angle) * 44}
                        x2={200 + Math.cos(angle) * 54}
                        y2={100 + Math.sin(angle) * 54}
                        stroke="#4A321B"
                        strokeWidth="0.75"
                      />
                    );
                  })}
                  
                  {/* Constellation stars uniquely positioned */}
                  <path d="M170,105 L182,92 L202,102 L216,84" fill="none" stroke={goldColor} strokeWidth="1" />
                  <circle cx="170" cy="105" r="2" fill="#EADFCB" stroke="#4A321B" strokeWidth="0.5" />
                  <circle cx="182" cy="92" r="2.5" fill={goldColor} />
                  <circle cx="202" cy="102" r="3" fill="#113B30" />
                  <circle cx="216" cy="84" r="2" fill="#EADFCB" stroke="#4A321B" strokeWidth="0.5" />
                </g>

                <circle cx="200" cy="100" r="7" fill="#F7F2E8" stroke="#4A321B" strokeWidth="1.5" />
                <circle cx="200" cy="100" r="3.5" fill="#4A321B" />

                <text x="200" y="24" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.title}</text>
                <text x="310" y="172" className="text-right font-mono text-[6.5px] fill-[#4A321B]">{info.label1} &nbsp;•&nbsp; {info.label2}</text>
              </svg>
            );
          }

          if (field === Discipline.Mathematics) {
            return (
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
                <g stroke="#4A321B" strokeWidth="0.25" strokeOpacity="0.4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={i} x1={50 + i * 37.5} y1="20" x2={50 + i * 37.5} y2="180" />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <line key={i} x1="50" y1={30 + i * 35} x2="350" y2={30 + i * 35} />
                  ))}
                </g>

                {/* Parabolic equation curve intersecting geometric gold circles */}
                <path d="M90,50 Q200,210 310,50" fill="none" stroke={blueColor} strokeWidth="2.5" />
                <circle cx="200" cy="110" r="56" fill="none" stroke={goldColor} strokeWidth="2" strokeDasharray="4, 1" />

                <circle cx="154" cy="74" r="5" fill="#113B30" stroke="#4A321B" strokeWidth="1" />
                <circle cx="246" cy="74" r="5" fill="#113B30" stroke="#4A321B" strokeWidth="1" />
                
                <text x="200" y="42" textAnchor="middle" className="font-serif italic text-[11px] text-[#2B1B10] font-bold">{info.formula}</text>
                <text x="145" y="62" className="font-mono text-[6px]" fill="#A37B45" fontWeight="bold">{info.label1}</text>
                <text x="235" y="62" className="font-mono text-[6px]" fill="#A37B45" fontWeight="bold">{info.label2}</text>

                {/* Zero Concept Symbolism Mandala */}
                <g transform="translate(200, 110)">
                  <ellipse rx="7" ry="12" fill="none" stroke={neonCyan} strokeWidth="1.5" />
                  <text x="0" y="3" textAnchor="middle" className="font-mono text-[8px]" fill={neonCyan} fontWeight="bold">sifr</text>
                </g>

                <text x="200" y="185" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.title}</text>
              </svg>
            );
          }

          if (field === Discipline.Physics) {
            return (
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
                {/* Pinhole Dark Chamber block */}
                <rect x="180" y="40" width="160" height="120" fill="#113B30" fillOpacity="0.05" stroke="#4A321B" strokeWidth="1.5" />
                <line x1="180" y1="40" x2="180" y2="92" stroke="#4A321B" strokeWidth="1.5" />
                <line x1="180" y1="108" x2="180" y2="160" stroke="#4A321B" strokeWidth="1.5" />
                <circle cx="180" cy="100" r="2.5" fill="#F7F2E8" stroke="#4A321B" strokeWidth="1" />

                {/* Light Ray channels crossing */}
                <line x1="40" y1="50" x2="180" y2="100" stroke={goldColor} strokeWidth="1.5" />
                <line x1="180" y1="100" x2="320" y2="150" stroke={goldColor} strokeWidth="1.5" strokeDasharray="3, 1" />
                <polygon points="40,50 35,55 35,45" fill={goldColor} />

                <line x1="40" y1="150" x2="180" y2="100" stroke={blueColor} strokeWidth="1.5" />
                <line x1="180" y1="100" x2="320" y2="50" stroke={blueColor} strokeWidth="1.5" strokeDasharray="3, 1" />

                <ellipse cx="320" cy="50" rx="3" ry="5" fill="none" stroke={blueColor} strokeWidth="1" />
                <ellipse cx="320" cy="150" rx="3" ry="5" fill="none" stroke={goldColor} strokeWidth="1" />

                {/* Refracted rays with spherical water flask lens details */}
                <circle cx="250" cy="100" r="14" fill="none" stroke={neonCyan} strokeWidth="1" />
                <line x1="225" y1="92" x2="250" y2="100" stroke={neonCyan} strokeWidth="1" />
                <line x1="250" y1="100" x2="275" y2="114" stroke={neonCyan} strokeWidth="1" />

                <text x="115" y="30" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.title}</text>
                <text x="260" y="178" textAnchor="middle" className="font-mono text-[7px]" fill="#4A321B" fontWeight="bold">{info.label1} | {info.label2}</text>
              </svg>
            );
          }

          if (field === Discipline.Chemistry) {
            return (
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
                <g stroke="#4A321B" strokeWidth="1.5" fill="none">
                  <rect x="90" y="120" width="60" height="15" rx="3" fill="#EADFCB" fillOpacity="0.2" />
                  <path d="M120,45 C145,45 150,110 150,120 C150,130 90,130 90,120 C90,110 95,45 120,45 Z" fill="#F7F2E8" />
                  <path d="M96,110 Q120,116 144,110 L144,124 L96,124 Z" fill={neonCyan} fillOpacity="0.15" stroke="none" />
                  
                  {/* The curved condensation tube connector */}
                  <path d="M120,40 Q130,10 190,30 Q250,50 250,110" stroke={goldColor} strokeWidth="2.5" />
                  <path d="M120,38 Q130,8 190,28 Q250,48 250,110" stroke="#F7F2E8" strokeWidth="1" />

                  {/* Right filtration receiver flask */}
                  <ellipse cx="250" cy="130" rx="24" ry="24" fill="#F7F2E8" />
                  <rect x="242" y="102" width="16" height="10" />
                  <circle cx="250" cy="120" r="2.5" fill={neonCyan} stroke="#4A321B" strokeWidth="0.5" />
                  <circle cx="250" cy="132" r="1.5" fill={neonCyan} />
                  
                  <rect x="100" y="140" width="40" height="25" fill="#EADFCB" />
                  <line x1="90" y1="165" x2="150" y2="165" strokeWidth="2" />
                </g>

                {/* Crystallization chemical lattices on background */}
                <g transform="translate(320, 80)" stroke={blueColor} strokeWidth="0.75" opacity="0.6">
                  <polygon points="20,0 10,-17 -10,-17 -20,0 -10,17 10,17" />
                  <line x1="0" y1="0" x2="20" y2="0" />
                  <circle cx="0" cy="0" r="2" fill="#EADFCB" />
                </g>

                <text x="120" y="28" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.label1}</text>
                <text x="250" y="174" textAnchor="middle" className="font-mono text-[7px]" fill="#4A321B" fontWeight="bold">{info.title} : {info.formula}</text>
                <text x="325" y="112" textAnchor="middle" className="font-mono text-[6.5px] fill-[#008B8B]">{info.label2}</text>
              </svg>
            );
          }

          // Medicine
          return (
            <svg viewBox="0 0 400 200" className="w-full h-full text-[#4A321B]">
              <g stroke="#4A321B" strokeWidth="0.25" strokeOpacity="0.2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <line key={i} x1={30 + i * 24} y1="40" x2={30 + i * 24} y2="160" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={i} x1="30" y1={40 + i * 24} x2="370" y2={40 + i * 24} />
                ))}
              </g>

              {/* Heartbeat diagnostic curves */}
              <path d="M40,100 L120,100 L128,85 L136,115 L144,50 L152,140 L160,90 L168,105 L176,100 L250,100 L258,85 L266,115 L274,50 L282,140 L290,90 L298,105 L306,100 L360,100" fill="none" stroke={neonCyan} strokeWidth="2" />
              <path d="M50,145 C100,120 150,150 200,130 C250,110 300,160 350,140" fill="none" stroke={goldColor} strokeWidth="1.5" strokeDasharray="4, 1" />

              {/* Forceps steel drawing */}
              <g transform="translate(200, 56) scale(0.65)">
                <path d="M0,0 Q-20,-40 -50,-50 C-40,-20 -10,15 0,35" stroke="#4A321B" strokeWidth="1.5" fill="none" />
                <path d="M0,0 Q20,-40 50,-50 C40,-20 10,15 0,35" stroke="#4A321B" strokeWidth="1.5" fill="none" />
                <circle cx="0" cy="0" r="3" fill="#EADFCB" stroke="#4A321B" strokeWidth="1" />
                <circle cx="-50" cy="-50" r="8" stroke="#4A321B" strokeWidth="1" />
                <circle cx="50" cy="-50" r="8" stroke="#4A321B" strokeWidth="1" />
              </g>

              <text x="200" y="28" textAnchor="middle" className="font-mono text-[7px]" fill="#A37B45" fontWeight="bold">{info.title}</text>
              <text x="110" y="168" textAnchor="middle" className="font-mono text-[7px]" fill="#4A321B" fontWeight="bold">{info.label1}</text>
              <text x="290" y="168" textAnchor="middle" className="font-mono text-[7px]" fill="#4A321B" fontWeight="bold">{info.label2} : {info.formula}</text>
            </svg>
          );
        })()}
      </div>
    );
  }

  return null;
}
