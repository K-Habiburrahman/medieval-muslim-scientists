/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scientist } from "../types";
import { getAdditionalInventions } from "./additionalInventions";

/**
 * Text wrapping helper for CanvasRenderingContext2D.
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = words[0] || "";

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + " " + word;
    const width = ctx.measureText(testLine).width;
    if (width < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Draws an 8-pointed geometric Islamic Star motif.
 */
function drawIslamicStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  color: string,
  filled = true
) {
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8;
    const dist = i % 2 === 0 ? r : r * 0.54;
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  if (filled) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  ctx.restore();
}

// Deterministic seed-based random number generator for badge uniqueness
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

/**
 * Draws a high-fidelity hexagonal blueprint drawing (cogs or orbit grids) with seeded variations.
 */
function drawHexagonBlueprint(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  field: string,
  side: "left" | "right",
  scientistId: string = ""
) {
  const normId = scientistId.toLowerCase();
  const randy = getSeededRandom(normId || field);

  const goldColor = "#A37B45";
  const sepiaColor = "#4A321B";
  const blueColor = "#008B8B";

  ctx.save();
  
  // Outer Hexagon
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 1.5;
  ctx.fillStyle = "rgba(17, 59, 48, 0.04)";
  ctx.fill();
  ctx.stroke();

  // Inner dashed hexagon
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    const x = cx + Math.cos(angle) * (r - 4);
    const y = cy + Math.sin(angle) * (r - 4);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = sepiaColor;
  ctx.setLineDash([2, 1]);
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.setLineDash([]);

  // Concentric compass scale
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.65, 0, Math.PI * 2);
  ctx.strokeStyle = blueColor;
  ctx.lineWidth = 0.75;
  ctx.stroke();

  // Crosshairs
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.8, cy); ctx.lineTo(cx + r * 0.8, cy);
  ctx.moveTo(cx, cy - r * 0.8); ctx.lineTo(cx, cy + r * 0.8);
  ctx.strokeStyle = blueColor;
  ctx.lineWidth = 0.4;
  ctx.stroke();

  const isEngOrChem = field.toLowerCase() === "engineering" || field.toLowerCase() === "chemistry";
  const initialRot = randy.next() * Math.PI * 2;

  if (side === "left") {
    if (isEngOrChem) {
      // Custom gear wheels with teeth based on seed
      const numTeeth = randy.pick([6, 8, 10, 12, 14]);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(initialRot);
      for (let i = 0; i < numTeeth; i++) {
        const angle = (i * Math.PI * 2) / numTeeth;
        ctx.save();
        ctx.rotate(angle);
        ctx.fillStyle = goldColor;
        ctx.strokeStyle = sepiaColor;
        ctx.lineWidth = 0.5;
        ctx.fillRect(-2.5, -r * 0.9, 5, 6);
        ctx.strokeRect(-2.5, -r * 0.9, 5, 6);
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(17, 59, 48, 0.15)";
      ctx.fill();
      ctx.strokeStyle = sepiaColor;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = "#EADFCB";
      ctx.stroke();
      ctx.restore();
    } else {
      // Seeded Astrolabe scale lines
      const numLines = randy.pick([6, 8, 12, 16]);
      const lineLen = r * (0.65 + randy.next() * 0.15);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(initialRot);
      ctx.strokeStyle = goldColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < numLines; i++) {
        const angle = (i * Math.PI * 2) / numLines;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * lineLen, Math.sin(angle) * lineLen);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#EADFCB";
      ctx.strokeStyle = sepiaColor;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  } else {
    // Right side
    const isEngOrPhys = field.toLowerCase() === "engineering" || field.toLowerCase() === "physics";
    if (isEngOrPhys) {
      const chamberW = r * (0.45 + randy.next() * 0.1);
      const chamberH = r * (1.1 + randy.next() * 0.1);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.rect(-chamberW / 2, -chamberH / 2, chamberW, chamberH);
      ctx.strokeStyle = blueColor;
      ctx.lineWidth = 0.75;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.rect(-chamberW / 2 + 1.5, -chamberH / 2 + 2, chamberW - 3, chamberH - 4);
      ctx.fillStyle = "rgba(17, 59, 48, 0.08)";
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(0, -3, r * 0.45, 0, Math.PI * 2);
      ctx.strokeStyle = goldColor;
      ctx.stroke();
      ctx.restore();
    } else {
      // Geocentric orbits
      const numPlanets = randy.pick([2, 3, 4]);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(initialRot);

      ctx.beginPath(); ctx.arc(0, 0, r * 0.8, 0, Math.PI * 2); ctx.strokeStyle = blueColor; ctx.lineWidth = 0.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(0, 0, r * 0.5, 0, Math.PI * 2); ctx.strokeStyle = blueColor; ctx.lineWidth = 0.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2); ctx.fillStyle = goldColor; ctx.strokeStyle = sepiaColor; ctx.lineWidth = 0.5; ctx.fill(); ctx.stroke();

      for (let i = 0; i < numPlanets; i++) {
        const pAngle = (i * Math.PI * 2) / numPlanets + 0.5;
        const pRad = i % 2 === 0 ? r * 0.5 : r * 0.8;
        ctx.beginPath();
        ctx.arc(Math.cos(pAngle) * pRad, Math.sin(pAngle) * pRad, i === 0 ? 3 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? goldColor : blueColor;
        ctx.fill();
        ctx.strokeStyle = sepiaColor;
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  ctx.restore();
}

/**
 * Draws primary centerpiece dynamic illustrations inside the box with seed-based parameterization.
 */
function drawCanvasCenterpiece(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  field: string,
  scientistId: string = ""
) {
  const normId = scientistId.toLowerCase();
  const randy = getSeededRandom(normId || field);

  const sepiaColor = "#4A321B";
  const goldColor = "#A37B45";
  const blueColor = "#008B8B";
  const neonCyan = "#0D9488";

  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Grids underlay
  ctx.strokeStyle = "rgba(74, 50, 27, 0.05)";
  ctx.lineWidth = 0.5;
  for (let gx = x; gx < x + w; gx += 14) {
    ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); ctx.stroke();
  }
  for (let gy = y; gy < y + h; gy += 14) {
    ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); ctx.stroke();
  }

  const cx = x + w / 2;
  const cy = y + h / 2;

  // Synchronization profile with ScientificIllustration.tsx
  const getProceduralDetails = () => {
    if (normId.includes("khwarizmi")) {
      return {
        title: "AL-JABR QUADRATIC PROOF",
        formula: "x² + 10x = 39",
        label1: "GEOMETRIC RESTORATION",
        label2: "DECIMAL LOGIC",
      };
    }
    if (normId.includes("sina")) {
      return {
        title: "CANON CLINICAL SYSTEM",
        formula: "Al-Qanun fi al-Tibb",
        label1: "QUARANTINE CONTAGEON",
        label2: "DOUBLE-BLIND METHOD",
      };
    }
    if (normId.includes("haytham") || normId.includes("sahl")) {
      return {
        title: "KITAB AL-MANAZIR OPTICS",
        formula: "n₁ · sin(θ₁) = n₂ · sin(θ₂)",
        label1: "PINHOLE PROJECTION",
        label2: "GLASS REFRACTION",
      };
    }
    if (normId.includes("hayyan") || normId.includes("majriti")) {
      return {
        title: "AL-ANBIQ BOILING RETORT",
        formula: "2HgO + Δ → 2Hg + O₂",
        label1: "CONDENSER PROCESS",
        label2: "CRYSTAL COHESION",
      };
    }
    if (normId.includes("jazari") || normId.includes("musa") || normId.includes("muradi")) {
      return {
        title: "INGENIOUS CAMSHAFT DRIVES",
        formula: "Feedback ratio = 1 : 1",
        label1: "FLOAT VALVE CONTROLLER",
        label2: "EPICYCLIC REDUCTION GEARS",
      };
    }
    if (normId.includes("tusi")) {
      return {
        title: "TUSI ORBIT CONVERTER",
        formula: "r_in = R_out / 2",
        label1: "GEARED PLANETARY LOOP",
        label2: "Pure Trig domain",
      };
    }
    if (normId.includes("khayyam")) {
      return {
        title: "CUBIC CONIC ROOT SECTION",
        formula: "x³ + ax² + bx = c",
        label1: "PARABOLIC INTERSECTS",
        label2: "SOPH CALENDAR ORBITS",
      };
    }
    if (normId.includes("qushji")) {
      return {
        title: "EARTH AXIAL GEOROTATION",
        formula: "ω_rot = 360° / 24h",
        label1: "EMPIRICAL OBSERVATORY",
        label2: "NON-PHILOSOPHICAL SYSTEM",
      };
    }
    if (normId.includes("taqi")) {
      return {
        title: "SIX-CYLINDER WATER ENGINE",
        formula: "6x Cam Driven Pistons",
        label1: "MONOBLOCK CYLINDERS",
        label2: "SPRING-DRIVEN CLOCKWORK",
      };
    }
    if (normId.includes("nafis")) {
      return {
        title: "PULMONARY HEART TRANSIT",
        formula: "Ventricle to Capillaries",
        label1: "IMPENETRABLE SEPTUM",
        label2: "OXYGENATED BLOOD FLOW",
      };
    }
    if (normId.includes("zahrawi")) {
      return {
        title: "AL-TASRIF SURGICAL STEEL",
        formula: "200+ Forceps, Scalpels",
        label1: "CATGUT SUTURE MEDIUM",
        label2: "CAUTERY PIN INSTRUMENT",
      };
    }
    if (normId.includes("kindi")) {
      return {
        title: "CYPHER FREQUENCY ANALYSIS",
        formula: "P(char) = count/Total",
        label1: "STATISTICAL DECRYPTOR",
        label2: "ALPHABETIC SPECTRUMS",
      };
    }
    if (normId.includes("farghani")) {
      return {
        title: "AL-RAWDA FLOOD NILOMETER",
        formula: "Flood Height = 16 Cubits",
        label1: "OCTAGONAL MARBLE COLUMN",
        label2: "CIVIL FLUID TELEMETRY",
      };
    }
    if (normId.includes("reis") || normId.includes("battuta") || normId.includes("idrisi")) {
      return {
        title: "GEOGRAPHICAL PROJECTION",
        formula: "Azimuthal Equidistant Grid",
        label1: "Nautical Windrose Navigation",
        label2: "Solid Silver Spherical relief",
      };
    }

    const mathFormulas = ["x³ + ax = b", "sin²(θ) + cos²(θ) = 1", "Area = p · q · sin(A)", "2^n · (3·2^(n-1) - 1)"];
    const astroFormulas = ["h = 90° - φ + δ", "T² = a³", "sin(Alt) = sin(Lat) · sin(Decl)"];
    const physFormulas = ["n₁ · sin(θ₁) = n₂ · sin(θ₂)", "v = f · λ", "P_refract = (n-1)/R"];
    const chemFormulas = ["As₂S₃ + 3H₂O", "Hg + S → HgS", "CaSO₄ · 2H₂O"];
    const medFormulas = ["Pulse_rate = dP/R", "Q = Cardiac_Output", "Suture_gauge = scale"];

    const fld = field.toLowerCase();
    if (fld === "mathematics") {
      return {
        title: "DYNAMIC GEOMETRIC INDUCTION",
        formula: randy.pick(mathFormulas),
        label1: "TRIGONOMETRIC RATIO MODEL",
        label2: "VARIABLE RESOLUTION GRID",
      };
    }
    if (fld === "astronomy") {
      return {
        title: "STELLAR LONGITUDE INDEX",
        formula: randy.pick(astroFormulas),
        label1: "DECLINATION COMPASS INLINE",
        label2: "CELESTIAL MAP CALIBRATION",
      };
    }
    if (fld === "physics") {
      return {
        title: "EMPIRICAL LIGHT OPTICS",
        formula: randy.pick(physFormulas),
        label1: "CONVEX SPECULAR FOCUS",
        label2: "REFRACTIVE MEDIA RAYWAYS",
      };
    }
    if (fld === "chemistry") {
      return {
        title: "CONDENSATION CHEMICAL PROCESS",
        formula: randy.pick(chemFormulas),
        label1: "AL-ANBIQ RETORT DISTIL",
        label2: "CRYSTAL CHEMICAL LATTICE",
      };
    }
    return {
      title: "CLINICAL ANATOMY MANUAL",
      formula: randy.pick(medFormulas),
      label1: "PULSE DIAGNOSTIC INTERFACE",
      label2: "DISSOLVABLE CATGUT SUTURE",
    };
  };

  const info = getProceduralDetails();

  const isEng = field.toLowerCase() === "engineering";
  const isAstro = field.toLowerCase() === "astronomy";
  const isMath = field.toLowerCase() === "mathematics";
  const isPhys = field.toLowerCase() === "physics";
  const isChem = field.toLowerCase() === "chemistry";

  if (isEng) {
    const leftRad = 20 + Math.floor(randy.next() * 8);
    const rightRad = 44 - leftRad;

    ctx.save();
    
    // Base platform
    ctx.fillStyle = "#F7F2E8";
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 80, cy + 30);
    ctx.lineTo(cx + 80, cy + 30);
    ctx.lineTo(cx + 60, cy + 45);
    ctx.lineTo(cx - 60, cy + 45);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Left gear
    ctx.save();
    ctx.translate(cx - 30, cy);
    ctx.beginPath();
    ctx.arc(0, 0, leftRad, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(234, 223, 203, 0.4)";
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(angle) * (leftRad + 4), Math.sin(angle) * (leftRad + 4)); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fillStyle = sepiaColor; ctx.fill();
    ctx.restore();

    // Right gear
    ctx.save();
    ctx.translate(cx + 30, cy);
    ctx.beginPath();
    ctx.arc(0, 0, rightRad, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(234, 223, 203, 0.4)";
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 + Math.PI / 8;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(angle) * (rightRad + 4), Math.sin(angle) * (rightRad + 4)); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fillStyle = sepiaColor; ctx.fill();
    ctx.restore();

    // Valve float conduit
    ctx.fillStyle = "rgba(13, 148, 136, 0.05)";
    ctx.fillRect(cx - 85, cy - 20, 18, 50);
    ctx.strokeRect(cx - 85, cy - 20, 18, 50);
    ctx.beginPath();
    ctx.moveTo(cx - 76, cy - 30);
    ctx.lineTo(cx - 76, cy + 25);
    ctx.strokeStyle = neonCyan;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  } else if (isAstro) {
    ctx.beginPath(); ctx.arc(cx, cy, 42, 0, Math.PI * 2); ctx.strokeStyle = "rgba(74, 50, 27, 0.15)"; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.strokeStyle = blueColor; ctx.lineWidth = 0.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.strokeStyle = goldColor; ctx.lineWidth = 1; ctx.stroke();

    // Sector degrees ticks
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 16; i++) {
      const ang = (i * Math.PI) / 8;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * 26, cy + Math.sin(ang) * 26);
      ctx.lineTo(cx + Math.cos(ang) * 30, cy + Math.sin(ang) * 30);
      ctx.stroke();
    }

    // Constellations coordinates matching seed perfectly
    ctx.beginPath();
    ctx.moveTo(cx - 36, cy - 18);
    ctx.lineTo(cx - 14, cy - 22);
    ctx.lineTo(cx + 8, cy - 12);
    ctx.lineTo(cx + 32, cy - 26);
    ctx.strokeStyle = neonCyan;
    ctx.lineWidth = 1.25;
    ctx.stroke();

    ctx.beginPath(); ctx.arc(cx - 36, cy - 18, 2, 0, Math.PI * 2); ctx.fillStyle = sepiaColor; ctx.fill();
    ctx.beginPath(); ctx.arc(cx - 14, cy - 22, 2.5, 0, Math.PI * 2); ctx.fillStyle = goldColor; ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 8, cy - 12, 3, 0, Math.PI * 2); ctx.fillStyle = "#113B30"; ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 32, cy - 26, 2, 0, Math.PI * 2); ctx.fillStyle = sepiaColor; ctx.fill();
  } else if (isMath) {
    ctx.strokeStyle = "rgba(74, 50, 27, 0.1)";
    ctx.lineWidth = 0.4;
    for (let i = cx - 75; i <= cx + 75; i += 25) {
      ctx.beginPath(); ctx.moveTo(i, cy - 40); ctx.lineTo(i, cy + 40); ctx.stroke();
    }
    for (let i = cy - 40; i <= cy + 40; i += 20) {
      ctx.beginPath(); ctx.moveTo(cx - 75, i); ctx.lineTo(cx + 75, i); ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(cx - 65, cy - 25);
    ctx.quadraticCurveTo(cx, cy + 55, cx + 65, cy - 25);
    ctx.strokeStyle = blueColor;
    ctx.lineWidth = 1.75;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, Math.PI * 2);
    ctx.strokeStyle = goldColor;
    ctx.lineWidth = 1.25;
    ctx.setLineDash([3, 1]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath(); ctx.arc(cx - 28, cy + 6, 4, 0, Math.PI * 2); ctx.fillStyle = "#113B30"; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + 28, cy + 6, 4, 0, Math.PI * 2); ctx.fillStyle = "#113B30"; ctx.fill(); ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(0.8, 1.3);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.strokeStyle = neonCyan;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  } else if (isPhys) {
    ctx.beginPath();
    ctx.rect(cx - 30, cy - 35, 90, 70);
    ctx.fillStyle = "rgba(17, 59, 48, 0.05)";
    ctx.fill();
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 1.25;
    ctx.stroke();

    ctx.beginPath(); ctx.moveTo(cx - 85, cy - 22); ctx.lineTo(cx - 30, cy); ctx.strokeStyle = goldColor; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - 30, cy); ctx.lineTo(cx + 60, cy + 22); ctx.strokeStyle = goldColor; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]);

    ctx.beginPath(); ctx.moveTo(cx - 85, cy + 22); ctx.lineTo(cx - 30, cy); ctx.strokeStyle = blueColor; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - 30, cy); ctx.lineTo(cx + 60, cy - 22); ctx.strokeStyle = blueColor; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(cx + 15, cy, 12, 0, Math.PI * 2);
    ctx.strokeStyle = neonCyan;
    ctx.lineWidth = 1;
    ctx.stroke();
  } else if (isChem) {
    ctx.beginPath();
    ctx.arc(cx - 40, cy + 12, 16, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(13, 148, 136, 0.08)";
    ctx.fill();
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - 40, cy - 4);
    ctx.bezierCurveTo(cx - 35, cy - 28, cx + 5, cy - 22, cx + 32, cy + 6);
    ctx.strokeStyle = goldColor;
    ctx.lineWidth = 2.2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx + 32, cy + 15, 12, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(234, 223, 203, 0.5)";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx + 32, cy + 8, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = neonCyan;
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(cx - 80, cy);
    ctx.lineTo(cx - 40, cy);
    ctx.lineTo(cx - 35, cy - 14);
    ctx.lineTo(cx - 30, cy + 14);
    ctx.lineTo(cx - 25, cy - 32);
    ctx.lineTo(cx - 20, cy + 28);
    ctx.lineTo(cx - 15, cy - 8);
    ctx.lineTo(cx - 10, cy + 4);
    ctx.lineTo(cx + 15, cy);
    ctx.lineTo(cx + 20, cy - 14);
    ctx.lineTo(cx + 25, cy + 14);
    ctx.lineTo(cx + 30, cy - 32);
    ctx.lineTo(cx + 35, cy + 28);
    ctx.lineTo(cx + 40, cy);
    ctx.lineTo(cx + 80, cy);
    ctx.strokeStyle = neonCyan;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - 70, cy + 24);
    ctx.bezierCurveTo(cx - 30, cy + 10, cx + 10, cy + 30, cx + 70, cy + 18);
    ctx.strokeStyle = goldColor;
    ctx.lineWidth = 1.25;
    ctx.setLineDash([3, 1]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Draw identical layout specific labels so downloading matches SVG exactly
  ctx.fillStyle = goldColor;
  ctx.font = "bold 6.5px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText(info.label1, cx - w / 4 - 10, cy - h / 2 + 15);
  ctx.fillText(info.label2, cx + w / 4 + 10, cy - h / 2 + 15);

  ctx.fillStyle = sepiaColor;
  ctx.font = "bold 8.5px 'Georgia', serif";
  ctx.fillText(info.title, cx, cy + h / 2 - 10);

  ctx.fillStyle = "rgba(74, 50, 27, 0.8)";
  ctx.font = "italic italic 7.5px 'Georgia', serif";
  ctx.fillText(info.formula, cx, cy - h / 2 + 15);

  ctx.restore();
}

