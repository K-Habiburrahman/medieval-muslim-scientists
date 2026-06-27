/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scientist, Discipline, CategoryCard } from "../types";

// Import our custom pre-generated high-quality medieval museum images
import astrolabeHero from "../assets/images/astrolabe_hero_1779445625266.png";
import elephantClock from "../assets/images/elephant_clock_1779445645499.png";
import jazariElephantClock from "../assets/images/jazari_elephant_clock_1780320687372.png";
import cameraObscura from "../assets/images/camera_obscura_1779445664789.png";
import flyingMachine from "../assets/images/firnas_glider_prisms_1780191385147.png";
import alembicDistillation from "../assets/images/alembic_distillation_1779450843804.png";
import pulmonaryCirculation from "../assets/images/pulmonary_circulation_1779461836659.png";
import surgicalTools from "../assets/images/surgical_tools_1779462117368.png";
import trigIdentity from "../assets/images/trig_identity_1779464734536.png";
import canonOfMedicine from "../assets/images/canon_of_medicine_1779465215049.png";

import banuMusa from "../assets/images/banu_musa_1779527672718.png";
import ibnKhaldunPrimary from "../assets/images/khaldun_hist_sociology_1780386456120.png";
import ibnKhaldun from "../assets/images/ibn_khaldun_1779527692898.png";
import alShirazi from "../assets/images/shirazi_rainbow_optics_1780385688391.png";
import alSufi from "../assets/images/sufi_atlas_1779783579034.png";
import ibnMajid from "../assets/images/majid_compass_matrix_1780499307940.png";
import alMuradi from "../assets/images/muradi_secrets_gears_1780192227551.png";
import ibnZuhr from "../assets/images/zuhr_tracheotomy_parasitology_1780192842433.png";
import alDinawari from "../assets/images/al_dinawari_1779527807831.png";
import mariamAlIjliya from "../assets/images/mariam_al_ijliya_1779527830061.png";
import ibnAlBaitar from "../assets/images/ibn_al_baitar_1779527848506.png";

import alRaziMed from "../assets/images/razi_sutures_1779782500000_1779781460679.png";
import umarKhayyamObs from "../assets/images/khayyam_geometry_cubic_1780191843012.png";
import alKindiDesk from "../assets/images/al_kindi_desk_1779528852498.png";
import alKhwarizmiChamb from "../assets/images/al_khwarizmi_chamb_1779528871493.png";

import ibnRushdChamber from "../assets/images/rushd_colliget_generalities_1780319609838.png";
import alBattaniObs from "../assets/images/al_battani_obs_1779530487600.png";
import thabitMath from "../assets/images/thabit_math_1779780808149.png";
import ibnShatirPrimary from "../assets/images/shatir_non_ptolemaic_1780386421811.png";
import ibnBattutaPrimary from "../assets/images/battuta_nautical_maps_1780386387419.png";
import alKashiPrimary from "../assets/images/kashi_key_arithmetic_1780386507834.png";
import qushjiPrimary from "../assets/images/qushji_earth_rot_1780499991308.png";
import taqiPrimary from "../assets/images/taqi_steam_pump_1780417171267.png";
import piriReisPrimary from "../assets/images/piri_world_chart_1780498465088.png";
import alMasudiDesk from "../assets/images/masudi_geography_1779783268591.png";
import alQazwiniLib from "../assets/images/al_qazwini_lib_1779530560956.png";
import tusiCoupleGear from "../assets/images/tusi_couple_gear_1780384323020.png";
import qazwiniCosmography from "../assets/images/qazwini_cosmography_1780384373640.png";
import nafisBloodCirc from "../assets/images/nafis_blood_circ_1780384434638.png";
import hazmPsychology from "../assets/images/hazm_psychology_1780054505866.png";
import alKarajiTable from "../assets/images/karaji_hydrology_1780045983822.png";
import ibnTufailLib from "../assets/images/tufail_empirical_cognition_1780319152841.png";
import nabahaniRihla from "../assets/images/nabahani_rihla_botanical_1780321377086.png";
import alMarrakushiSta from "../assets/images/marrakushi_sundial_gnomon_1780385640961.png";
import ibnYunusPendulum from "../assets/images/yunus_pendulum_1780026645991.png";

import alUqlidisiGeom from "../assets/images/uqlidisi_decimals_1779884926606.png";
import ibnBannaObs from "../assets/images/banna_minhaj_algebra_1780385736079.png";
import jayyaniSines from "../assets/images/jayyani_sines_1780054300899.png";
import ibnSahlOptics from "../assets/images/ibn_sahl_optics_1779532152957.png";
import alFazariObs from "../assets/images/al_fazari_obs_1779532168889.png";
import ibnAwwamFarm from "../assets/images/awwam_kitab_filaha_1780320078024.png";
import alMajritiAlch from "../assets/images/majriti_mercuric_1780045696499.png";
import ibnBassalGard from "../assets/images/bassal_diwan_siphons_1780192328272.png";
import alFarghaniNilometer from "../assets/images/al_farghani_nilometer_1779771897731.png";

