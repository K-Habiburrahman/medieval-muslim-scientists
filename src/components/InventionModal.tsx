/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X, Calendar, MapPin, Orbit, Cpu, Compass, BookOpen, Shuffle, AlertCircle, Award, FileText } from "lucide-react";
import { Scientist } from "../types";
import ImageWithFallback from "./ImageWithFallback";
import ScientificIllustration from "./ScientificIllustration";
import { scientists } from "../data/scientists";
import { getAdditionalInventions } from "../utils/additionalInventions";

interface InventionModalProps {
  scientist: Scientist | null;
  onClose: () => void;
}

function parseInventionText(description: string, isPrimary: boolean, detailedExplanation?: string) {
  const text = isPrimary && detailedExplanation ? detailedExplanation : description;
  
  // Clean split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  let purposeSentences: string[] = [];
  let processSentences: string[] = [];
  
  sentences.forEach((sentence) => {
    const sLower = sentence.toLowerCase().trim();
    if (
      sLower.includes("purpose") || 
      sLower.includes("conceived to") || 
      sLower.includes("to resolve") || 
      sLower.includes("designed to") ||
      sLower.includes("intended to") ||
      sLower.includes("seeking to") ||
      sLower.includes("objective was")
    ) {
      purposeSentences.push(sentence);
    } else {
      processSentences.push(sentence);
    }
  });
  
  // Fallbacks if one category is empty
  if (purposeSentences.length === 0) {
    purposeSentences.push(sentences[0]);
    processSentences = sentences.slice(1);
  }
  if (processSentences.length === 0) {
    if (sentences.length > 1) {
      processSentences = sentences.slice(1);
      purposeSentences = [sentences[0]];
    } else {
      processSentences.push(sentences[0]);
    }
  }
  
  return {
    purpose: purposeSentences.join(" ").trim(),
    howInvented: processSentences.join(" ").trim()
  };
}