/**
 * Draws a gorgeous colorful geometric star tile pattern with scientistId seeds to prevent duplicate assets.
 */
function drawCanvasMosaic(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  scientistId: string = ""
) {
  const normId = scientistId.toLowerCase();
  const randy = getSeededRandom(normId);

  // Sync precise palette colors with SVG component
  const palettes = [
    { base: "#EADFCB", border: "#4A321B", accent1: "#0D9488", accent2: "#D97706", starColor: "#A37B45", core: "#0F766E", polygon: "#EADFCB" },
    { base: "#F2E8D5", border: "#1E293B", accent1: "#1E40AF", accent2: "#0284C7", starColor: "#D97706", core: "#1E3A8A", polygon: "#F59E0B" },
    { base: "#ECE2D0", border: "#3F2E1E", accent1: "#059669", accent2: "#D97706", starColor: "#D97706", core: "#047857", polygon: "#FBBF24" },
    { base: "#E9DFCC", border: "#451A1A", accent1: "#DC2626", accent2: "#E11D48", starColor: "#D97706", core: "#991B1B", polygon: "#FDE047" },
    { base: "#EBE1CD", border: "#3B1F45", accent1: "#7C3AED", accent2: "#B45309", starColor: "#8B5CF6", core: "#4C1D95", polygon: "#F472B6" },
    { base: "#DFD3BC", border: "#522B1E", accent1: "#C2410C", accent2: "#EA580C", starColor: "#B45309", core: "#7C2D12", polygon: "#FFCC80" },
  ];

  const style = randy.pick(palettes);
  const angleOffset = (randy.next() * 45 * Math.PI) / 180;

  ctx.save();
  ctx.fillStyle = style.base;
  ctx.fillRect(x, y, w, h);

  // Border lines
  ctx.strokeStyle = style.border;
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, w, h);
  ctx.strokeStyle = style.starColor;
  ctx.lineWidth = 0.5;
  ctx.strokeRect(x + 2, y + 2, w - 4, h - 4);

  const cx = x + w / 2;
  const cy = y + h / 2;

  // Intersecting bands
  ctx.beginPath();
  ctx.moveTo(cx, y + 4);
  ctx.lineTo(x + w - 4, cy);
  ctx.lineTo(cx, y + h - 4);
  ctx.lineTo(x + 4, cy);
  ctx.closePath();
  ctx.fillStyle = "#F7F2E8";
  ctx.strokeStyle = style.border;
  ctx.lineWidth = 0.75;
  ctx.fill();
  ctx.stroke();

  // 8 Outer Triangles with styling palette
  ctx.fillStyle = style.accent1;
  ctx.strokeStyle = style.border;
  ctx.lineWidth = 0.5;

  // Top
  ctx.beginPath(); ctx.moveTo(cx, y + 4); ctx.lineTo(cx + 5, y + 14); ctx.lineTo(cx - 5, y + 14); ctx.closePath(); ctx.fill(); ctx.stroke();
  // Bottom
  ctx.beginPath(); ctx.moveTo(cx, y + h - 4); ctx.lineTo(cx + 5, y + h - 14); ctx.lineTo(cx - 5, y + h - 14); ctx.closePath(); ctx.fill(); ctx.stroke();
  // Left
  ctx.beginPath(); ctx.moveTo(x + 4, cy); ctx.lineTo(x + 14, cy - 5); ctx.lineTo(x + 14, cy + 5); ctx.closePath(); ctx.fill(); ctx.stroke();
  // Right
  ctx.beginPath(); ctx.moveTo(x + w - 4, cy); ctx.lineTo(x + w - 14, cy - 5); ctx.lineTo(x + w - 14, cy + 5); ctx.closePath(); ctx.fill(); ctx.stroke();

  // Draw 8-pointed star in center with custom angle rotations to match SVG exactly
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angleOffset);
  for (let idx = 0; idx < 8; idx++) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(2.5, -3);
    ctx.lineTo(0, 0);
    ctx.lineTo(-2.5, -3);
    ctx.closePath();
    ctx.fillStyle = style.starColor;
    ctx.strokeStyle = style.border;
    ctx.lineWidth = 0.5;
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();

  // Inner Core
  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fillStyle = style.core;
  ctx.fill();
  ctx.strokeStyle = style.border;
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.restore();
}