export const scientists: Scientist[] = [
  {
    id: "al-khwarizmi",
    name: "Muhammad ibn Musa al-Khwarizmi",
    nickname: "Al-Khwarizmi",
    lifespan: "780 – 850 CE",
    birthYear: 780,
    deathYear: 850,
    birthPlace: "Khwarazm (Modern-day Uzbekistan)",
    field: Discipline.Mathematics,
    inventionTitle: "Algebra & Systematic Algorithmic Logic",
    shortSummary: "Developed the foundational algebra methodology, systematic quadratic equation solvers, and introduced the Hindu-Arabic numeral system to the West.",
    detailedExplanation: "Conceived to resolve complex everyday calculations in Islamic inheritance, trade, and land surveying, Al-Khwarizmi developed algebra by abstracting numbers into general variables, moving away from geometrical constraints. Through an empirical process of balancing and reduction (Al-Jabr and Al-Muqabala), he established systematic algorithms for solving linear and quadratic equations. His primary purpose was to create a practical mathematical toolkit to solve real-world problems. He successfully overcame the challenges of a non-symbolic era by articulating these mathematical rules entirely in written prose, creating structural algorithms that laid the foundation for modern computer science.",
    mechanismBreakdown: [
      "Al-Jabr (Restoration): Adding equal quantities to both sides of an equation to eliminate negative terms.",
      "Al-Muqabala (Balancing): Simplifying positive terms on opposite sides of an equation.",
      "Algorithmi: Systematic processes that lead to definite outputs, defining modern step-by-step mathematical procedures."
    ],
    modernImpact: {
      medievalTech: "Algorithmic notation & algebraic variables",
      modernTech: "Computer algorithms & coding syntax",
      description: "Without al-Khwarizmi's algorithmic structures, modern computer science, silicon chips, and software applications would not have a mathematical foundation."
    },
    timelineAchievements: [
      { year: 813, label: "Appointed head of the House of Wisdom library in Baghdad." },
      { year: 820, label: "Published 'Al-Kitab al-mukhtasar fi hisab al-jabr' establishing Algebra." },
      { year: 825, label: "Authored his text on Hindu numerals, standardizing zero and decimals." }
    ],
    historicalSignificance: "Transformed mathematics from visual geometry into an abstract, operational language that unlocked mathematical solutions for trade, inheritance, and land measurement.",
    imageUrl: alKhwarizmiChamb,
    accentColor: "gold"
  },
  {
    id: "ibn-sina",
    name: "Abu Ali al-Husayn ibn Sina",
    nickname: "Ibn Sina",
    lifespan: "980 – 1037 CE",
    birthYear: 980,
    deathYear: 1037,
    birthPlace: "Afshana (Near Bukhara, Modern Uzbekistan)",
    field: Discipline.Medicine,
    inventionTitle: "The Canon of Medicine & Quarantine Protocols",
    shortSummary: "Authored the definitive medical encyclopedia of medieval civilization and formulated early clinical-trial methods and quarantine practices.",
    detailedExplanation: "Faced with devastating epidemics and fragmented medical knowledge, Ibn Sina conceived his masterwork, 'The Canon of Medicine,' as a unified, logical encyclopedia of healing. Through systematic clinical observation, physical quarantine experiments, and documenting patients over decades, he empirically proved that tuberculosis is contagious and that pathogens transmit through water and soil. His specific purpose was to establish standard diagnostic criteria and pharmacological guidelines. Overcoming the severe limits of medieval pathology and resisting local superstitions, he designed the first systematic quarantined isolation system (al-arba'iniya), successfully curbing the spread of plague in trading hubs and pioneering epidemiological containment.",
    mechanismBreakdown: [
      "Quarantine (Al-Arba'iniya): Isolating patients for 40 days to stop contagion spread in trading harbors.",
      "Clinical Trials: Methodical double-blind parameters testing medical remedies under strict isolated groups.",
      "Pulse Diagnostics: Correlating high-frequency and irregular pulse waves with specific emotional and physical states."
    ],
    modernImpact: {
      medievalTech: "Systematic quarantines & clinical drug trials",
      modernTech: "WHO global pandemic management & modern pharmacology",
      description: "Ibn Sina's standard protocols for isolating infectious patients remain the primary defense vector against viral outbreaks and global pandemics today."
    },
    timelineAchievements: [
      { year: 997, label: "Cured the Samanid Emir of Bukhara, gaining access to the royal libraries." },
      { year: 1025, label: "Completed 'The Canon of Medicine', codifying global healing wisdom." },
      { year: 1030, label: "Formulated the early physical concepts of inertia and momentum." }
    ],
    historicalSignificance: "Synthesized centuries of medical traditions—Greek, Persian, Indian, and Roman—into a unified, logical science of diagnostics, drug discovery, and preventive care.",
    imageUrl: canonOfMedicine,
    accentColor: "mint"
  },
  {
    id: "ibn-al-haytham",
    name: "Abu Ali al-Hasan ibn al-Haytham",
    nickname: "Ibn al-Haytham",
    lifespan: "965 – 1040 CE",
    birthYear: 965,
    deathYear: 1040,
    birthPlace: "Basra (Modern-day Iraq)",
    field: Discipline.Physics,
    inventionTitle: "Camera Obscura & Modern Experimental Optics",
    shortSummary: "Disproved Greek emissive eye emission theories, proved light travels in straight lines into the eye, and invented the Camera Obscura.",
    detailedExplanation: "Conceived to challenge the prevailing Greek theories of intromission and extramission of vision, Ibn al-Haytham pioneered modern experimental physics and the scientific method. Under house arrest in Cairo, he conducted rigorous, physical experiments in a darkened room (Al-Bayt al-Muzlim) with variable pinholes and candles. By empirically measuring light ray paths, he proved that light travels in straight lines and reflects from external objects into the pupil, creating inverted projections. His specific purpose was to mathematically model vision and refraction. He overcame the lack of precision measuring instruments and the dogmatic authority of Ptolemy and Euclid by fabricating his own lenses and apertures, creating the Camera Obscura and the foundation of optical physics.",
    mechanismBreakdown: [
      "Al-Bayt al-Muzlim (Pinhole Chamber): Letting narrow streams of external atmospheric light pass through a tiny pinhole.",
      "Linear Ray Propagation: Documenting that light traveling through empty or foggy space moves exclusively in straight lines.",
      "Spherical Refraction: Detailing the curving properties of light traveling through transparent water glass spheres."
    ],
    modernImpact: {
      medievalTech: "Pinhole image projection & lenses",
      modernTech: "Cameras, smartphone sensors, & optical lasers",
      description: "The physics behind your smartphone camera, movies, microscopy, and astronomical telescopes are direct evolutions of Ibn al-Haytham's pinhole chamber experiments."
    },
    timelineAchievements: [
      { year: 1011, label: "Imprisoned under Cairo house arrest, turning his small dark cell into an optical laboratory." },
      { year: 1021, label: "Published 'Kitab al-Manazir' (Book of Optics), establishing the scientific method." },
      { year: 1030, label: "Mathematically solved the geometric billiard problem of light reflection on spherical mirrors." }
    ],
    historicalSignificance: "Replaced speculative philosophical assertion with continuous physical experimentation, validating theories through empirical evidence, mathematics, and optical setups.",
    imageUrl: cameraObscura,
    accentColor: "gold"
  },
  {
    id: "jabir-ibn-hayyan",
    name: "Abu Musa Jabir ibn Hayyan",
    nickname: "Jabir ibn Hayyan",
    lifespan: "721 – 815 CE",
    birthYear: 721,
    deathYear: 815,
    birthPlace: "Tus (Modern-day Iran)",
    field: Discipline.Chemistry,
    inventionTitle: "The Distillation Alembic & Acidic Purification",
    shortSummary: "Systematized chemical science through the invention of the Alembic retort, discovering critical acids (nitric, hydrochloric) and laboratory tools.",
    detailedExplanation: "Determined to elevate ancient, mystical metallurgy into a systematic, quantitative science, Jabir ibn Hayyan conceived the empirical study of chemistry. He designed and engineered the alembic (Al-Anbiq), a revolutionary glass retort that controlled condensation points, enabling fractional distillation. Through painstaking laboratory trials—including crystallization, sublimation, and calcination—he successfully isolated powerful mineral acids (nitric, sulfuric, and hydrochloric) and formulated Aqua Regia to dissolve noble metals. His purpose was to document reproducible chemical synthesis protocols. He overcame the prevailing theoretical focus of antique physics by emphasizing precise balances, recording exact weights of reactions, and creating standardized laboratory apparatus.",
    mechanismBreakdown: [
      "Al-Anbiq (Alembic): A curved glass boiling flask connected to a condensation funnel that extracts purified essential oils or acids.",
      "Crystallization & Calcination: Strict techniques for heating mineral salts and cooling them slowly to grow pure crystals.",
      "Corrosive Acids Formulation: Combining sulfuric acid with sodium chloride to synthesize concentrated hydrochloric acid vapours."
    ],
    modernImpact: {
      medievalTech: "Alembic distillation & mineral acid isolation",
      modernTech: "Petrochemical refining, pharmaceuticals, & laboratory equipment",
      description: "Modern petrochemical refineries distill oil using chemical columns directly derived from Jabir's modular glass alembics and acid-separation setups."
    },
    timelineAchievements: [
      { year: 765, label: "Built a specialized chemical furnace and physical lab inside Kufa, Iraq." },
      { year: 790, label: "Synthesized pure nitric acid and Aqua Regia, capable of dissolving precious gold." },
      { year: 800, label: "Published 'Kitab al-Kimya', establishing atomic transformation models." }
    ],
    historicalSignificance: "Formulated the fundamental laboratory procedures—sublimation, distillation, crystallization, evaporation, and filtration—used in every modern laboratory today.",
    imageUrl: alembicDistillation,
    accentColor: "emerald"
  },
  {
    id: "al-biruni",
    name: "Abu Rayhan al-Biruni",
    nickname: "Al-Biruni",
    lifespan: "973 – 1048 CE",
    birthYear: 973,
    deathYear: 1048,
    birthPlace: "Kath (Khwarazm, Modern Uzbekistan)",
    field: Discipline.Astronomy,
    inventionTitle: "Geodetic Altitude Earth Measurement & The Astrolabe",
    shortSummary: "Calculated the Earth's radius with incredible 99.7% accuracy using a single mountain and astrolabe, and designed advanced coordinate systems.",
    detailedExplanation: "To measure the vast dimensions of the Earth without relying on long, error-prone linear desert surveys, Al-Biruni conceived a brilliant geodetic triangulation technique. He established an empirical process at the Nandana fort by measuring the horizon's dip angle from a mountain peak of known height using a large astrolabe, subsequently applying advanced spherical trigonometry. His purpose was to compute the Earth's radius and calibrate astronomical coordinates. Despite lacking modern tracking satellites or long-range surveying equipment, he overcame severe regional conflicts and physical measuring errors to calculate the Earth's radius with 99.7% accuracy, rendering his results unmatched for seven centuries.",
    mechanismBreakdown: [
      "Horizon Dip Angle: Measuring the vertical slant from a high mountain point to the curved ocean horizon using an astrolabe.",
      "Trigonometric Ratioing: Computing the earth's curved arc length as: R = (h * cos(a)) / (1 - cos(a)).",
      "Sterographic Projections: Engineering complex copper discs with precision coordinates mapping star altitude."
    ],
    modernImpact: {
      medievalTech: "Trigonometric horizon dip calculation",
      modernTech: "GPS navigation networks & planetary modeling",
      description: "Al-Biruni's geometric concepts of spherical Earth latitudes underlie modern global coordinate mapping, GIS sensors, and satellite orbits."
    },
    timelineAchievements: [
      { year: 1017, label: "Traveled into India, documenting local calendars, astronomy, and mathematical texts." },
      { year: 1019, label: "Invented stereographic astrolabes calculating solar positions at any latitude." },
      { year: 1030, label: "Formulated his absolute geodetic system measuring Earth's precise radius." }
    ],
    historicalSignificance: "Established early scientific disciplines in geodesy, comparative sociology, and astronomical mechanics, pioneering the transition to empirical astronomical proof.",
    imageUrl: astrolabeHero,
    accentColor: "gold"
  },
  {
    id: "al-razi",
    name: "Abu Bakr Muhammad al-Razi",
    nickname: "Al-Razi",
    lifespan: "865 – 925 CE",
    birthYear: 865,
    deathYear: 925,
    birthPlace: "Rayy (Near Tehran, Modern Iran)",
    field: Discipline.Medicine,
    inventionTitle: "Surgical Medical Sutures & Diagnostic Methods",
    shortSummary: "Pioneered specialized clinical isolation for smallpox vs. measles, discovered animal-skin catgut for internal surgical stitching, and designed laboratory equipment.",
    detailedExplanation: "Conceived as a response to unscientific diagnoses and high post-surgical mortality rates, Al-Razi pioneered systematic clinical observation and antiseptic surgical techniques. He used an innovative empirical process to select Baghdad's hospital site, hanging raw meat slabs in different districts to identify areas with the cleanest air (slower decay rates). His purpose was to establish clinical protocols and safe surgical closures. To solve the challenge of internal wound stitching, he invented absorbable catgut sutures from animal intestine fibers, allowing internal wounds to heal without the risk of fatal septic infections, thus overcoming the limitations of standard metallic or silk suturing.",
    mechanismBreakdown: [
      "Dissolvable Catgut Sutures: Refining animal intestine tissues to construct high-strength clinical stitches.",
      "Differential Diagnosis: Formulating distinct clinical checkpoints to accurately separate smallpox from measles.",
      "Sterilization of Air: Assessing decaying meat tissue rates to identify sanitary locations for hospital rooms."
    ],
    modernImpact: {
      medievalTech: "Bio-absorbable catgut stitches & antiseptic hospital selection",
      modernTech: "Modern internal surgical suturing & sterile clinical architecture",
      description: "Al-Razi's self-absorbing organic sutures are still widely used in modern micro-surgeries, transplants, and aesthetic procedures."
    },
    timelineAchievements: [
      { year: 890, label: "Elected Director of the Royal Hospital of Baghdad, upgrading critical care setups." },
      { year: 905, label: "Published 'Al-Kitab al-Hawi' (The Comprehensive Book of Medicine), spanning 23 volumes." },
      { year: 915, label: "Designed an automated distillation flask separating pharmaceutical medical vapors." }
    ],
    historicalSignificance: "Demolished blind superstition in medical science by introducing strict physical diagnostics, clean environments, clinical observations, and specialized chemical extraction.",
    imageUrl: alRaziMed,
    accentColor: "mint"
  },
  {
    id: "abbas-ibn-firnas",
    name: "Abbas ibn Firnas",
    nickname: "Ibn Firnas",
    lifespan: "810 – 887 CE",
    birthYear: 810,
    deathYear: 887,
    birthPlace: "Ronda (Al-Andalus, Modern Spain)",
    field: Discipline.Engineering,
    inventionTitle: "The Controlled Glider Flying Machine & Glass Prisms",
    shortSummary: "Designed, engineered, and successfully demonstrated the first human glider flight, maintaining sustained flight using wings covered with silk feathers.",
    detailedExplanation: "Abbas ibn Firnas conceived the possibility of manned flight by studying the aerodynamic structures and feather surface ratios of birds. His empirical process involved constructing a piloted glider using a lightweight frame of bent wooden ribs, silk sail wings, and real eagle feathers. His specific purpose was to achieve sustained, controlled horizontal gliding. Although he successfully achieved glider flight from the Jabal al-Arus mountain for over ten minutes, he famously overlooked the crucial role of a stabilizing tail unit. Resisting public skepticism and surviving a severe, spine-injuring landing, he proved that gravity could be conquered through structural aerodynamics.",
    mechanismBreakdown: [
      "Aerofoil Wings Construction: Lightweight wooden spans aligned with silk sheets and feathers mimicking glider wings.",
      "Aileron Action (Arm Controls): Using manual string pulleys to flex the wing edges, enabling elevation control.",
      "Glaseous Silica Smelting: Engineering high-purity glass lenses parsing light into spectral prisms."
    ],
    modernImpact: {
      medievalTech: "Flexible feathered wood glider frame",
      modernTech: "Modern gliders, hang-gliders, & wingsuits",
      description: "Ibn Firnas was the first to realize that human flight requires dynamic wings and lift curves, laying the groundwork for aerodynamics 1,000 years before Lilienthal and the Wright brothers."
    },
    timelineAchievements: [
      { year: 852, label: "Witnessed Armen Firman's early parachute tower trial, noting deficiencies in lift dynamics." },
      { year: 875, label: "Launches his 10-minute glider flight from the Córdoba hills, proving lift mechanics." },
      { year: 880, label: "Created an advanced astronomical planetarium room with simulated glowing stars and lightning." }
    ],
    historicalSignificance: "Broke the psychological barrier of gravity, validating that engineering could realize human flight through meticulous structural study of avian mechanics.",
    imageUrl: flyingMachine,
    accentColor: "gold"
  },
  {
    id: "al-jazari",
    name: "Badi al-Zaman al-Jazari",
    nickname: "Al-Jazari",
    lifespan: "1136 – 1206 CE",
    birthYear: 1136,
    deathYear: 1206,
    birthPlace: "Al-Jazira (Mesopotamia, Modern Turkey/Iraq)",
    field: Discipline.Engineering,
    inventionTitle: "The Elephant Clock & Segmental Automata Gears",
    shortSummary: "Invented the crankshaft, segmental gears, water-powered automated mechanical valves, and the legendary multisensory Elephant Clock.",
    detailedExplanation: "Driven by the quest to automate mechanical work and create accurate public timekeepers, Al-Jazari conceived revolutionary hydraulic feedback loops and gear assemblies. He developed a highly empirical engineering process, drafting detailed structural schematics and casting custom brass pistons, camshafts, and segmental gears. His purpose was to build self-regulating machines, exemplified by his multisensory Elephant Clock, which utilized a sinking perforated float to actuate mechanical drummers and dragons. He overcame the lack of standardized design principles by cataloging his work in 'The Book of Knowledge of Ingenious Mechanical Devices,' introducing the crankshaft and transforming water pressure into automated mechanical cycles.",
    mechanismBreakdown: [
      "Rotary to Linear Crankshaft: Converts circular waterwheel rotation into linear piston motion—the basis for modern engines.",
      "Perforated Internal Sinking Bowl: Floating vessel inside the elephant that steadily fills with water, sinking every 30 minutes.",
      "Automated Mechanical Trigger: Drops bronze balls that trip mechanical levers, sounding bells and resetting the float.",
      "Double-Acting Piston Pump: Alternating valves that pump water to elevated aqueduct vessels."
    ],
    modernImpact: {
      medievalTech: "The Crankshaft, Camshaft, & Segmental Automata Gears",
      modernTech: "Internal combustion car engines, robotic actuators, & automated dispensers",
      description: "Every modern vehicle on earth utilizes the crankshaft and cam system invented by Al-Jazari to convert chemical explosions into linear wheel rotation."
    },
    timelineAchievements: [
      { year: 1174, label: "Promoted to Chief Mechanical Architect under the Artuqid King in Diyarbakir." },
      { year: 1195, label: "Engineered automated robotic hand-washing reservoirs with float-reset triggers." },
      { year: 1206, label: "Completed his book of Ingenious Mechanical Devices, the bible of early mechanical design." }
    ],
    historicalSignificance: "Laid the foundation for cybernetics, control loops, and modern mechanical robotics through clean, reliable feedback-driven water and gear mechanisms.",
    imageUrl: jazariElephantClock,
    accentColor: "gold"
  },
  {
    id: "nasir-al-tusi",
    name: "Nasir al-Din al-Tusi",
    nickname: "Al-Tusi",
    lifespan: "1201 – 1274 CE",
    birthYear: 1201,
    deathYear: 1274,
    birthPlace: "Tus (Khorasan, Modern Iran)",
    field: Discipline.Astronomy,
    inventionTitle: "The Tusi Couple Astronomical Gear & Trigonometry",
    shortSummary: "Developed the revolutionary Tusi Couple planetary mechanism and established Trigonometry as an independent math system separate from astronomy.",
    detailedExplanation: "Faced with mathematical errors and physical contradictions in Ptolemy’s geocentric epicycle systems, Nasir al-Din al-Tusi conceived a brilliant geometric mechanism to model planetary motion. His empirical process combined rigorous astronomical tracking at the Maragheh Observatory with spherical geometry, resulting in the 'Tusi Couple'—a small circle rotating inside another of twice its diameter to convert uniform circular rotation into linear reciprocating motion. His purpose was to align physical celestial trajectories with mathematical models. Despite the immense challenge of calculating orbits without algebra or telescopes, his mechanism successfully resolved Ptolemaic anomalies, paving the pathway for Copernicus's heliocentric model.",
    mechanismBreakdown: [
      "The Tusi Couple: A circular gear rotating inside an outer ring frame twice its size, converting radial rotation into linear pathways.",
      "Trigonometry Isolation: Moving sine, cosine, and tangent rules separate from astronomical tables to outline pure math proofs.",
      "High-Precision Astrolabes: Fabricating massive brass astrolabes to calculate star elevations at the Maragheh Observatory."
    ],
    modernImpact: {
      medievalTech: "The Tusi Couple orbital converter gear",
      modernTech: "Hypocycloid gears, mechanical watches, & NASA space trajectory equations",
      description: "Copernicus used the Tusi Couple mechanism to formulate the heliocentric theory of the solar system, rendering space exploration coordinates possible."
    },
    timelineAchievements: [
      { year: 1259, label: "Convinced Hulagu Khan to construct the Maragheh Observatory, equipped with massive solar quadrants." },
      { year: 1265, label: "Published 'Zij-i Ilkhani' tables containing high-accuracy planetary coordinate coordinates." },
      { year: 1272, label: "Authored 'Kitab al-Shakl al-Qatta', establishing Trigonometry as an independent mathematical domain." }
    ],
    historicalSignificance: "Connected abstract mechanics and mathematical proof to actual astronomical observations, creating the empirical bridge that triggered the European Scientific Revolution.",
    imageUrl: tusiCoupleGear,
    accentColor: "gold"
  },
  {
    id: "umar-khayyam",
    name: "Umar al-Khayyam",
    nickname: "Umar al-Khayyam",
    lifespan: "1048 – 1131 CE",
    birthYear: 1048,
    deathYear: 1131,
    birthPlace: "Nishapur (Khorasan, Modern Iran)",
    field: Discipline.Mathematics,
    inventionTitle: "Geometric Solutions for Cubic Equations & Calendar Reform",
    shortSummary: "Discovered the geometric method for solving cubic equations using conic intersections and designed the highly accurate Jalali Solar Calendar.",
    detailedExplanation: "Conceived to solve equations that stumped classical mathematicians, Umar Khayyam developed a revolutionary geometric method for cubic expressions. Through an empirical process of intersecting parabolas, hyperbolas, and circles, he systematically calculated the positive roots of cubic equations as coordinates. His purpose was to establish a complete algebraic classification system. He overcame the geometric limits of Euclidean algebra and personal exile by simultaneously designing the Jalali solar calendar, calculating the solar year to 365.2424 days with accuracy surpassing modern Western calendars.",
    mechanismBreakdown: [
      "Conic Section Intersections: Finding positive roots of cubic expressions (like x³ + ax = b) by overlaying parabolas and circles.",
      "High-Accuracy Solar Calculation: Utilizing astrolabes to chart stellar orbits, refining the calendar to an error of 1 day in 5,000 years.",
      "Binomial Expansion Models: Developing the early algebraic triangle structures later credited to Pascal."
    ],
    modernImpact: {
      medievalTech: "Geometric conic equations & algebraic expansions",
      modernTech: "3D computer graphics engines & orbital math trackers",
      description: "Geometric solver math is the backbone of all modern 3D game engines, CAD modeling packages, and aerospace physics models."
    },
    timelineAchievements: [
      { year: 1074, label: "Invited to Isfahan by Sultan Malik-Shah I to build a monumental solar observatory." },
      { year: 1079, label: "Introduced the Jalali Calendar, which is still one of the most accurate calendars on Earth." },
      { year: 1100, label: "Completed 'Treatise on Demonstration of Problems of Algebra' containing conic cubic solutions." }
    ],
    historicalSignificance: "Bridged Euclidean geometry with operational algebra, establishing that abstract equations could be modeled and solved through physical, spatial lines and forms.",
    imageUrl: umarKhayyamObs,
    accentColor: "gold"
  },
  {
    id: "ali-qushji",
    name: "Ala al-Din Ali Qushji",
    nickname: "Ali Qushji",
    lifespan: "1403 – 1474 CE",
    birthYear: 1403,
    deathYear: 1474,
    birthPlace: "Samarkand (Modern Uzbekistan)",
    field: Discipline.Astronomy,
    inventionTitle: "Proof of Earth's Rotation",
    shortSummary: "Freed astronomy from Aristotelian physics, proved that the Earth rotates, and charted planetary orbits using empirical mathematical observations.",
    detailedExplanation: "Ala al-Din Ali Qushji conceived the radical idea that astronomy must be completely liberated from Aristotelian physics and speculative philosophy. His empirical process at the Samarkand Observatory centered on calculating planetary coordinates using Ulugh Beg’s 40-meter stone quadrant. His purpose was to establish astronomy as an independent, mathematics-driven science. He overcame religious opposition and geopolitical conflicts, ultimately presenting physical proofs of the Earth's daily axial rotation, establishing that astronomical systems must rely strictly on observational data rather than philosophical authority.",
    mechanismBreakdown: [
      "Separation of Physics and Astronomy: Refusing speculative philosophy; validating planetary vectors purely via geometry.",
      "Axial Rotation Proofs: Utilizing massive 40-meter stone quadrants to track small deviations in stellar coordinates over time.",
      "Moon Cartography: Creating high-detail astronomical drawings of the lunar face and coordinates."
    ],
    modernImpact: {
      medievalTech: "Observational astronomy & Earth rotation proof",
      modernTech: "Orbital mechanics & planetary satellites",
      description: "Qushji's emancipation of astronomy from dogmatic physics directly paved the way for Copernicus, Kepler, and Galileo to establish the modern solar system paradigm."
    },
    timelineAchievements: [
      { year: 1420, label: "Becomes director of the famous Samarkand Observatory, recording stellar charts." },
      { year: 1449, label: "Completed Ulugh Beg's masterpiece 'Zij-i Sultani', containing coordinate coordinates for 1,018 stars." },
      { year: 1473, label: "Appointed Professor of Astronomy at Hagia Sophia, transforming Ottoman engineering curriculum." }
    ],
    historicalSignificance: "Dethroned ancient geocentric dogma in astronomical theories, proving that scientific truths must be driven by rigorous geometric calculations and observed data.",
    imageUrl: qushjiPrimary,
    accentColor: "gold"
  },
  {
    id: "taqi-al-din",
    name: "Taqi al-Din al-Shami",
    nickname: "Taqi al-Din",
    lifespan: "1526 – 1585 CE",
    birthYear: 1526,
    deathYear: 1585,
    birthPlace: "Damascus (Modern-day Syria)",
    field: Discipline.Engineering,
    inventionTitle: "Six-Cylinder Steam Pump",
    shortSummary: "Invented the modern high-pressure steam-powered water turbine and designed spring-driven mechanical clocks with high accuracy.",
    detailedExplanation: "To meet the growing needs of mining drainages and royal palace waterworks, Taqi al-Din al-Shami conceived the revolutionary six-cylinder 'Monoblock' hydrostatic engine. Through systematic prototyping, he engineered a horizontal camshaft on an axle that triggered six double-acting pistons in succession, converting waterwheel or steam turbine rotation into continuous high-pressure pumping. His primary purpose was to automate vertical water elevation. He overcame the metallurgical limitations of hand-forged mechanical parts and the loss of royal patronage by simultaneously designing spring-driven clocks capable of tracking minutes and seconds, transforming Ottoman computational mechanics.",
    mechanismBreakdown: [
      "Camshaft Piston Drive: Concentric brass cams rotating on an axle to periodically strike six distinct pump pistons.",
      "Rotary Water Engine: Harnessing steam or water flows through a turbine to automate mechanical work.",
      "Seconds Escape Wheel: Escapement mechanisms calibrated with spring power to display time with high precision."
    ],
    modernImpact: {
      medievalTech: "Monoblock camshaft driven piston systems & mechanical spring-driven levers",
      modernTech: "Piston water pumps, hydraulic engines, & luxury watches",
      description: "The camshaft and piston architecture used in modern high-pressure water pumps and diesel fuel engines mirrors Taqi al-Din's 16th-century blueprints."
    },
    timelineAchievements: [
      { year: 1551, label: "Published 'Al-Turuq al-Saniyya fi al-Alat al-Ruhaniyya', cataloging early steam turbine models." },
      { year: 1559, label: "Engineered his six-cylinder water machine for the royal palace gardens." },
      { year: 1577, label: "Constructed the grand Constantinople Observatory of Taqi al-Din, charting stellar coordinates." }
    ],
    historicalSignificance: "Transformed classical mechanical clockwork and automated hydraulics into modular, scalable industrial engines, anticipating the industrial steam revolution.",
    imageUrl: taqiPrimary,
    accentColor: "gold"
  },
  {
    id: "ibn-nafis",
    name: "Ala al-Din ibn al-Nafis",
    nickname: "Ibn al-Nafis",
    lifespan: "1213 – 1288 CE",
    birthYear: 1213,
    deathYear: 1288,
    birthPlace: "Damascus (Modern-day Syria)",
    field: Discipline.Medicine,
    inventionTitle: "The Discovery of Pulmonary Blood Circulation",
    shortSummary: "Disproved Galen's ancient medical theory that blood passes directly through the heart wall, proving that blood flows through the lungs to be oxygenated.",
    detailedExplanation: "Ibn al-Nafis conceived the pulmonary model of blood circulation after identifying major logical and anatomical flaws in Galen's ancient medical texts. Through empirical human and animal dissection, he physically verified that the heart’s ventricular septum is completely solid, with no invisible pores. His specific purpose was to mathematically and anatomically trace blood flow through the respiratory system. Overcoming standard scholastic peer pressure and threats of heresy, he proved that blood must flow from the right ventricle to the lungs through the pulmonary artery, oxygenate inside lung capillaries, and return to the left ventricle, correcting 1,000 years of medical error.",
    mechanismBreakdown: [
      "Pulmonary Transit: Identifying that blood travels through the pulmonary artery to the lung tissue capillaries.",
      "Ventricular Septum Demonstration: Sectioning animal hearts to empirically prove the lack of pores in the dividing wall.",
      "Capillary System Prediction: Foreseeing the existence of small microscopic connections between veins and arteries."
    ],
    modernImpact: {
      medievalTech: "The pulmonary circulatory model",
      modernTech: "Cardiology, heart surgery, & pulmonary therapy",
      description: "Our complete understanding of human cardiovascular biology, coronary bypass surgery, and respiratory oxygenation stems directly from Ibn al-Nafis's pulmonary discoveries."
    },
    timelineAchievements: [
      { year: 1236, label: "Appointed Chief Physician of the Nasiri Hospital in Cairo, Egypt." },
      { year: 1242, label: "Published 'Sharh Tashrih al-Qanun' containing his groundbreaking pulmonary discovery." },
      { year: 1280, label: "Authored his comprehensive 30-volume medical manual, 'Al-Shamil fi al-Sina'at al-Tibbiyya'." }
    ],
    historicalSignificance: "Broke the stranglehold of ancient anatomical authority, proving that empirical anatomical dissection must override theoretical assumptions.",
    imageUrl: nafisBloodCirc,
    accentColor: "mint"
  },
  {
    id: "al-zahrawi",
    name: "Abu al-Qasim al-Zahrawi",
    nickname: "Al-Zahrawi",
    lifespan: "936 – 1013 CE",
    birthYear: 936,
    deathYear: 1013,
    birthPlace: "Medina Azahara (Near Córdoba, Spain)",
    field: Discipline.Medicine,
    inventionTitle: "200+ Surgical Instruments & Catgut",
    shortSummary: "Known as the Father of Surgery; designed over 200 specialized surgical instruments, including the scalpel, syringe, cautery, and bone-saw.",
    detailedExplanation: "To transform surgery from an undocumented, high-risk trade into a rigorous, academic medical science, Al-Zahrawi conceived over 200 specialized surgical instruments. His empirical process involved handcrafting scalpel blades, active retractors, bone-holding forceps, and syringe plungers, subsequently verifying their utility on patients in Cordoba. His primary purpose was to minimize internal tissue trauma and blood loss. He successfully overcame the challenges of postoperative hemorrhaging and infection by inventing deep cauterization techniques, implementing lithotomy procedures, introducing plaster bone casts, and documenting his designs in the 30-volume surgical classic 'Al-Tasrif'.",
    mechanismBreakdown: [
      "Modular Surgical Steel: Designing curved scalpel blades, active retractors, speculae, and bone-forceps for deep internal work.",
      "Surgical Syringe: Crafting glass tubes equipped with leather plungers to perform precise suction fluid removals.",
      "Active Cautery Hooks: High-heat metallic needles to seal arterial bleeding wounds, stopping hemorrhaging."
    ],
    modernImpact: {
      medievalTech: "Metal forceps, syringe plungers, scalpels, surgical scissors, & catgut sutures",
      modernTech: "Modern orthopedics, general surgery kits, & dental tools",
      description: "Step into any operating theater today, and you will find scalpels, retractors, forceps, and syringes whose design remains virtually identical to Al-Zahrawi's original 10th-century schematics."
    },
    timelineAchievements: [
      { year: 961, label: "Appointed personal surgeon of Caliph Al-Hakam II in Cordoba, Andalusian capital." },
      { year: 1000, label: "Completed 'Al-Tasrif' with extensive anatomical plates of his invented surgical steel instruments." },
      { year: 1010, label: "Pioneered early orthopedic splints and plaster body casts for broken limb healing." }
    ],
    historicalSignificance: "Established surgery as a distinct, highly professional branch of medical study, elevating it from a tradesmen guild activity to a rigorous, university-taught scientific discipline.",
    imageUrl: surgicalTools,
    accentColor: "mint"
  },
  {
    id: "al-kindi",
    name: "Abu Yusuf Ya'qub al-Kindi",
    nickname: "Al-Kindi",
    lifespan: "801 – 873 CE",
    birthYear: 801,
    deathYear: 873,
    birthPlace: "Basra (Modern-day Iraq)",
    field: Discipline.Mathematics,
    inventionTitle: "Frequency Analysis Cryptanalysis & Codebreaking",
    shortSummary: "Invented cryptanalysis and frequency analysis, discovering how to break secrets and ciphers by analyzing letter distributions.",
    detailedExplanation: "Seeking to break encrypted military and governmental communications in Abbasid Baghdad, Al-Kindi conceived the mathematical science of cryptanalysis and codebreaking. He established an empirical statistical process, analyzing enormous quantities of written manuscripts to tabulate the frequency distribution of Arabic letters under different writing styles. His purpose was to develop systematic decryption algorithms that could break any monoalphabetic substitution cipher. Overcoming the limits of traditional manual letter-by-letter decryption, he proved that letter-density patterns are constant in any language, elevating cryptography from an art of guesswork to a rigorous branch of statistical mathematics.",
    mechanismBreakdown: [
      "Classical Frequency Analysis: Analyzing letter probability distributions inside a sample text compared with normal language statistics.",
      "Cryptographic Transposition: Algorithms translating monoalphabetic substitution ciphers.",
      "Meteorological Calculations: Geometric models measuring the refraction of sunlight in clouds to forecast precipitation."
    ],
    modernImpact: {
      medievalTech: "The frequency analysis cipher-breaker grid",
      modernTech: "Cybersecurity, SSL encryption, & data decoding",
      description: "Modern data security networks, military encryption systems, and computer password hashes rely on cryptological designs initiated by Al-Kindi's codebreaking algorithms."
    },
    timelineAchievements: [
      { year: 830, label: "Appointed scholar of translated philosophical works under Caliph Al-Ma'mun." },
      { year: 850, label: "Published his legendary text deciphering encrypted secret scripts." },
      { year: 865, label: "Authored books detailing the chemistry of ancient perfumes, describing distillation processes." }
    ],
    historicalSignificance: "Gave birth to mathematical cryptology, transforming cryptography from a random guessing art into a systematic mathematical science that could be solved through logical statistics.",
    imageUrl: alKindiDesk,
    accentColor: "gold"
  },
  {
    id: "al-farghani",
    name: "Ahmad ibn Muhammad al-Farghani",
    nickname: "Al-Farghani",
    lifespan: "805 – 880 CE",
    birthYear: 805,
    deathYear: 880,
    birthPlace: "Farghana (Modern-day Uzbekistan)",
    field: Discipline.Astronomy,
    inventionTitle: "Astronomy Planetary Calculations & The Nilometer",
    shortSummary: "Calculated planetary distances, redefined stellar orbits, and engineered the high-precision Nile Nilometer measuring station.",
    detailedExplanation: "To safeguard Egypt from unpredictable, devastating droughts and agricultural collapses, Ahmad al-Farghani conceived the Al-Rawda Nilometer as an intricate, hydrologic measuring station. His empirical process involved calculating flow trajectories and modeling subterranean conduit channels to link the Nile's deep water layers with an octagonal marble measuring column. His specific purpose was to quantify and forecast annual flooding levels to determine fair tax rates. He overcame the lack of structural materials capable of enduring decades of heavy river currents and corrected atmospheric light refraction errors, simultaneously publishing 'Elements of Astronomy on Celestial Motions' to standardize global coordinate charts.",
    mechanismBreakdown: [
      "The Nilometer Conduit: Underground water channels linking Nile levels with a solid marble octagonal measurement column.",
      "Orbital Obliquity Tracking: Tracking small shifts in solar altitudes during winter and summer solstices.",
      "Atmospheric Refraction Correction: Adjusting planetary distances to account for the distorting bending of light in the sky."
    ],
    modernImpact: {
      medievalTech: "Stone fluid levels sensor column & celestial coordinates table",
      modernTech: "Hydrology sensors, river tracking telemetry, & space astronomy orbital math",
      description: "Al-Farghani's astronomical works were the primary texts used by European explorers to plan celestial navigation maps during the Age of Discovery."
    },
    timelineAchievements: [
      { year: 833, label: "Calculated the obliquity of the ecliptic and the average diameter of the Earth." },
      { year: 850, label: "Published 'Elements of Astronomy', compiling the coordinates of 15 constellations." },
      { year: 861, label: "Engineered and built the Al-Rawda Nilometer in Cairo, a work of civil engineering." }
    ],
    historicalSignificance: "Merged astronomical observation with actual civil and hydraulic engineering, demonstrating how tracking celestial cycles could guide agriculture, rivers, and survival.",
    imageUrl: alFarghaniNilometer,
    accentColor: "gold"
  },
  {
    id: "ibn-battuta",
    name: "Abu Abdullah ibn Battuta",
    nickname: "Ibn Battuta",
    lifespan: "1304 – 1369 CE",
    birthYear: 1304,
    deathYear: 1369,
    birthPlace: "Tangier (Modern-day Morocco)",
    field: Discipline.Astronomy, // mapped to Astronomy as Celestial Navigation
    inventionTitle: "Nautical Celestial Maps & Geographical Logbooks",
    shortSummary: "Traveled over 73,000 miles charting the medieval globe, utilizing maritime celestial star calculations to identify maritime travel times.",
    detailedExplanation: "To map the interconnected trade corridors, maritime lines, and regional cultures of the medieval world, Ibn Battuta conceived a monumental geographic logbook spanning 73,000 miles. His empirical process involved recording star altitudes at night using basic cross-staffs to determine exact latitudes, documenting local agricultural soils, trade-wind patterns, and water security networks. His specific purpose was to compile an accurate coordinate directory of Afro-Eurasia. Despite overcoming life-threatening pirate attacks, tropical diseases, shipwrecks, and geopolitical wars, his memoirs in 'The Rihla' transformed medieval geography from simple folklore into an empirical, spatial archive.",
    mechanismBreakdown: [
      "Celestial Altitude Navigation: Tracking polar star elevations using small cross-staffs to find latitude angles on caravans.",
      "Atmospheric Windrose Geometry: Charting maritime monsoon seasons based on stellar calendars to plot ocean transits.",
      "Coordinate Mapping Grid: Describing and connecting global trade hubs into an empirical travel directory."
    ],
    modernImpact: {
      medievalTech: "Spherical travel coordinate logbooks & stellar wind direction charts",
      modernTech: "International shipping lanes, geographical demographics, & GPS logistics",
      description: "The massive structural maps and coordinate travel guides created through Ibn Battuta's journeys formed the global network that linked East and West, anticipating international trade routes."
    },
    timelineAchievements: [
      { year: 1325, label: "Left Tangier on his initial Hajj pilgrimage, initiating his global journey." },
      { year: 1345, label: "Aboard maritime trading ships, reached China, documenting advanced ocean navigation." },
      { year: 1354, label: "Returned to Fez, dictating 'The Rihla' with incredibly rich geographic descriptions." }
    ],
    historicalSignificance: "Synthesized geographical coordinates, cultures, and trade wind logistics, transforming medieval maps into dynamic, living accounts of the spherical globe.",
    imageUrl: ibnBattutaPrimary,
    accentColor: "emerald"
  },
  {
    id: "piri-reis",
    name: "Ahmed Muhiddin Piri Reis",
    nickname: "Piri Reis",
    lifespan: "1465 – 1553 CE",
    birthYear: 1465,
    deathYear: 1553,
    birthPlace: "Gelibolu (Ottoman Empire, Modern Turkey)",
    field: Discipline.Mathematics, // mapped to Mathematics as Geometric Projection
    inventionTitle: "The Comprehensive World Chart",
    shortSummary: "Compiled the legendary 1513 World Map, utilizing grid geometry, mathematical coordinate projections, and astrolabe scales to map the Americas.",
    detailedExplanation: "Conceived as a master navigational asset for Ottoman maritime expansion, Piri Reis created his legendary 1513 World Map. His empirical process involved synthesizing twenty distinct source charts, including Portuguese coordinate logs, Arabic windrose lines, and early Columbian diagrams, projecting them mathematically onto gazelle-skin sheets. His specific purpose was to establish a standardized, grid-bound world coordinate navigation map. He overcame the immense challenges of conflicting chart scales, unmeasured longitudinal distances, and missing oceanic data, successfully aligning global coastlines, including the Americas and Antarctica, with remarkable precision.",
    mechanismBreakdown: [
      "Azimuthal Equidistant Projection: Converting the spherical geometry of the Earth to flat sheets with precise angular bearings.",
      "Loxodromic Navigation Lines: Drawing intersecting lines across windroses, letting ships maintain constant compass headings.",
      "Astrolabe Scaling Plates: Aligning regional maps using stellar coordinates calculated with brass astrolabes."
    ],
    modernImpact: {
      medievalTech: "Windrose grid geometry & Mercator-ancestral projections",
      modernTech: "Digital cartography, Google Maps coordinates, & modern aviation tracking",
      description: "Piri Reis's projection grids were an early precursor to modern mathematical chart projections used in global navigation databases and aviation trajectory plans."
    },
    timelineAchievements: [
      { year: 1513, label: "Completed his famous World Map on gazelle skin, presenting it to Sultan Selim I." },
      { year: 1521, label: "Published 'Kitab-ı Bahriye' (Book of the Sea), the definitive navigation atlas." },
      { year: 1528, label: "Drafted his highly detailed second World Map, charting Greenland and North America." }
    ],
    historicalSignificance: "Elevated cartography into a rigorous mathematical science by standardizing projections, scale grids, and windrose data.",
    imageUrl: piriReisPrimary,
    accentColor: "gold"
  },
  {
    id: "al-idrisi",
    name: "Abu Abdullah Muhammad al-Idrisi",
    nickname: "Al-Idrisi",
    lifespan: "1100 – 1165 CE",
    birthYear: 1100,
    deathYear: 1165,
    birthPlace: "Ceuta (Almoravid Empire, Modern Spain)",
    field: Discipline.Astronomy, // mapped to Astronomy as Spherical Geodesy
    inventionTitle: "The Spherical Silver Globe & Tabula Rogeriana",
    shortSummary: "Constructed the giant 'Tabula Rogeriana' map and engineered a massive three-dimensional solid-silver celestial and terrestrial globe.",
    detailedExplanation: "Commissioned by King Roger II of Sicily to compile a mathematically consistent representation of the physical globe, Al-Idrisi conceived the solid-silver planar world relief and the 'Tabula Rogeriana' atlas. His empirical process relied on interviewing hundreds of travelers, verifying distances through coordinate cross-referencing, and melting 400 pounds of pure silver to engrave terrestrial relief lines onto a massive disk. His purpose was to prove the Earth's sphericity and map seven distinct climate zones. He overcame spatial distortion errors and conflicting merchant journals, producing a highly advanced global atlas that detailed regional winds, trade networks, and waterways with historic accuracy.",
    mechanismBreakdown: [
      "Spherical Silver Engraving: Carving geographic contours and 3D reliefs onto an exact silver globe.",
      "The Seven Climate Zones: Dividing the northern hemisphere into seven coordinate divisions based on solar angles.",
      "Trigonometric Scale Integration: Recalculating distances from merchant logs into precise latitude and longitude curves."
    ],
    modernImpact: {
      medievalTech: "Solid silver spherical earth reliefs & coordinate zone divisions",
      modernTech: "Three-dimensional GIS mapping, satellite weather modeling, & globes",
      description: "Tabula Rogeriana was the first to merge mathematical latitude and longitude coordinates with physical climate zones, the direct ancestor of GIS mapping systems."
    },
    timelineAchievements: [
      { year: 1138, label: "Invited to the court of King Roger II of Sicily to compile a global structural map repository." },
      { year: 1154, label: "Completed the 'Tabula Rogeriana' atlas and cast their giant 2-meter solid silver globe." },
      { year: 1160, label: "Authored specialized botanical books, cataloging properties of ancient medical herbs." }
    ],
    historicalSignificance: "Successfully synthesized global geography into a cohesive spherical model, proving that the world can be scientifically understood and mapped through visual dimensions.",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
    accentColor: "emerald"
  },
  {
    id: "ibn-yunus",
    name: "Abu al-Hasan ibn Yunus al-Sadafi",
    nickname: "Ibn Yunus",
    lifespan: "950 – 1009 CE",
    birthYear: 950,
    deathYear: 1009,
    birthPlace: "Fustat (Cairo, Fatimid Egypt)",
    field: Discipline.Astronomy,
    inventionTitle: "Precision Long-Period Pendulum Tables & Gnomons",
    shortSummary: "Authored the monumental Hakimi Astronomical Tables, utilizing an early astronomical pendulum device to record solar and lunar cycles.",
    detailedExplanation: "Determined to resolve the chronometric errors that skewed lunar calendars, Ibn Yunus conceived a pioneering planetary time-tracking method using pendulums. Operating on the Mokattam hills in Cairo, his empirical process spanned thirty years of measuring solar altitude and planetary conjunctions using massive gnomons and tracking oscillation counts of copper weighted cords. His specific purpose was to compile 'Al-Zij al-Kabir al-Hakimi' for caliphs. Overcoming the atmospheric distortions of desert air and the absence of mechanical escapement clocks, he achieved coordinate time tracking precise to seconds, recommending pendulum measurements centuries before Galileo.",
    mechanismBreakdown: [
      "Long-Period Pendulum Trials: Using weighted copper pendulums to count oscillations, tracking solar timings.",
      "Astrometic Quadrant Tracking: Aligning massive iron gnomons and stone sundials to record exact minutes of eclipses.",
      "Trigonometric Interpolation: Resolving complex spherical celestial equations without log-tables using sine ratios."
    ],
    modernImpact: {
      medievalTech: "Pendulum-based timekeeping calibration & astrological eclipse grids",
      modernTech: "Quartz chronometers, atomic clocks, & precision space telemetry",
      description: "Ibn Yunus's calculations of eclipses and conjunctions are used today by astronomers to measure historical changes in the Earth's orbit and rotation speed."
    },
    timelineAchievements: [
      { year: 990, label: "Initiated a 30-year astronomical logging project at the Cairo observatory." },
      { year: 1000, label: "Discovered trigonometric sine product equations, simplifying astrometric math." },
      { year: 1008, label: "Completed the 'Hakimi Tables', resolving precise planetary coordinates and eclipse times." }
    ],
    historicalSignificance: "Breathed a high degree of precision into astronomical timekeeping, proving that tracking microscopic units of time is vital to understanding cosmic macrocosms.",
    imageUrl: ibnYunusPendulum,
    accentColor: "gold"
  },
  {
    id: "banu-musa",
    name: "Banu Musa Brothers (Muhammad, Ahmad, al-Hasan)",
    nickname: "Banu Musa",
    lifespan: "803 – 873 CE",
    birthYear: 803,
    deathYear: 873,
    birthPlace: "Baghdad (Modern-day Iraq)",
    field: Discipline.Engineering,
    inventionTitle: "The Automatons & Self-Regulating Valve Systems",
    shortSummary: "Engineered automated mechanical devices, self-regulating hydraulic control systems, and early mechanical feedback loops for fountains and clocks.",
    detailedExplanation: "Aiming to automate mechanical labor and isolate workers from dangerous environments, the Banu Musa brothers (Muhammad, Ahmad, and al-Hasan) conceived early cybernetic systems and mechanical feedback loops. Their empirical process involved drafting layout plans for over one hundred devices, forging modular bronze gears, and testing self-regulating conical float valves. Their specific purpose was to execute automated mechanical sequences without live operators, such as self-feeding lamps and gas-detecting safety masks. Overcoming the lack of advanced metallurgy and continuous power sources, they published 'Kitab al-Hiyal,' introducing automated control valves that laid the foundations for modern control systems.",
    mechanismBreakdown: [
      "Conical Float Valve: A plug valve linked to a copper float that automatically regulates oil, fuel, or water levels.",
      "Wobbling Lever Alternator: Alternating gear triggers redirecting continuous streams of water between distinct fountain nozzles.",
      "Dynamic Air Valve Mask: Safe physical breathing valves that close upon encountering heavy noxious carbon fumes."
    ],
    modernImpact: {
      medievalTech: "Self-regulating conical control valves & water alternator feeds",
      modernTech: "Automated carburetors, float controllers, & hydraulic actuators",
      description: "Every modern flush toilet tank, water level float controller, and fuel carburetor utilizes the automatic feedback and float mechanism designed by the Banu Musa brothers."
    },
    timelineAchievements: [
      { year: 825, label: "Appointed to run scientific translation schools by Abbasid Caliph Al-Ma'mun." },
      { year: 850, label: "Published 'Kitab al-Hiyal' describing 100 ingenious mechanical devices." },
      { year: 865, label: "Pioneered specialized gear shafts and safety valves in civil water filtration works." }
    ],
    historicalSignificance: "Advanced the science of mechanics from visual wonders into true cybernetic automation, introducing the practical concept of reliable physical feedback loops.",
    imageUrl: banuMusa,
    accentColor: "gold"
  },
  {
    id: "ibn-khaldun",
    name: "Abu Zayd Abd al-Rahman ibn Khaldun",
    nickname: "Ibn Khaldun",
    lifespan: "1332 – 1406 CE",
    birthYear: 1332,
    deathYear: 1406,
    birthPlace: "Tunis (Modern-day Tunisia)",
    field: Discipline.Mathematics,
    inventionTitle: "Scientific Historiography & Modern Sociology",
    shortSummary: "Founded the sciences of sociology and historiography, formulating theories of social cohesion (Asabiyyah) and economic cycles.",
    detailedExplanation: "Disturbed by the unscientific, mythologized historical records popular in his era, Ibn Khaldun conceived the foundational sciences of sociology and cyclical historiography. His empirical process involved analyzing centuries of dynastic chronicles and comparative tribal movements across North Africa. His specific purpose was to uncover the deterministic socioeconomic laws governing the rise and fall of civilizations, formulating the concept of social solidarity ('Asabiyyah'). He overcame political exile, imprisonment, and the plague to draft 'Al-Muqaddimah,' modeling historical growth and economic taxation curves centuries before Western scholars.",
    mechanismBreakdown: [
      "Asabiyyah (Social Cohesion): The core bond of tribal solidarity that gives collective rise to sovereign political powers.",
      "The Dynastic Lifecycle Model: Mapping physical growth, luxury levels, administrative decay, and ultimate collapse of states.",
      "The Khaldun Economic Curve: Highlighting how lowered tax rates boost productivity and maximize total royal revenue."
    ],
    modernImpact: {
      medievalTech: "Cyclical social decay tracking tables & early fiscal models",
      modernTech: "Macroeconomics, modern sociology, & civil demographics tracking",
      description: "President Reagan and modern economists famously cited the 'Laffer Curve,' whose core concept—lowering taxes to raise total returns—was mathematically described in 'Al-Muqaddimah'."
    },
    timelineAchievements: [
      { year: 1377, label: "Wrote 'Al-Muqaddimah' inside a small fort in Oran, Algeria." },
      { year: 1382, label: "Appointed Chief Justice of Cairo, teaching sociology lessons at Jamia Al-Azhar." },
      { year: 1401, label: "Negotiated regional terms with Timur the Lame outside the besieged city walls of Damascus." }
    ],
    historicalSignificance: "Transformed history from a narrative of battles and lineages into a verifiable, deterministic science of structural trends, demography, and economics.",
    imageUrl: ibnKhaldunPrimary,
    accentColor: "gold"
  },
  {
    id: "qutb-al-din-al-shirazi",
    name: "Qutb al-Din Mahmud al-Shirazi",
    nickname: "Al-Shirazi",
    lifespan: "1236 – 1311 CE",
    birthYear: 1236,
    deathYear: 1311,
    birthPlace: "Shiraz (Modern-day Iran)",
    field: Discipline.Physics,
    inventionTitle: "The Physics of the Rainbow & Celestial Optics",
    shortSummary: "Formulated the first accurate mathematical explanation for the formation of the rainbow using double refraction and reflection in water droplets.",
    detailedExplanation: "Conceived to solve the ancient mystery of optical dispersion in the sky, Qutb al-Din al-Shirazi developed the first mathematically accurate theory of rainbow formation. His empirical process involved constructing large, water-filled spherical glass globes to mimic cloud droplets, tracing how incoming light rays bend, mirror, and branch off inside the crystal water. His specific purpose was to mathematically calculate the angles of double refraction and internal reflection. Overcoming the limits of traditional ray theory, he established that rainbows arise from light entering a droplet, refracting, reflecting off the droplet’s back wall, and refracting again during exit, laying the foundation for modern prism optics.",
    mechanismBreakdown: [
      "Double Refraction/Reflex Angle: Calculating the angles at which incoming light rays bend on entry and exit within a round sphere.",
      "Internal Water Drop Reflection: Modeling the inner mirroring threshold that redirects incoming light waves back.",
      "Planetary Model Reclination: Constructing geocentric epicycles that resolved Mercury's irregular orbits."
    ],
    modernImpact: {
      medievalTech: "Spherical droplet light refraction models & prism spectra",
      modernTech: "Laser prism refractometry, fibre optics, & atmospheric optical sensors",
      description: "Our understanding of light dispersion, glass fiber optic transmission cables, and spectral lasers relies on the double-refraction equations formulated by Al-Shirazi."
    },
    timelineAchievements: [
      { year: 1260, label: "Managed and expanded astronomical datasets at the newly opened Maragheh Observatory." },
      { year: 1285, label: "Published 'Nihayat al-idrak' establishing initial models of planetary motion." },
      { year: 1295, label: "Demonstrated the rainbow's refraction and light dispersion using spherical water-filled glass globes." }
    ],
    historicalSignificance: "Successfully resolved the optical mystery of the rainbow through empirical physics, connecting abstract light equations directly with natural spectacles.",
    imageUrl: alShirazi,
    accentColor: "gold"
  },
  {
    id: "al-sufi",
    name: "Abu al-Husayn Abd al-Rahman al-Sufi",
    nickname: "Al-Sufi",
    lifespan: "903 – 986 CE",
    birthYear: 903,
    deathYear: 986,
    birthPlace: "Rey (Modern-day Iran)",
    field: Discipline.Astronomy,
    inventionTitle: "The Celestial Atlas & The Andromeda Discovery",
    shortSummary: "Authored 'The Book of Fixed Stars', mapping constellations with extreme detail and documenting the first description of the Andromeda Galaxy.",
    detailedExplanation: "Conceived to correct the accumulation of astronomical errors in Ptolemy's 'Almagest', Abd al-Rahman al-Sufi designed a highly precise, updated mapping of the night sky. His empirical process at Isfahan centered on continuous astrolabe observations, comparing ancient coordinate calculations with actual star brightness, color, and magnitude. His specific purpose was to publish 'The Book of Fixed Stars' (Kitab al-Kawakib al-Thabitah) for navigators. He overcame the lack of tracking optics by utilizing sheer visual focus, documenting constellations with double-view illustrations, and famously recording 'a small cloud' near Andromeda—the first human description of an external galaxy.",
    mechanismBreakdown: [
      "Andromeda Nebula Mapping: Identifying and cataloging nebulae as gaseous space clouds distinct from isolated stars.",
      "Star Magnitude Correction: Standardizing star brightness values based on real astrolabe calculations.",
      "Spherical Constellation Plates: Designing overlapping celestial plates showing constellations from the Earth and from outer space."
    ],
    modernImpact: {
      medievalTech: "Engraved celestial sky atlases & gaseous cloud coordinates",
      modernTech: "Deep space cosmology, satellite coordinate libraries, & stellar catalogs",
      description: "Many stars recognized today, such as Rigel and Aldebaran, still use the exact names and brightness coordinates set down in Al-Sufi's 10th-century catalogs."
    },
    timelineAchievements: [
      { year: 964, label: "Published the 'Book of Fixed Stars', combining Arabic folk maps with astronomical math." },
      { year: 975, label: "Engineered massive brass ring astrolabes for the Royal Court in Isfahan." },
      { year: 980, label: "Mapped and updated the orbit path calculations of the Moon, Sun, and inner planet loops." }
    ],
    historicalSignificance: "Created the classical master atlas of deep space coordinates, establishing that deep-space nebulas and galaxies lay far beyond our solar system limit.",
    imageUrl: alSufi,
    accentColor: "gold"
  },
  {
    id: "ibn-majid",
    name: "Ahmad ibn Majid al-Najdi",
    nickname: "Ibn Majid",
    lifespan: "1421 – 1500 CE",
    birthYear: 1421,
    deathYear: 1500,
    birthPlace: "Julfar (Modern-day Ras Al Khaimah, UAE)",
    field: Discipline.Astronomy,
    inventionTitle: "Compass & Monsoon Navigation Matrices",
    shortSummary: "A master navigator, author of nautical catalogs, and inventor who stabilized the magnetic compass needle on a cards wheel for ocean navigation.",
    detailedExplanation: "To enable safe maritime navigation across the treacherous monsoon-driven Indian Ocean, Ahmad ibn Majid conceived the first sway-stabilized card-mounted magnetic compass box. His empirical process involved mounting a magnetized needle onto a balanced, lightweight paper windrose card inside a wooden casing, subsequently verifying its orientation against stellar coordinates during actual ocean transits. His specific purpose was to develop reliable, storm-proof direction-tracking. He overcame the oral secrecy of ancestral navigators and constant sea motion by codifying these patterns in 'Al-Fawa'id,' providing standard coordinate matrices that unlocked the oceans for international shipping.",
    mechanismBreakdown: [
      "32-Point Card Compass: Mounting a magnetic iron needle on a balanced paper directional dial, stabilizing coordinate tracking.",
      "Astrolabe Horizon Grid: Redefining regional astrolabe plates for use on swaying, moving wooden ships.",
      "Monsoon Sailing Matrix: Calculating optimal departure dates based on seasonal wind currents."
    ],
    modernImpact: {
      medievalTech: "Sway-stabilized magnetic compass box & wind tables",
      modernTech: "Marine autopilots, magnetic gyroscopes, & oceanic shipping charts",
      description: "The modern card compass used on vessels and deep-sea vessels is a direct, linear descendant of the stabilized compass box engineered by Ibn Majid."
    },
    timelineAchievements: [
      { year: 1460, label: "Published his marine masterpieces cataloging routes across the Persian Gulf and Red Sea." },
      { year: 1480, label: "Developed maritime astrolabes and wood instruments designed specifically for ship navigation." },
      { year: 1498, label: "Navigated Vasco da Gama across the Indian Ocean from Africa directly to Malabar, India." }
    ],
    historicalSignificance: "Synthesized centuries of oral sea navigation lore into robust, mathematical formulas and scientific charts, unlocking the Indian Ocean for global nautical travel.",
    imageUrl: ibnMajid,
    accentColor: "gold"
  },
  {
    id: "al-muradi",
    name: "Ali ibn Khalaf al-Muradi",
    nickname: "Al-Muradi",
    lifespan: "1000 – 1083 CE",
    birthYear: 1000,
    deathYear: 1083,
    birthPlace: "Cordoba (Al-Andalus, Modern Spain)",
    field: Discipline.Engineering,
    inventionTitle: "The Book of Secrets & Complex Clock Gears",
    shortSummary: "Engineered revolutionary water clocks, automatic gear-train systems, automata pageants, and high-precision solar coordinates.",
    detailedExplanation: "Conceived to advance mechanical automation through hydraulic and gear synchronization, Ali al-Muradi designed complex gear towers in 11th-century Islamic Spain. His empirical process involved forging and carving segmental gears (wheels with teeth on only specific arcs) and planetary gear-sets to achieve intermittent motions. His specific purpose was to automate public water clocks and drive complex puppet pageants. He overcame the high friction and dynamic tolerances of medieval wood and brass construction, successfully documenting his designs in 'The Book of Secrets' and pioneering the earliest known gear-train assemblies in horological history.",
    mechanismBreakdown: [
      "Segmental Gear Trains: Connecting broken gear rings that drive interlocking gears to rotate intermittently.",
      "Automated Robotic Theaters: Lever columns triggered by rising water reservoirs that move figurines to sound horns.",
      "Telescoping Water Tubes: Precision copper tubes that slowly leak fluid to keep clocks calibrated over seasons."
    ],
    modernImpact: {
      medievalTech: "Segmental gear assemblies & rope-pulley automaton loops",
      modernTech: "Automated factory assemblies, automotive gear boxes, & robotic systems",
      description: "Modern complex gearboxes and transmission units in machines or watches rely on the fundamental segmental gear principles first sketched by Al-Muradi."
    },
    timelineAchievements: [
      { year: 1045, label: "Constructed the famous Toledan automated water clocks on the Tagus River." },
      { year: 1070, label: "Completed 'The Book of Secrets', describing 30 ingenious mechanical clocks." },
      { year: 1080, label: "Engineered multi-level water pumps using planetary gear sets." }
    ],
    historicalSignificance: "Pioneered the complex use of segmental and planetary gearing systems, moving engineering beyond simple pulleys to advanced mechanical automata.",
    imageUrl: alMuradi,
    accentColor: "gold"
  },
  {
    id: "ibn-zuhr",
    name: "Abu Marwan Abd al-Malik ibn Zuhr",
    nickname: "Ibn Zuhr",
    lifespan: "1094 – 1162 CE",
    birthYear: 1094,
    deathYear: 1162,
    birthPlace: "Seville (Al-Andalus, Modern Spain)",
    field: Discipline.Medicine,
    inventionTitle: "Tracheotomy Operations & Scientific Parasitology",
    shortSummary: "Pioneered experimental post-mortem autopsies, performed the first successful tracheotomy operation, and discovered the itch mite parasite.",
    detailedExplanation: "Abu Marwan ibn Zuhr conceived a clinical approach to medicine designed to break the dogmatic authority of the ancient Humoral medical theories. His empirical process was based on direct post-mortem autopsies, physical dissections, and systematic animal trials, such as performing experimental tracheotomies on goats to verify airway safety. His specific purpose was to establish pathology-driven diagnostics and clinical ethics. Overcoming severe theoretical opposition and hospital resource limits, he successfully executed the first human tracheotomy, introduced esophageal tube feeding, and discovered the microscopic scabies itch mite, founding the science of parasitology.",
    mechanismBreakdown: [
      "Tracheotomy Procedure: Constructing a small precise incision in the neck cartilage to bypass blocked airways safely.",
      "Artificial Tube Feeding: Inserting a thin silver tube down the esophagus to bypass throat cancer blockages.",
      "Parasitological Diagnostic: Extracting the microscopic scabies insect using a fine steel needle."
    ],
    modernImpact: {
      medievalTech: "Experimental tracheotomy tubes & parasitic identification",
      modernTech: "Modern emergency tracheotomies, parasitology, & tube feeding protocols",
      description: "Emergency responders performing life-saving tracheotomies on blocked airways are using surgical techniques first validated by Ibn Zuhr on animals and humans."
    },
    timelineAchievements: [
      { year: 1120, label: "Appointed royal court physician to the Almoravid dynasty in Seville." },
      { year: 1140, label: "Discovered the scabies itch mite, the first proof of an infectious micro-parasite." },
      { year: 1150, label: "Published 'Al-Taysir', a medical manual detailing surgical cancers, heart issues, and skin diseases." }
    ],
    historicalSignificance: "Freed surgery and infectious diagnostics from philosophical theories, replacing them with empirical pathology, autopsy procedures, and animal trials.",
    imageUrl: ibnZuhr,
    accentColor: "mint"
  },
  {
    id: "al-dinawari",
    name: "Abu Hanifa Ahmad al-Dinawari",
    nickname: "Al-Dinawari",
    lifespan: "815 – 896 CE",
    birthYear: 815,
    deathYear: 896,
    birthPlace: "Dinawar (Kermanshah, Modern-day Iran)",
    field: Discipline.Chemistry,
    inventionTitle: "Agricultural Botany & Medicinal Pharmacology",
    shortSummary: "Founded Islamic botany, author of 'The Book of Plants', classifying hundreds of species, plant developments, and agricultural soils.",
    detailedExplanation: "Abu Hanifa al-Dinawari conceived agricultural botany as a scientific way to optimize crop yields and discover new organic medicines. In his private botanical garden in Kermanshah, his empirical process was based on soil analysis, soil-to-seed ratio tests, and logging the complete life cycles of over 600 plant species. His specific purpose was to compile 'The Book of Plants' (Kitab al-Nabat) as an agronomic encyclopedia. He successfully overcame the challenges of geographical isolation and inconsistent terminology, establishing systematic soil taxonomies, crop rotation protocols, and organic solvent extraction techniques.",
    mechanismBreakdown: [
      "Agricultural Soil Zoning: Grading sand, silt, and limestone ratios to maximize soil nutrition.",
      "Herbal Extraction Chemistry: Cold-pressing and water-boiling roots to isolate pure pharmaceutical juices.",
      "Plant Growth Calibration: Tracking solar and lunar moisture tables to systematically schedule agricultural harvests."
    ],
    modernImpact: {
      medievalTech: "Systematic botanical classifications & soil analysis logs",
      modernTech: "Agricultural agronomy, organic chemistry, & herbal medicine",
      description: "Modern organic pharmacology and agricultural crop rotation systems use plant classifications and soil soil chemistry principles initiated by Al-Dinawari."
    },
    timelineAchievements: [
      { year: 845, label: "Constructed a private botanical garden inside Kermanshah to observe crop properties." },
      { year: 865, label: "Published 'The Book of Plants', the earliest comprehensive botanical catalog." },
      { year: 880, label: "Formulated the mathematical coordinates defining regional storm cloud trajectories." }
    ],
    historicalSignificance: "Established botany as an independent scientific branch, detailing plant physiology, life cycles, soil structures, and chemical utility.",
    imageUrl: alDinawari,
    accentColor: "emerald"
  },
  {
    id: "mariam-al-ijliya",
    name: "Mariam al-Ijliya al-Asturlabiya",
    nickname: "Mariam al-Ijliya",
    lifespan: "930 – 967 CE",
    birthYear: 930,
    deathYear: 967,
    birthPlace: "Aleppo (Modern-day Syria)",
    field: Discipline.Engineering,
    inventionTitle: "The Precision Astrolabe & Navigational Gears",
    shortSummary: "A legendary mechanical engineer and astrolabe maker in Sayf al-Dawla's court who crafted highly accurate calculation instruments.",
    detailedExplanation: "To engineer precision calculators that mapped the sky and computed geographical coordinates, Mariam al-Ijliya conceived highly refined, balanced brass astrolabe systems. Her empirical process involved casting pure bronze sheets, executing microscopic coordinate engravings, and calibrating rotating openwork 'rete' plates to match local stellar altitudes under Sayf al-Dawla's court in Aleppo. Her specific purpose was to construct reliable, compact analog computers for geographic localization and timekeeping. She successfully overcame the severe metallurgical tolerances and math complexities of stereographic path mapping, elevating the status of women in medieval mechanical engineering.",
    mechanismBreakdown: [
      "Micron Engraving Plate: Marking astronomical lines on brass plates to match specific celestial coordinates.",
      "Rete Rotation Alignment: Designing openwork bronze star index plates that rotate precisely around a central pivot pin.",
      "Altitude Alidade Sight: Engineering a rear rotating sight-rule that measures solar or stellar peak angles."
    ],
    modernImpact: {
      medievalTech: "Mathematical brass coordinates gears & coordinate discs",
      modernTech: "Analog computers, gear assemblies, & astronomical tracking systems",
      description: "The intricate design principles of coordinate discs and analog mechanical calculators run through Mariam's early mathematical brass gear calibrations."
    },
    timelineAchievements: [
      { year: 944, label: "Appointed Chief Astrolabe and Mechanics Architect for the Emis in Aleppo." },
      { year: 955, label: "Successfully fabricated her balanced geographical calculation discs." },
      { year: 965, label: "Completed a portable miniature astrolabe designed for sea and land surveyors." }
    ],
    historicalSignificance: "Elevated the craftsmanship of mathematical and astronomical instruments to high levels of precision, merging astronomical theory with mechanical mastery.",
    imageUrl: mariamAlIjliya,
    accentColor: "gold"
  },
  {
    id: "ibn-al-baitar",
    name: "Abu Muhammad ibn al-Baitar",
    nickname: "Ibn al-Baitar",
    lifespan: "1197 – 1248 CE",
    birthYear: 1197,
    deathYear: 1248,
    birthPlace: "Malaga (Al-Andalus, Modern Spain)",
    field: Discipline.Chemistry,
    inventionTitle: "The Comprehensive Pharmacopoeia & Herbal Alchemy",
    shortSummary: "The preeminent botanist and pharmacist of Malaga, documenting over 1,400 medical drugs, oils, and chemical extraction recipes.",
    detailedExplanation: "Driven by the quest to standardize pharmacological compounding and banish fraudulent medical recipes, Ibn al-Baitar conceived a rigorous, global simple-drug compendium. His empirical process was based on gathering specimens across Al-Andalus, Greece, and Syria, performing solvent extractions, and documenting patient responses to herbal preparations. His purpose was to compose 'Al-Jami' li-Mufradat', standardizing 1,400 medicinal plants, minerals, and animal extracts. He overcame the immense challenge of fragmented, multilingual botanical databases by establishing a systematic alphabetical nomenclature, detailing precise extraction temperatures and dosage metrics.",
    mechanismBreakdown: [
      "Fractional Extraction Recipe: Mixing herbs with boiling oils or vinegar to separate pure active medicinal principles.",
      "Heavy Metal Neutralization: Cautiously dissolving mineral solids to formulate safe antiseptic unguents.",
      "Dosage Density Indexing: Aligning medication quantity directly with patient weight and symptom severity."
    ],
    modernImpact: {
      medievalTech: "Pharmacological compound recipes & fractionating solvent guides",
      modernTech: "Modern pharmacopoeia tables, clinical pharmacy, & botanical cosmetics",
      description: "More than half of the herbal extract compounds and chemical preparation procedures detailed by Ibn al-Baitar remain the basis of traditional medicine and organic cosmetics."
    },
    timelineAchievements: [
      { year: 1215, label: "Traveled across Spain, Morocco, Greece, and Syria collecting plant specimens." },
      { year: 1224, label: "Appointed Chief Herbalist and Pharmacist of the Ayyubid court in Cairo." },
      { year: 1240, label: "Completed his Pharmacopoeia compilation mapping 1,400 healing drugs." }
    ],
    historicalSignificance: "Created the absolute master handbook of medical pharmacology and active herbal extracts, standardizing chemical drug descriptions for centuries.",
    imageUrl: ibnAlBaitar,
    accentColor: "emerald"
  },
  {
    id: "ibn-rushd",
    name: "Abu al-Walid Muhammad ibn Ahmad ibn Rushd",
    nickname: "Ibn Rushd",
    lifespan: "1126 – 1198 CE",
    birthYear: 1126,
    deathYear: 1198,
    birthPlace: "Cordoba (Al-Andalus, Modern Spain)",
    field: Discipline.Medicine,
    inventionTitle: "Al-Kulliyat fi al-Tibb (Colliget) & Medical Generalities",
    shortSummary: "Authored the seminal medical compendium defining universal rules of therapeutics, diagnostics, and physiological mechanisms.",
    detailedExplanation: "Ibn Rushd (Averroes) conceived 'Al-Kulliyat fi al-Tibb' (Generalities of Medicine) as a rigorous, logical framework designed to redefine medicine as a rational, universal physical science. Through empirical clinical studies and anatomical observations in Cordoba, he correctly identified that the retina, rather than the lens, is the photoreceptive screen of the eye, and documented that smallpox survivors acquire lifelong biological immunity. His purpose was to decouple medicine from speculative philosophy, establishing general physiological rules. Resisting political exile and mainstream scholarly skepticism, he successfully proved that human vision and disease processes operate under consistent, mathematically sound physical structures.",
    mechanismBreakdown: [
      "Kulliyat Analysis (General Principles): Treating medicine as a general science by identifying fundamental biological rules first.",
      "Retinal Vision Mechanics: Proving that the retina, not the crystalline lens, is the photoreceptive screen of the eye.",
      "Smallpox Active Immunity: Observing and documenting that patients surviving smallpox acquire lifetime resistant immunity."
    ],
    modernImpact: {
      medievalTech: "Universal medicine framework & retinal photoreception maps",
      modernTech: "Physiological optics, ocular diagnostics, and active immunity concepts",
      description: "Ibn Rushd's identification of the retina as the primary visual light receptor paved the way for modern ophthalmology, while his smallpox documentation formed the earliest precursors to immunization theories."
    },
    timelineAchievements: [
      { year: 1153, label: "Conducted astronomic observations in Marrakesh and drafted physical planetary orbits." },
      { year: 1162, label: "Completed 'Al-Kulliyat fi al-Tibb' (Generalities of Medicine) of global influence." },
      { year: 1182, label: "Appointed Chief Royal Physician of the Almohad Court in Cordoba." }
    ],
    historicalSignificance: "Defined a unified analytical logic bridging physiology, therapeutics, and ophthalmology, separating local symptoms from universal physical biological systems.",
    imageUrl: ibnRushdChamber,
    accentColor: "mint"
  },
  {
    id: "al-battani",
    name: "Abu Abdallah Muhammad ibn Jabir ibn Sinan al-Battani",
    nickname: "Al-Battani",
    lifespan: "858 – 929 CE",
    birthYear: 858,
    deathYear: 929,
    birthPlace: "Harran (Modern Turkey)",
    field: Discipline.Astronomy,
    inventionTitle: "Sabian Astronomical Tables & Advanced Trigonometry",
    shortSummary: "Calculated with unprecedented precision the length of the solar year, discovered the precession of the equinoxes, and pioneered trigonometric functions like sine and tangent.",
    detailedExplanation: "Determined to correct the systematic errors that had accumulated in old geocentric star tables over centuries, Al-Battani conceived highly accurate planetary calculations. Working from his Raqqa observatory along the Euphrates, his empirical process was based on forty years of tracking solar orbits using a massive ring-dial and substituting Ptolemy’s chords with modern trigonometric functions (such as sines, cosines, and tangents). His purpose was to mathematically model solar eccentricities and predict eclipses, calculating the solar year to 365 days, 5 hours, 46 minutes, and 24 seconds. He overcame political shifts and measuring errors, establishing advanced trigonometry as the primary computational language of astronomy.",
    mechanismBreakdown: [
      "Sine and Tangent Formulae: Substituting pure geometric chords with modern ratios, proving the formulas such as tan(a) = sin(a)/cos(a).",
      "Solar Year Calibration: Measuring the sun's apogee and calculating the precise duration of the Earth's orbit around the sun.",
      "Equinoctial Precession Mapping: Refinement of the movement of the Earth's axis of rotation relative to the stars."
    ],
    modernImpact: {
      medievalTech: "The Sabian Tables and advanced trigonometric formulas",
      modernTech: "Space navigation, global satellite orbits, and geodesic surveyor calculators",
      description: "Al-Battani's trigonometric formulas and accurate orbital tracking allowed European astronomers like Copernicus and Galileo to calculate planetary orbits and predict eclipses."
    },
    timelineAchievements: [
      { year: 880, label: "Established his custom desert astronomical observatory in Raqqa along the Euphrates." },
      { year: 901, label: "Discovered that the direction of the Sun's eccentricity was changing, proving changes in Earth's orbit." },
      { year: 918, label: "Published the Sabian Tables, which remained the central reference for astronomers globally for five centuries." }
    ],
    historicalSignificance: "Transformed classical visual astronomy into a quantitative mathematical science governed by trigonometric functions.",
    imageUrl: alBattaniObs,
    accentColor: "gold"
  },
  {
    id: "thabit-ibn-qurra",
    name: "Al-Sabi Thabit ibn Qurra al-Harrani",
    nickname: "Thabit ibn Qurra",
    lifespan: "826 – 901 CE",
    birthYear: 826,
    deathYear: 901,
    birthPlace: "Harran (Modern Turkey)",
    field: Discipline.Mathematics,
    inventionTitle: "Amicable Number Theorem & Non-Euclidean Geometry Precursors",
    shortSummary: "Discovered a famous theorem for finding amicable numbers, developed mechanics on the balance, and generalized the Pythagorean theorem.",
    detailedExplanation: "Thabit ibn Qurra conceived his landmark theorems to resolve fundamental issues in Euclidean geometry and number theory. His empirical process involved translating and correcting ancient Greek manuscripts at the House of Wisdom while designing physical lever trials to mathematically formulate the laws of equilibrium (statics) in 'Kitab fi al-Qarastun'. His specific purpose was to generalize algebraic equations and model physical balance mechanics. Overcoming contemporary mathematical dogmas, he successfully formulated a theorem to calculate amicable numbers, challenged Euclid's parallel postulate, and laid the early analytical grounds for non-Euclidean geometry.",
    mechanismBreakdown: [
      "Thabit's Amicable Rule: Applying his formula using powers of two to generate pairs of mutual amicable numbers like (220, 284).",
      "Pythagorean Theorem Extension: Generalizing the theorem to all types of triangles, arbitrary or obtuse, via proportional ratios.",
      "The Kitab fi al-Qarastun (Statics Balance): Mathematically deriving the law of the lever and calculating equilibrium for heavy loads."
    ],
    modernImpact: {
      medievalTech: "Statics of levers & Thabit's amicable number formula",
      modernTech: "Structural mechanics, computer cryptography, and structural load design",
      description: "Thabit's early formulations of the laws of equilibrium and statics underlay the mechanics utilized in building bridges and structures, while his number theory formulas support modern cryptography algorithms."
    },
    timelineAchievements: [
      { year: 860, label: "Joined the House of Wisdom under the patronage of the Banu Musa brothers." },
      { year: 870, label: "Drafted his landmark mathematical text on the demonstration of amicable numbers." },
      { year: 890, label: "Wrote 'Kitab fi'l-Qarastun' (The Book of the Beam Balance), creating the earliest scientific study of mechanical levers." }
    ],
    historicalSignificance: "Pioneered mechanical statics and advanced number theory, expanding mathematical proofs into physical mechanical systems.",
    imageUrl: thabitMath,
    accentColor: "gold"
  },
  {
    id: "ibn-al-shatir",
    name: "Ala al-Din Ali ibn Ibrahim ibn al-Shatir al-Muwaqqit",
    nickname: "Ibn al-Shatir",
    lifespan: "1304 – 1375 CE",
    birthYear: 1304,
    deathYear: 1375,
    birthPlace: "Damascus (Modern Syria)",
    field: Discipline.Astronomy,
    inventionTitle: "Elimination of Ptolemy's Equant & Non-Ptolemaic Planetary Models",
    shortSummary: "Created highly advanced mechanical planetary models that eliminated mathematical inconsistencies in Greek astronomy, later used by Copernicus.",
    detailedExplanation: "Ibn al-Shatir conceived non-Ptolemaic astronomical systems after identifying that the Ptolemaic epicycles violated the physical principle of uniform circular motion. His empirical process as Chief Timekeeper of the Umayyad Mosque in Damascus was based on building massive sundials, astrolabe gears, and tracing lunar altitudes over decades. His specific purpose was to mathematically eliminate Ptolemy's 'equant' by using secondary epicyclic paths and Tusi-couple links. Despite the constraints of a geocentric religious context, he produced mathematically consistent planetary models that Nicolaus Copernicus later adopted to establish the heliocentric paradigm.",
    mechanismBreakdown: [
      "Equant Elimination: Discharging Ptolemy's non-uniform angular motion in favor of secondary epicyclic concentric paths.",
      "The Tusi-Couple Adaptation: Utilizing double nested rotating rings to yield linear harmonic oscillation from purely circular motions.",
      "The Umayyad Mosque Sundial: Developing a supreme, 2-meter long horizontal coordinate-mapping sundial for precise prayer synchronization."
    ],
    modernImpact: {
      medievalTech: "Epicyclic planetary models and multi-axis mechanical clocks",
      modernTech: "Planetary orbital modeling, gear assemblies, and astronomical instrumentation",
      description: "Ibn al-Shatir's orbital mathematical techniques and clockwork gearing provided the exact geometric diagrams Copernican astronomers needed to model planetary gravity lanes and satellite orbits."
    },
    timelineAchievements: [
      { year: 1335, label: "Engineered advanced astrolabes and calibrated specialized quadrant clocks in Damascus." },
      { year: 1350, label: "Drafted his masterwork observatory manual, 'Nihayat al-sul fi tashih al-usul' (The Limit of Inquiry Concerning the Rectification of Principles)." },
      { year: 1371, label: "Constructed the giant multi-dial horizontal sundial for Damascus, mapping time coordinates to within seconds." }
    ],
    historicalSignificance: "Freed mathematical planetary science from ancient Ptolemaic geometric errors, framing coordinate-matched planetary motions used to establish our heliocentric solar system.",
    imageUrl: ibnShatirPrimary,
    accentColor: "gold"
  },
  {
    id: "al-masudi",
    name: "Abu al-Hasan Ali ibn al-Husayn ibn Ali al-Masudi",
    nickname: "Al-Masudi",
    lifespan: "896 – 956 CE",
    birthYear: 896,
    deathYear: 956,
    birthPlace: "Baghdad (Modern Iraq)",
    field: Discipline.Astronomy,
    inventionTitle: "The Meadows of Gold & Geohistoriography",
    shortSummary: "A pioneering traveler-historian who integrated geographical observations, cartographic tracking, and ecological climate-zone maps of the known world.",
    detailedExplanation: "To synthesize human history with the physical factors of the natural environment, Al-Masudi conceived the science of geohistoriography. His empirical process relied on deep oceanic and terrestrial expeditions across Africa, India, and China, logging monsoon patterns, land erosion rates, and local meteorologies. His specific purpose was to map the physical planet's correlation with human culture, creating world maps that divided the globe into eco-climatic zones based on solar orbits. Overcoming the severe challenges of medieval sea travel, shipwreck risks, and fragmented regional records, he established physical geography as an empirical, systematic science.",
    mechanismBreakdown: [
      "Eco-Climatic Zone Mapping: Segmenting the globe into solar coordinated bands to analyze how weather affects civilizations.",
      "Intercontinental Navigation Logbooks: Direct ocean tracking and currents logging that integrated Indian Ocean wind patterns.",
      "Geological Sedimentation Theories: Early postulations on erosion, soil migration, and geological transformational cycles."
    ],
    modernImpact: {
      medievalTech: "Multi-climate world maps and oceanic maritime guides",
      modernTech: "Climatology maps, physical geography, and oceanography tracking",
      description: "Al-Masudi's combining of travel records, wind systems, and temperature bands paved the way for modern systematic environmental and geographical science."
    },
    timelineAchievements: [
      { year: 915, label: "Explored Persia and reached the coast of India, charting local monsoon seasonal currents." },
      { year: 943, label: "Completed his masterpiece 'Muruj adh-dhahab' (The Meadows of Gold), detailing universal geohistoriography." },
      { year: 950, label: "Drafted coordinates for early flat world maps showing the connection between the Caspian and Black seas." }
    ],
    historicalSignificance: "Systematized global physical geography as an empirical coordination of environmental factors, ocean currents, and climate bands.",
    imageUrl: alMasudiDesk,
    accentColor: "gold"
  },
  {
    id: "al-qazwini",
    name: "Zakariya ibn Muhammad al-Qazwini",
    nickname: "Al-Qazwini",
    lifespan: "1203 – 1283 CE",
    birthYear: 1203,
    deathYear: 1283,
    birthPlace: "Qazvin (Modern Iran)",
    field: Discipline.Astronomy,
    inventionTitle: "Marvels of Things Created & Celestial Cosmography",
    shortSummary: "Authored spectacular encyclopedias of natural history and cosmography, cataloging celestial constellations, earth ecosystems, and meteorology.",
    detailedExplanation: "Al-Qazwini conceived 'The Wonders of Creation' as a systematic, illustrated astronomical and natural science textbook. His empirical process involved compiling centuries of astronomic, geographic, and biological logs during his service as a jurist in Iraq. His primary purpose was to model the cosmos through concentric planetary spheres and explain hydrological circles, detailing how subterranean gases generate earthquakes. Overcoming the challenge of teaching complex physics to the public, he created highly detailed, life-like visual diagrams that successfully integrated astrology, hydrology, and wildlife biology into a single structured curriculum.",
    mechanismBreakdown: [
      "Celestial Sphere Layering: Modeling the universe as nested concentric spheres, calculating orbital distances from terrestrial centers.",
      "Hydrological Loop Explanations: Detailing how underground water vaporizes, condenses in high altitudes, and returns as rainfall.",
      "Thermodynamic Earthquake Mechanicals: Explaining seismic shifts as trapped, heated subterranean gases seeking ventilation."
    ],
    modernImpact: {
      medievalTech: "Cosmographical concentric encyclopedias and constellation catalogs",
      modernTech: "Ecosystem classification, meteorological cycling models, and astronomy catalogs",
      description: "Al-Qazwini's detailed catalogs of stars and atmospheric cycles formed the baseline for astronomical encyclopedias and natural history collections throughout the medieval world."
    },
    timelineAchievements: [
      { year: 1240, label: "Appointed Chief Judge of Wasit and Hilla, where he gathered rare scientific manuscripts." },
      { year: 1263, label: "Drafted the earliest edition of 'The Wonders of Creation', the golden standard of Middle Eastern natural science." },
      { year: 1275, label: "Completed 'Athar al-bilad' (Monument of Places), a geographical dictionary mapping cities through coordinate latitudes." }
    ],
    historicalSignificance: "Codified medieval cosmography and natural history into a single structured curriculum, visualizing planetary orbits and earth hydrological cycles.",
    imageUrl: qazwiniCosmography,
    accentColor: "gold"
  },
  {
    id: "ibn-hazm",
    name: "Abu Muhammad Ali ibn Ahmad ibn Hazm",
    nickname: "Ibn Hazm",
    lifespan: "994 – 1064 CE",
    birthYear: 994,
    deathYear: 1064,
    birthPlace: "Cordoba (Al-Andalus, Modern Spain)",
    field: Discipline.Medicine,
    inventionTitle: "Psychophysiological Diagnostics of Human Emotion",
    shortSummary: "A brilliant Andalusian thinker who developed early systematic psychoanalysis, emotional health therapies, and historical comparative studies.",
    detailedExplanation: "Seeking to understand human cognitive behavior and emotional distress as logical, physical processes rather than supernatural events, Ibn Hazm conceived early psychosomatic diagnostics. His empirical process in Cordoba involved logging behavioral shifts, heart rate elevations, and gaze patterns in individuals experiencing grief, anxiety, and affection. His specific purpose was to establish standard therapeutic protocols connecting mental health with dietary rules and cognitive counseling. Overcoming political exile and the burning of his books, he published 'The Ring of the Dove' (Tawq al-Hamamah), proving that emotional disorders have physical origins in brain states.",
    mechanismBreakdown: [
      "Psychosomatic Symptom Diagnosis: Correctly identifying elevated heart rate, gaze shifts, and sleep disturbance as physical indicators of emotional distress.",
      "Brain-Centered Neuro-reactions: Attributing cognitive and psychological shifts to chemical/fluid imbalances inside the brain.",
      "Comparative Logical Dialectics: Utilizing rigorous Aristotelian logic to systematically classify and evaluate human belief systems."
    ],
    modernImpact: {
      medievalTech: "Psychosomatic diagnosis cards and sensory brain state records",
      modernTech: "Cognitive behavioral therapy, psychosomatic analysis, and psychological profiling",
      description: "Ibn Hazm's systematic classifications of mental distress and cognitive behavior represent some of the earliest historical treatises connecting emotional trauma with physical brain diagnostics."
    },
    timelineAchievements: [
      { year: 1022, label: "Penned 'The Ring of the Dove', dissecting human emotional taxonomy and psychology in Cordoba." },
      { year: 1035, label: "Drafted 'Al-Fisal', the world's first critical history of religious ideas and logical systems." },
      { year: 1054, label: "Conducted scholarly seminars on logic and dietary health, advocating mental-physical coordination." }
    ],
    historicalSignificance: "Introduced systematic psychiatric categorization to Al-Andalus, arguing that emotional conditions have direct physical manifestations in brain circuits.",
    imageUrl: hazmPsychology,
    accentColor: "mint"
  },
  {
    id: "al-karaji",
    name: "Abu Bakr ibn Muhammad ibn al-Husayn al-Karaji",
    nickname: "Al-Karaji",
    lifespan: "953 – 1029 CE",
    birthYear: 953,
    deathYear: 1029,
    birthPlace: "Karaj (Modern Iran)",
    field: Discipline.Engineering,
    inventionTitle: "Quantitative Hydrology & Algebraic Induction",
    shortSummary: "Discovered the mathematical binomial theorem, freed algebra from geometry, and engineered sophisticated underground gravity-aqueduct water systems.",
    detailedExplanation: "To exploit deep underground water supplies for agriculture in dry plains, Al-Karaji conceived the science of quantitative hydrology and gravity water-tables. His empirical process involved designing plumb-bob leveling quadrants, measuring groundwater tables, and engineering underground stone-lined aqueduct networks (qanats) that channeled mountain aquifers. His purpose was to bypass arid soil layers to irrigate remote farmlands. He overcame complex structural fluid dynamics and soil collapse threats, simultaneously formulating the mathematical rules of algebraic induction in 'Al-Fakhri' centuries before Pascal's Triangle was credited in Europe.",
    mechanismBreakdown: [
      "Binomial Expansion Proofs: Utilizing algebraic induction methods to formulate the recursive arithmetic table of coefficients.",
      "The Qanat Leveling Quadrant: Designing a sight plumb-bob device to calculate the exact incline gradient of underground aqueducts.",
      "Subterranean Water Table Siphon: Capturing deep water reservoirs and moving them over miles using vacuum siphoning and gravity forces."
    ],
    modernImpact: {
      medievalTech: "Binomial triangle coefficients & subterranean qanat gravity aqueducts",
      modernTech: "Binomial algebra, mathematical induction proofs, and sub-surface water management",
      description: "Al-Karaji's induction proofs are central to computer science logic, while his water-surveying plumb-bob techniques remain the foundation of gravity-fed irrigation civil engineering."
    },
    timelineAchievements: [
      { year: 1005, label: "Pioneered algebraic mathematical methods, writing 'Al-Fakhri' to detail rules of powers and variables." },
      { year: 1010, label: "Invented precision leveling instruments to survey groundwater and calculate soil permeability." },
      { year: 1018, label: "Completed his masterpiece of hydrology, explaining the mechanics of underground water collection and siphons." }
    ],
    historicalSignificance: "Freed algebra from geometric constraints via algebraic induction, while formulating the engineering mechanics of subterranean hydrology.",
    imageUrl: alKarajiTable,
    accentColor: "bronze"
  },
  {
    id: "ibn-tufail",
    name: "Abu Bakr Muhammad ibn Abd al-Malik ibn Tufail al-Qaysi",
    nickname: "Ibn Tufail",
    lifespan: "1105 – 1185 CE",
    birthYear: 1105,
    deathYear: 1185,
    birthPlace: "Guadix (Al-Andalus, Modern Spain)",
    field: Discipline.Medicine,
    inventionTitle: "Empirical Cognition & Sensory Biology",
    shortSummary: "A leading physician-astronomer who wrote the first philosophical novel exploring human biological development, sensory learning, and autopsy.",
    detailedExplanation: "Abu Bakr ibn Tufail conceived the philosophical concept of 'tabula rasa' (the blank slate) and empirical learning by questioning scholastic dogma. His empirical process as an Almohad royal physician centered on comparative animal anatomy and physiological dissections to trace biological lifeforces in organs. His specific purpose was to show that a human intellect, using clean sensory observation and logical tests, can unlock the laws of physics, astronomy, and medicine without prior instruction. Overcoming religious censors and intellectual isolation, his novel 'Hayy ibn Yaqdhan' laid down the absolute core of the modern Scientific Method.",
    mechanismBreakdown: [
      "Exploratory Dissection & Autopsy: Describing systematic dissection of organs to locate the physical motor-force of life (heart ventricles).",
      "Tabula Rasa Empirical Logic: Postulating that all knowledge is acquired through cumulative experiments, sensory feedback, and classification.",
      "Physiological Body Regulation: Demonstrating that physical diet, heat retention, and physical shelters directly adjust metabolic balances."
    ],
    modernImpact: {
      medievalTech: "Systematic autopsy logs and sensory development schemas",
      modernTech: "Empiricism, sensory educational science, and comparative animal anatomy",
      description: "Ibn Tufail's writings introducing empirical self-discovery directly inspired John Locke's formulation of the blank slate and Daniel Defoe's Robinson Crusoe, anchoring modern scientific empiricism."
    },
    timelineAchievements: [
      { year: 1145, label: "Began practicing clinical medicine in Cordoba, formulating early hygiene and dietary guidelines." },
      { year: 1160, label: "Appointed chief royal physician to Sultan Abu Yaqub Yusuf of Morocco." },
      { year: 1170, label: "Published 'Hayy ibn Yaqdhan' (The Living Son of the Vigilant), codifying sensory empirical learning." }
    ],
    historicalSignificance: "Defined conceptual empiricism and hands-on anatomy as the twin pillars of scientific knowledge, decoupling inquiry from traditional scholastic dogma.",
    imageUrl: ibnTufailLib,
    accentColor: "mint"
  },
  {
    id: "al-marrakushi",
    name: "Abu Ali al-Hasan ibn Ali al-Marrakushi",
    nickname: "Al-Marrakushi",
    lifespan: "1225 – 1282 CE",
    birthYear: 1225,
    deathYear: 1282,
    birthPlace: "Marrakesh (Modern Morocco)",
    field: Discipline.Astronomy,
    inventionTitle: "The Collection of Principles of Astronomy & Giant Sundial Gnomons",
    shortSummary: "A phenomenal astronomer who mathematically mapped coordinate systems for giant sundials, astrolabe gnomons, and created early latitude charts.",
    detailedExplanation: "To standardize astronomical time-mapping and coordinates across different latitudes, Abu Ali al-Marrakushi conceived highly advanced shadow projection mechanics. His empirical process in Cairo involved tracking solar elevation paths and utilizing spherical trigonometry to build vertical, cylindrical, and horizontal sundial surfaces. His specific purpose was to release 'Jami al-mabadi wal-ghayat', a comprehensive instrumental encyclopedia specifying coordinates for 135 regional cities. He overcame the lack of trigonometric standardization, creating precise equations to convert 3D sky rotations into reliable, flat shadow dial readouts.",
    mechanismBreakdown: [
      "Sundial Spherical Projection: Transforming spherical coordinates of the sun's path onto flat, vertical, or cylindrical surface planes mathematically.",
      "Gnomon Elevation Algorithms: Adjusting the angle of the shadow-casting gnomon based on the specific latitude coordinate of the city.",
      "Multi-Plate Astrolabe Calibration: Mapping specific celestial horizons for travel between Morocco, Egypt, and Iraq."
    ],
    modernImpact: {
      medievalTech: "Trigonometric spherical projection tables and latitude sundial blueprints",
      modernTech: "Solar tracker systems, astronomical timekeeping, and geographic coordinate mapping",
      description: "Al-Marrakushi's rigorous trigonometry tables for converting spherical lines to planar shadows allowed the development of solar tracking arrays and highly precise compass dials."
    },
    timelineAchievements: [
      { year: 1250, label: "Surveyed geographical locations across North Africa, compiling latitude/longitude coordinate data." },
      { year: 1272, label: "Drafted his stellar encyclopedia 'Jami al-mabadi wal-ghayat', illustrating over 50 specific astronomical devices." },
      { year: 1279, label: "Developed the mathematical design for dual-axis horizontal shadow indicators for multiple solar altitudes." }
    ],
    historicalSignificance: "Systematized coordinate calculation for planar projection instruments, refining spherical trigonometry for practical world localization and time mapping.",
    imageUrl: alMarrakushiSta,
    accentColor: "gold"
  },
  {
    id: "al-uqlidisi",
    name: "Abu al-Hasan Ahmad ibn Ibrahim al-Uqlidisi",
    nickname: "Al-Uqlidisi",
    lifespan: "c. 920 – 980 CE",
    birthYear: 920,
    deathYear: 980,
    birthPlace: "Damascus (Modern Syria)",
    field: Discipline.Mathematics,
    inventionTitle: "Abul-Hasan's Hindu Arithmetic & Positional Decimals",
    shortSummary: "Pioneered decimal fractions, replacing manual calculus columns with written pencil-and-paper positional decimal arithmetic.",
    detailedExplanation: "Conceived to replace slow, messy sandbox calculus and temporary abacus beads with permanent ink calculations, Al-Uqlidisi adapted Indian arithmetic to paper. His empirical process involved compiling calculation patterns in Damascus, resulting in 'Kitab al-Fusul fi al-Hisab al-Hindi'. His specific purpose was to optimize trade accounting and tax divisions by inventing positional decimal fractions, utilizing a small vertical tick above the tenths column. He overcame the rigid resistance of traditional calculators, introducing paper-and-pencil decimals six centuries before they were popularized in Renaissance Europe.",
    mechanismBreakdown: [
      "Pencil-and-Paper Arithmetic: Transforming mathematics from sandbox tracings to stable inked manuscripts.",
      "Decimal Fractions Tick: Setting a positional vertical divider to isolate fractional powers of ten (tenths, hundredths).",
      "Arithmetic Doubling/Halving: Setting recursive formulas for fast, iterative decimal scaling without fractions."
    ],
    modernImpact: {
      medievalTech: "Positional written decimals and decimal fractional notation",
      modernTech: "Floating-point processor calculations and digital metric systems",
      description: "Al-Uqlidisi's invention of decimal fractions is standard in computerized division, algorithmic floating-point mechanics, and clean database metrics."
    },
    timelineAchievements: [
      { year: 952, label: "Drafted his core manuscript describing written step-by-step Hindu decimal calculations." },
      { year: 953, label: "Demonstrated the utility of decimal division fractions to calculate precise tax distributions." },
      { year: 978, label: "Revised math curriculum texts in Damascus, replacing sand-tables with paper inks." }
    ],
    historicalSignificance: "Introduced the concept of positional decimal fractions, transforming calculation from temporary tactile sand tracing to a permanent written mathematical system.",
    imageUrl: alUqlidisiGeom,
    accentColor: "gold"
  },
  {
    id: "ibn-al-banna",
    name: "Abu al-Abbas Ahmad ibn Muhammad ibn Osman al-Azdi al-Marrakushi",
    nickname: "Ibn al-Banna",
    lifespan: "1256 – 1321 CE",
    birthYear: 1256,
    deathYear: 1321,
    birthPlace: "Marrakesh (Modern Morocco)",
    field: Discipline.Astronomy,
    inventionTitle: "Minhaj al-Talib & Algebraic Fraction Symbols",
    shortSummary: "Authored highly influential astronomical guides detailing stellar coordinates and designed early mathematical fraction lines.",
    detailedExplanation: "Determined to simplify algebraic computation and star coordinates for scholars, Ibn al-Banna of Marrakesh conceived advanced fractional notations and astronomical directories. His empirical process was based on rooftop star observation and algebraic synthesis, leading to 'Minhaj al-Talib'. His purpose was to write structured celestial computation lookup tables and introduce the horizontal fraction bar to isolate variables. He successfully overcame the challenges of cumbersome alphabetic notation systems, easing long-period coordinate multiplications and standardizing mathematical fractional formatting.",
    mechanismBreakdown: [
      "Minhaj Star Calendars: Streamlining coordinates of celestial positions into compact, tabular look-up references.",
      "Fraction Line Implementation: Introducing clear horizontal dividers to represent algebraic fractional relationships.",
      "Combinatoric Calculations: Exploring mathematical combinations and permutations of planetary configurations."
    ],
    modernImpact: {
      medievalTech: "Star coordinate Minhaj tables and mathematical division characters",
      modernTech: "Stellar navigation grids, algebraic fractions, and programming operators",
      description: "Ibn al-Banna's symbolic representations for fractions and astronomical indices eased the execution of complex scientific calculations used to design navigational charts."
    },
    timelineAchievements: [
      { year: 1285, label: "Completed astronomical star measurements from Marrakesh's rooftop stations." },
      { year: 1301, label: "Published his landmark work explaining arithmetic combinations and algebraic symbols." },
      { year: 1315, label: "Engineered portable solar quadrants for measuring stellar altitudes at different latitudes." }
    ],
    historicalSignificance: "Maintained Al-Andalus and North Africa's mathematical astronomy, introducing critical notations for algebraic fractions.",
    imageUrl: ibnBannaObs,
    accentColor: "gold"
  },
  {
    id: "al-jayyani",
    name: "Abu Abd Allah Muhammad ibn Muadh al-Jayyani",
    nickname: "Al-Jayyani",
    lifespan: "989 – 1079 CE",
    birthYear: 989,
    deathYear: 1079,
    birthPlace: "Jaen (Al-Andalus, Modern Spain)",
    field: Discipline.Mathematics,
    inventionTitle: "The Law of Sines for Spherical Triangles",
    shortSummary: "The father of spherical trigonometry, proving the absolute Law of Sines for curved celestial coordinates.",
    detailedExplanation: "Conceived to free spherical trigonometry from the narrow service of astronomy and establish it as an independent branch of mathematics, Al-Jayyani wrote his classic 'The Book of Unknowns of a Sphere'. His empirical process relied on geometric coordinate proofs of triangles resting on a spherical dome. His purpose was to prove the universal spherical Law of Sines: sin(A)/sin(a) = sin(B)/sin(b) = sin(C)/sin(c). He successfully overcame the geometric limitations of Euclidean flat planes, giving astronomers standard formulas to compute celestial arcs and atmospheric refraction heights.",
    mechanismBreakdown: [
      "Spherical Sine Theorem: Proving that ratios of the sine of spherical angles to sines of opposite sides are identical.",
      "Solar Elevation Coordinates: Calculating twilight angles based on the sun's position relative to the horizon.",
      "Ratios of Magnitudes: Redefining Euclidean proportions to allow variables inside geometric proofs."
    ],
    modernImpact: {
      medievalTech: "Spherical law of sines and atmospheric refraction angles",
      modernTech: "Aero-navigation, mapping projections, and planetary mechanics tracking",
      description: "Al-Jayyani's formulations are the fundamental mathematics behind aviation navigation, cartographic coordinates, and geographical information systems (GIS)."
    },
    timelineAchievements: [
      { year: 1040, label: "Drafted 'The Book of Unknowns of a Sphere', proving the Law of Sines in Cordoba." },
      { year: 1055, label: "Calculated the height of the Earth's atmosphere based on solar refraction at twilight." },
      { year: 1070, label: "Engineered coordinate systems for tracking the precise coordinates of the Moon's shadow." }
    ],
    historicalSignificance: "Established spherical trigonometry as an independent, rigorous mathematical science, changing global astronomical map calculations forever.",
    imageUrl: jayyaniSines,
    accentColor: "gold"
  },
  {
    id: "ibn-sahl",
    name: "Abu Sa'd al-Ala ibn Sahl",
    nickname: "Ibn Sahl",
    lifespan: "c. 940 – 1000 CE",
    birthYear: 940,
    deathYear: 1000,
    birthPlace: "Baghdad (Modern Iraq)",
    field: Discipline.Physics,
    inventionTitle: "The Sine Law of Refraction (Precursor to Snell's Law)",
    shortSummary: "Discovered the exact law of light refraction six centuries before Willebrord Snellius, mathematically illustrating focal lengths of curved lenses.",
    detailedExplanation: "Abu Sa'd ibn Sahl conceived the physical law of optical refraction six centuries before Willebrord Snellius while designing burning mirrors to focus sunlight. His empirical process involved casting, grinding, and testing glass prisms and hyperbolic lenses to trace the exact bending pathways of light. His specific purpose was to calculate lens focal points mathematically. He overcame the classical Greek assumptions of vision by proving that the ratio of the physical distance from the refracted ray to the lens axis remains constant, enabling the computation of perfect focus shapes.",
    mechanismBreakdown: [
      "Geometrical Refraction Law: Illustrating a constant ratio of sines of light incidence and refraction mathematically.",
      "Hyperbolic Lens Crafting: Modeling glass lenses that bend parallel light to a single, absolute focal point.",
      "Parabolic Burning Mirrors: Crafting metallic coordinates that reflect incoming solar rays into a designated spot."
    ],
    modernImpact: {
      medievalTech: "Optical refraction ratios and hyperbola focused glass lenses",
      modernTech: "Fiber-optic cables, camera optics, lasers, and laser surgery equipment",
      description: "Ibn Sahl's mathematical law of light refraction is the baseline equation used to design glass fiber-optic threads, smartphone camera lenses, and laser optical elements."
    },
    timelineAchievements: [
      { year: 980, label: "Initiated studies of curved glass, mapping how light shifts speed through clear water and crystals." },
      { year: 984, label: "Published 'On Burning Lenses', illustrating the constant ratio of light refraction." },
      { year: 990, label: "Constructed custom hyperbolic focusing glass lenses used to amplify candle lights." }
    ],
    historicalSignificance: "Discovered the mathematical law of light refraction, transforming optical study from qualitative descriptions to precise geometric equations.",
    imageUrl: ibnSahlOptics,
    accentColor: "gold"
  },
  {
    id: "al-fazari",
    name: "Abu Abdallah Muhammad ibn Ibrahim al-Fazari",
    nickname: "Al-Fazari",
    lifespan: "d. 796 CE",
    birthYear: 730,
    deathYear: 796,
    birthPlace: "Kufa (Modern Iraq)",
    field: Discipline.Astronomy,
    inventionTitle: "The Earliest Islamic Astrolabes & Celestial Calendars",
    shortSummary: "Constructed the very first astrolabe in the Islamic world, translating ancient Indian cosmic coordinates into Arabic scripts.",
    detailedExplanation: "To initialize astronomical navigation and local star coordinate measurements in early Abbasid Baghdad, Al-Fazari conceived the first flat brass astrolabe plates in the Islamic world. His empirical process, commissioned by Caliph Al-Mansur, involved translating high-level Sanskrit astronomical works (Brahmagupta's Siddhadis) to draft 'Zij al-Sindhind'. His purpose was to establish standard decimal-coordinate calculators for celestial paths. He overcame language barriers and severe mechanical tolerances, successfully engineering the earliest brass astrolabes to resolve latitude positions on land and sea.",
    mechanismBreakdown: [
      "Sindhind Integration: Merging Indian decimal math systems with astronomical star lists mathematically.",
      "Astrolabe Handcrafting: Setting brass sheets to mold standard stereographic coordinates of the night zodiac.",
      "Altitude Gnomons: Designing measuring arms on the back of coordinates to capture angle reflections of high stars."
    ],
    modernImpact: {
      medievalTech: "The first Arabic brass astrolabes and planetary catalogs",
      modernTech: "Solar trackers, celestial coordinate algorithms, and global clock networks",
      description: "Al-Fazari's initiation of astrolabe engineering formed the physical technology that evolved into mechanical clocks, compasses, and space navigation charts."
    },
    timelineAchievements: [
      { year: 771, label: "Received the Sanskrit star catalog 'Siddhanta' and initiated translation into Arabic." },
      { year: 772, label: "Published 'Zij al-Sindhind', introducing the Indian system of decimal integers to the Middle East." },
      { year: 780, label: "Assembled the first brass astrolabe in Baghdad, mapping local and sea-faring constellations." }
    ],
    historicalSignificance: "The father of Islamic astrolabe design, bridging Indo-Persian and Greek star mapping to launch the Islamic astronomical renaissance.",
    imageUrl: alFazariObs,
    accentColor: "gold"
  },
  {
    id: "ibn-al-awwam",
    name: "Abu Zakariya Yahya ibn Muhammad ibn Ahmad ibn al-Awwam",
    nickname: "Ibn al-Awwam",
    lifespan: "12th Century CE",
    birthYear: 1130,
    deathYear: 1185,
    birthPlace: "Seville (Al-Andalus, Modern Spain)",
    field: Discipline.Engineering,
    inventionTitle: "Kitab al-Filaha (The Book of Agriculture)",
    shortSummary: "Authored the medieval encyclopedia of agricultural engineering, detailing micro-irrigation, grafting, and botanical pathology.",
    detailedExplanation: "Abu Zakariya ibn al-Awwam conceived the micro-irrigation system and agro-pathology rules in 'Kitab al-Filaha' to maximize food security in arid Andalusian fields. His empirical process involved testing crop planting across different clay soils, utilizing buried porous clay tubes to create steady drip-watering, and engineering natural composts and pest repellents. His purpose was to publish a scientific manual of agriculture documenting over 585 crops. Resisting regional water scarcity, he transformed dry farmlands into flourishing orchards.",
    mechanismBreakdown: [
      "Ceramic Drip Irrigation: Laying porous clay pipes that deliver steady, metered water directly to roots under the soil.",
      "Soil Classification: Identifying nutrient profiles of diverse sands, lands, and fertilizers systematically.",
      "Grafting Engineering: Setting geometric bark slices to merge distinct fruit families on a single tree host."
    ],
    modernImpact: {
      medievalTech: "Porous clay micro-irrigation and biological pesticides",
      modernTech: "Hydroponics, modern drip irrigation systems, permaculture, and agroecology",
      description: "Ibn al-Awwam's scientific categorization of soils and continuous water diffusion laid down the foundational techniques for global drylands agriculture."
    },
    timelineAchievements: [
      { year: 1165, label: "Established an extensive experimental agriculture farm and water garden near Seville." },
      { year: 1172, label: "Published 'Kitab al-Filaha', a majestic, 2-volume encyclopedia on agrarian civil science." },
      { year: 1180, label: "Designed organic solutions protecting crops against local aphids and mold vectors." }
    ],
    historicalSignificance: "Transformed agriculture from manual labor into a quantitative, scientific engineering discipline that sustained Al-Andalus populations for centuries.",
    imageUrl: ibnAwwamFarm,
    accentColor: "bronze"
  },
  {
    id: "al-majriti",
    name: "Abu al-Qasim Maslama ibn Ahmad al-Majriti",
    nickname: "Al-Majriti",
    lifespan: "c. 950 – 1007 CE",
    birthYear: 950,
    deathYear: 1007,
    birthPlace: "Madrid (Al-Andalus, Modern Spain)",
    field: Discipline.Chemistry,
    inventionTitle: "Rutbat al-Hakim & Mercuric Oxide Isolation",
    shortSummary: "Pioneered empirical chemistry testing in Al-Andalus, proving mass conservation laws during isolated metallic oxidation.",
    detailedExplanation: "Determined to place chemistry on a rigorous, quantitative foundation, Al-Majriti conceived early mass conservation experiments. His empirical process in Cordoba involved heating mercury in a sealed, fireproof clay vessel to synthesize red mercuric oxide, subsequently using incredibly sensitive balances to weigh reactants before and after combustion experiments. His purpose was to prove elemental transmutations mathematically in 'Rutbat al-Hakim'. He overcame the unscientific folklore of antique alchemists, successfully demonstrating that total mass remains constant in closed chemical reactions.",
    mechanismBreakdown: [
      "Mercuric Oxide Synthesis: Isolating pure mercury oxide elements through cyclic distillation and closed combustion.",
      "Mass Conservation Experiment: Utilizing accurate balances to prove that the initial and final mass of sealed chemical trials are matching.",
      "Astronomical Map Translation: Adapting stellar coordinate tables of Al-Khwarizmi to the Al-Andalus longitude meridians."
    ],
    modernImpact: {
      medievalTech: "Thermal chemical oxidation and precision mass balances",
      modernTech: "Quantitative stoichiometry, mass conservation, and industrial chemical synthesis",
      description: "Al-Majriti's rigorous focus on weighing chemical components before and after experiments laid down the empirical rules that transformed chemistry into a quantitative science."
    },
    timelineAchievements: [
      { year: 975, label: "Re-calibrated Ptolemy's astronomical coordinates to Seville's local longitude line." },
      { year: 990, label: "Conducted the sealed mercury heating tests, documenting mass equilibrium levels." },
      { year: 1002, label: "Completed 'Rutbat al-Hakim', establishing chemistry education across Cordoba's universities." }
    ],
    historicalSignificance: "Introduced systematic chemical experimentation, rigorous balances, and early concepts of mass conservation to the Iberian Peninsula.",
    imageUrl: alMajritiAlch,
    accentColor: "emerald"
  },
  {
    id: "ibn-bassal",
    name: "Abu Abd Allah Muhammad ibn Ibrahim ibn Bassal",
    nickname: "Ibn Bassal",
    lifespan: "11th Century CE",
    birthYear: 1040,
    deathYear: 1105,
    birthPlace: "Toledo (Al-Andalus, Modern Spain)",
    field: Discipline.Engineering,
    inventionTitle: "The Diwan al-Filaha & Hydraulic Aquifer Siphons",
    shortSummary: "Pioneered modern soil mechanics, classified ten distinct classes of soil, and designed subterranean garden irrigation channels.",
    detailedExplanation: "Ibn Bassal conceived a revolutionary soil taxonomy and quantitative irrigation layout to maximize crop yield inside Islamic Spain's semi-arid regions. His empirical water engineering process inside Seville's royal gardens involved classifying agricultural soil into ten thermal and moisture profiles and designing subterranean aquifer corridors linked with siphon water-wheels (norias). His purpose was to achieve continuous agricultural yields. He overcame the limits of standard gravity flow canals, optimizing water delivery down to individual root zones.",
    mechanismBreakdown: [
      "Ten-Soil Taxonomy: Classifying agricultural earth by thermal properties, moisture retention, and mineral profiles.",
      "Seep-Well Irrigation: Designing aquifer collector wells that draw water via capillary action to adjacent gardens.",
      "Vegetable Root Hydration: Determining unique water-volume cycles for specific plants to prevent rot."
    ],
    modernImpact: {
      medievalTech: "Quantitative soil classification boards and siphonic noria pumps",
      modernTech: "Soil mechanics, modern agricultural water conservation, and soil hydrology",
      description: "Ibn Bassal's cataloging of soil thermal moisture cycles is a core pillar of modern agricultural soil mechanics, helping conserve precious water in dry climates."
    },
    timelineAchievements: [
      { year: 1075, label: "Engineered the massive irrigation system for Toledo's royal botanical garden." },
      { year: 1085, label: "Published 'Diwan al-Filaha' to document soil testing and thermal properties in Seville." },
      { year: 1095, label: "Formulated early plant nutrition guides, introducing organic compost mixtures as soil adjusters." }
    ],
    historicalSignificance: "Engineered Al-Andalus's green revolution by creating the first systematic, scientific soil taxonomy based on moisture and thermal retention properties.",
    imageUrl: ibnBassalGard,
    accentColor: "bronze"
  },
  {
    id: "al-kashi",
    name: "Ghiyath al-Din Jamshid Mas'ud al-Kashi",
    nickname: "Al-Kashi",
    lifespan: "c. 1380 – 1429 CE",
    birthYear: 1380,
    deathYear: 1429,
    birthPlace: "Kashan (Modern Iran)",
    field: Discipline.Mathematics,
    inventionTitle: "The Key to Arithmetic & Pi to 16 Decimals",
    shortSummary: "Pioneered the law of cosines, designed advanced mechanical calculators for predicting eclipses, and calculated Pi to 16 decimal places.",
    detailedExplanation: "To provide the astronomical calculators at Ulugh Beg's observatory with high-precision star coordinate systems, Ghiyath al-Din al-Kashi conceived advanced decimal variables and trigonometry theorems. His empirical process relied on computing Pi-approximations with inscribed and circumscribed polygons of 3*2^28 sides, locking Pi to sixteen decimal points of accuracy. His specific purpose was to formulate the Law of Cosines (Al-Kashi's Theorem) for spherical trajectories. He overcame the limits of antique calculations, designing early brass analog calculators to predict coordinate planetary conjunctions.",
    mechanismBreakdown: [
      "Law of Cosines Theorem: Formulating the equation: c^2 = a^2 + b^2 - 2ab*cos(C) for any non-right triangle.",
      "Pi-Algorithm Extraction: Applying inscribed and circumscribed polygon limits of 3*2^28 sides to lock down Pi.",
      "The Plate of Conjunctions: Designing a brass astronomical slide-rule calculator to predict celestial coordinates and eclipses."
    ],
    modernImpact: {
      medievalTech: "The Law of Cosines, high-precision decimal Pi, and planetary analog calculators",
      modernTech: "Vector computer graphics, 3D coordinate matrices, and aerospace orbit equations",
      description: "Al-Kashi's Law of Cosines serves as the fundamental equation behind modern 3D game engines, vector graphic rendering, and rocket flight-trajectory algorithms."
    },
    timelineAchievements: [
      { year: 1416, label: "Invented the 'Plate of Conjunctions' analog computer, calculating planetary alignments." },
      { year: 1424, label: "Computed Pi to 16 decimal places in 'The Treatise on the Circumference'." },
      { year: 1427, label: "Completed 'Miftah al-Hisab' (The Key to Arithmetic), standardizing decimal division methods." }
    ],
    historicalSignificance: "Elevated computational mathematics to unprecedented precision, laying the calculations used to run Ulugh Beg's monumental astronomical observatory.",
    imageUrl: alKashiPrimary,
    accentColor: "gold"
  },
  {
    id: "ibn-al-rumiyyah",
    name: "Abu al-Abbas Ahmad ibn Muhammad ibn mufarraj al-Nabahani",
    nickname: "Ibn al-Rumiyyah",
    lifespan: "1161 – 1239 CE",
    birthYear: 1161,
    deathYear: 1239,
    birthPlace: "Seville (Al-Andalus, Modern Spain)",
    field: Discipline.Medicine,
    inventionTitle: "Rihla al-Nabatiyyah (The Botanical Journey)",
    shortSummary: "A foundational botanist and clinical pharmacist who classified rare medicinal plants across North Africa and the Levant.",
    detailedExplanation: "Concerned with the unsafe compounding of apothecary drugs, Ibn al-Rumiyyah conceived a travel-verified system of botanical pharmacology and pharmacy ethics. His empirical process involved traveling throughout Andalusian coasts, Egypt, and Syria, performing solvent extractions on rare maritime flora, and logging their therapeutic effects. His specific purpose was to publish 'Al-Rihla al-Nabatiyyah' as a clinical classification of drug families. He overcame the lack of drug standardization and unsafe apothecary practices, successfully establishing the earliest codes of clinical pharmacy regulatory ethics.",
    mechanismBreakdown: [
      "Plant Identification: Cataloging rare medicinal flora with detailed notes on habitat, harvesting season, and botanical features.",
      "Pharmacological Extractions: Devising systematic rules to steam-distill, crush, and filter active compounds from roots.",
      "Pharmacy Regulatory Standards: Creating ethical frameworks to prevent the adulteration of commercial drugs by apothecaries."
    ],
    modernImpact: {
      medievalTech: "Botanical taxonomy lists and active chemical extract methods",
      modernTech: "Pharmacognosy, modern herbal pharmacology, and organic drug synthesis",
      description: "Ibn al-Rumiyyah's detailed plant coordinates and extraction routines formed the early empirical databases that evolved into modern plant-derived medicine and pharmacognosy."
    },
    timelineAchievements: [
      { year: 1195, label: "Gathered and sketched unknown maritime herbal species around Cordoba's coasts." },
      { year: 1216, label: "Completed his famous botanical tour through the Levant, compiling clinical plant taxonomies." },
      { year: 1230, label: "Established a research pharmacology academy in Seville, training future pharmacists in raw drug preservation." }
    ],
    historicalSignificance: "Laid down empirical, travel-verified botany as the foundation of modern pharmacy, fighting unscientific folklore with systematic physical testing.",
    imageUrl: nabahaniRihla,
    accentColor: "mint"
  }
];

