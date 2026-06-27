/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Discipline } from "../types";

// Import our beautiful local precompiled golden-age museum PNG illustrations
import astrolabeHero from "../assets/images/astrolabe_hero_1779445625266.png";
import elephantClock from "../assets/images/elephant_clock_1779445645499.png";
import cameraObscura from "../assets/images/camera_obscura_1779445664789.png";
import flyingMachine from "../assets/images/firnas_glider_prisms_1780191385147.png";
import alembicDistillation from "../assets/images/alembic_distillation_1779450843804.png";
import pulmonaryCirculation from "../assets/images/pulmonary_circulation_1779461836659.png";
import surgicalTools from "../assets/images/surgical_tools_1779462117368.png";
import trigIdentity from "../assets/images/trig_identity_1779464734536.png";
import canonOfMedicine from "../assets/images/canon_of_medicine_1779465215049.png";
import varnishGlass from "../assets/images/varnish_glass_1779618318141.png";
import aquaRegia from "../assets/images/aqua_regia_1779756897088.png";
import distillationFlasks from "../assets/images/distillation_flasks_1779756918574.png";
import alloyPurification from "../assets/images/alloy_purification_1779757131885.png";
import scientificApparatus from "../assets/images/scientific_apparatus_1779757152657.png";
import alFazariArmillary from "../assets/images/al_fazari_armillary_1779767548492.png";
import alFazariTables from "../assets/images/al_fazari_tables_1779767571626.png";
import alKhwarizmiZero from "../assets/images/al_khwarizmi_zero_1779768951490.png";
import alKhwarizmiTables from "../assets/images/al_khwarizmi_tables_1779768971013.png";
import astrolabeQuadrantSinusoidal from "../assets/images/astrolabe_quadrant_quad_v2_1780384021429.png";
import alKindiTrigApprox from "../assets/images/al_kindi_trig_approx_1779770896250.png";
import alKindiInheritance from "../assets/images/al_kindi_inheritance_1779770915723.png";
import banuMusaFloat from "../assets/images/hydrostatic_float_updated_1780190847372.png";
import banuMusaGears from "../assets/images/segmental_gears_updated_1780190873250.png";
import banuMusaFountain from "../assets/images/banu_musa_fountain_1779771716611.png";
import banuMusaMusical from "../assets/images/banu_musa_musical_1779771732981.png";
import banuMusaWater from "../assets/images/banu_musa_water_1779771751842.png";
import alFarghaniNilometer from "../assets/images/al_farghani_nilometer_1779771897731.png";
import alFarghaniArmillary from "../assets/images/al_farghani_armillary_1779771917178.png";
import alFarghaniEclipse from "../assets/images/al_farghani_eclipse_1779771938024.png";
import firnasPlanetarium from "../assets/images/firnas_planetarium_1779772147502.png";
import firnasGlass from "../assets/images/firnas_glass_1779772164833.png";
import firnasClock from "../assets/images/firnas_clock_1779772185737.png";
import dinawariLab from "../assets/images/dinawari_lab_1779772480865.png";
import dinawariLeather from "../assets/images/dinawari_leather_1779772500627.png";
import thabitTrig from "../assets/images/thabit_trig_1779780830726.png";
import thabitInheritance from "../assets/images/thabit_inheritance_1779780847573.png";
import battaniArmillary from "../assets/images/battani_armillary_1779781167268.png";
import battaniEclipse from "../assets/images/battani_eclipse_1779781189645.png";
import raziPetroleum from "../assets/images/razi_petroleum_1779782510000_1779781482061.png";
import raziSmallpox from "../assets/images/razi_smallpox_1779782520000_1779781503198.png";
import raziAntiseptic from "../assets/images/razi_antiseptic_1779782530000_1779781520260.png";
import raziDistillation from "../assets/images/razi_distillation_1779782540000_1779781542537.png";
import raziApothecary from "../assets/images/razi_apothecary_1779782550000_1779781563632.png";
import masudiArmillary from "../assets/images/masudi_armillary_1779783289561.png";
import masudiEclipse from "../assets/images/masudi_eclipse_1779783307404.png";
import sufiArmillary from "../assets/images/sufi_armillary_1779783599195.png";
import sufiEclipse from "../assets/images/sufi_eclipse_1779783620845.png";
import sufiFixedStars from "../assets/images/sufi_fixed_stars_1779783641294.png";
import sufiMagnitude from "../assets/images/sufi_magnitude_1779783660079.png";
import sufiConstellation from "../assets/images/sufi_constellation_1779783679697.png";
import sufiZodiac from "../assets/images/sufi_zodiac_1779783703323.png";
import uqlidisiTrig from "../assets/images/uqlidisi_trig_1779884946424.png";
import uqlidisiInheritance from "../assets/images/uqlidisi_inheritance_1779884964606.png";
import mariamFloatControls from "../assets/images/hydrostatic_float_updated_1780190847372.png";
import mariamGears from "../assets/images/segmental_gears_updated_1780190873250.png";
import zahrawiForceps from "../assets/images/zahrawi_forceps_1779886511623.png";
import zahrawiSyringes from "../assets/images/zahrawi_syringes_1779886536953.png";
import zahrawiLigature from "../assets/images/zahrawi_ligature_1779886556712.png";
import ibnSahlAtmospheric from "../assets/images/ibn_sahl_atmospheric_1779896434009.png";
import ibnSahlRefraction from "../assets/images/ibn_sahl_refraction_1779896451122.png";
import yunusPendulum from "../assets/images/yunus_pendulum_1780026645991.png";
import yunusArmillary from "../assets/images/yunus_armillary_1780026678542.png";
import yunusEclipse from "../assets/images/yunus_eclipse_1780026706646.png";
import majritiMercuric from "../assets/images/majriti_mercuric_1780045696499.png";
import majritiVessels from "../assets/images/majriti_vessels_1780045720540.png";
import majritiLeather from "../assets/images/majriti_leather_1780045739863.png";
import karajiHydrology from "../assets/images/karaji_hydrology_1780045983822.png";
import karajiFloatControls from "../assets/images/hydrostatic_float_updated_1780190847372.png";
import karajiGears from "../assets/images/segmental_gears_updated_1780190873250.png";
import haythamRefraction from "../assets/images/haytham_refraction_1780046303950.png";
import haythamLenses from "../assets/images/haytham_lenses_1780046325108.png";
import haythamBilliard from "../assets/images/haytham_billiard_1780046347924.png";
import biruniHydrostatic from "../assets/images/biruni_hydrostatic_1780047126349.png";
import biruniAstrolabe from "../assets/images/biruni_astrolabe_1780047150634.png";
import biruniRotation from "../assets/images/biruni_rotation_1780047167823.png";
import sinaDistillation from "../assets/images/sina_distillation_1780047462349.png";
import sinaInertia from "../assets/images/sina_inertia_1780047481354.png";
import sinaTraction from "../assets/images/sina_traction_1780047504026.png";
import sinaQuarantine from "../assets/images/sina_quarantine_1780053837735.png";
import sinaCompounding from "../assets/images/sina_compounding_1780053862671.png";
import sinaPulse from "../assets/images/sina_pulse_1780053881264.png";
import sinaAnatomy from "../assets/images/sina_anatomy_1780053900598.png";
import jayyaniSines from "../assets/images/jayyani_sines_1780054300899.png";
import jayyaniTrig from "../assets/images/jayyani_trig_1780054322083.png";
import jayyaniInheritance from "../assets/images/jayyani_inheritance_1780054341648.png";
import hazmPsychology from "../assets/images/hazm_psychology_1780054505866.png";
import hazmHerbs from "../assets/images/hazm_herbs_1780054524882.png";
import hazmAnatomy from "../assets/images/hazm_anatomy_1780054541725.png";
import hazmLegal from "../assets/images/hazm_legal_1780054560002.png";
import hazmLogic from "../assets/images/hazm_logic_1780054578848.png";
import hazmArchives from "../assets/images/hazm_archives_1780054596208.png";