/**
 * Draws a stylized physical barcode in gold or high-contrast accent.
 */
function drawBarcode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  seedString: string,
  color: string
) {
  ctx.save();
  ctx.fillStyle = color;
  
  // Use a pseudo-random seed based on the string to generate deterministic line widths
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = seedString.charCodeAt(i) + ((hash << 5) - hash);
  }

  let currentX = x;
  const totalStripes = 38;
  const spaceLeft = width;
  const averageWidth = spaceLeft / totalStripes;

  for (let i = 0; i < totalStripes; i++) {
    // Generate width pseudo-randomly of 1 to 4 pixels
    const stripeHash = Math.abs(Math.sin(hash + i) * 10000);
    const stripeType = stripeHash % 5;
    
    // Draw stripe (solid) or gap
    if (stripeType !== 0) {
      const stripeW = Math.max(1, (stripeType * averageWidth) / 2.5);
      ctx.fillRect(currentX, y, stripeW, height);
      currentX += stripeW + Math.max(1.5, (stripeHash % 3));
    } else {
      currentX += averageWidth;
    }
    
    if (currentX >= x + width) break;
  }
  ctx.restore();
}

/**
 * Generates and downloads a high-fidelity museum placard for the selected scientist.
 */
export function generateMuseumBadge(scientist: Scientist, index: number) {
  // Define dimensions for a premium high-res display badge
  const width = 800;
  const height = 1100;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Could not obtain 2D Canvas context");
    return;
  }

  // Define sepia/parchment colors matching the reference design image
  const sepiaColor = "#4A321B";     // Dark warm brown for text and boundaries
  const darkCharcoalColor = "#2B1B10"; // Very high contrast charcoal-brown
  const vintageGold = "#A37B45";    // Muted gold for accents and seals
  const creamBgStart = "#F7F2E8";   // Fine warm cream
  const creamBgEnd = "#EADFCB";     // Vignette vintage tint

  const getPathwayNodes = (field: string) => {
    switch (field.toLowerCase()) {
      case "mathematics":
        return ["DECIMAL NOTATION", "ARITHMETIC SEED", "ALGEBRAIC PROOF", "SPHERICAL TRIG", "ALGORITHMIC SYS"];
      case "medicine":
        return ["ANATOMICAL STUDY", "PATHOGEN DIAGNOSTIC", "PHARMACOPOEIA", "SURGICAL INCISION", "CLINICAL AUDITS"];
      case "astronomy":
        return ["OBSERVATORY LEDGER", "COORDINATE TARGETS", "ASTROLABE DIALS", "ORBIT FLOWS", "SOLAR CALENDARS"];
      case "engineering":
        return ["HYDRAULIC FEEDBACK", "MECHANICAL AUTOMATION", "CONTROL SYSTEMS", "INDUSTRIAL MECHANICS", "MODERN ROBOTICS"];
      case "physics":
        return ["OPTICAL PATHS", "REFRACTIVE INDEX", "INERTIAL FORCE", "SILICA SAND GLASS", "CUBIC REFLECTIONS"];
      case "chemistry":
        return ["MINERAL PROCESS", "CRYSTALLIZATION", "ACIDIC SOLVENTS", "GLASS REAGENT FLASKS", "QUANT REAGENTS"];
      default:
        return ["EMPIRICAL DATA", "MECHANICAL HYPOTHESIS", "SYSTEM DESIGNS", "GLOBAL TRANSFER", "MODERN EVOLUTIONS"];
    }
  };

  // Helper: Draw decorative corner flourish
  const drawCornerFlourish = (cx: number, cy: number, dx: number, dy: number) => {
    ctx.save();
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy + dy * 45);
    ctx.quadraticCurveTo(cx, cy, cx + dx * 45, cy);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + dx * 10, cy + dy * 45);
    ctx.lineTo(cx + dx * 10, cy + dy * 10);
    ctx.lineTo(cx + dx * 45, cy + dy * 10);
    ctx.stroke();

    drawIslamicStar(ctx, cx + dx * 22, cy + dy * 22, 6, vintageGold, true);
    ctx.restore();
  };

  // Helper: Draw Archive Seal stamp in top right
  const drawArchiveSeal = (cx: number, cy: number, r: number) => {
    ctx.save();
    ctx.strokeStyle = "rgba(163, 123, 69, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, r - 5, 0, Math.PI * 2);
    ctx.setLineDash([4, 2]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Text along arc
    ctx.font = "bold 7px 'Courier New', monospace";
    ctx.fillStyle = "rgba(163, 123, 69, 0.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    const label = "BAYT AL-HIKMA • ARCHIVE SEAL •";
    for (let i = 0; i < label.length; i++) {
      const angle = (i * Math.PI * 2) / label.length - Math.PI / 2;
      ctx.save();
      ctx.translate(cx + Math.cos(angle) * (r - 11), cy + Math.sin(angle) * (r - 11));
      ctx.rotate(angle + Math.PI / 2);
      ctx.fillText(label[i], 0, 0);
      ctx.restore();
    }

    // Calligraphic squiggle inside
    ctx.font = "bold 13px 'Georgia', serif";
    ctx.fillText("الحكمة", cx, cy);
    ctx.restore();
  };

  // Helper: Draw ISC Council seal in bottom right
  const drawISCSeal = (cx: number, cy: number, r: number) => {
    ctx.save();
    ctx.strokeStyle = "rgba(163, 123, 69, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, r - 5, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = "bold 5.5px 'Courier New', monospace";
    ctx.fillStyle = "rgba(163, 123, 69, 0.8)";
    ctx.textAlign = "center";
    const label = "ISLAMIC SCIENCE COUNCIL";
    for (let i = 0; i < label.length; i++) {
       const angle = (i * Math.PI * 1.6) / label.length - Math.PI * 1.32;
       ctx.save();
       ctx.translate(cx + Math.cos(angle) * (r - 9), cy + Math.sin(angle) * (r - 9));
       ctx.rotate(angle + Math.PI / 2);
       ctx.fillText(label[i], 0, 0);
       ctx.restore();
    }

    ctx.font = "bold 11px 'Courier New', sans-serif";
    ctx.fillText("ISC", cx, cy - 2);
    ctx.font = "5px 'Courier New', sans-serif";
    ctx.fillText("EST. 1444H", cx, cy + 6);
    ctx.restore();
  };

  // Helper: Draw fine underlay diagrams (gears or cylinders)
  const drawMechanicalUnderlay = (cx: number, cy: number) => {
    ctx.save();
    ctx.strokeStyle = "rgba(163, 123, 69, 0.08)";
    ctx.lineWidth = 1;

    // Outer concentric circle and rings
    ctx.beginPath();
    ctx.arc(cx, cy, 40, 0, Math.PI * 2);
    ctx.arc(cx, cy, 70, 0, Math.PI * 2);
    ctx.stroke();

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(cx - 95, cy); ctx.lineTo(cx + 95, cy);
    ctx.moveTo(cx, cy - 95); ctx.lineTo(cx, cy + 95);
    ctx.stroke();

    // Small ticks
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 12) {
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * 70, cy + Math.sin(angle) * 70);
      ctx.lineTo(cx + Math.cos(angle) * 80, cy + Math.sin(angle) * 80);
      ctx.stroke();
    }

    // A piston pump vertical cylinder shape underlay
    ctx.beginPath();
    ctx.rect(cx - 20, cy - 60, 40, 120);
    ctx.moveTo(cx - 30, cy - 60); ctx.lineTo(cx + 30, cy - 60);
    ctx.moveTo(cx - 30, cy + 60); ctx.lineTo(cx + 30, cy + 60);
    ctx.stroke();
    ctx.restore();
  };

  // 1. Draw luxurious vintage parchment background vignette
  const bgGrad = ctx.createRadialGradient(
    width / 2,
    height / 2,
    150,
    width / 2,
    height / 2,
    width * 0.8
  );
  bgGrad.addColorStop(0, creamBgStart);
  bgGrad.addColorStop(1, creamBgEnd);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Draw sophisticated background vector drawings as underlay
  drawMechanicalUnderlay(130, 310);
  drawMechanicalUnderlay(width - 130, 310);
  drawMechanicalUnderlay(width / 2, height - 190);

  // 3. Draw dual sepia borders
  ctx.save();
  ctx.strokeStyle = sepiaColor;
  ctx.lineWidth = 3;
  ctx.strokeRect(25, 25, width - 50, height - 50);

  ctx.lineWidth = 1;
  ctx.strokeRect(34, 34, width - 68, height - 68);

  // Corner flourishes
  drawCornerFlourish(34, 34, 1, 1);
  drawCornerFlourish(width - 34, 34, -1, 1);
  drawCornerFlourish(34, height - 34, 1, -1);
  drawCornerFlourish(width - 34, height - 34, -1, -1);
  ctx.restore();

  // 4. Draw BAYT AL-HIKMA Stamp in top-right
  drawArchiveSeal(width - 100, 105, 45);

  // 5. Header Section
  ctx.textAlign = "center";
  ctx.fillStyle = sepiaColor;
  
  // Cartouche Pill for Exhibit Module
  ctx.save();
  ctx.strokeStyle = "rgba(74, 50, 27, 0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(width / 2 - 160, 48, 320, 24, 12);
  ctx.stroke();
  
  ctx.font = "bold 9.5px 'Courier New', monospace";
  ctx.letterSpacing = "4px";
  ctx.fillStyle = sepiaColor;
  ctx.fillText("AL-ANDALUS & ABBASID EXHIBIT MODULE", width / 2, 63);
  ctx.restore();

  // House of Wisdom title
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 24px 'Georgia', serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("HOUSE OF WISDOM REGISTRY", width / 2, 115);

  // Center star divider
  ctx.strokeStyle = "rgba(74, 50, 27, 0.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(120, 135);
  ctx.lineTo(width - 120, 135);
  ctx.stroke();

  drawIslamicStar(ctx, width / 2, 135, 12, vintageGold, true);
  drawIslamicStar(ctx, width / 2, 135, 4, creamBgStart, true);

  // 6. Metadata top columns (Left & Right)
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(74, 50, 27, 0.6)";
  ctx.font = "bold 8.5px 'Courier New', monospace";
  ctx.fillText("EXHIBITION DEPT.", 55, 172);
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 12px 'Courier New', monospace";
  ctx.fillText(`DEP-${scientist.field.toUpperCase()}`, 55, 190);

  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(74, 50, 27, 0.6)";
  ctx.font = "bold 8.5px 'Courier New', monospace";
  ctx.fillText("EXHIBIT INDEX ID:", width - 55, 172);
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 12px 'Courier New', monospace";
  ctx.fillText(`HW-ID #${String(index + 1).padStart(3, "0")}`, width - 55, 190);

  // Horizontal separating divider
  ctx.strokeStyle = "rgba(74, 50, 27, 0.15)";
  ctx.beginPath();
  ctx.moveTo(55, 205);
  ctx.lineTo(width - 55, 205);
  ctx.stroke();

  // 7. Distinguished scholar detail
  ctx.textAlign = "center";
  ctx.fillStyle = sepiaColor;
  ctx.font = "italic 11px 'Georgia', serif";
  ctx.fillText("Distinguished Scholar & Inventor", width / 2, 235);

  // Scientist Name
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 32px 'Georgia', serif";
  const nameLines = wrapText(ctx, scientist.name, width - 240);
  let currentY = 278;
  nameLines.forEach((line) => {
    ctx.fillText(line, width / 2, currentY);
    currentY += 40;
  });

  // Draw side blueprints on either side of the scholar name card
  drawHexagonBlueprint(ctx, 105, 295, 28, scientist.field, "left", scientist.id);
  drawHexagonBlueprint(ctx, width - 105, 295, 28, scientist.field, "right", scientist.id);

  // Short descriptive concept
  ctx.fillStyle = "rgba(74, 50, 27, 0.8)";
  ctx.font = "italic 12px 'Georgia', serif";
  ctx.fillText(scientist.modernImpact.medievalTech.toLowerCase(), width / 2, currentY);
  currentY += 28;

  // Nickname inside Arrow banners
  ctx.fillStyle = sepiaColor;
  ctx.font = "bold italic 22px 'Georgia', serif";
  ctx.fillText(`« ${scientist.nickname} »`, width / 2, currentY);
  currentY += 34;

  // Lifespan info
  ctx.fillStyle = "rgba(74, 50, 27, 0.7)";
  ctx.font = "bold 10px 'Courier New', monospace";
  ctx.fillText(`LIFESPAN: ${scientist.lifespan}   •   BORN: ${scientist.birthPlace}`, width / 2, currentY);
  currentY += 38;

  // 8. Boxed PRIMARY INVENTIVE CONTRIBUTION Block (Filigree Corners)
  const boxX = 75;
  const boxY = currentY;
  const boxW = width - 150;
  const boxH = 195;
  
  ctx.save();
  // Fill underlay light vintage tint
  ctx.fillStyle = "rgba(234, 223, 203, 0.35)";
  ctx.fillRect(boxX, boxY, boxW, boxH);
  
  // Double borders
  ctx.strokeStyle = sepiaColor;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(boxX, boxY, boxW, boxH);
  ctx.lineWidth = 0.5;
  ctx.strokeRect(boxX + 4, boxY + 4, boxW - 8, boxH - 8);

  ctx.restore();

  // Header of block
  ctx.fillStyle = sepiaColor;
  ctx.font = "bold 9px 'Courier New', monospace";
  ctx.letterSpacing = "2px";
  ctx.fillText("PRIMARY INVENTIVE CONTRIBUTION", width / 2, boxY + 28);
  
  // Left Side centerpiece illustration
  drawCanvasCenterpiece(ctx, boxX + 16, boxY + 45, 195, 125, scientist.field, scientist.id);

  // Right Side layout block
  const rightSecX = boxX + 235;
  
  // Title of standard invention
  ctx.textAlign = "left";
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "bold 16px 'Georgia', serif";
  const invLines = wrapText(ctx, scientist.inventionTitle.toUpperCase(), boxW - 250);
  let invY = boxY + 62;
  invLines.forEach((line) => {
    ctx.fillText(line, rightSecX, invY);
    invY += 20;
  });

  // Short summary
  ctx.fillStyle = "rgba(43, 27, 16, 0.85)";
  ctx.font = "italic 11px 'Georgia', serif";
  const sumLines = wrapText(ctx, scientist.shortSummary, boxW - 250);
  let sumY = invY + 10;
  sumLines.slice(0, 4).forEach((line) => {
    ctx.fillText(line, rightSecX, sumY);
    sumY += 16;
  });

  // Spec lines below text
  ctx.fillStyle = "rgba(74, 50, 27, 0.65)";
  ctx.font = "bold 7.5px 'Courier New', monospace";
  ctx.fillText("SYS VALID: 100% PERSISTENT", rightSecX, boxY + 160);
  ctx.fillText("REPRODUCIBILITY: CERTAIN", rightSecX + 155, boxY + 160);
  
  // Reset align
  ctx.textAlign = "center";

  currentY += 235;

  // 9. Legacy title and pathway nodes
  ctx.fillStyle = sepiaColor;
  ctx.font = "bold 9px 'Courier New', monospace";
  ctx.letterSpacing = "2px";
  ctx.fillText("HISTORICAL LEGACY & IMPACT PATHWAY", width / 2, currentY);

  ctx.strokeStyle = "rgba(74, 50, 27, 0.2)";
  ctx.beginPath();
  ctx.moveTo(180, currentY + 10);
  ctx.lineTo(width - 180, currentY + 10);
  ctx.stroke();

  // Text signifying the legacy
  ctx.fillStyle = "rgba(43, 27, 16, 0.8)";
  ctx.font = "italic 11px 'Georgia', serif";
  const pathLines = wrapText(ctx, scientist.historicalSignificance, width - 160);
  let pathY = currentY + 32;
  pathLines.slice(0, 2).forEach((line) => {
    ctx.fillText(line, width / 2, pathY);
    pathY += 16;
  });

  // Flow Pathway nodes visual line map
  currentY += 80;
  const pathXStart = 100;
  const pathXEnd = width - 100;
  const nodes = getPathwayNodes(scientist.field);
  const totalNodes = nodes.length;

  ctx.save();
  ctx.strokeStyle = "rgba(163, 123, 69, 0.5)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pathXStart, currentY);
  ctx.lineTo(pathXEnd, currentY);
  ctx.stroke();

  // Draw node nodes
  const nodeSpacing = (pathXEnd - pathXStart) / (totalNodes - 1);
  for (let i = 0; i < totalNodes; i++) {
    const nx = pathXStart + i * nodeSpacing;
    const ny = currentY;

    // Outer circle
    ctx.fillStyle = creamBgStart;
    ctx.strokeStyle = sepiaColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(nx, ny, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Inner bronze circle
    ctx.fillStyle = vintageGold;
    ctx.beginPath();
    ctx.arc(nx, ny, 3, 0, Math.PI * 2);
    ctx.fill();

    // Label under Node
    ctx.fillStyle = darkCharcoalColor;
    ctx.font = "bold 6.5px 'Courier New', sans-serif";
    ctx.textAlign = "center";
    
    // Split label on spaces to fit nicely under nodes
    const labelParts = nodes[i].split(" ");
    let labelY = ny + 17;
    labelParts.forEach((part) => {
      ctx.fillText(part, nx, labelY);
      labelY += 8;
    });
  }
  ctx.restore();

  // 10. Technical specifications and catalogs table at bottom
  const footerSecY = height - 198;
  
  // Left: Table labels
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(74, 50, 27, 0.65)";
  ctx.font = "bold 8px 'Courier New', monospace";
  ctx.fillText("HERITAGE MECHANICAL SEED:", 55, footerSecY);
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 9.5px 'Courier New', monospace";
  const medievalStr = scientist.modernImpact.medievalTech.toUpperCase();
  ctx.fillText(medievalStr.length > 36 ? medievalStr.slice(0, 36) + "..." : medievalStr, 55, footerSecY + 14);

  ctx.fillStyle = "rgba(74, 50, 27, 0.65)";
  ctx.font = "bold 8px 'Courier New', monospace";
  ctx.fillText("HERITAGE PHYSICAL SEED:", 55, footerSecY + 36);
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "900 9.5px 'Courier New', monospace";
  const physicalStr = scientist.modernImpact.medievalTech.toUpperCase(); // using equivalent representative
  ctx.fillText(physicalStr.length > 36 ? physicalStr.slice(0, 36) + "..." : physicalStr, 55, footerSecY + 50);

  ctx.fillStyle = "rgba(74, 50, 27, 0.65)";
  ctx.font = "bold 8px 'Courier New', monospace";
  ctx.fillText("MODERN DIGITAL EQUIVALENT:", 55, footerSecY + 72);
  ctx.fillStyle = sepiaColor;
  ctx.font = "900 9.5px 'Courier New', monospace";
  const modernStr = scientist.modernImpact.modernTech.toUpperCase();
  ctx.fillText(modernStr.length > 36 ? modernStr.slice(0, 36) + "..." : modernStr, 55, footerSecY + 86);

  // Boxed Catalog No (Middle-Right)
  const codeBoxX = width - 290;
  const codeBoxY = footerSecY + 20;
  const codeBoxW = 145;
  const codeBoxH = 36;
  
  // Ceramic mosaic star tile (drawn right next to the code catalog box)
  drawCanvasMosaic(ctx, codeBoxX - 60, codeBoxY - 5, 46, 46, scientist.id);

  ctx.save();
  ctx.strokeStyle = sepiaColor;
  ctx.lineWidth = 1;
  ctx.strokeRect(codeBoxX, codeBoxY, codeBoxW, codeBoxH);
  
  ctx.fillStyle = "rgba(74, 50, 27, 0.5)";
  ctx.font = "8px 'Courier New', monospace";
  ctx.fillText("ARCHIVE CATALOG NO.", codeBoxX + 10, codeBoxY + 12);
  
  ctx.fillStyle = darkCharcoalColor;
  ctx.font = "bold 10px 'Courier New', monospace";
  const catalogID = `HW-${scientist.field.slice(0,3).toUpperCase()}-${String(index + 1).padStart(3, "0")}-${scientist.id.slice(0,2).toUpperCase()}`;
  ctx.fillText(catalogID, codeBoxX + 10, codeBoxY + 26);
  ctx.restore();

  // ISC Council Stamped Seal
  drawISCSeal(width - 90, footerSecY + 38, 38);

  // Centered arabic calligraphy logo at the absolute bottom
  ctx.textAlign = "center";
  ctx.fillStyle = sepiaColor;
  ctx.font = "bold 16px 'Georgia', serif";
  ctx.fillText("بيت الحكمة", width / 2, height - 85);
  ctx.font = "bold 8px 'Courier New', monospace";
  ctx.letterSpacing = "2px";
  ctx.fillText("BAYT AL-HIKMA", width / 2, height - 72);

  // Divider and ultimate footer specs
  const dividerY = height - 52;
  ctx.strokeStyle = "rgba(74, 50, 27, 0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, dividerY);
  ctx.lineTo(width - 50, dividerY);
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(74, 50, 27, 0.5)";
  ctx.font = "8px 'Courier New', monospace";
  ctx.fillText("CURATORIAL AUDITED • LEVEL 1 VALID", 55, height - 38);

  ctx.textAlign = "right";
  ctx.fillText("ISLAMIC SCIENCE COUNCIL © 2026", width - 55, height - 38);

  // Download logic
  try {
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `MuseumBadge-${scientist.id}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to export museum badge image:", error);
  }
}

/**
 * Generates and downloads a high-fidelity Informative Pamphlet (emerald theme) matching the card design.
 */
export function generateInformativePamphlet(scientist: Scientist, index: number) {
  const width = 800;
  const height = 800;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Could not obtain 2D Canvas context");
    return;
  }

  // Colors
  const darkEmeraldStart = "#022C22";
  const darkEmeraldEnd = "#043328";
  const goldColor = "#D4AF37";
  const lightEmerald = "#34D399";
  const mintGreen = "#A7F3D0";
  const brightText = "#ECFDF5";

  const drawEverything = (avatarImg: HTMLImageElement | null) => {
    // 1. Bg Gradient
    const bgGrad = ctx.createRadialGradient(
      width / 2,
      height / 2,
      100,
      width / 2,
      height / 2,
      width * 0.85
    );
    bgGrad.addColorStop(0, darkEmeraldStart);
    bgGrad.addColorStop(1, darkEmeraldEnd);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Subtle Astrolabe Watermark in background
    ctx.save();
    ctx.strokeStyle = "rgba(52, 211, 153, 0.04)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    const cx = width / 2;
    const cy = height / 2;
    ctx.arc(cx, cy, 240, 0, Math.PI * 2);
    ctx.arc(cx, cy, 180, 0, Math.PI * 2);
    ctx.arc(cx, cy, 100, 0, Math.PI * 2);
    ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    ctx.stroke();

    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 280, cy + Math.sin(angle) * 280);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Draw Fine Inner Lines & Borders like in UI (nested spacing)
    ctx.save();
    // Border 1: Gold 3px
    ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Border 2: Inner thin gold
    ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
    ctx.lineWidth = 1;
    ctx.strokeRect(26, 26, width - 52, height - 52);

    // Border 3: Very inner thin green
    ctx.strokeStyle = "rgba(52, 211, 153, 0.15)";
    ctx.lineWidth = 1;
    ctx.strokeRect(32, 32, width - 64, height - 64);

    // Corner flourishes
    const drawFlourish = (x: number, y: number, dx: number, dy: number) => {
      ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 28);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 28, y);
      ctx.stroke();
    };
    drawFlourish(40, 40, 1, 1);
    drawFlourish(width - 40, 40, -1, 1);
    drawFlourish(40, height - 40, 1, -1);
    drawFlourish(width - 40, height - 40, -1, -1);
    ctx.restore();

    // 4. Document Header
    ctx.textAlign = "center";
    ctx.fillStyle = goldColor;
    ctx.font = "bold 9px 'Courier New', monospace";
    ctx.letterSpacing = "4px";
    ctx.fillText("✵ A SCHOLAR OF THE MUSLIM GOLDEN AGE ✵", width / 2, 70);

    ctx.fillStyle = lightEmerald;
    ctx.font = "bold 26px 'Georgia', serif";
    ctx.letterSpacing = "3px";
    ctx.fillText("HOUSE OF WISDOM", width / 2, 112);

    // Header gradient line
    const gradLine = ctx.createLinearGradient(160, 134, width - 160, 134);
    gradLine.addColorStop(0, "rgba(212, 175, 55, 0)");
    gradLine.addColorStop(0.5, "rgba(212, 175, 55, 0.45)");
    gradLine.addColorStop(1, "rgba(212, 175, 55, 0)");
    ctx.strokeStyle = gradLine;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(160, 134);
    ctx.lineTo(width - 160, 134);
    ctx.stroke();

    // 5. Biographical 2-Column Section
    // Left sides columns: starts X = 65, right X = 380
    // Right portrait columns: starts X = 415, right X = 735

    // LEFT BIO COLUMN:
    // Box 1: Scientist Name Frame at Y = 165
    ctx.save();
    ctx.fillStyle = "rgba(2, 44, 34, 0.85)";
    ctx.strokeStyle = "rgba(212, 175, 55, 0.45)";
    ctx.lineWidth = 1;
    ctx.fillRect(65, 165, 315, 80);
    ctx.strokeRect(65, 165, 315, 80);
    // Draw corner dots
    ctx.fillStyle = "rgba(212, 175, 55, 0.85)";
    ctx.beginPath();
    ctx.arc(69, 169, 2.5, 0, Math.PI * 2);
    ctx.arc(376, 169, 2.5, 0, Math.PI * 2);
    ctx.arc(69, 241, 2.5, 0, Math.PI * 2);
    ctx.arc(376, 241, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Scientist Name labels
    ctx.textAlign = "center";
    ctx.fillStyle = lightEmerald;
    ctx.font = "bold 8.5px 'Courier New', monospace";
    ctx.letterSpacing = "2px";
    ctx.fillText("NAME OF MUSLIM SCIENTIST", 222, 188);

    ctx.fillStyle = brightText;
    ctx.font = "bold 15px 'Georgia', serif";
    ctx.fillText(scientist.name, 222, 218);
    ctx.restore();

    // Detail Rows on Left: Distance is Y = 265, 325, 385
    const drawLeftRow = (y: number, label: string, val: string, isFieldBadge = false) => {
      // Draw background stripe/pill
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(65, y, 315, 48);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.strokeRect(65, y, 315, 48);

      // Icon placeholder circle
      ctx.strokeStyle = "rgba(212, 175, 55, 0.45)";
      ctx.fillStyle = "rgba(2, 44, 34, 1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(95, y + 24, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Simple golden star glyph in circle
      ctx.fillStyle = goldColor;
      ctx.font = "14px 'Georgia', serif";
      ctx.textAlign = "center";
      ctx.fillText("✦", 95, y + 29);

      // Value label
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(52, 211, 153, 0.7)";
      ctx.font = "bold 8px 'Courier New', monospace";
      ctx.letterSpacing = "1.5px";
      ctx.fillText(label, 130, y + 17);

      if (isFieldBadge) {
        // draw beautiful discipline capsule
        ctx.save();
        ctx.font = "bold 10px 'Courier New', monospace";
        const txtW = ctx.measureText(val.toUpperCase()).width;
        ctx.fillStyle = "rgba(52, 211, 153, 0.15)";
        ctx.strokeStyle = "rgba(52, 211, 153, 0.35)";
        ctx.beginPath();
        ctx.roundRect(130, y + 23, txtW + 20, 18, 9);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = lightEmerald;
        ctx.fillText(val.toUpperCase(), 140, y + 35);
        ctx.restore();
      } else {
        ctx.fillStyle = brightText;
        ctx.font = "bold 13px 'Georgia', serif";
        ctx.fillText(val, 130, y + 36);
      }
    };

    drawLeftRow(265, "LIFE SPAN", scientist.lifespan);
    drawLeftRow(325, "NATIVE PLACE", scientist.birthPlace);
    drawLeftRow(385, "FIELD OF DISCIPLINE", scientist.field, true);

    // RIGHT GRAPHICAL COLUMN:
    // Box bounds X = 415, Y = 165, W = 320, H = 268
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.strokeStyle = "rgba(52, 211, 153, 0.25)";
    ctx.lineWidth = 1;
    ctx.fillRect(415, 165, 320, 268);
    ctx.strokeRect(415, 165, 320, 268);
    ctx.restore();

    // Calligraphy Shield at Top Right (X = 665, Y = 175)
    ctx.save();
    ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
    ctx.fillStyle = "rgba(2, 44, 34, 0.95)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(685, 215, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = goldColor;
    ctx.font = "bold italic 9.5px 'Georgia', serif";
    ctx.fillText("العِلْمُ يَنِيرُ", 685, 204);
    ctx.fillText("الطَّرِيقَ", 685, 220);
    ctx.fillStyle = "rgba(167, 243, 208, 0.6)";
    ctx.font = "bold 6.5px 'Courier New', monospace";
    ctx.fillText("KNOWLEDGE LIGHTS", 685, 235);
    ctx.restore();

    // Centered Portrait Avatar: Center X = 575, Center Y = 250, Radius = 62
    const avatarCenterX = 575;
    const avatarCenterY = 250;
    const arcRadius = 62;

    if (avatarImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(avatarCenterX, avatarCenterY, arcRadius, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(avatarImg, avatarCenterX - arcRadius, avatarCenterY - arcRadius, arcRadius * 2, arcRadius * 2);
      ctx.restore();

      // Beautiful gold border ring around avatar
      ctx.save();
      ctx.strokeStyle = goldColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(avatarCenterX, avatarCenterY, arcRadius - 1, 0, Math.PI * 2);
      ctx.stroke();
      // Outer subtle circle
      ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(avatarCenterX, avatarCenterY, arcRadius + 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    } else {
      // Mosaic fallback
      drawCanvasMosaic(ctx, avatarCenterX - arcRadius, avatarCenterY - arcRadius, arcRadius * 2, arcRadius * 2, scientist.id);
      
      ctx.save();
      ctx.strokeStyle = goldColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(avatarCenterX, avatarCenterY, arcRadius - 1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Centered Artist Marquee below portrait at Center X = 575
    ctx.textAlign = "center";
    ctx.fillStyle = lightEmerald;
    ctx.font = "20px 'Georgia', serif";
    ctx.fillText(scientist.nickname, 575, 375);

    ctx.fillStyle = goldColor;
    ctx.font = "bold 8.5px 'Courier New', monospace";
    ctx.letterSpacing = "2px";
    ctx.fillText(`✦ PIONEER OF ${scientist.field.toUpperCase()} ✦`, 575, 398);

    // 6. Inventions header banner (centered)
    ctx.save();
    // left gradient line
    const leftLineGrad = ctx.createLinearGradient(65, 465, 300, 465);
    leftLineGrad.addColorStop(0, "rgba(52, 211, 153, 0)");
    leftLineGrad.addColorStop(1, "rgba(52, 211, 153, 0.4)");
    ctx.strokeStyle = leftLineGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(65, 465);
    ctx.lineTo(300, 465);
    ctx.stroke();

    // right gradient line
    const rightLineGrad = ctx.createLinearGradient(500, 465, 735, 465);
    rightLineGrad.addColorStop(0, "rgba(52, 211, 153, 0.4)");
    rightLineGrad.addColorStop(1, "rgba(52, 211, 153, 0)");
    ctx.strokeStyle = rightLineGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(500, 465);
    ctx.lineTo(735, 465);
    ctx.stroke();

    // Banner Text
    ctx.textAlign = "center";
    ctx.fillStyle = lightEmerald;
    ctx.font = "bold 9px 'Courier New', monospace";
    ctx.letterSpacing = "2.5px";
    ctx.fillText("GREAT INVENTIONS & CONTRIBUTIONS", width / 2, 469);
    ctx.restore();

    // 7. Render 4 Inventions Grid Cards
    const primaryInventionObj = {
      title: scientist.inventionTitle,
      description: scientist.detailedExplanation.split(".")[0] + ".",
      classification: "Primary"
    };
    const rawInventions = [primaryInventionObj, ...getAdditionalInventions(scientist)];
    while (rawInventions.length < 4) {
      rawInventions.push({
        title: "Scientific Legacy & Philosophy",
        description: "Established core scientific methodologies and observational rules that inspired generations of scholars across Baghdad, Cordoba, and Samarqand.",
        classification: "Theory"
      });
    }
    const displayInventions = rawInventions.slice(0, 4);

    const wrapText = (text: string, maxWidth: number): string[] => {
      const words = text.split(" ");
      const lines: string[] = [];
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        ctx.font = "10px 'Georgia', serif";
        const textWidth = ctx.measureText(currentLine + " " + word).width;
        if (textWidth < maxWidth) {
          currentLine += " " + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
      return lines;
    };

    // Card layouts: Box width = 315, Box height = 115
    // Box spacing: Left cols X = 65, Right cols X = 420
    // Row spacing: Row 1 Y = 500, Row 2 Y = 635
    displayInventions.forEach((inv, idx) => {
      const boxLeft = idx % 2 === 0 ? 65 : 420;
      const boxTop = idx < 2 ? 500 : 635;
      const boxW = 315;
      const boxH = 115;

      // Draw box frame
      ctx.save();
      ctx.fillStyle = "rgba(2, 44, 34, 0.4)";
      ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
      ctx.lineWidth = 1;
      ctx.fillRect(boxLeft, boxTop, boxW, boxH);
      ctx.strokeRect(boxLeft, boxTop, boxW, boxH);

      // Draw background vector icon (subtle line paths)
      ctx.strokeStyle = "rgba(52, 211, 153, 0.05)";
      ctx.lineWidth = 1;
      if (idx === 0) {
        // Grid
        ctx.strokeRect(boxLeft + boxW - 55, boxTop + boxH - 55, 45, 45);
        ctx.beginPath();
        ctx.moveTo(boxLeft + boxW - 55 + 15, boxTop + boxH - 55);
        ctx.lineTo(boxLeft + boxW - 55 + 15, boxTop + boxH - 10);
        ctx.moveTo(boxLeft + boxW - 55 + 30, boxTop + boxH - 55);
        ctx.lineTo(boxLeft + boxW - 55 + 30, boxTop + boxH - 10);
        ctx.moveTo(boxLeft + boxW - 55, boxTop + boxH - 55 + 15);
        ctx.lineTo(boxLeft + boxW - 10, boxTop + boxH - 55 + 15);
        ctx.moveTo(boxLeft + boxW - 55, boxTop + boxH - 55 + 30);
        ctx.lineTo(boxLeft + boxW - 10, boxTop + boxH - 55 + 30);
        ctx.stroke();
      } else if (idx === 1) {
        // Ellipse
        ctx.beginPath();
        ctx.ellipse(boxLeft + boxW - 32, boxTop + boxH - 32, 12, 20, Math.PI / 4, 0, Math.PI * 2);
        ctx.stroke();
      } else if (idx === 2) {
        // Coordinate quadrant
        ctx.beginPath();
        ctx.arc(boxLeft + boxW - 50, boxTop + boxH - 10, 40, Math.PI * 1.5, Math.PI * 2);
        ctx.stroke();
      } else {
        // Celestial sphere
        ctx.beginPath();
        ctx.arc(boxLeft + boxW - 32, boxTop + boxH - 32, 20, 0, Math.PI * 2);
        ctx.ellipse(boxLeft + boxW - 32, boxTop + boxH - 32, 20, 7, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Number badge inside card
      ctx.save();
      ctx.strokeStyle = goldColor;
      ctx.fillStyle = "rgba(2, 44, 34, 1)";
      ctx.beginPath();
      ctx.arc(boxLeft + 25, boxTop + 25, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.fillStyle = goldColor;
      ctx.font = "bold 9.5px 'Courier New', monospace";
      ctx.fillText(`${idx + 1}`, boxLeft + 25, boxTop + 28);

      // Card Title
      ctx.textAlign = "left";
      ctx.fillStyle = lightEmerald;
      ctx.font = "bold 11px 'Georgia', serif";
      ctx.fillText(inv.title.toUpperCase(), boxLeft + 44, boxTop + 28);

      // Card line divider
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.moveTo(boxLeft + 15, boxTop + 42);
      ctx.lineTo(boxLeft + boxW - 15, boxTop + 42);
      ctx.stroke();

      // Card Wrapped text Description
      ctx.fillStyle = "rgba(230, 253, 245, 0.9)";
      ctx.font = "10px 'Georgia', serif";
      const wrapLines = wrapText(inv.description, boxW - 30);
      let descY = boxTop + 58;
      wrapLines.forEach((ln) => {
        ctx.fillText(ln, boxLeft + 18, descY);
        descY += 14;
      });
      ctx.restore();
    });

    // 8. Footer banner
    ctx.textAlign = "center";
    ctx.fillStyle = goldColor;
    ctx.font = "bold 9px 'Courier New', monospace";
    ctx.letterSpacing = "2px";
    ctx.fillText("FROM NUMBERS TO THE STARS, HE BUILT THE BRIDGES OF KNOWLEDGE.", width / 2, 785);

    // Download image triggers
    try {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `InformativePamphlet-${scientist.id}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to generate informative pamphlet download:", err);
    }
  };

  // Perform async Image load (avatar) with fallback if blocked by CORS or unavailable
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    drawEverything(img);
  };
  img.onerror = () => {
    drawEverything(null);
  };
  img.src = scientist.imageUrl;
}