export const categories: CategoryCard[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "The language of abstract logic and algorithms that paved the way for modern computing.",
    iconName: "Binary",
    instrumentName: "Algebraic Conic Geometry & Cipher Keys",
    instrumentDescription: "Geometric conic equations intersecting curves with parabolas, and frequency graphs breaking classical ciphers.",
    featuredInventions: ["Systematic Algebra", "Decimal positional notation and zero", "Frequency analysis codebreaking", "Cubic conic intersection proofs", "World projection grids"],
    backgroundFilter: "rgba(212,175,55,0.04)"
  },
  {
    id: "medicine",
    title: "Medicine",
    description: "Where rigorous diagnostics, surgical metallurgy, and clinical trials were first codified.",
    iconName: "Stethoscope",
    instrumentName: "Surgical Steel, Catgut Stitches, & Quarantine Logs",
    instrumentDescription: "Over 200 physical surgical tools, bio-absorbable animal intestine sutures, and 40-day disease containment procedures.",
    featuredInventions: ["The Canon of Medicine", "Double-blind clinical drug trials", "Pulmonary blood loop", "Catgut dissolvable stitching", "200+ surgical instrument designs"],
    backgroundFilter: "rgba(152,255,152,0.04)"
  },
  {
    id: "astronomy",
    title: "Astronomy",
    description: "Mapping the sky, calculating the Earth's radius, and predicting planetary motions using coordinate geometry.",
    iconName: "Orbit",
    instrumentName: "Brass Astrolabes & Nilometer Columns",
    instrumentDescription: "Stereographically coordinates plates mapping stars, and marble columns measuring river levels.",
    featuredInventions: ["Horizon-dip Earth Geodesy", "The Tusi Couple gear model", "Hakimi pendulum tables", "Tabula Rogeriana Silver Globe", "Stereographic Coordinate Astrolabe"],
    backgroundFilter: "rgba(212,175,55,0.04)"
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Crankshafts, camshafts, flight wings, and gears that automated work and defied gravity.",
    iconName: "Settings",
    instrumentName: "Rotary-to-Linear Crankshafts & Glider Span Wings",
    instrumentDescription: "The physical mechanisms converting water flows into reciprocating piston work, and avian glider control rods.",
    featuredInventions: ["Rotary-to-linear crankshaft", "Feathered wooden control hang-glider", "Camshaft-driven monoblock pistons", "The water-flow Elephant Clock", "Automated float valves"],
    backgroundFilter: "rgba(212,175,55,0.04)"
  },
  {
    id: "physics",
    title: "Physics",
    description: "The empirical exploration of light refraction, reflections, and the laws of linear propagation.",
    iconName: "Eye",
    instrumentName: "Pinhole Dark Chamber (Al-Bayt al-Muzlim)",
    instrumentDescription: "A darkened slate room with a tiny circular lens projecting external scenes onto parchment wall surfaces.",
    featuredInventions: ["The Camera Obscura", "Linear light ray scientific proof", "Spherical light refraction lens proofs", "The Scientific Method", "Catadioptric reflection mirrors"],
    backgroundFilter: "rgba(212,175,55,0.04)"
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "Transforming mystical alchemy into an isolated laboratory craft of boiling flasks, retorts, and pure minerals.",
    iconName: "FlaskConical",
    instrumentName: "Glass Distillation Alembic (Al-Anbiq)",
    instrumentDescription: "A curved boiling vessel connecting pharmaceutical steam chambers with cold extraction columns.",
    featuredInventions: ["The distillation alembic", "Nitric, citric, and hydrochloric mineral acids", "Aqua Regia solution", "Crystallization/calcination protocols", "Purification filtration frameworks"],
    backgroundFilter: "rgba(1,77,64,0.04)"
  }
];