// Omar Khayyam newly generated portfolio images
import khayyamJalaliCalendar from "../assets/images/khayyam_jalali_calendar_1780318912343.png";
import khayyamBinomialCoefficients from "../assets/images/khayyam_binomial_coefficients_1780191879283.png";
import khayyamObservatoryInstruments from "../assets/images/khayyam_observatory_instruments_1780191899084.png";
import khayyamEuclideanConics from "../assets/images/khayyam_euclidean_conics_1780191916246.png";
import khayyamClassificationEquations from "../assets/images/khayyam_classification_equations_1780191932544.png";

// Al-Muradi newly generated portfolio images
import muradiFloatControls from "../assets/images/muradi_float_controls_1780192244280.png";
import muradiGearCouplings from "../assets/images/muradi_gear_couplings_1780192262056.png";
import muradiWaterClocks from "../assets/images/muradi_water_clocks_1780192276925.png";
import muradiAutomatedDevices from "../assets/images/muradi_automated_devices_1780192293246.png";
import muradiTimekeeping from "../assets/images/muradi_timekeeping_1780192309801.png";

// Ibn Bassal newly generated portfolio images
import bassalFloatControls from "../assets/images/bassal_float_controls_1780192345792.png";
import bassalGearCouplings from "../assets/images/bassal_gear_couplings_1780192363976.png";
import bassalIrrigation from "../assets/images/bassal_irrigation_1780192381226.png";
import bassalGardens from "../assets/images/bassal_gardens_1780192397582.png";
import bassalSoilCrop from "../assets/images/bassal_soil_crop_1780192418509.png";
import bassalManuals from "../assets/images/bassal_manuals_1780192437504.png";

// Ibn Zuhr newly generated portfolio images
import zuhrTracheotomy from "../assets/images/zuhr_tracheotomy_parasitology_1780192842433.png";
import zuhrApothecary from "../assets/images/zuhr_apothecary_herbals_1780192856609.png";
import zuhrVascular from "../assets/images/zuhr_vascular_mapping_1780192874923.png";
import zuhrExperimental from "../assets/images/zuhr_experimental_procedures_1780192892728.png";

// Ibn Tufail newly generated portfolio images
import tufailEmpiricalCognition from "../assets/images/tufail_empirical_cognition_1780319152841.png";
import tufailApothecary from "../assets/images/tufail_apothecary_herbals_1780319173953.png";
import tufailVascular from "../assets/images/tufail_vascular_mapping_1780319190655.png";
import tufailPhilosophicalObs from "../assets/images/tufail_philosophical_obs_1780319209920.png";
import tufailExperimental from "../assets/images/tufail_experimental_knowledge_1780319230991.png";
import tufailNaturalWorldClass from "../assets/images/tufail_natural_world_class_1780319250834.png";

// Ibn Rushd newly generated portfolio images
import rushdColliget from "../assets/images/rushd_colliget_generalities_1780319609838.png";
import rushdApothecary from "../assets/images/rushd_apothecary_herbals_1780319629743.png";
import rushdVascular from "../assets/images/rushd_vascular_mapping_1780319648776.png";
import rushdAristotle from "../assets/images/rushd_aristotle_commentary_1780319671387.png";
import rushdRational from "../assets/images/rushd_rational_inquiry_1780319689774.png";
import rushdComparative from "../assets/images/rushd_comparative_medicine_1780319709115.png";
import rushdLegal from "../assets/images/rushd_legal_philosophy_1780319728681.png";

// Ibn al-Awwam newly generated portfolio images
import awwamKitabFilaha from "../assets/images/awwam_kitab_filaha_1780320078024.png";
import awwamHydrostaticFloat from "../assets/images/awwam_hydrostatic_float_1780320100112.png";
import awwamSegmentalGears from "../assets/images/awwam_segmental_gears_1780320120956.png";
import awwamAdvancedIrrigation from "../assets/images/awwam_advanced_irrigation_1780320140494.png";
import awwamGraftingOrchards from "../assets/images/awwam_grafting_orchards_1780320161350.png";
import awwamSoilScience from "../assets/images/awwam_soil_science_1780320179434.png";
import awwamBotanicalClassification from "../assets/images/awwam_botanical_classification_1780320199381.png";

// Al-Jazari newly generated portfolio images
import jazariElephantClock from "../assets/images/jazari_elephant_clock_1780320687372.png";
import jazariPistonPump from "../assets/images/jazari_piston_pump_1780320703992.png";
import jazariCrankshaftGear from "../assets/images/jazari_crankshaft_gear_1780320727277.png";
import jazariSecureLocker from "../assets/images/jazari_secure_locker_1780320750397.png";
import jazariProgrammableAutomata from "../assets/images/jazari_programmable_automata_1780320772702.png";
import jazariWaterClocks from "../assets/images/jazari_water_clocks_1780320790134.png";
import jazariAutomatedFountain from "../assets/images/jazari_automated_fountain_1780320810647.png";
import jazariPeacockFountain from "../assets/images/jazari_peacock_fountain_1780320829611.png";