export default function InventionModal({ scientist, onClose }: InventionModalProps) {
  const [activeTab, setActiveTab] = useState<"explanation" | "invention" | "timeline">("explanation");
  const [selectedInventionIndex, setSelectedInventionIndex] = useState(0);

  useEffect(() => {
    setSelectedInventionIndex(0);
  }, [scientist]);

  const scientistIndex = scientists.findIndex(s => s.id === scientist?.id);
  const secureIndex = scientistIndex >= 0 ? scientistIndex : 0;

  const getInventionClassification = (id: string): string => {
    const classifications: Record<string, string> = {
      "al-khwarizmi": "Technique",
      "ibn-sina": "Book",
      "ibn-al-haytham": "Instrument",
      "jabir-ibn-hayyan": "Tool",
      "al-biruni": "Instrument",
      "al-razi": "Technique",
      "abbas-ibn-firnas": "Tool",
      "al-jazari": "Instrument",
      "nasir-al-tusi": "Instrument",
      "umar-khayyam": "Technique",
      "ali-qushji": "Technique",
      "taqi-al-din": "Tool",
      "ibn-nafis": "Technique",
      "al-zahrawi": "Tool",
      "al-kindi": "Technique",
      "al-farghani": "Instrument",
      "ibn-battuta": "Book",
      "piri-reis": "Book",
      "al-idrisi": "Instrument",
      "ibn-yunus": "Technique"
    };
    return classifications[id] || "Instrument";
  };

  const getMechanismBreakdown = (
    sc: Scientist,
    inv: any,
    index: number
  ): string[] => {
    if (index === 0) {
      return sc.mechanismBreakdown;
    }

    const titleLower = inv.title.toLowerCase();
    const id = sc.id;

    if (id === "ibn-sina") {
      if (titleLower.includes("distillation")) {
        return [
          "Controlled Steam Boiler: Heating botanical mixtures and floral solutions inside a sealed copper retort vessel.",
          "Coil-Condenser Cooling: Channeling aromatic steam through specialized spiral condenser glass tubing encased in cold water.",
          "Pure Distillate Separation: Decanting highly potent essential organic oils floating cleanly as an upper layer in receivers."
        ];
      }
      if (titleLower.includes("inertia")) {
        return [
          "Impulse Mobilization: Imparting motion through an active inclination ('mayl') that resides inside the propelled projectile.",
          "Medium Obstruction: Factoring in how air resistance and friction continuously reduce the body's momentum.",
          "Vacuum Perpetuality: Deducing that in a completely friction-free vacuum, an object would travel indefinitely in a linear trajectory."
        ];
      }
      if (titleLower.includes("bone-setting") || titleLower.includes("spinal")) {
        return [
          "Tethering and Extension: Aligning the spinal column or joint boundaries using a custom wooden workbench with pulleys and cords.",
          "Counter-Force Tension: Applying subtle physical traction to safely stretch ligaments and guide misaligned bones into socket.",
          "Immobilizing Compression: Compressing the target area using starched, self-hardening splints and fresh linen bandages."
        ];
      }
      if (titleLower.includes("quarantine")) {
        return [
          "Quarter Isolation: Restricting contagious patients to airy, designated hospital zones separate from the main wards.",
          "Ecology Mapping: Charting soil, water, and atmospheric variables to identify geographic infection circuits.",
          "Sanitary Control: Fumigating quarters and cleaning tools with aromatic herb-steeped vinegars."
        ];
      }
      if (titleLower.includes("pharmacological")) {
        return [
          "Raw Preparation: Crushing dried botanical roots, mineral powders, and animal glands using heavy bronze pestles.",
          "Menstruum Steeping: Dissolving target essences using wine vinegars, alcohol distillates, and aromatic oils.",
          "Humoral Formulation: Blending specific hot-cold and wet-dry values to offset bodily disease states."
        ];
      }
      if (titleLower.includes("pulse")) {
        return [
          "Radial Compression: Positioning four warm finger pads at the patient's radial wrist artery with graded pressure.",
          "Harmonic Analysis: Measuring the frequency, height, duration, and rhythm of arterial wave expansions.",
          "Differential Diagnosis: Matching standard pulse templates against physical disease states to detect inner organ issues."
        ];
      }
      if (titleLower.includes("anatomical") || titleLower.includes("anatomy")) {
        return [
          "Direct Dissection: Standardizing post-mortem examinations to study bones, cranial structures, and skeletal muscles.",
          "Vapor-Tracing: Tracing the vital spirit and blood flows through arterial networks and the cardiac chambers.",
          "Functional Codifying: Illustrating major physiological components in text to serve as the definitive standard manual."
        ];
      }
    }

    if (id === "al-jayyani") {
      if (titleLower.includes("sine") || titleLower.includes("spherical")) {
        return [
          "Great Circle Slicing: Projecting spherical arcs and global coordinates onto flat planispheric grids.",
          "Sine Ratio Equality: Proving that curved arc-segments have directly proportional ratios equivalent to opposite angles.",
          "Astronomical Orientation: Calculating accurate angles to trace zenith elevation coordinates for planetary routes."
        ];
      }
      if (titleLower.includes("approximations") || titleLower.includes("sine & cosine")) {
        return [
          "Trigonometric Slicing: Slicing geometric circles into ultra-fine fractional degrees with precise cords.",
          "Approximation Interpolation: Using algebraic equations to compute sine and cosine fractions for empty intervals.",
          "Observatory Calibration: Mounting completed mathematical coordinate lookup tables on physical astrolabe backplates."
        ];
      }
      if (titleLower.includes("inheritance")) {
        return [
          "Fractional Partitioning: Subdividing complex estates and assets into precise mathematical fractions.",
          "Al-Jabr Reconciliation: Applying algebraic equations to balance shares and resolve competing legal claims.",
          "Grid Formulating: Recording final balanced divisions in a structured ledger to certify fair distribution."
        ];
      }
    }

    if (id === "ibn-hazm") {
      if (titleLower.includes("psychophysiological") || titleLower.includes("emotion")) {
        return [
          "Symptom Isolation: Recording physical biomarkers like breathing speeds, pulse spikes, and sleep loss during stress.",
          "Neuro-Imbalance Mapping: Associating psychological distress with internal cognitive pathways and brain fluids.",
          "Cognitive Therapy: Guiding rational self-examination, lifestyle edits, and dietary plans to treat mental afflictions."
        ];
      }
      if (titleLower.includes("pharmacological") || titleLower.includes("herbals")) {
        return [
          "Herbal Separation: Separating botanical compounds using distilled vinegars and oils.",
          "Dose Formulation: Blending precise quantities of plants, seeds, and oils for target medical applications.",
          "Clinical Administration: Dispensing customized pharmacological mixtures to restore humoral equilibrium."
        ];
      }
      if (titleLower.includes("anatomical") || titleLower.includes("dissections") || titleLower.includes("vascular")) {
        return [
          "Surgical Isolation: Isolating major muscular, bony, and respiratory systems in physical specimens.",
          "Vessel Flow Tracing: Mapping major arterial tracks supplying healthy blood to core organ cavities.",
          "Graphic Recording: Drafting intricate anatomical manuscript grids to guide early medical examinations."
        ];
      }
      if (titleLower.includes("manuscript") || titleLower.includes("legal")) {
        return [
          "Source Alignment: Aligning diverse historic legal codices on scholarly tables to study text patterns.",
          "Axiom Matching: Isolating baseline logical commands and patterns to identify universal legal norms.",
          "Analytical Reconciliation: Standardizing interpretive legal logic to build a balanced comparative framework."
        ];
      }
      if (titleLower.includes("logical") || titleLower.includes("classification")) {
        return [
          "Syllogistic Weeding: Evaluating scientific claims against strict Aristotelian truth matrices to discard errors.",
          "Ontological Charting: Arranging physical concepts into tree branch hierarchies from general kinds to specific items.",
          "Axiomatic Proving: Proving that valid logical frameworks form the foundation of physical science observation."
        ];
      }
      if (titleLower.includes("knowledge") || titleLower.includes("preservation") || titleLower.includes("archives")) {
        return [
          "Clerical Duplication: Manually copying high-value scientific books onto acid-free paper.",
          "Categorization Indexing: Affixing subject matter tags, translation origins, and authors on catalog rolls.",
          "Preservation Storage: Storing cataloged leather books within aerated cedar cases to keep them dry."
        ];
      }
    }

    if (id === "al-biruni") {
      if (titleLower.includes("hydrostatic")) {
        return [
          "Displacement Measurement: Weighing target gemstones or metals in air, then placing them into custom water vessels.",
          "Ratio Calculations: Comparing air weight with water weight to calculate density coordinates with 99.9% accuracy.",
          "Metal Purity Extraction: Spotting counterfeit metals by matching calculated specific density maps with established values."
        ];
      }
      if (titleLower.includes("geared astrolabe") || titleLower.includes("calendar clock")) {
        return [
          "Lunisolar Calibration: Aligning interlocking bronze gears representing solar orbits and lunar calendar periods.",
          "Rotary Translation: Translating a single master dial rotation into varying speed coordinates for days and months.",
          "Phase Projection: Projecting live moon coordinates and astronomical months onto astrolabe discs."
        ];
      }
      if (titleLower.includes("rotation") || titleLower.includes("axis")) {
        return [
          "Axial Inversion: Modeling star tracks assuming a daily spinning motion of the Earth on its central axis.",
          "Geological Cycle Tracking: Recording the gradual transformation of land paths, rivers, and mountains over millennia.",
          "Spheroid Mathematical Revision: Recalculating latitude values to match a slightly flattened spherical Earth shape."
        ];
      }
    }

    if (id === "al-khwarizmi") {
      if (titleLower.includes("decimal") || titleLower.includes("zero")) {
        return [
          "Positional Alignment: Sequencing unit columns, tens columns, and hundreds columns in a base-10 positional array.",
          "Sifr Placement: Declaring an empty unit column via the circular dot zero ('sifr') to preserve positional magnitude.",
          "Algorithmic Step Sequencing: Instituting standard rules to execute multi-digit math systematically."
        ];
      }
      if (titleLower.includes("quadrant") || titleLower.includes("sinusoidal")) {
        return [
          "Sighting Elevation: Measuring the altitude angle of a chosen star using a quarter-circle brass quadrant grid.",
          "Interpreting Sine Values: Tracing lines on the quadrant plate to determine sine and cosine functions.",
          "Coordinate Positioning: Finding geographic coordinates using computed astronomical lookup curves."
        ];
      }
      if (titleLower.includes("coordinate tables") || titleLower.includes("zij")) {
        return [
          "Planetary Tracking: Mapping solar, lunar, and planetary coordinates onto a standard unified calendar system.",
          "Trigonometric Computation: Referencing tables filled with sines, tangents, and chords to calculate paths.",
          "Maritime Position Plotting: Pinpointing global desert and ocean coordinates to chart reliable path coordinates."
        ];
      }
    }

    if (id === "ibn-al-haytham") {
      if (titleLower.includes("refraction")) {
        return [
          "Beam Angle Recording: Tracking light rays projecting through water, glass, and atmospheric boundaries.",
          "Atmospheric Spheroid Tracking: Measuring twilight durations to estimate refraction bend angles in air.",
          "Depth Calculation: Using geometric equations to calculate that the Earth's atmosphere is roughly 52 miles deep."
        ];
      }
      if (titleLower.includes("lenses") || titleLower.includes("magnifying")) {
        return [
          "Hemispherical Conic Grinding: Grinding high-purity glass blocks into perfect convex spherical surfaces.",
          "Focal Intersection Mapping: Finding the exact coordinate distance where bent light rays converge.",
          "Image Magnification: Setting lenses above micro-manuscripts to enlarge letter shapes for scholars."
        ];
      }
      if (titleLower.includes("billiard") || titleLower.includes("mirror")) {
        return [
          "Geometric Ray Tracing: Drawing straight light rays bouncing off highly polished spherical brass mirrors.",
          "Intersection Solving: Creating algebraic and conic solutions to find reflecting spots on metallic domes.",
          "Angular Balancing: Proving that angles of light incidence always equal reflection angles on curved bodies."
        ];
      }
    }

    if (id === "jabir-ibn-hayyan") {
      if (titleLower.includes("regia") || titleLower.includes("acid")) {
        return [
          "Acid Distillation: Distilling green vitriol (sulfuric acid) and saltpeter to isolate concentrated nitric and hydrochloric acids.",
          "Acid Combining: Blending precise volume ratios of newly distilled acids to create the legendary golden solvent Aqua Regia.",
          "Metal Dissolution: Using the mixture to dissolve noble gold and silver, proving early redox chemistry."
        ];
      }
      if (titleLower.includes("compounding") || titleLower.includes("herbal")) {
        return [
          "Botanical Extraction: Extracting active compounds from medicinal plants using distilled solvents.",
          "Active Ingredient Dosing: Measuring and compounding dried herb powders on sensitive balancing scales.",
          "Clinical Delivery: Formulating custom syrups, pills, and poultices targeting specific biological humors."
        ];
      }
      if (titleLower.includes("varnish") || titleLower.includes("protective")) {
        return [
          "Material Synthesis: Boiling vegetable oils, tree resins, and manganese oxides into water-resistant polymers.",
          "Oxidation Shielding: Applying the oily varnish to iron armor plates and weapons to seal out moisture.",
          "Industrial Applications: Tuning high-temperature glass kilns to produce chemically resilient glass vessels."
        ];
      }
    }

    if (id === "abbas-ibn-firnas") {
      if (titleLower.includes("planetarium") || titleLower.includes("glass")) {
        return [
          "Concentric Ring Mounting: Rigging adjustable copper bands to represent the equator and zodiac paths.",
          "Atmosphere Projection: Fitting colored glass sheets inside a dome to project sunrise, rain, and solar transits.",
          "Rotary Cord Control: Pulling hidden pulley strings to move glass clouds and metallic sun indicators smoothly."
        ];
      }
      if (titleLower.includes("reading stone") || titleLower.includes("corrective")) {
        return [
          "Sand Refining: Melting top-grade river sands at blazing temperatures to produce optically clear silica glass.",
          "Spherical Grinding: Polishing thick glass drops into smooth magnifying reading lenses.",
          "Visual Magnifying: Placing the rounded lens over tiny manuscript scripts to aid aging scholars."
        ];
      }
      if (titleLower.includes("water clock")) {
        return [
          "Float Calibration: Controlling constant stream inputs into copper basins containing floating marks.",
          "Gearing Connection: Linking the float to balanced pulley cords that turn mechanical day hands.",
          "Acoustic Time Striking: Tripping a lever that drops lead pellets onto sound plaques at exact hours."
        ];
      }
    }

    if (id === "al-razi") {
      if (titleLower.includes("petroleum") || titleLower.includes("kerosene")) {
        return [
          "Crude Oil Loading: Loading crude petroleum pitch into high-grade stoneware retorts.",
          "Fractional Heating: Heating the retort using wood fires to evaporate low-boiling oils.",
          "Kerosene Condensation: Condensing and collecting purified colorless kerosene fuel safe for oil lamps."
        ];
      }
      if (titleLower.includes("smallpox") || titleLower.includes("measles")) {
        return [
          "Symptom Auditing: Distinguishing tiny red smallpox spots from macular measles skin rashes.",
          "Infectious Cycle Mapping: Tracking patient state transitions to chart disease stages over fourteen days.",
          "Therapeutic Recovery: Treating patients with cooling skin salves, fluid balances, and dietary restrictions."
        ];
      }
      if (titleLower.includes("antiseptic")) {
        return [
          "Compound Extraction: Distilling alcohol and preparing green vitriol solutions in lab flasks.",
          "Wound Cleansing: Washing surgical wounds and dressings with antiseptic mixtures.",
          "Recovery Inspections: Examining cleaned wounds daily to track recovery rates without toxic rotting."
        ];
      }
    }

    if (id === "al-jazari") {
      if (titleLower.includes("crankshaft") || titleLower.includes("gear")) {
        return [
          "Rotary Intake: Harnessing moving river flows to continuously spin a primary spiked heavy wooden wheel.",
          "Rotary-to-Linear Transfer: Translating rotary spinner motion into linear strokes using pinned crankshafts.",
          "Piston Suction: Driving dual water cylinder pistons back and forth to lift municipal water lines."
        ];
      }
      if (titleLower.includes("combination") || titleLower.includes("secure")) {
        return [
          "Dials Interlocking: Aligning sliding brass dials containing custom alphabet lettering blocks.",
          "Pin Slot Mapping: Turning dial rings to align internal slots matching secure brass lock triggers.",
          "Lid Unlatching: Drawing open the heavy chest lid only when all pins slide into matched unlocking paths."
        ];
      }
      if (titleLower.includes("elephant") || titleLower.includes("clock")) {
        return [
          "Sinking Float Intake: Controlling water flow into a floating bowl with a calibrated orifice.",
          "Pulley Lifting: Driving mechanical figures through falling ball runs and linked pulley cords.",
          "Visual Striking: Tripping bronze dragon levers that tip lead weights to strike hourly timings."
        ];
      }
    }

    if (id === "nasir-al-tusi") {
      if (titleLower.includes("tusi couple") || titleLower.includes("spherical")) {
        return [
          "Concentric Ring Mounting: Placing a small bronze gear with radius 'r' inside a larger internal ring of radius '2r'.",
          "Rotary Translation: Spinning the smaller internal gear inside the rotating larger ring.",
          "Linear Translation: Projecting a single point on the inner gear's boundary that glides back and forth in a straight line."
        ];
      }
      if (titleLower.includes("latitude") || titleLower.includes("astrolabe")) {
        return [
          "Plate Slicing: Engraving circular altitude grids at distinct geographic latitudinal marks on copper sheets.",
          "Stellar Angle Alignment: Measuring target star coordinates relative to horizon rings.",
          "Sighting Elevation: Adjusting rotating sighting rules to calculate observer heights."
        ];
      }
    }

    if (id === "umar-khayyam") {
      if (titleLower.includes("cali") || titleLower.includes("calendar")) {
        return [
          "Equinox Calculation: Observing accurate spring equinox timings using high-precision meridional tools.",
          "Lunisolar Calendar Leap Splicing: Inserting exactly 8 leap years within a structured 33-year solar cycle.",
          "Solar Mapping Alignment: Tuning calendar calendars with solar years to outperform Western layouts."
        ];
      }
      if (titleLower.includes("cubic") || titleLower.includes("conic")) {
        return [
          "Geometric Intersection Plotting: Intersecting conics like parabolas and circles on coordinates.",
          "Line Length Measuring: Measuring the line lengths of intersections to isolate real roots.",
          "Algebraic Codifying: Organizing algebra categories up to third-degree equations."
        ];
      }
    }

    if (
      inv.classification === "Theory" ||
      titleLower.includes("theory") ||
      titleLower.includes("concept") ||
      titleLower.includes("law") ||
      titleLower.includes("algorithm")
    ) {
      return [
        "Conceptual Formulation: Defining core physical parameters and axioms to isolate the natural or mathematical process.",
        "Mathematical Modeling: Applying deductive logic and precise geometric equations to map relationships between observed properties.",
        "Observational Validation: Testing the schema against historical astronomical, physiological, or mechanical reference records."
      ];
    } else if (
      inv.classification === "Instrument" ||
      inv.classification === "Device" ||
      inv.classification === "Tool" ||
      titleLower.includes("astrolabe") ||
      titleLower.includes("machine") ||
      titleLower.includes("clock") ||
      titleLower.includes("gear")
    ) {
      return [
        "Mechanical Intake: Directing the natural force (gravity or celestial rays) to drive the prime mechanical mover.",
        "Kinematic Transmission: Distributing force through aligned gears, pulleys, water balances, and copper cords.",
        "Calibrated Indication: Projecting precise coordinates, solar hours, or measurements onto carefully engraved celestial or terrestrial plates."
      ];
    } else if (
      inv.classification === "Technique" ||
      inv.classification === "Methodology" ||
      titleLower.includes("method") ||
      titleLower.includes("protocol") ||
      titleLower.includes("process") ||
      titleLower.includes("diagnostic") ||
      titleLower.includes("system")
    ) {
      return [
        "Systemic Initialization: Preparing the baseline conditions, patient state, or calculating base references under controlled variables.",
        "Sequential Application: Executing the specialized procedure, distillation, or diagnostic pulse analysis step-by-step.",
        "Therapeutic Adjustment: Refining the treatment, refining the distillation purity, or adjusting equations based on real-time feedback."
      ];
    }

    return [
      "Foundational Principle: Formulating the core scientific rules and baseline structural specifications.",
      "Operational Execution: Allying physical gears, chemical elements, or mathematical equations to perform operations dynamically.",
      "Practical Translation: Implementing the finalized solution to resolve real-world navigation, physical movement, or medical challenges."
    ];
  };

  // Handle escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Lock background scroll when open
    if (scientist) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [scientist, onClose]);

  if (!scientist) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-20 bg-[#041511]/90 backdrop-blur-xl overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Cinematic Spotlight overlay backing */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_80%) pointer-events-none" />

      {/* Modal Card Structure */}
      <motion.div
        id="cinematic-modal-panel"
        className="relative w-full max-w-7xl bg-[#0b3d2e]/45 backdrop-blur-2xl border border-[#D4AF37]/40 rounded-sm shadow-[0_20px_50px_rgba(4,21,17,0.85)] shadow-[#D4AF37]/5 overflow-hidden m-auto grid grid-cols-1 lg:grid-cols-12 flex-shrink-0"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {/* Glow Line Top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />

        {/* Global Exit button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4AF37] border border-[#D4AF37]/40 text-white/80 hover:text-[#041511] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT PANEL: Cinematic Media Showcase & Spotlight (5 Columns) */}
        <div className="lg:col-span-5 relative overflow-hidden bg-black/50 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D4AF37]/15">
          {/* Animated 3D spotlight beam effect overlay */}
          <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent -translate-x-[50%] skew-x-12 animate-pulse pointer-events-none" style={{ animationDuration: "6s" }} />
          
          <div className="relative">
            {/* Field Badge Indicator */}
            <span className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] bg-[#0B3D2E] border border-[#D4AF37]/30 px-3 py-1 rounded-sm uppercase inline-block mb-4">
              MUSEUM ARCHIVE // {scientist.field}
            </span>

            {/* Showcase Image Box */}
            <div className="relative w-full aspect-video sm:aspect-square rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-[0_0_25px_rgba(11,61,46,0.5)] mb-6 bg-black">
              {/* Image with strict no portraits policy */}
              <ImageWithFallback
                src={scientist.imageUrl}
                alt={activeTab === "invention" ? (getAdditionalInventions(scientist)[selectedInventionIndex]?.title || scientist.inventionTitle) : scientist.inventionTitle}
                className="w-full h-full object-cover select-none"
                field={scientist.field}
                seed={scientist.name.length}
                scientistId={scientist.id}
                inventionIndex={activeTab === "invention" ? selectedInventionIndex : 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041511] via-transparent to-transparent opacity-50" />
              
              {/* Glass reflection shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              {/* Dynamic Coordinate Tag */}
              <div className="absolute bottom-3 right-3 bg-black/75 p-1.5 rounded-sm border border-white/10 font-mono text-[8px] text-[#98FF98] tracking-widest">
                VERIFIED MECHANISM
              </div>
            </div>

            {/* Historical Significance Copy */}
            <div className="bg-[#0B3D2E]/40 border border-[#D4AF37]/20 p-4 rounded-sm">
              <span className="font-mono text-xs text-[#D4AF37] block mb-1 uppercase tracking-widest font-bold">
                Exhibition Significance
              </span>
              <p className="font-serif italic text-white/80 text-sm leading-relaxed">
                "{scientist.historicalSignificance}"
              </p>
            </div>
          </div>


        </div>

        {/* RIGHT PANEL: Scholarly Archive Content (7 Columns) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] lg:max-h-[750px] overflow-y-auto">
          <div>
            {/* Header / Meta Profile details */}
            <div className="mb-6">
              <h2 className="font-serif italic font-normal text-2xl sm:text-3xl text-[#D4AF37] mb-1">
                {scientist.name}
              </h2>
              <p className="font-sans font-medium text-xs sm:text-sm text-white/90 tracking-widest uppercase mt-1">
                {scientist.nickname}
              </p>
              
              {/* Geospatial birth coordinates and Year indicators */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 font-mono text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#98FF98]" />
                  Lifespan: <strong className="text-[#D4AF37]">{scientist.lifespan}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#98FF98]" />
                  Birthplace: <strong className="text-[#D4AF37]">{scientist.birthPlace}</strong>
                </span>
              </div>
            </div>

            {/* Core Inventions banner */}
            <div className="mb-6 bg-white/3 border border-[#D4AF37]/15 p-4 rounded-sm">
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-1">
                INVENTION / DISCOVERY OF RECORD
              </span>
              <h3 className="font-sans font-medium text-base text-white tracking-wide uppercase">
                {scientist.inventionTitle}
              </h3>
            </div>

            {/* Secondary Option Tab buttons */}
            <div className="flex border-b border-white/10 mb-6 gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap">
              {[
                { id: "explanation", label: "Overview & Impact", icon: BookOpen },
                { id: "invention", label: "Invention", icon: Compass },
                { id: "timeline", label: "Scholarly Milestones", icon: Calendar }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`modal-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-1.5 py-2.5 px-3 font-mono text-xs tracking-wider border-b-2 uppercase transition-all duration-300 cursor-pointer flex-shrink-0 ${
                      isActive
                        ? "text-[#D4AF37] border-[#D4AF37]"
                        : "text-white/40 border-transparent hover:text-[#98FF98]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* TAB PANELS */}
            
            {/* Tab 1: Explanation & Modern Connection */}
            {activeTab === "explanation" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] text-[#98FF98] tracking-widest uppercase mb-2">
                    Historical Record & Narrative
                  </h4>
                  <p className="text-white/85 text-xs sm:text-sm tracking-wide leading-relaxed">
                    {scientist.detailedExplanation}
                  </p>
                </div>

                {/* Cyber connections loop matching medieval to modern */}
                <div className="bg-[#014D40]/30 border border-[#98FF98]/20 p-4 rounded-sm relative overflow-hidden">
                  <div className="absolute right-2 bottom-2 opacity-5 pointer-events-none">
                    <Orbit className="w-24 h-24 text-[#D4AF37]" />
                  </div>
                  
                  <span className="font-mono text-[9px] text-[#D4AF37] block uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                    <Shuffle className="w-3.5 h-3.5 text-[#98FF98]" />
                    Lineage of Science: Then to Now
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                    <div className="md:col-span-3">
                      <span className="font-mono text-[8px] text-white/35 block">MEDIEVAL ANCESTOR</span>
                      <strong className="text-white text-xs block font-serif italic mt-0.5">{scientist.modernImpact.medievalTech}</strong>
                    </div>

                    <div className="md:col-span-1 flex justify-center">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#98FF98] hidden md:block" />
                    </div>

                    <div className="md:col-span-3">
                      <span className="font-mono text-[8px] text-[#98FF98] block">MODERN DESCENDANT</span>
                      <strong className="text-[#D4AF37] text-xs block font-sans mt-0.5">{scientist.modernImpact.modernTech}</strong>
                    </div>
                  </div>

                  <p className="text-white/70 text-xs leading-relaxed mt-4 pt-3 border-t border-white/5">
                    {scientist.modernImpact.description}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Invention (Instrument, Tool, Book, or Technique) */}
            {activeTab === "invention" && (() => {
              const allInventions = getAdditionalInventions(scientist);
              const activeInvention = allInventions[selectedInventionIndex] || allInventions[0];
              return (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* INVENTIVE PORTFOLIO SELECTOR */}
                  <div>
                    <span className="font-mono text-[9px] text-[#98FF98] uppercase tracking-widest block mb-1">
                      SCHOLASTIC PORTFOLIO ({allInventions.length} Inventions Registered)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                      {allInventions.map((inv, idx) => {
                        const isSelected = selectedInventionIndex === idx;
                        return (
                          <button
                            key={idx}
                            id={`scholar-inv-sel-${idx}`}
                            onClick={() => setSelectedInventionIndex(idx)}
                            className={`p-2 px-3 rounded-sm border text-left transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "border-[#D4AF37] bg-[#0B3D2E]/80 shadow-[0_2px_15px_rgba(212,175,55,0.15)] text-[#D4AF37]"
                                : "border-white/5 bg-white/5 hover:border-white/20 text-white/60 hover:text-white"
                            }`}
                          >
                            <div className="font-mono text-[10px] opacity-60 uppercase tracking-wider mb-0.5">
                              {inv.classification === "Primary" ? "🌟 Primary" : `⚙️ ${inv.classification}`}
                            </div>
                            <div className="font-serif italic text-[11px] font-semibold leading-tight truncate">
                              {inv.title}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 1st Section: Selected Invention Detail Display */}
                  <div className="bg-[#0b3d2e]/30 border border-[#D4AF37]/30 p-5 rounded-sm relative overflow-hidden">
                    <div className="absolute top-2 right-2 font-mono text-[8px] text-[#98FF98] bg-[#0B3D2E] border border-[#98FF98]/20 px-2 py-0.5 rounded-xs tracking-widest uppercase">
                      {activeInvention.classification}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start relative z-10">
                      {/* Compact Image Frame */}
                      <div className="relative w-full sm:w-28 h-28 aspect-video sm:aspect-square rounded-sm overflow-hidden border border-[#D4AF37]/25 bg-black flex-shrink-0 shadow-inner">
                        <ImageWithFallback
                          src={scientist.imageUrl}
                          alt={activeInvention.title}
                          className="w-full h-full object-cover select-none"
                          field={scientist.field}
                          seed={scientist.name.length}
                          scientistId={scientist.id}
                          inventionIndex={selectedInventionIndex}
                        />
                        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.5)_100%) pointer-events-none" />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <span className="font-mono text-[10px] text-white/40 block mb-1 uppercase tracking-widest leading-none">
                          REVIEW SCHOLASTIC ARCHIVE RECORD
                        </span>
                        <h5 className="font-sans font-bold text-sm text-[#D4AF37] tracking-wide uppercase leading-tight mb-2">
                          {activeInvention.title}
                        </h5>
                        <p className="text-white/80 text-xs leading-relaxed font-sans">
                          {activeInvention.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Analysis of Invention: Purpose & Engineering process */}
                  {(() => {
                    const parsed = parseInventionText(
                      activeInvention.description,
                      selectedInventionIndex === 0,
                      scientist.detailedExplanation
                    );
                    return (
                      <div className="flex flex-col gap-4">
                        {/* Purpose Card */}
                        <div className="bg-[#0b3d2e]/20 border border-[#D4AF37]/25 p-4 rounded-sm relative overflow-hidden group hover:bg-[#0b3d2e]/30 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2 text-[#98FF98]">
                            <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold text-[#98FF98]">
                              <span className="text-[#D4AF37]">I.</span> Historical Purpose & Objective
                            </span>
                          </div>
                          <p className="text-white/85 text-xs leading-relaxed font-sans">
                            {parsed.purpose}
                          </p>
                        </div>

                        {/* Engineering / Creation Genesis Card */}
                        <div className="bg-[#0b3d2e]/20 border border-[#D4AF37]/25 p-4 rounded-sm relative overflow-hidden group hover:bg-[#0b3d2e]/30 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2 text-[#98FF98]">
                            <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold text-[#98FF98]">
                              <span className="text-[#D4AF37]">II.</span> Creation & Discovery Genesis
                            </span>
                          </div>
                          <p className="text-white/85 text-xs leading-relaxed font-sans">
                            {parsed.howInvented}
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* 2nd Section: Dynamic Mechanism Details */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs text-[#98FF98] tracking-[0.25em] uppercase flex items-center gap-1.5 font-bold">
                      <span className="text-[#D4AF37]">III.</span> Technical & Practical Mechanics
                    </h4>
                    
                    <div className="space-y-3">
                      {getMechanismBreakdown(scientist, activeInvention, selectedInventionIndex).map((mechanicalStep, i) => {
                        const colonIndex = mechanicalStep.indexOf(":");
                        const title = colonIndex !== -1 ? mechanicalStep.substring(0, colonIndex) : `Step ${i + 1}`;
                        const content = colonIndex !== -1 ? mechanicalStep.substring(colonIndex + 1).trim() : mechanicalStep;
                        
                        return (
                          <div key={i} className="flex gap-4 items-start bg-black/20 p-3 rounded-sm border border-white/5">
                            <div className="w-6 h-6 rounded-full bg-[#0B3D2E] border border-[#D4AF37]/50 font-mono text-xs text-[#D4AF37] flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                              {i + 1}
                            </div>
                            <div>
                              <h5 className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1 font-semibold">
                                {title}
                              </h5>
                              <p className="text-white/70 text-xs leading-relaxed">
                                {content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })()}

            {/* Tab 3: Timeline Accomplishments */}
            {activeTab === "timeline" && (
              <div className="space-y-5">
                <h4 className="font-mono text-[10px] text-[#98FF98] tracking-widest uppercase mb-3">
                  Key Achievements Chronological Ledger
                </h4>
                
                <div className="relative border-l border-[#D4AF37]/35 pl-6 ml-3 space-y-6">
                  {scientist.timelineAchievements.map((achievement, i) => (
                    <div key={i} className="relative group">
                      {/* Node point */}
                      <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#041511] border border-[#D4AF37] group-hover:bg-[#98FF98] transition-colors" />
                      
                      <span className="font-mono text-xs text-[#98FF98] block mb-1">
                        A.D. {achievement.year}
                      </span>
                      <p className="text-white/80 text-xs tracking-wide">
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span className="font-mono text-[10px] text-white/35 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 animate-spin text-[#D4AF37]" style={{ animationDuration: "25s" }} />
              Islamic Science Digital Museum Project
            </span>
            <div className="flex gap-3">
              <button
                id="modal-close-footer"
                onClick={onClose}
                className="px-6 py-2 rounded-sm border font-mono text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer border-white/10 bg-white/5 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]"
              >
                Conclude Review
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