export const modernConnections = [
  {
    id: "alg",
    medievalLabel: "Algebra & Algorithm Mechanics (780 CE)",
    modernLabel: "Silicon Computing & Machine Learning (Present)",
    discipline: Discipline.Mathematics,
    explanation: "Muhammad al-Khwarizmi formulated the mathematical logic, step-by-step loops, and algebraic equations that are used today to compile coding, structure databases, and drive AI neural networks.",
    iconName: "Cpu"
  },
  {
    id: "opt",
    medievalLabel: "Pinhole Camera Obscura (1021 CE)",
    modernLabel: "Digital CMOS Sensors & Optoelectronics (Present)",
    discipline: Discipline.Physics,
    explanation: "Ibn al-Haytham built the first pinhole chamber, proving light travels in straight rays paths. This single optic discovery is the foundation of cameras, cinemas, telescopes, and micro-sensors.",
    iconName: "Camera"
  },
  {
    id: "eng",
    medievalLabel: "Crankshaft & Reciprocating Pistons (1206 CE)",
    modernLabel: "Internal Combustion & Robotics (Present)",
    discipline: Discipline.Engineering,
    explanation: "Al-Jazari created the mechanical crankshaft and cam gear systems, transforming rotary motion into linear stroke. Today, this drives car engines, industrial turbines, and robotic joints.",
    iconName: "Shuffle"
  },
  {
    id: "med",
    medievalLabel: "Absorbable Surgical Catgut & Antiseptic Care (936 CE)",
    modernLabel: "Modern Micro-surgery & Clean Rooms (Present)",
    discipline: Discipline.Medicine,
    explanation: "Al-Razi and Al-Zahrawi invented dissolvable catgut stitching that prevents internal infections, alongside 200 steel surgical tools. This enabled highly complex operations and aseptic surgical rooms.",
    iconName: "Activity"
  },
  {
    id: "nav",
    medievalLabel: "Horizon-Dip Geodesy & Astrolabe Plates (973 CE)",
    modernLabel: "GPS Satellite Arrays & Astrodynamics (Present)",
    discipline: Discipline.Astronomy,
    explanation: "Al-Biruni calculated the spherical size of the Earth using geometric angles. Combined with coordinate astrolabe grids, this is the ancestor of our global positioning satellite (GPS) system.",
    iconName: "MapPin"
  }
];