// Al-Nabahani (Ibn al-Rumiyyah) and Ibn al-Baitar new main/portfolio images
import nabahaniRihla from "../assets/images/nabahani_rihla_botanical_1780321377086.png";
import nabahaniPlantRecords from "../assets/images/nabahani_plant_records_1780321406813.png";
import ibnAlBaitar from "../assets/images/ibn_al_baitar_1779527848506.png";

// Nasir al-Din al-Tusi high-fidelity portfolio images
import tusiCoupleGear from "../assets/images/tusi_couple_gear_1780384323020.png";
import tusiSphericalTrig from "../assets/images/tusi_spherical_trig_1780384341853.png";
import tusiLatitudePlates from "../assets/images/tusi_latitude_plates_1780384358561.png";

// Zakariya al-Qazwini high-fidelity portfolio images
import qazwiniCosmography from "../assets/images/qazwini_cosmography_1780384373640.png";
import qazwiniWondersAtlas from "../assets/images/qazwini_wonders_atlas_1780384393995.png";
import qazwiniNatHist from "../assets/images/qazwini_nat_hist_1780384417322.png";

// Ibn al-Nafis high-fidelity portfolio images
import nafisBloodCirc from "../assets/images/nafis_blood_circ_1780384434638.png";
import nafisPharmaHerbs from "../assets/images/nafis_pharma_herbs_1780384453151.png";
import nafisAnatomyMap from "../assets/images/nafis_anatomy_map_1780384470046.png";
import nafisMedEncyclo from "../assets/images/nafis_med_encyclo_1780384484825.png";

// Abu Ali al-Hasan ibn Ali al-Marrakushi high-fidelity portfolio images
import marrakushiSundialGnomon from "../assets/images/marrakushi_sundial_gnomon_1780385640961.png";
import marrakushiGiantInstruments from "../assets/images/marrakushi_giant_instruments_1780385653850.png";
import marrakushiSolarTables from "../assets/images/marrakushi_solar_tables_1780385671527.png";

// Qutb al-Din al-Shirazi high-fidelity portfolio images
import shiraziRainbowOptics from "../assets/images/shirazi_rainbow_optics_1780385688391.png";
import shiraziAirResistance from "../assets/images/shirazi_air_resistance_1780385705264.png";
import shiraziGlassRefraction from "../assets/images/shirazi_glass_refraction_1780385720328.png";

// Ahmad ibn al-Banna al-Marrakushi high-fidelity portfolio images
import bannaMinhajAlgebra from "../assets/images/banna_minhaj_algebra_1780385736079.png";
import bannaFractionSystems from "../assets/images/banna_fraction_systems_1780385754113.png";
import bannaMathNotation from "../assets/images/banna_math_notation_1780385771960.png";
import bannaAstroTables from "../assets/images/banna_astro_tables_1780385787291.png";

// Ali Qushji primary image
import qushjiPrimary from "../assets/images/qushji_earth_rot_1780499991308.png";
import qushjiEarthRot from "../assets/images/qushji_earth_rot_1780499991308.png";
import qushjiNonPhilos from "../assets/images/qushji_non_philos_1780500008944.png";
import qushjiArmillary from "../assets/images/qushji_armillary_1780500025588.png";
import qushjiCalcMethods from "../assets/images/qushji_calc_methods_1780500040659.png";
import qushjiLunarTables from "../assets/images/qushji_lunar_tables_1780500055214.png";

// Ibn Battuta portfolio images
import battutaNauticalMaps from "../assets/images/battuta_nautical_maps_1780386387419.png";
import battutaTravelRecords from "../assets/images/battuta_travel_records_1780386404630.png";

// Ibn al-Shatir portfolio images
import shatirNonPtolemaic from "../assets/images/shatir_non_ptolemaic_1780386421811.png";
import shatirTimekeeping from "../assets/images/shatir_timekeeping_1780386440313.png";

// Ibn Khaldun portfolio images
import khaldunHistSociology from "../assets/images/khaldun_hist_sociology_1780386456120.png";
import khaldunMuqaddimah from "../assets/images/khaldun_muqaddimah_1780386474223.png";
import khaldunEconomicCycle from "../assets/images/khaldun_economic_cycle_1780386488542.png";

// Al-Kashi portfolio images
import kashiKeyArithmetic from "../assets/images/kashi_key_arithmetic_1780386507834.png";
import kashiHighPrecision from "../assets/images/kashi_high_precision_1780386525040.png";
import kashiTrigTables from "../assets/images/kashi_trig_tables_1780386541864.png";

// Al-Idrisi fallback images
import idrisiGeographyWorld from "../assets/images/masudi_geography_1779783268591.png";
import idrisiNauticalRoutes from "../assets/images/ibn_majid_1779527750511.png";

// Taqi al-Din newly generated portfolio and primary images
import taqiSteamPump from "../assets/images/taqi_steam_pump_1780417171267.png";
import taqiMonoblockPump from "../assets/images/taqi_monoblock_pump_1780417192675.png";
import taqiSecondsClock from "../assets/images/taqi_seconds_clock_1780417212947.png";
import taqiTimekeepingSys from "../assets/images/taqi_timekeeping_sys_1780417228724.png";
import taqiAstronomyInst from "../assets/images/taqi_astronomy_inst_1780417250487.png";

// Piri Reis newly generated portfolio and primary images
import piriWorldChart from "../assets/images/piri_world_chart_1780498465088.png";
import piriGridNav from "../assets/images/piri_grid_nav_1780498482769.png";
import piriCoastalSurveys from "../assets/images/piri_coastal_surveys_1780498497644.png";
import piriKitabBahriye from "../assets/images/piri_kitab_bahriye_1780498513619.png";
import piriHarborAtlas from "../assets/images/piri_harbor_atlas_1780498528959.png";
import piriMedCharts from "../assets/images/piri_med_charts_1780498545641.png";
import piriRouteAtlas from "../assets/images/piri_route_atlas_1780498562452.png";

// Ahmad ibn Majid newly generated portfolio and primary images
import majidCompassMatrix from "../assets/images/majid_compass_matrix_1780499307940.png";
import majidCelestialNav from "../assets/images/majid_celestial_nav_1780499323648.png";
import majidIndianOcean from "../assets/images/majid_indian_ocean_1780499339175.png";
import majidFawaidBook from "../assets/images/majid_fawaid_book_1780499355864.png";
import majidMonsoonCharts from "../assets/images/majid_monsoon_charts_1780499372374.png";
import majidAtlasRedSea from "../assets/images/majid_atlas_red_sea_1780499387046.png";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  field?: Discipline;
  seed?: number;
  scientistId?: string;
  inventionIndex?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  field,
  seed = 0,
  scientistId,
  inventionIndex = 0,
  ...props
 }: ImageWithFallbackProps) {
  // Helper routine to retrieve the best matched local image by scientist ID or discipline
  function getInventionImage(id?: string, discipline?: Discipline, sSeed: number = 0, idx: number = 0): string {
    const MUSEUM_IMAGES = [
      astrolabeHero,
      alembicDistillation,
      cameraObscura,
      elephantClock,
      flyingMachine,
      pulmonaryCirculation,
      surgicalTools,
      trigIdentity,
      canonOfMedicine
    ];

    // If visualizing a secondary portfolio invention, select a different verified museum item
    if (idx > 0 && id) {
      const normalized = id.toLowerCase();
      
      // Al-Khwarizmi (Mathematics)
      if (normalized.includes("khwarizmi")) {
        if (idx === 1) return alKhwarizmiZero;     // Decimal Numeral System & Concept of Zero
        if (idx === 2) return astrolabeQuadrantSinusoidal; // The Astrolabe Quadrant & Sinusoidal Tables
        if (idx === 3) return alKhwarizmiTables;   // Spherical Trigonometric Coordinate Tables
      }
      
      // Ibn Sina (Medicine)
      if (normalized.includes("sina")) {
        if (idx === 1) return sinaDistillation;    // Steam distillation for essential oils
        if (idx === 2) return sinaInertia;         // Theory of Inertia & Air Resistance
        if (idx === 3) return sinaTraction;        // Pioneering Bone-Setting & Spinal Traction
        if (idx === 4) return sinaQuarantine;       // Quarantine and Contagion Study Chambers
        if (idx === 5) return sinaCompounding;      // Pharmacological Herbal Compounding
        if (idx === 6) return sinaPulse;            // Pulse Diagnosis and Medical Observation
        if (idx === 7) return sinaAnatomy;          // Anatomical and Physiological Manuscripts
      }
      
      // Ibn al-Haytham (Physics/Optics)
      if (normalized.includes("haytham")) {
        if (idx === 1) return haythamRefraction;   // Atmospheric Refraction
        if (idx === 2) return haythamLenses;       // Convex Magnifying Lenses
        if (idx === 3) return haythamBilliard;     // Alhazen reflection billiard problem
      }
      
      // Jabir ibn Hayyan (Chemistry)
      if (normalized.includes("hayyan")) {
        if (idx === 1) return aquaRegia;            // Aqua Regia & Strong Mineral Acids
        if (idx === 2) return varnishGlass;         // Chemical Protective Varnishes & Glass
        if (idx === 3) return distillationFlasks;   // Purified Distillation Flasks & retorts
        if (idx === 4) return alloyPurification;     // Advanced Metallic Alloy Purification
        if (idx === 5) return scientificApparatus;   // Scientific Laboratory Apparatus
      }
      
      // Al-Biruni (Astronomy/Geodesy)
      if (normalized.includes("biruni")) {
        if (idx === 1) return biruniHydrostatic;    // Hydrostatic balance of mineral densities
        if (idx === 2) return biruniAstrolabe;       // Geared astrolabe calendar clock
        if (idx === 3) return biruniRotation;        // Rotating celestial orbit geometry
      }
      
      // Al-Fazari (Astronomy)
      if (normalized.includes("fazari")) {
        if (idx === 1) return alFazariArmillary;     // The Altitude Observation Armillary
        if (idx === 2) return alFazariTables;        // Constant Eclipse Frequency Tables
      }
      
      // Al-Farghani (Astronomy)
      if (normalized.includes("farghani")) {
        if (idx === 1) return alFarghaniArmillary;   // The Altitude Observation Armillary
        if (idx === 2) return alFarghaniEclipse;     // Constant Eclipse Frequency Tables
      }
      
      // Al-Kindi (Mathematics/Cryptanalysis)
      if (normalized.includes("kindi")) {
        if (idx === 1) return alKindiTrigApprox;    // Trigonometric Sine & Cosine Approximations
        if (idx === 2) return alKindiInheritance;   // Inheritance Computation Algorithms
      }
      
      // Al-Jayyani (Mathematics/Astronomy)
      if (normalized.includes("jayyani")) {
        if (idx === 1) return jayyaniTrig;          // Trigonometric Sine & Cosine Approximations
        if (idx === 2) return jayyaniInheritance;   // Inheritance Computation Algorithms
      }
      
      // Ibn Hazm (Medicine/Philosophy)
      if (normalized.includes("hazm")) {
        if (idx === 1) return hazmHerbs;            // Pharmacological Compounding & Herbals
        if (idx === 2) return hazmAnatomy;          // Anatomical Dissections & Vascular Mapping
        if (idx === 3) return hazmLegal;            // Comparative Legal Manuscript Systems
        if (idx === 4) return hazmLogic;            // Logical Classification and Analytical Frameworks
        if (idx === 5) return hazmArchives;         // Andalusian Knowledge Preservation Archives
      }
      
      // Al-Razi (Medicine)
      if (normalized.includes("razi")) {
        if (idx === 1) return raziPetroleum;        // Petroleum Extraction & Kerosene Refinement
        if (idx === 2) return raziSmallpox;         // Clinical Smallpox vs Measles Differentiation
        if (idx === 3) return raziAntiseptic;        // Early Antiseptic Formulations
        if (idx === 4) return raziDistillation;       // Distillation of Medicinal Chemicals
        if (idx === 5) return raziApothecary;        // Advanced Apothecary Preparation Systems
      }
      
      // Abbas ibn Firnas (Aviation/Physics)
      if (normalized.includes("firnas")) {
        if (idx === 1) return firnasPlanetarium;   // Interactive ceiling planetarium
        if (idx === 2) return firnasGlass;         // Silica Sand glass smelting
        if (idx === 3) return firnasClock;         // Fluid gravity clepsydra water-clock
      }
      
      // Al-Jazari (Mechanical Engineering)
      if (normalized.includes("jazari")) {
        if (idx === 1) return jazariPistonPump;            // Double-Acting Radial Piston Suction Pump
        if (idx === 2) return jazariCrankshaftGear;        // The Segmental Crankshaft Gear Mechanism
        if (idx === 3) return jazariSecureLocker;          // Combination Secure Manuscript Locker
        if (idx === 4) return jazariProgrammableAutomata;  // Programmable Automata Machines
        if (idx === 5) return jazariWaterClocks;           // Water-Powered Mechanical Clocks
        if (idx === 6) return jazariAutomatedFountain;     // Automated Fountain Engineering
        if (idx === 7) return jazariPeacockFountain;       // Mechanical Peacock Fountain
      }
      
      // Nasir al-Tusi (Astronomy)
      if (normalized.includes("tusi")) {
        if (idx === 1) return tusiSphericalTrig;   // Pure Spherical Trigonometry Theorems
        if (idx === 2) return tusiLatitudePlates;  // Astrolabe Coordinate Latitude Plates
      }

      // Zakariya al-Qazwini (Astronomy/Cosmography)
      if (normalized.includes("qazwini")) {
        if (idx === 1) return qazwiniWondersAtlas;  // Celestial and Earthly Wonders Atlas
        if (idx === 2) return qazwiniNatHist;       // Natural History Encyclopedia
      }

      // Abu Ali al-Hasan ibn Ali al-Marrakushi (Astronomy)
      if (normalized.includes("marrakushi") && !normalized.includes("banna")) {
        if (idx === 1) return marrakushiGiantInstruments; // Giant Astronomical Measurement Instruments
        if (idx === 2) return marrakushiSolarTables;       // Solar Observation Tables
      }

      // Qutb al-Din al-Shirazi (Optics/Physics)
      if (normalized.includes("shirazi")) {
        if (idx === 1) return shiraziAirResistance;       // Specific Atmospheric Air Resistance Dynamics
        if (idx === 2) return shiraziGlassRefraction;     // Refraction Index for Glass Crystals
      }

      // Ahmad ibn al-Banna al-Marrakushi (Mathematics/Astronomy)
      if (normalized.includes("banna") || normalized.includes("osman al-marrakushi")) {
        if (idx === 1) return bannaFractionSystems;       // Advanced Fraction Calculation Systems
        if (idx === 2) return bannaMathNotation;          // Mathematical Notation Manuscripts
        if (idx === 3) return bannaAstroTables;           // Astronomical Calculation Tables
      }

      // Ibn al-Nafis (Medicine)
      if (normalized.includes("nafis")) {
        if (idx === 1) return nafisPharmaHerbs;     // Pharmacological Compounding & Herbals
        if (idx === 2) return nafisAnatomyMap;       // Anatomical Dissections & Vascular Mapping
        if (idx === 3) return nafisMedEncyclo;      // Medical Encyclopedia Manuscripts
      }
      
      // Ibn Battuta (Astronomy/Travel)
      if (normalized.includes("battuta")) {
        if (idx === 1) return battutaTravelRecords;       // Global Travel and Exploration Records
      }

      // Ibn al-Shatir (Astronomy)
      if (normalized.includes("shatir")) {
        if (idx === 1) return shatirTimekeeping;          // Advanced Astronomical Timekeeping Instruments
      }

      // Ibn Khaldun (Sociology/Historiography)
      if (normalized.includes("khaldun")) {
        if (idx === 1) return khaldunMuqaddimah;          // The Muqaddimah
        if (idx === 2) return khaldunEconomicCycle;       // Economic and Social Cycle Theory
      }

      // Al-Kashi (Mathematics)
      if (normalized.includes("kashi")) {
        if (idx === 1) return kashiHighPrecision;         // High-Precision Mathematical Computation
        if (idx === 2) return kashiTrigTables;           // Advanced Trigonometric Tables
      }
      
      // Umar Khayyam (Mathematics)
      if (normalized.includes("khayyam")) {
        if (idx === 1) return khayyamJalaliCalendar;          // Astronomical Solar Calendar (Jalali)
        if (idx === 2) return khayyamBinomialCoefficients;    // Algebraic Binomial Expansion Coefficients
        if (idx === 3) return khayyamObservatoryInstruments;  // Astronomical Observatory Instruments
        if (idx === 4) return khayyamEuclideanConics;         // Euclidean Geometry and Conic Sections
        if (idx === 5) return khayyamClassificationEquations; // Mathematical Classification of Equations
      }
      
      // Al-Zahrawi (Medicine)
      if (normalized.includes("zahrawi")) {
        if (idx === 1) return zahrawiForceps;       // Obstetrical Delivery Forceps
        if (idx === 2) return zahrawiSyringes;      // Urethral Syringes and Bladder Lithotrite
        if (idx === 3) return zahrawiLigature;      // Ligature of Arteries & Bleeding Seals
      }
      
      // Taqi al-Din (Mechanical Engineering)
      if (normalized.includes("taqi") || normalized.includes("shami")) {
        if (idx === 1) return taqiMonoblockPump;           // Six-Cylinder Monoblock Cam Water Pump
        if (idx === 2) return taqiSecondsClock;            // Spring-Driven Chronological Seconds Clock
        if (idx === 3) return taqiTimekeepingSys;          // Mechanical Observatory Timekeeping System
        if (idx === 4) return taqiAstronomyInst;           // Astronomical Observation Instruments
      }

      // Ali Qushji (Astronomy)
      if (normalized.includes("qushji")) {
        if (idx === 1) return qushjiNonPhilos;             // Non-Philosophical Astronomy
        if (idx === 2) return qushjiArmillary;              // Altitude Observation Armillary Rings
        if (idx === 3) return qushjiCalcMethods;            // Independent Astronomical Calculation Methods
        if (idx === 4) return qushjiLunarTables;            // Lunar and Planetary Observation Tables
      }

      // Ahmad ibn Majid (Astronomy/Navigation)
      if (normalized.includes("majid")) {
        if (idx === 1) return majidCelestialNav;             // Celestial Navigation Systems
        if (idx === 2) return majidIndianOcean;              // Indian Ocean Route Mapping
        if (idx === 3) return majidFawaidBook;               // Kitab al-Fawa'id fi Usul al-Bahr wa al-Qawa'id
        if (idx === 4) return majidMonsoonCharts;            // Monsoon Wind Classification Charts
        if (idx === 5) return majidAtlasRedSea;              // Red Sea and Arabian Sea Navigation Atlas
      }

      // Piri Reis (Mathematics/Cartography)
      if (normalized.includes("piri")) {
        if (idx === 1) return piriGridNav;                 // Grid Navigation System
        if (idx === 2) return piriCoastalSurveys;          // Naval Cartography and Coastal Surveys
        if (idx === 3) return piriKitabBahriye;            // Kitab-i Bahriye (Book of Navigation)
        if (idx === 4) return piriHarborAtlas;             // Port and Harbor Atlas
        if (idx === 5) return piriMedCharts;               // Mediterranean Sea Navigation Charts
        if (idx === 6) return piriRouteAtlas;              // Strategic Maritime Route Atlas
      }
      
      // Banu Musa Brothers (Mechanical Engineering)
      if (normalized.includes("musa") || normalized.includes("banu")) {
        if (idx === 1) return banuMusaFloat;        // Automated Hydrostatic Float Controls
        if (idx === 2) return banuMusaGears;        // Intricate Segmental Gear Couplings
        if (idx === 3) return banuMusaFountain;     // Automatic Fountain Regulation Systems
        if (idx === 4) return banuMusaMusical;      // Mechanical Musical Automata
        if (idx === 5) return banuMusaWater;        // Programmable Water Distribution Devices
      }
      
      // Al-Dinawari (Agricultural Botany / Chemistry / Pharmacology)
      if (normalized.includes("dinawari")) {
        if (idx === 1) return dinawariLab;          // Laboratory Calcination and Crystallization Vessels
        if (idx === 2) return dinawariLeather;      // Synthetic Leather Waterproofing Agents
      }
      
      // Thabit ibn Qurra (Mathematics)
      if (normalized.includes("thabit") || normalized.includes("qurra")) {
        if (idx === 1) return thabitTrig;           // Trigonometric Sine & Cosine Approximations
        if (idx === 2) return thabitInheritance;    // Inheritance Computation Algorithms
      }
      
      // Al-Battani (Astronomy)
      if (normalized.includes("battani")) {
        if (idx === 1) return battaniArmillary;     // The Altitude Observation Armillary
        if (idx === 2) return battaniEclipse;       // Constant Eclipse Frequency Tables
      }
      
      // Al-Masudi (History/Geography/Astronomy)
      if (normalized.includes("masudi")) {
        if (idx === 1) return masudiArmillary;      // The Altitude Observation Armillary
        if (idx === 2) return masudiEclipse;        // Constant Eclipse Frequency Tables
      }

      // Al-Sufi (Astronomy)
      if (normalized.includes("sufi")) {
        if (idx === 1) return sufiArmillary;         // The Altitude Observation Armillary
        if (idx === 2) return sufiEclipse;           // Constant Eclipse Frequency Tables
        if (idx === 3) return sufiFixedStars;        // The Book of Fixed Stars
        if (idx === 4) return sufiMagnitude;         // Precision Stellar Magnitude Classification
        if (idx === 5) return sufiConstellation;     // Astronomical Constellation Mapping
        if (idx === 6) return sufiZodiac;            // Zodiacal Celestial Coordinate Systems
      }

      // Al-Uqlidisi (Mathematics)
      if (normalized.includes("uqlidisi")) {
        if (idx === 1) return uqlidisiTrig;          // Trigonometric Sine & Cosine Approximations
        if (idx === 2) return uqlidisiInheritance;   // Inheritance Computation Algorithms
      }

      // Mariam al-Ijliya (Engineering)
      if (normalized.includes("mariam") || normalized.includes("ijliya")) {
        if (idx === 1) return mariamFloatControls;    // Automated Hydrostatic Float Controls
        if (idx === 2) return mariamGears;            // Intricate Segmental Gear Couplings
      }

      // Ibn Sahl (Physics)
      if (normalized.includes("sahl")) {
        if (idx === 1) return ibnSahlAtmospheric;    // Specific Atmospheric Air Resistance Studies
        if (idx === 2) return ibnSahlRefraction;     // Refraction Index for Glass Crystals
      }

      // Ibn Yunus (Astronomy)
      if (normalized.includes("yunus")) {
        if (idx === 1) return yunusArmillary;        // The Altitude Observation Armillary
        if (idx === 2) return yunusEclipse;          // Constant Eclipse Frequency Tables
      }

      // Al-Majriti (Chemistry)
      if (normalized.includes("majriti")) {
        if (idx === 1) return majritiVessels;        // Laboratory Calcination and Crystallization Vessels
        if (idx === 2) return majritiLeather;        // Synthetic Leather Waterproofing Agent
      }

      // Al-Karaji (Engineering)
      if (normalized.includes("karaji")) {
        if (idx === 1) return karajiFloatControls;   // Automated Hydrostatic Float Controls
        if (idx === 2) return karajiGears;           // Intricate Segmental Gear Couplings
      }

      // Ibn Bassal (Engineering)
      if (normalized.includes("bassal")) {
        if (idx === 1) return bassalFloatControls;   // Automated Hydrostatic Float Controls
        if (idx === 2) return bassalGearCouplings;   // Intricate Segmental Gear Couplings
        if (idx === 3) return bassalIrrigation;      // Advanced Irrigation Networks
        if (idx === 4) return bassalGardens;         // Agricultural Experimentation Gardens
        if (idx === 5) return bassalSoilCrop;        // Soil and Crop Management Systems
        if (idx === 6) return bassalManuals;         // Botanical Cultivation Manuals
      }

      // Al-Muradi (Engineering)
      if (normalized.includes("muradi")) {
        if (idx === 1) return muradiFloatControls;     // Automated Hydrostatic Float Controls
        if (idx === 2) return muradiGearCouplings;     // Intricate Segmental Gear Couplings
        if (idx === 3) return muradiWaterClocks;       // Mechanical Water Clocks
        if (idx === 4) return muradiAutomatedDevices;   // Automated Mechanical Devices
        if (idx === 5) return muradiTimekeeping;       // Precision Timekeeping Systems
      }

      // Ibn Zuhr (Medicine)
      if (normalized.includes("zuhr")) {
        if (idx === 1) return zuhrTracheotomy;         // Tracheotomy Operations & Scientific Parasitology
        if (idx === 2) return zuhrApothecary;          // Pharmacological Compounding & Herbals
        if (idx === 3) return zuhrVascular;            // Anatomical Dissections & Vascular Mapping
        if (idx === 4) return zuhrExperimental;        // Experimental Medical Procedures
        if (idx === 5) return sinaQuarantine;          // Clinical Observation and Disease Classification
        if (idx === 6) return hazmHerbs;               // Therapeutic Nutrition and Dietary Medicine
        if (idx === 7) return sinaAnatomy;             // Early Veterinary and Comparative Medicine Studies
      }

      // Ibn al-Awwam (Engineering / Agriculture)
      if (normalized.includes("awwam")) {
        if (idx === 1) return awwamHydrostaticFloat;        // Automated Hydrostatic Float Controls
        if (idx === 2) return awwamSegmentalGears;          // Intricate Segmental Gear Couplings
        if (idx === 3) return awwamAdvancedIrrigation;      // Advanced Irrigation Engineering
        if (idx === 4) return awwamGraftingOrchards;        // Grafting and Orchard Cultivation Techniques
        if (idx === 5) return awwamSoilScience;             // Soil Science and Crop Management
        if (idx === 6) return awwamBotanicalClassification; // Botanical Classification and Plant Studies
      }

      // Al-Idrisi (Astronomy/Geography)
      if (normalized.includes("idrisi")) {
        if (idx === 1) return idrisiGeographyWorld;     // The Spherical Silver Globe & Tabula Rogeriana
        if (idx === 2) return idrisiGeographyWorld;     // Global Geographic Mapping Systems
        if (idx === 3) return idrisiNauticalRoutes;     // Maritime and Land Route Cartography
        if (idx === 4) return alFarghaniNilometer;     // Climate and Regional Classification Maps
        if (idx === 5) return dinawariLab;             // Trade Network Documentation
        if (idx === 6) return battaniArmillary;        // The Altitude Observation Armillary
        if (idx === 7) return battaniEclipse;          // Constant Eclipse Frequency Tables
      }

      // Ibn Tufail (Medicine)
      if (normalized.includes("tufail")) {
        if (idx === 1) return tufailApothecary;          // Pharmacological Compounding & Herbals
        if (idx === 2) return tufailVascular;            // Anatomical Dissections & Vascular Mapping
        if (idx === 3) return tufailPhilosophicalObs;     // Philosophical Natural Observation
        if (idx === 4) return tufailExperimental;        // Knowledge Through Experimentation
        if (idx === 5) return tufailNaturalWorldClass;   // Natural World Classification
      }

      // Ibn Rushd (Medicine)
      if (normalized.includes("rushd")) {
        if (idx === 1) return rushdApothecary;          // Pharmacological Compounding & Herbals
        if (idx === 2) return rushdVascular;           // Anatomical Dissections & Vascular Mapping
        if (idx === 3) return rushdAristotle;          // Aristotelian Scientific Commentary
        if (idx === 4) return rushdRational;           // Rational Inquiry & Natural Philosophy
        if (idx === 5) return rushdComparative;        // Comparative Medicine & Scientific Classification
        if (idx === 6) return rushdLegal;              // Legal and Philosophical Encyclopedic Works
      }

      // Al-Nabahani (Ibn al-Rumiyyah) (Clinical Pharmacy & Botany)
      if (normalized.includes("rumiyyah") || normalized.includes("nabahani")) {
        if (idx === 1) return sinaCompounding;          // Pharmacological Compounding & Herbals
        if (idx === 2) return sinaAnatomy;              // Anatomical Dissections & Vascular Mapping
        if (idx === 3) return hazmHerbs;                // Botanical Classification Systems
        if (idx === 4) return nabahaniPlantRecords;     // Medicinal Plant Documentation
        if (idx === 5) return bassalGardens;           // Agricultural and Herbal Research Collections
        if (idx === 6) return dinawariLab;              // Natural History and Flora Catalogs
      }

      // Ibn al-Baitar (Pharmacology)
      if (normalized.includes("baitar")) {
        if (idx === 1) return sinaDistillation;         // Laboratory Calcination and Crystallization Vessels
        if (idx === 2) return dinawariLeather;          // Synthetic Leather Waterproofing Agents
        if (idx === 3) return hazmHerbs;                // Medicinal Plant Classification Systems
        if (idx === 4) return bassalManuals;            // Botanical Exploration and Plant Catalogs
        if (idx === 5) return raziApothecary;           // Pharmaceutical Preparation Methods
        if (idx === 6) return canonOfMedicine;          // Natural Drug and Remedy Encyclopedia
      }
    }

    // If visualizing a secondary portfolio invention, select a different verified museum item
    if (idx > 0) {
      if (discipline === Discipline.Mathematics) {
        const mathImages = [trigIdentity, astrolabeHero, cameraObscura];
        return mathImages[idx % mathImages.length];
      }
      if (discipline === Discipline.Medicine) {
        const medImages = [canonOfMedicine, surgicalTools, pulmonaryCirculation];
        return medImages[idx % medImages.length];
      }
      if (discipline === Discipline.Chemistry) {
        const chemImages = [alembicDistillation, canonOfMedicine, trigIdentity];
        return chemImages[idx % chemImages.length];
      }
      if (discipline === Discipline.Engineering) {
        const engImages = [elephantClock, flyingMachine, astrolabeHero];
        return engImages[idx % engImages.length];
      }
      if (discipline === Discipline.Astronomy) {
        const astroImages = [astrolabeHero, trigIdentity, cameraObscura];
        return astroImages[idx % astroImages.length];
      }
      if (discipline === Discipline.Physics) {
        const physImages = [cameraObscura, flyingMachine, trigIdentity];
        return physImages[idx % physImages.length];
      }
      return MUSEUM_IMAGES[(sSeed + idx) % MUSEUM_IMAGES.length];
    }

    if (!id) {
      switch (discipline) {
        case Discipline.Mathematics:
        case Discipline.Astronomy:
          return astrolabeHero;
        case Discipline.Medicine:
        case Discipline.Chemistry:
          return alembicDistillation;
        case Discipline.Physics:
          return cameraObscura;
        case Discipline.Engineering:
          return sSeed % 2 === 0 ? elephantClock : flyingMachine;
        default:
          return astrolabeHero;
      }
    }

    const normalized = id.toLowerCase();

    // 1. Precise mappings for primary inventors of our 5 exquisite local assets
    if (normalized.includes("jazari")) {
      return jazariElephantClock; // The mechanical Elephant Clock
    }
    if (normalized.includes("firnas")) {
      return flyingMachine; // The glider flying machine
    }
    if (normalized.includes("haytham")) {
      return cameraObscura; // The camera obscura optics
    }
    if (normalized.includes("hayyan")) {
      return alembicDistillation; // The glass alembic boiling flask
    }
    if (normalized.includes("biruni")) {
      return astrolabeHero; // The celestial geodetic astrolabe
    }
    if (normalized.includes("nafis")) {
      return nafisBloodCirc; // Ibn al-Nafis's pulmonary blood loops
    }
    if (normalized.includes("qazwini")) {
      return qazwiniCosmography; // Zakariya al-Qazwini's celestial cosmography
    }
    if (normalized.includes("marrakushi") && !normalized.includes("banna")) {
      return marrakushiSundialGnomon; // Abu Ali al-Marrakushi's Principles of Astronomy & Giant Sundials
    }
    if (normalized.includes("shirazi")) {
      return shiraziRainbowOptics; // Qutb al-Din al-Shirazi's Physics of the Rainbow
    }
    if (normalized.includes("banna") || normalized.includes("osman al-marrakushi")) {
      return bannaMinhajAlgebra; // Ibn al-Banna's Minhaj al-Talib & Fractions
    }
    if (normalized.includes("tusi")) {
      return tusiCoupleGear; // Nasir al-Din al-Tusi's Tusi Couple planetary gear
    }
    if (normalized.includes("zahrawi")) {
      return surgicalTools; // Al-Zahrawi's 200+ surgical instruments
    }
    if (normalized.includes("yunus")) {
      return yunusPendulum; // Precision Long-Period Pendulum Tables & Gnomons
    }
    if (normalized.includes("majriti")) {
      return majritiMercuric; // Rutbat al-Hakim & Mercuric Oxide Isolation
    }
    if (normalized.includes("karaji")) {
      return karajiHydrology; // Quantitative Hydrology & Algebraic Induction
    }
    if (normalized.includes("sina")) {
      return canonOfMedicine; // Ibn Sina's Canon of Medicine
    }
    if (normalized.includes("jayyani")) {
      return jayyaniSines; // Al-Jayyani's Law of Sines for Spherical Triangles
    }
    if (normalized.includes("hazm")) {
      return hazmPsychology; // Ibn Hazm's Psychophysiological Diagnostics of Human Emotion
    }
    if (normalized.includes("zuhr")) {
      return zuhrTracheotomy; // Ibn Zuhr's tracheotomy operations science
    }
    if (normalized.includes("awwam")) {
      return awwamKitabFilaha; // Ibn al-Awwam's Kitab al-Filaha agriculture science
    }
    if (normalized.includes("idrisi")) {
      return idrisiGeographyWorld; // Al-Idrisi's beautiful terrestrial geography
    }
    if (normalized.includes("tufail")) {
      return tufailEmpiricalCognition; // Ibn Tufail's pristine Empirical Cognition and Sensory Biology
    }
    if (normalized.includes("rushd")) {
      return rushdColliget; // Ibn Rushd's dynamic medical Colliget
    }
    if (normalized.includes("rumiyyah") || normalized.includes("nabahani")) {
      return nabahaniRihla; // Al-Nabahani's Rihla al-Nabatiyyah botanical journey
    }
    if (normalized.includes("baitar")) {
      return ibnAlBaitar; // Ibn al-Baitar's Comprehensive Pharmacopoeia
    }
    if (normalized.includes("battuta")) {
      return battutaNauticalMaps; // Ibn Battuta's Nautical maps fallback
    }
    if (normalized.includes("shatir")) {
      return shatirNonPtolemaic; // Ibn al-Shatir's non-Ptolemaic planetary motion fallback
    }
    if (normalized.includes("khaldun")) {
      return khaldunHistSociology; // Ibn Khaldun's Scientific Historiography fallback
    }
    if (normalized.includes("kashi")) {
      return kashiKeyArithmetic; // Al-Kashi's Key to Arithmetic fallback
    }
    if (normalized.includes("qushji")) {
      return qushjiPrimary; // Ali Qushji's axial Earth rotation proof
    }
    if (normalized.includes("majid")) {
      return majidCompassMatrix; // Ahmad ibn Majid's stabilized magnetic compass
    }
    if (normalized.includes("reis")) {
      return piriWorldChart; // Piri Reis's World Map grid projection fallback
    }

    // 2. Mappings for other engineers and gear builders -> Elephant Clock or Flying Machine
    if (normalized.includes("shami") || normalized.includes("taqi")) {
      return taqiSteamPump; // Taqi al-Din's six-cylinder steam pump and clock escapements
    }

    // 3. Mappings for clinical chemists, pharmacists, and medical scientists -> Alembic distillation flask
    if (
      normalized.includes("razi") // Al-Razi (medical stitches, clinical trials)
    ) {
      return alembicDistillation;
    }

    // 4. Mappings for astronomers, stargazers, cartographers, navigation maps, and spherical geometry -> Astrolabe
    if (
      normalized.includes("khwarizmi") || // Al-Khwarizmi (Algebra, decimal coordinates, and zero)
      normalized.includes("tusi") || // Nasir al-Din al-Tusi (Tusi Couple planetary gear, astronomy)
      normalized.includes("khayyam") || // Umar Khayyam (Cubic conics intersections, solar calendar)
      normalized.includes("qushji") || // Ali Qushji (axial earth rotation orbits)
      normalized.includes("kindi") || // Al-Kindi (frequency tables, analysis ciphers)
      normalized.includes("farghani") || // Al-Farghani (celestial diameters, Nilometer float)
      normalized.includes("battani") || // Al-Battani (Sabian Tables and solar year)
      normalized.includes("masudi") || // Al-Masudi (Meadows of Gold geohistoriography)
      normalized.includes("sufi") || // Al-Sufi (Celestial Atlas and star mapping)
      normalized.includes("mariam") || // Mariam al-Ijliya (precision astrolabe)
      normalized.includes("ijliya") || // Mariam al-Ijliya (precision astrolabe)
      normalized.includes("yunus") || // Ibn Yunus (precision pendulum astronomical timing)
      normalized.includes("battuta") || // Ibn Battuta (nautical compass grids and voyages)
      normalized.includes("reis") || // Piri Reis (spherical World map projection grids)
      normalized.includes("idrisi") // Al-Idrisi (solid silver earth globe sphere)
    ) {
      return astrolabeHero;
    }

    // Secondary fallback based on the scientific field
    switch (discipline) {
      case Discipline.Mathematics:
      case Discipline.Astronomy:
        return astrolabeHero;
      case Discipline.Medicine:
      case Discipline.Chemistry:
        return alembicDistillation;
      case Discipline.Physics:
        return cameraObscura;
      case Discipline.Engineering:
        return sSeed % 2 === 0 ? elephantClock : flyingMachine;
      default:
        const assets = [astrolabeHero, elephantClock, cameraObscura, flyingMachine, alembicDistillation];
        return assets[sSeed % assets.length];
    }
  }

  const [imgSrc, setImgSrc] = useState<string>(() => {
    return (inventionIndex === 0 && src) ? src : getInventionImage(scientistId, field, seed, inventionIndex);
  });

  // Synchronize on parameters change and prefer the tailored specific database image if provided
  useEffect(() => {
    if (inventionIndex === 0 && src) {
      setImgSrc(src);
    } else {
      setImgSrc(getInventionImage(scientistId, field, seed, inventionIndex));
    }
  }, [src, scientistId, field, seed, inventionIndex]);

  return (
    <img
      src={imgSrc || undefined}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc(getInventionImage(scientistId, field, seed, inventionIndex));
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
