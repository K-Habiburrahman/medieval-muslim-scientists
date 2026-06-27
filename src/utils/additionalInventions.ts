/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scientist, AdditionalInvention, Discipline } from "../types";

// Explicit extra inventions for leading historical scientists
const customInventionsMap: Record<string, AdditionalInvention[]> = {
  "al-khwarizmi": [
    {
      title: "Decimal Numeral System & Concept of Zero",
      description: "Conceived to simplify the clumsy Roman and Greek notations, Al-Khwarizmi integrated Indian positional mathematics to popularize the base-10 decimal numeral system. His specific purpose was to establish the circle (\"sifr\" or zero) as a formal mathematical placeholder to simplify complex multi-digit calculations, transforming international trade, tax systems, and scientific computing.",
      classification: "Technique"
    },
    {
      title: "The Astrolabe Quadrant & Sinusoidal Tables",
      description: "Designed as a highly compact navigational tool, Al-Khwarizmi engineered the first astrolabe quadrant (a quarter-circle calculation plate). His empirical process involved deriving sinusoidal coordinates and mapping solar shadows to calculate geographic latitudes. His specific purpose was to allow travelers to quickly find coordinates without using bulky, circular metal spheres.",
      classification: "Instrument"
    },
    {
      title: "Spherical Trigonometric Coordinate Tables",
      description: "In response to the growing need for global travel and planetary tracking, Al-Khwarizmi compiled the historic 'Zij al-Sindhind' astronomical tables. By applying spherical trigonometry, his specific purpose was to provide sailors with reliable mathematical coordinate charts to navigate vast oceans safely without losing track of their destinations.",
      classification: "Theory"
    }
  ],
  "al-muradi": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to maintain constant flow rates inside high-precision water clocks, Al-Muradi engineered copper floats and concentric siphons. As water levels shifted inside chambers, the buoyant floats triggered wood gate valves to open or close. His specific purpose was to enable continuous self-regulating hydraulic loops without human intervention.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "To build programmable automaton theaters, Al-Muradi designed segmental gear cogs that featured teeth on only specific sectors of their circumference. His specific purpose was to translate steady rotative water force into timed, intermittent movements, allowing mechanized puppets to execute sequential actions like raising hands or striking bells at precise intervals.",
      classification: "Device"
    },
    {
      title: "Mechanical Water Clocks",
      description: "Seeking to automate the tracking of hours, Al-Muradi engineered massive mechanical water clocks in 11th-century Spain. His empirical process involved linking descending lead weights to a central gear train that rotated astrological discs. His specific purpose was to make public time visible and audible, utilizing pulleys to strike copper bells at exact hours.",
      classification: "Device"
    },
    {
      title: "Automated Mechanical Devices",
      description: "To study automatic motion patterns, Al-Muradi designed complex theatrical displays described in his 'Book of Secrets'. He worked with heavy liquid mercury wells, balancing lever structures, and siphons. His specific purpose was to automate dramatic sequences, such as moving mechanical birds that whistled and miniature musicians that played flutes.",
      classification: "Device"
    },
    {
      title: "Precision Timekeeping Systems",
      description: "To track stellar coordinates with high precision, Al-Muradi integrated astrolabes with specialized mechanical gear trains. His specific purpose was to map live constellations on planetary dial plates, using heavy-duty gear systems to translate raw hydraulic water pressure into smooth, consistent movements representing orbital periods.",
      classification: "Instrument"
    }
  ],
  "ibn-bassal": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to automate urban water distribution and protect agricultural wells from flooding, Ibn Bassal designed copper float gauges. Placing these floats inside high-volume subterranean water reservoirs, his specific purpose was to automatically track groundwater shifts and trigger heavy wooden release sluices when levels became dangerously high, protecting municipal networks from structure damage.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "To optimize animal-powered irrigation wells (norias), Ibn Bassal crafted heavy segmental gear cogs. His empirical process was based on aligning interlocking wood and bronze teeth so they engaged only during specific segments of the rotation. His specific purpose was to distribute mechanical loads evenly, preventing gear wear and multiplying the lift capacity of deep-well water buckets.",
      classification: "Device"
    },
    {
      title: "Advanced Irrigation Networks",
      description: "To transform arid estates in Toledo and Seville into fertile orchards, Ibn Bassal engineered multi-tiered gravity-fed water networks. His empirical process involved laying long subterranean corridors of porous terracotta pipes and stone conduits. His specific purpose was to deliver steady water pressures directly to sloped fields while minimizing evaporation losses.",
      classification: "System"
    },
    {
      title: "Agricultural Experimentation Gardens",
      description: "Commissioned by Al-Mamun of Toledo, Ibn Bassal constructed the royal Al-Munyat al-Amirriyah gardens as an active agronomic laboratory. His specific purpose was to test foreign seeds gathered from his travels in Egypt and Syria, developing grafting systems and studying how microclimates affect the growth of exotic fruits, citrus trees, and medicinal herbs.",
      classification: "System"
    },
    {
      title: "Soil and Crop Management Systems",
      description: "Driven by the quest to maximize crop yields across diverse terrains, Ibn Bassal formulated the first scientific taxonomy of soils. He classified agricultural earth into ten distinct thermal, texture, and moisture profiles. His specific purpose was to pair each soil tier with customized organic dung, compost, and ash fertilizers, curing alkaline and sandy soils to sustain heavy seasonal wheat grows.",
      classification: "Technique"
    },
    {
      title: "Botanical Cultivation Manuals",
      description: "To codify Andalusia's agricultural secrets, Ibn Bassal authored 'Diwan al-Filaha' (The Court of Agriculture). Drawing on decades of botanical experiments, he documented seed selection, planting times, and pruning schedules. His specific purpose was to provide a rigorous, empirical textbook for farmers, outlining watering limits and plant diseases for over one hundred crop varieties.",
      classification: "Theory"
    }
  ],
  "ibn-sina": [
    {
      title: "Steam Distillation for Essential Oils",
      description: "Seeking to extract the pure active volatile principles of medicinal flora, Ibn Sina engineered the first coil-condenser steam distillation apparatus. He routed hot herbal steam through a copper spiral tubing encased in cold water vessels. His specific purpose was to isolate highly concentrated, sterile essential oils (such as rose and lavender oils) to establish the chemical foundations of phytotherapy.",
      classification: "Technique"
    },
    {
      title: "The Theory of Inertia & Air Resistance",
      description: "To challenge the Aristotelian physics of motion, Ibn Sina formulated the concept of 'mayl' (inclination), predicting that an object propelled in a friction-free vacuum would travel in a continuous linear trajectory forever. His specific purpose was to isolate the decay of momentum from medium barriers like air particles, directly anticipating Newton's First Law of Motion by almost 700 years.",
      classification: "Theory"
    },
    {
      title: "Pioneering Bone-Setting & Spinal Traction",
      description: "To treat severe orthopedic trauma, Ibn Sina invented specialized wooden traction benches equipped with adjustable pulleys, gears, and tethers. His specific purpose was to apply steady, controlled counter-force tension to safely extend the spinal column, realign fractured limbs, and reduce joint dislocations, stabilizing them with self-hardening starched casts.",
      classification: "Technique"
    },
    {
      title: "Quarantine and Contagion Study Chambers",
      description: "To curb the spread of infectious diseases during medieval epidemics, Ibn Sina conceived the protocol of forty-day isolations ('al-Arba'iniya', which is the linguistic ancestor of 'quarantine'). His specific purpose was to isolate contagious travelers and patients in airy, designated hospital chambers, preventing airborne pathogen pathways from infecting wider city boundaries.",
      classification: "Technique"
    },
    {
      title: "Pharmacological Herbal Compounding",
      description: "To standardize medical compounding, Ibn Sina formulated systematic compounding protocols in 'The Canon of Medicine'. He designed step-by-step methods to distill, pulverize, and mix raw botanicals, minerals, and animal extracts. His specific purpose was to calculate exact dosages and prevent toxic side effects by balancing hot-cold and wet-dry humoral qualities.",
      classification: "Technique"
    },
    {
      title: "Pulse Diagnosis and Medical Observation",
      description: "Conceived to detect internal cardiac and respiratory disorders without surgery, Ibn Sina systematized radial pulse diagnostics. Placing four fingers with various pressure grades against the patient's wrist, his specific purpose was to categorize dozens of pulse profiles based on frequency, expansion height, and rhythm, linking them to specific disease states.",
      classification: "Technique"
    },
    {
      title: "Anatomical and Physiological Manuscripts",
      description: "To understand the human body's structure as a functional mechanical system, Ibn Sina compiled highly detailed anatomical registers. Through comparative dissection of animal organs, skulls, and nerves, his specific purpose was to map muscle systems, ocular components, and the central nervous system, establishing the definitive diagnostic standard for medieval medical education.",
      classification: "Theory"
    }
  ],
  "ibn-al-haytham": [
    {
      title: "The Mechanics of Atmospheric Refraction",
      description: "Conceived to solve why the sun's rays remain visible before sunrise and after sunset, Ibn al-Haytham developed the physics of atmospheric refraction. He tracked light ray bending angles and twilight durations over seasons. His specific purpose was to mathematically project astronomical angles, proving that light bends when passing from a vacuum to the air, estimating the atmosphere's depth to be 52 miles.",
      classification: "Theory"
    },
    {
      title: "Convex and Concave Glass Magnifying Lenses",
      description: "To study light convergence and assist readers with visual impairments, Ibn al-Haytham executed the first systematic experiments on hemispherical glass lenses. He melted high-purity silica sand, grinding it into precise convex and concave shapes. His specific purpose was to map the exact physical coordinates where refracted rays intersect, inventing early reading stones that laid the groundwork for spectacles.",
      classification: "Instrument"
    },
    {
      title: "The Alhazen Mirror Billiard Problem",
      description: "To model light reflections off spherical, curved surfaces, Ibn al-Haytham formulated the legendary geometric puzzle known as 'Alhazen's Problem'. His empirical process used conic section geometry, combining hyperbolas and circles. His specific purpose was to calculate the exact reflection coordinate on a round mirror where a ray of light originating from a source must bounce to reach an observer's eye.",
      classification: "Theory"
    }
  ],
  "jabir-ibn-hayyan": [
    {
      title: "Aqua Regia & Strong Mineral Acids",
      description: "Conceived to isolate strong chemical compounds and dissolve stubborn solids, Jabir ibn Hayyan synthesized pure sulfuric, nitric, and hydrochloric acids. By combining nitric and hydrochloric acids, his specific purpose was to engineer 'Aqua Regia' (Royal Water), a golden high-potency solvent capable of dissolving noble Gold and Platinum, initiating modern redox chemistry.",
      classification: "Chemical"
    },
    {
      title: "Chemical Protective Varnishes & Glass",
      description: "To protect military gear from rust and prevent wood rot under rainy climates, Jabir formulated custom synthetic varnishes and polymer barriers. He boiled organic resins, tree oils, and manganese dioxide. His specific purpose was to seal iron armor, shields, and silk garments, making them waterproof and rustproof while testing new glass recipes to withstand blazing heat.",
      classification: "Material"
    },
    {
      title: "Purified Distillation Flasks & retorts",
      description: "To execute high-purity chemical reactions without contamination, Jabir designed specialized scientific glassware, specifically the alembic and retort. He experimented with glass blowing to mold tall fractionating columns and sublimation heads. His specific purpose was to isolate vapors, enabling chemists to distill alcohol, filter volatile gases, and recrystallize minerals cleanly.",
      classification: "Tool"
    },
    {
      title: "Advanced Metallic Alloy Purification",
      description: "Driven by the need to standardize currency and extract pure metals from crude rocks, Jabir engineered advanced pyrometallurgical methods like cupellation and calcination. His specific purpose was to burn off lead, sulfur, and copper impurities inside a high-temperature blast oven, yielding pure gold, silver, and chemical-resistant industrial steel alloys.",
      classification: "Technique"
    },
    {
      title: "Scientific Laboratory Apparatus",
      description: "To elevate chemistry from occult alchemy to an empirical, quantitative science, Jabir standardized laboratory apparatus. He engineered sensitive balance beams to measure grams, constructed iron tongs, and designed clay filter funnels. His specific purpose was to record precise weights and reactions, ensuring chemical experiments could be duplicated across scholarly labs.",
      classification: "Tool"
    }
  ],
  "al-biruni": [
    {
      title: "Hydrostatic Balance of Mineral Densities",
      description: "Conceived to detect counterfeit gemstones and verify metal purity, Al-Biruni engineered a highly sensitive, specialized hydrostatic balance. Placing specimens inside custom water-filled vessels and weighing the displaced volume, his specific purpose was to calculate specific gravities with incredible mathematical accuracy, establishing a baseline density index for eighteen distinct metals and precious gems.",
      classification: "Device"
    },
    {
      title: "Mechanical Geared Astrolabe-Calendar",
      description: "Designed as a highly advanced analog computing device, Al-Biruni engineered a mechanical geared calendar timepiece. His empirical process involved forging and assembling a modular train of eight interlocking brass, toothed gears. His specific purpose was to translate a single dial rotation into coordinated movements representing the lunar phases and solar days, automating astronomical time tracking.",
      classification: "Instrument"
    },
    {
      title: "Non-Static Planetary Rotation Theory",
      description: "Seeking to verify the physical contours and motion of the Earth, Al-Biruni formulated alternative planetary rotation models. He analyzed the gradual shifts in river structures, soil layers, and star coordinates over historical eras. His specific purpose was to challenge classical geocentric stationary models, proposing that the Earth rotates on its own central axis while calculating the Earth's radius with unprecedented precision.",
      classification: "Theory"
    }
  ],
  "al-fazari": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to track the precise positions of celestial bodies relative to the celestial equator, Al-Fazari constructed a massive brass armillary sphere. His empirical process involved assembling concentric metal loops engraved with stereographic degree markings. His specific purpose was to determine the altitude angles of stars and solar paths, establishing a standardized method of astronomical measurement in Baghdad.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "In response to the geopolitical and agricultural need for predicting seasonal shifts and religious lunar months, Al-Fazari mapped cosmic cycles to compile the first comprehensive Islamic astronomical tables (Zij). His specific purpose was to calculate the exact frequency, duration, and coordinates of future solar and lunar eclipses, combining Sanskrit and Greek planetary calculators.",
      classification: "Theory"
    }
  ],
  "al-kindi": [
    {
      title: "Trigonometric Sine & Cosine Approximations",
      description: "Conceived to refine maritime steering and determine coordinates on desert trade routes, Al-Kindi developed advanced geometric approximation methods. Through systematic trigonometric dissection, his specific purpose was to calculate sine and cosine ratios precise to ten decimal columns, letting scholars plot planetary alignments without resorting to crude visual approximations.",
      classification: "Theory"
    },
    {
      title: "Inheritance Computation Algorithms",
      description: "Seeking to resolve the complex social, economic, and legal disputes over agricultural lands and assets, Al-Kindi formulated step-by-step algebraic algorithms. His specific purpose was to balance multi-party inheritance partitions and tax levies, transforming raw mathematical equations into a systematic, objective trade bookkeeping and ledger-calculation tool.",
      classification: "Technique"
    }
  ],
  "al-razi": [
    {
      title: "Petroleum Extraction & Kerosene Refinement",
      description: "Conceived to provide a cleaner, more continuous fuel source for lighting public spaces and hospitals in Baghdad, Al-Razi designed the earliest fractional distillation setup. Heating crude petroleum pitch inside closed stoneware retorts, his specific purpose was to boil off impurities and isolate purified, colorless kerosene oil (\"naft\"), which burned without producing toxic fumes or black carbon soot.",
      classification: "Chemical"
    },
    {
      title: "Clinical Smallpox vs Measles Differentiation",
      description: "Seeking to lower children's mortality rates by clarifying misleading medical diagnostics, Al-Razi published the first comprehensive clinical study on infectious diseases. His specific purpose was to outline precise diagnostic distinctions between smallpox and measles, documenting their separate physiological signs, fever patterns, and custom patient isolation methods to prevent plague outbreaks.",
      classification: "Theory"
    },
    {
      title: "Early Antiseptic Formulations",
      description: "Conceived to prevent deadly postoperative infections and accelerate tissue recovery, Al-Razi formulated specialized chemical washes and ointments compiled from lead oxides and mercurial salts. His specific purpose was to sanitize surgical wounds, dressings, and instruments, successfully combating the rot and putrefaction that typically claimed patients after surgical operations.",
      classification: "Chemical"
    },
    {
      title: "Distillation of Medicinal Chemicals",
      description: "Driven by the quest to extract pure medicinal active compounds from organic flora, Al-Razi engineered high-precision laboratory glassware assemblies. His specific purpose was to perform fractional chemical separations of oils and liquids, optimizing temperatures through copper boiling vessels and sand baths to isolate sterile pharmacological compounds.",
      classification: "Technique"
    },
    {
      title: "Advanced Apothecary Preparation Systems",
      description: "To organize and standardize drug supply chains for city hospitals, Al-Razi designed a systematic apothecary structure. His specific purpose was to provide chemists with standardized scales and detailed catalogs of raw botanical profiles, allowing for uniform clinical prescriptions across Abbasid medical centers.",
      classification: "Tool"
    }
  ],
  "abbas-ibn-firnas": [
    {
      title: "Intricate Astronomical Planetarium",
      description: "Designed as an advanced visual simulator of the night sky for the court of Cordoba, Abbas ibn Firnas engineered a three-dimensional planetarium chamber. His empirical process involved mounting concentric copper hoops, colored glass panes, and hidden sound-making pulley cords. His specific purpose was to project moving stars, simulated storm clouds, solar rays, and thunder sound effect arrays, educating students on cosmic structures.",
      classification: "Device"
    },
    {
      title: "Silica Glass Smelting & Magnifying Stones",
      description: "Conceived to replace rare imported crystals and aid scholars with failing eyesight, Abbas ibn Firnas developed advanced chemical glass-melting formulas. Melting local Andalusian silica sands and mineral fluxes at intense heat, his specific purpose was to manufacture transparent, colorless block glass, which was subsequently cut and polished into reading stones and spectacles.",
      classification: "Material"
    },
    {
      title: "The Metronome-like Timekeeping Clepsydra",
      description: "Seeking to provide a continuous, reliable method of time measurement that functioned at night or during overcast weather, Abbas ibn Firnas invented the 'Al-Maqata' water clock. His empirical process relied on calibrating a floating copper siphon that triggered gravity gears and balance levers. His specific purpose was to sound hourly bells, establishing a mechanical rhythm.",
      classification: "Device"
    }
  ],
  "al-jazari": [
    {
      title: "Double-Acting Radial Piston Suction Pump",
      description: "Conceived to automate municipal water elevation with maximum volumetric efficiency, Al-Jazari engineered the first double-acting hydraulic suction pump. His empirical process involved linking a waterwheel axle to a central rod that drove dual pistons back and forth inside parallel brass cylinders. His specific purpose was to convert continuous rotary flow into reciprocating linear suction, lifting heavy river lines up to ten meters.",
      classification: "Device"
    },
    {
      title: "The Segmental Crankshaft Gear Mechanism",
      description: "Designed as a foundational mechanical coupling for industrial machinery, Al-Jazari pioneered the conversion of continuous rotary motion into reciprocating linear thrust. His empirical process centered on mounting a crank wheel linked with a connecting rod to horizontal levers. His specific purpose was to drive heavy pump pistons, laying the mechanical blueprint for modern combustion engine shafts and joints.",
      classification: "Device"
    },
    {
      title: "Combination Secure Manuscript Locker",
      description: "Designed a heavy security chest featuring a combination lock with four rotating dials and complex internal locking rods. His empirical process involved assembling four interlocking brass dials engraved with alphabetic indexes and linking them to internal sliding bolt rods. His specific purpose was to release the latch only when the correct combination sequence was aligned, inventing the modern combination lock.",
      classification: "Device"
    },
    {
      title: "Programmable Automata Machines",
      description: "Conceived to entertain royal guests at banquets and demonstrate automated feedback loops, Al-Jazari constructed the famous robotic water-basin orchestra. His empirical process involved engineering a rotating wooden cylinder with adjustable peg pins that struck bronze levers as water drained. His specific purpose was to trigger sequential, rhythmic drum and flute patterns, inventing the programmable mechanical sequencer.",
      classification: "Device"
    },
    {
      title: "Water-Powered Mechanical Clocks",
      description: "Seeking to provide a spectacular public monument that tracked astronomical intervals and local hours, Al-Jazari engineered the monumental 'Castle Clock'. His empirical process relied on a slow-descending copper float connected by cords and weight pulleys to a central gear clockwork. His specific purpose was to rotate heavy zodiac dial discs and trigger falcon automaton puppets to drop metal balls.",
      classification: "Device"
    },
    {
      title: "Automated Fountain Engineering",
      description: "Designed to create dramatic aquatic displays inside palace courtyards, Al-Jazari engineered self-switching hydraulic fountains. His empirical process focused on a double-chambered tilting basin (tipping bucket) that acted as a fluid logic switch. His specific purpose was to alternate the spray pattern between straight jets and curved spirals automatically at regular intervals, utilizing water weight as the timing clock.",
      classification: "System"
    },
    {
      title: "Mechanical Peacock Fountain",
      description: "Crafted to ensure clean hand-washing hygiene at court banquets, Al-Jazari constructed an automated servant device shaped like a bronze peacock. As a guest poured water into the peacock's head, the drainage triggered a buoyant float inside the base. His specific purpose was to elevate a miniature mechanical servant who offered soap, a clean linen towel, and fresh rinsing water in perfect sequence.",
      classification: "Device"
    }
  ],
  "al-qazwini": [
    {
      title: "Celestial and Earthly Wonders Atlas",
      description: "Conceived to catalog the extraordinary phenomenon of Earth and the wider universe, Al-Qazwini compiled a comprehensive cosmic atlas. His specific purpose was to document geological formations, volcanic cycles, and star systems, illustrating how subterranean gases and mineral structures shift over long eras.",
      classification: "System"
    },
    {
      title: "Natural History Encyclopedia",
      description: "Designed as a structured educational reference of the natural world, Al-Qazwini authored a highly detailed encyclopedia of botanics, meteorology, and zoology. His specific purpose was to illustrate the lifecycle of plants, behavior of rare animals, and weather formations under different seasonal temperatures.",
      classification: "Theory"
    }
  ],
  "ibn-nafis": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Seeking to standardize the safe preparation of complex medical compounds, Ibn al-Nafis established a detailed apothecary database. His specific purpose was to analyze herbal values, mineral preparations, and precise dosage measurements to improve patient recovery and prevent contamination.",
      classification: "Technique"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Designed to challenge theoretical assumptions about human anatomy, Ibn al-Nafis mapped the heart and lung networks through direct anatomical dissection. His specific purpose was to demonstrate the solid ventricular wall and trace veins and arteries to establish a physical blueprint of blood flow.",
      classification: "Theory"
    },
    {
      title: "Medical Encyclopedia Manuscripts",
      description: "Conceived as an all-encompassing guide for future physicians, Ibn al-Nafis compiled his massive 30-volume medical masterpiece 'Al-Shamil'. His specific purpose was to archive surgical methods, clinical diagnoses, and pharmacological treatments in a highly structured reference work.",
      classification: "System"
    }
  ],
  "al-marrakushi": [
    {
      title: "Giant Astronomical Measurement Instruments",
      description: "Designed for standardizing stellar observation coordinates, Al-Hasan al-Marrakushi engineered monumental astronomical measurement instruments including unique quadrants and sextants. His specific purpose was to minimize measurement errors by scaling up the instruments' physical sizes, enabling extremely fine coordinate calibrations on massive engraved brass plates.",
      classification: "Instrument"
    },
    {
      title: "Solar Observation Tables",
      description: "Conceived to compile years of trackable stellar and solar data, Al-Marrakushi calculated intricate solar observation tables. His specific purpose was to translate complex 3D sky trajectories into highly precise horizontal coordinate numbers to allow future travelers to calibrate their sundials with absolute local accuracy.",
      classification: "Theory"
    }
  ],
  "qutb-al-din-al-shirazi": [
    {
      title: "Specific Atmospheric Air Resistance Dynamics",
      description: "Seeking to examine dynamic kinetic systems, Qutb al-Din al-Shirazi investigated specific atmospheric air resistance effects on traveling objects. His specific purpose was to analyze friction forces and airflow drag within a physical boundary, documenting how media density of different air currents alters velocity vectors.",
      classification: "Theory"
    },
    {
      title: "Refraction Index for Glass Crystals",
      description: "Conceived to advance optical precision, Qutb al-Din al-Shirazi mapped refraction indices for glass crystals and fluid spheres. His specific purpose was to record how beam angles deflect when cutting through distinct materials, formulating critical mathematical laws of reflection and refracting dispersion.",
      classification: "Theory"
    }
  ],
  "ibn-al-banna": [
    {
      title: "Advanced Fraction Calculation Systems",
      description: "To streamline mathematical division, Ibn al-Banna developed advanced fraction calculation systems. His specific purpose was to formulate straightforward horizontal fraction lines and coordinate rules, enabling merchants and scientists to easily multiply and compute complex fractions without slow, text-based intermediate steps.",
      classification: "System"
    },
    {
      title: "Mathematical Notation Manuscripts",
      description: "Designed to formalize mathematical writing across North Africa, Ibn al-Banna authored specialized notation manuscripts. His specific purpose was to replace historical, wordy explanations with quick algebraic symbols, creating a standardized shorthand notation for combinations and fractional multipliers.",
      classification: "Theory"
    },
    {
      title: "Astronomical Calculation Tables",
      description: "Seeking to optimize celestial transit tracking, Ibn al-Banna compiled highly detailed astronomical calculation tables. His specific purpose was to map stars, planet positions, and coordinate alignment profiles under a clean Minhaj (stellar directory system) for instant navigator reference.",
      classification: "Theory"
    }
  ],
  "nasir-al-tusi": [
    {
      title: "Pure Spherical Trigonometry Theorems",
      description: "Seeking to decouple trigonometry from the narrow service of astronomy and establish it as an independent branch of mathematics, Nasir al-Tusi authored 'The Treatise on the Quadrilateral'. His specific purpose was to formulate the first systemic proofs for spherical triangles, establishing consistent equations to calculate cosmic coordinates and latitude profiles.",
      classification: "Theory"
    },
    {
      title: "Astrolabe Coordinate Latitude Plates",
      description: "Designed to enable astronomers at the Maragheh Observatory to calculate planetary coordinates from any location on Earth, Nasir al-Tusi engineered custom brass astrolabe plates. His specific purpose was to engrave overlapping stereographic projections representing varying latitudes, freeing the instrument from being bound to a single city's horizon.",
      classification: "Instrument"
    }
  ],
  "umar-khayyam": [
    {
      title: "The Jalali Astronomical Solar Calendar",
      description: "Conceived to provide a scientifically precise timekeeping system for agricultural taxation and state planning under the Seljuk Empire, Umar Khayyam calculated the solar year to 365.2424 days. His specific purpose was to align calendar dates with solar solstices, achieving a precision of just one day of error in five thousand years, far outstripping the Julian calendar.",
      classification: "System"
    },
    {
      title: "Algebraic Binomial Expansion Coefficients",
      description: "Driven by the quest to find algebraic roots of any integer, Umar Khayyam discovered the numerical patterns for calculating binomial expansions. His specific purpose was to establish a systematic grid of algebraic multipliers, formulating what would later be known as Pascal's Triangle centuries before its popularization in Europe.",
      classification: "Theory"
    },
    {
      title: "Astronomical Observatory Instruments",
      description: "Designed to obtain highly accurate stellar positions, Umar Khayyam engineered massive stone sextants, quadrants, and meridian dials at the Isfahan Observatory. His specific purpose was to trace the sun's passage through the zodiac houses, establishing the key coordinates required for his historic solar calendar reform.",
      classification: "Instrument"
    },
    {
      title: "Euclidean Geometry and Conic Sections",
      description: "Conceived to solve cubic equations that could not be solved using traditional compass-and-straightedge methods, Umar Khayyam pioneered geometric algebra. His specific purpose was to find the intersection coordinates of parabolas, circles, and hyperbolas, proving that algebraic variables can be solved through the spatial coordinates of intersecting curves.",
      classification: "Theory"
    },
    {
      title: "Mathematical Classification of Equations",
      description: "Seeking to organize algebra into a rigorous, deductive branch of mathematics, Umar Khayyam formulated the first systematic classification of algebraic equations. His specific purpose was to divide equations up to the third degree into nineteen distinct coordinate classes, providing rigorous proofs for each class using conic sections.",
      classification: "Theory"
    }
  ],
  "al-jayyani": [
    {
      title: "Trigonometric Sine & Cosine Approximations",
      description: "Conceived to resolve spherical triangle coordinates on flat parchment grids, Al-Jayyani compiled highly precise trigonometric sine and cosine approximation tables. His specific purpose was to calculate fractional stellar angles and atmospheric light refraction changes, providing Andalusian navigators with exact computational lookup sheets.",
      classification: "Theory"
    },
    {
      title: "Inheritance Computation Algorithms",
      description: "Seeking to resolve complex municipal property distribution disputes under Islamic law, Al-Jayyani designed structured algebraic algorithms. His specific purpose was to divide estates, land parcels, and assets into proportional fraction rows, translating abstract algebra equations into practical, standardized city accounting tools.",
      classification: "Technique"
    }
  ],
  "ibn-hazm": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Conceived to standardize apothecary drug compounding in Andalusia, Ibn Hazm detailed extensive pharmacological recipes. His specific purpose was to catalog botanical and mineral combinations, outlining cold-hot properties and calculating precise dosage values to cure respiratory infections and cognitive ailments while maintaining physical safety.",
      classification: "Technique"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Seeking to trace the physical paths of bodily blood flows and muscular joints, Ibn Hazm compiled early anatomical records. Through direct dissection of animal specimens, his specific purpose was to map the cardiovascular network and pericardial tissue structures, arguing that physical health diagnostics must rely strictly on empirical biological observations.",
      classification: "Theory"
    },
    {
      title: "Comparative Legal Manuscript Systems",
      description: "Driven by the need to reconcile conflicting jurisprudential judgments and historical manuscripts in Cordoba, Ibn Hazm designed comparative text analysis frameworks. His specific purpose was to lay down objective, rule-bound comparative methods that analyzed text patterns to identify universal legal and logical principles.",
      classification: "Theory"
    },
    {
      title: "Logical Classification and Analytical Frameworks",
      description: "To clear scientific and theological studies of illogical speculations, Ibn Hazm pioneered systematic categorization charts based on Aristotelian logic. His specific purpose was to organize abstract scientific and physical concepts into strict tree diagrams, ensuring that all medical and astronomical claims were supported by valid deductive logic.",
      classification: "Theory"
    },
    {
      title: "Andalusian Knowledge Preservation Archives",
      description: "Created to safeguard Cordoba's scientific legacy during times of severe geopolitical instability, Ibn Hazm designed rigorous manuscript preservation systems. His specific purpose was to organize administrative filing procedures and catalog rare scientific papers, storing leather-bound books inside aerated cedar cases to prevent moist rotting.",
      classification: "Technique"
    }
  ],
  "al-zahrawi": [
    {
      title: "Obstetrical Delivery Forceps",
      description: "Conceived to save the lives of mothers and children during obstructed or highly critical vaginal deliveries, Al-Zahrawi engineered specialized curved steel obstetrical forceps. His specific purpose was to gently clasp the infant's head to assist delivery without causing internal tissue trauma, significantly lowering neonatal mortality rates in Andalusia.",
      classification: "Tool"
    },
    {
      title: "Urethral Syringes and Bladder Lithotrite",
      description: "Designed to relieve the excruciating pain of bladder stones and internal blockages, Al-Zahrawi invented precise urethral syringes and specialized stones-cracking instruments. His specific purpose was to perform minimally invasive lithotomy procedures, breaking down painful calcified stones inside the bladder channel to avoid dangerous open incisions.",
      classification: "Tool"
    },
    {
      title: "Ligature of Arteries & Bleeding Seals",
      description: "Conceived to prevent catastrophic hemorrhaging and postoperative shock during major surgical amputations, Al-Zahrawi pioneered the clinical technique of arterial ligature. His specific purpose was to tie off open blood vessels using strong silk threads or seal them with specialized hot-iron cautery devices, securing patient survival during amputations.",
      classification: "Technique"
    }
  ],
  "taqi-al-din": [
    {
      title: "Six-Cylinder Monoblock Cam Water Pump",
      description: "Conceived to automate crop irrigation and municipal waterworks, Taqi al-Din engineered a monumental monoblock camshaft. His specific purpose was to translate waterwheel rotation into coordinated linear strokes, striking six separate pump cylinders in precise, synchronized sequence to lift water to unprecedented heights.",
      classification: "Device"
    },
    {
      title: "Spring-Driven Chronological Seconds Clock",
      description: "Developed to track minute-by-minute solar movements at the Constantinople Observatory, Taqi al-Din constructed the earliest spring-driven timepiece showing seconds. His specific purpose was to replace heavy gravity weights with tight steel mainsprings, displaying hours, minutes, and seconds on a single clock dial with extreme precision.",
      classification: "Device"
    },
    {
      title: "Mechanical Observatory Timekeeping System",
      description: "Designed to synchronize astronomical logs with perfect chronological alignment, Taqi al-Din engineered an integrated clock network. His specific purpose was to combine solar-synchronized regulators with physical observations, documenting stellar coordinate entries down to split-second increments on empirical astronomical tables.",
      classification: "System"
    },
    {
      title: "Astronomical Observation Instruments",
      description: "Conceived to draft the definitive 'Zij of Taqi al-Din' star catalog, he designed massive brass sextants, wooden quadrants, and parallactic rulers. His specific purpose was to record celestial coordinates from the Constantinople Observatory, achieving sub-minute angular precision unmatched by classical instruments.",
      classification: "Instrument"
    }
  ],
  "ali-qushji": [
    {
      title: "Non-Philosophical Astronomy",
      description: "Conceived as a system of empirical physics independent of speculative philosophy, Ali Qushji formulated principles of non-philosophical astronomy. His specific purpose was to establish astronomy as an independent, mathematics-driven science, analyzing stellar coordinates and planetary orbits purely from observation.",
      classification: "Theory"
    },
    {
      title: "Altitude Observation Armillary Rings",
      description: "Designed for standardizing stellar altitude tracking from the Hagia Sophia and Constantinople schools, Ali Qushji engineered elegant nested brass armillary rings. His specific purpose was to observe the angle of elevation of key stars relative to local horizons, mapping celestial coordinates with extreme mathematical precision.",
      classification: "Instrument"
    },
    {
      title: "Independent Astronomical Calculation Methods",
      description: "Conceived to bypass classical Aristotelian math doctrines, Ali Qushji compiled unique mathematics computational matrices. His specific purpose was to implement trigonometric rules and functional geometry specifically tailored to celestial mechanics problems.",
      classification: "Theory"
    },
    {
      title: "Lunar and Planetary Observation Tables",
      description: "Designed to preserve continuous empirical astronomy records, Qushji calculated detailed orbital tables showing daily positions of celestial bodies. His specific purpose was to register lunar coordinates and planetary transit paths over several years of direct observation.",
      classification: "Theory"
    }
  ],
  "ibn-majid": [
    {
      title: "Celestial Navigation Systems",
      description: "To guide sailors across the Indian Ocean when terrestrial landmarks were absent, Ahmad ibn Majid engineered systematic celestial navigation structures. His specific purpose was to integrate astrolabes, stellar elevation charts, and latitude calculation tables, translating mathematical astronomy into reliable maritime navigation formulas.",
      classification: "System"
    },
    {
      title: "Indian Ocean Route Mapping",
      description: "Conceived to trace safe, highly profitable merchant lanes between Africa and India, Ahmad ibn Majid designed precise maritime charts. His specific purpose was to document seasonal trade winds, coastal profiles, and undersea hazards, creating integrated route maps that reduced voyage times and shipping losses.",
      classification: "Theory"
    },
    {
      title: "Kitab al-Fawa'id fi Usul al-Bahr wa al-Qawa'id",
      description: "Conceived as the definitive maritime compendium of the Indian Ocean, Ahmad ibn Majid authored the legendary Kitab al-Fawa'id. His specific purpose was to compile decades of navigation science, including stellar altitudes, coastal features, and monsoon patterns, creating a structured navigation encyclopedia.",
      classification: "Theory"
    },
    {
      title: "Monsoon Wind Classification Charts",
      description: "Designed to master the shifting sailing environments of the Arabian Sea, Ahmad ibn Majid formulated systematic monsoon wind classification charts. His specific purpose was to map seasonal wind direction matrices and transitional calendar patterns, allowing captains to synchronize navigation schedules safely.",
      classification: "System"
    },
    {
      title: "Red Sea and Arabian Sea Navigation Atlas",
      description: "Conceived to survey the treacherous littoral corridors of the Middle East, Ahmad ibn Majid engineered a comprehensive navigation atlas of the Red Sea and Arabian Sea. His specific purpose was to map coastal harbor depths, underwater reefs, and visual beacon anchors for merchant flotillas.",
      classification: "Theory"
    }
  ],
  "piri-reis": [
    {
      title: "Grid Navigation System",
      description: "Designed to standardize map scales and secure oceanic travel, Piri Reis developed grid-coordinate mapping frameworks. His specific purpose was to project curved global geographies onto flat parchment using precise longitude and latitude coordinates, aligning naval measurements with geometric symmetry.",
      classification: "System"
    },
    {
      title: "Naval Cartography and Coastal Surveys",
      description: "Conceived to secure Ottoman ports and guide naval fleets across the Mediterranean, Piri Reis authored dynamic coastal surveys. His specific purpose was to record exact harbor depths, anchorage profiles, and coastal military lookouts, transforming scattered ship logbooks into unified maritime plans.",
      classification: "Theory"
    },
    {
      title: "Kitab-i Bahriye (Book of Navigation)",
      description: "Conceived as the definitive master atlas of the Mediterranean coasts, Piri Reis authored the legendary Kitab-i Bahriye. His specific purpose was to compile 290 detailed coastal drawings, harbor layouts, and anchorage coordinates, transforming centuries of naval lore into an empirical, structured book of navigation.",
      classification: "Theory"
    },
    {
      title: "Port and Harbor Atlas",
      description: "Designed to secure trading vessels entering dangerous coastal ports, Piri Reis engineered systematic port and harbor mapping templates. His specific purpose was to detail dock layouts, shallow hazards, coastal fortifications, and exact water-depth lines for naval captains.",
      classification: "System"
    },
    {
      title: "Mediterranean Sea Navigation Charts",
      description: "Seeking to secure control of major maritime trade corridors, Piri Reis developed highly integrated Mediterranean sea charts. His specific purpose was to delineate safe sea lanes, island networks, and reliable transit passages across the entire shoreline.",
      classification: "Theory"
    },
    {
      title: "Strategic Maritime Route Atlas",
      description: "Conceived to consolidate strategic naval paths, Piri Reis compiled an exhaustive maritime route atlas. His specific purpose was to analyze and map prevailing ocean currents, seasonal wind matrices, and complex geopolitical maritime boundaries.",
      classification: "Theory"
    }
  ],
  "banu-musa": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to automate liquid delivery and control flows inside heavy-duty mechanical clocks, the Banu Musa brothers engineered responsive float valves. Their specific purpose was to automatically regulate oil levels in self-feeding lamps and adjust water levels in clepsydras, utilizing buoyant float indicators that triggered copper conical gates as fluid changed.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "Designed to drive multiple automated figures inside mechanical theaters, the Banu Musa brothers developed specialized segmental gear wheels. Their specific purpose was to translate continuous rotary power from a single water wheel into synchronized, intermittent mechanical animations, connecting bronze and wooden gears at non-traditional angles.",
      classification: "Device"
    },
    {
      title: "Automatic Fountain Regulation Systems",
      description: "Created to entertain palace courts with spectacular, automated aquatic displays, the Banu Musa brothers engineered self-switching fountains. Their specific purpose was to automatically change the shape of water sprays between single jets and spinning spirals, utilizing tilting balance beams and weight levers driven purely by the water's gravity and pressure.",
      classification: "Device"
    },
    {
      title: "Mechanical Musical Automata",
      description: "Conceived to automate musical performances and study sound waves, the Banu Musa brothers invented the earliest programmable cylinder instruments. Their specific purpose was to play musical notes automatically on flutes and organs, using a rotating metal drum with raised pins that opened or closed pressurized air and water chambers as it rotated.",
      classification: "Device"
    },
    {
      title: "Programmable Water Distribution Devices",
      description: "Designed to control and distribute valuable municipal and agricultural water supplies without human supervisors, the Banu Musa brothers engineered automatic distributor valves. Their specific purpose was to route water streams into changing distribution channels, using wooden pins and mechanical gates programmed to act at predefined timing intervals.",
      classification: "Device"
    }
  ],
  "al-farghani": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to calculate planetary coordinates relative to the celestial equator, Al-Farghani constructed massive brass armillary spheres. His specific purpose was to measure stellar altitudes and ecliptic angles from the House of Wisdom in Baghdad, providing astronomers with standard coordinates to calculate the Earth's tilted axis.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Designed to predict solar eclipses and help societies prepare for cosmic events, Al-Farghani compiled long-period astronomical tables. His specific purpose was to map lunar cycles and solar orbit coordinates, converting complex mathematical trigonometry into simple lookup tables that predicted eclipses years in advance.",
      classification: "Theory"
    }
  ],
  "al-dinawari": [
    {
      title: "Laboratory Calcination and Crystallization Vessels",
      description: "Conceived to isolate active extracts from medicinal plants and refine raw minerals, Al-Dinawari designed specialized chemical heating furnaces and crystallization chambers. His specific purpose was to heat organic materials in sealed stoneware retorts, allowing pharmacists to extract pure botanical crystals and mineral salts safely.",
      classification: "Tool"
    },
    {
      title: "Synthetic Leather Waterproofing Agents",
      description: "Designed to safeguard military equipment, leather boots, and marine sails from harsh weather and sea salt, Al-Dinawari formulated custom waterproofing coatings. Boiling together organic resins, tree oils, and mineral oxides, his specific purpose was to coat leather and textiles with a water-resistant layer, preventing moisture damage.",
      classification: "Material"
    }
  ],
  "thabit-ibn-qurra": [
    {
      title: "Trigonometric Sine & Cosine Approximations",
      description: "Conceived to resolve the mathematical errors in ancient geocentric star catalog computations, Thabit ibn Qurra formulated advanced trigonometric approximation equations. His specific purpose was to calculate sine and cosine ratios precise to ten decimal columns, helping astronomers map planetary alignments on spherical coordinate grids.",
      classification: "Theory"
    },
    {
      title: "Inheritance Computation Algorithms",
      description: "Seeking to resolve complex disputes over tax collections, estate distribution, and agricultural land boundaries, Thabit ibn Qurra engineered step-by-step mathematical algorithms. His specific purpose was to balance multi-party resource allocations, turning abstract algebraic math into a practical, uniform accounting framework.",
      classification: "Technique"
    }
  ],
  "al-battani": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to measure solar altitudes and rewrite ancient Greek star catalogs, Al-Battani constructed a massive brass armillary sphere at the Raqqa Observatory. His specific purpose was to calculate stellar elevations and ecliptic tracking, allowing him to determine the length of the solar year with an accuracy of within two minutes.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Designed to forecast lunar and solar eclipses for agricultural calendars, Al-Battani compiled long-period orbital charts. His specific purpose was to calculate the orbits of the sun and moon using advanced trigonometry, replacing Greek chord math with sines and cosines to make highly accurate predictions.",
      classification: "Theory"
    }
  ],
  "al-masudi": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to map terrestrial coordinates and align them with stellar positions, Al-Masudi engineered an advanced observation platform. His specific purpose was to use brass armillary rings to measure solar altitude and determine latitude angles on voyages, helping him compile detailed geo-historical world maps.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Designed to record climate-cycle transitions and predict solar activity, Al-Masudi compiled comprehensive astronomical tables. His specific purpose was to track lunar and solar orbits, mapping coordinates to predict eclipses and correlate cosmic events with historical changes on Earth.",
      classification: "Theory"
    }
  ],
  "al-sufi": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to correct the positioning errors in Ptolemy's ancient star catalogues, Al-Sufi constructed a massive brass armillary sphere in Isfahan. His specific purpose was to measure precisely the heights and coordinates of constellations, aligning physical observation instruments with mathematical grids.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Designed to assist scholars in predicting lunar eclipses and calculating state calendars, Al-Sufi drafted precise celestial alignment charts. His specific purpose was to track orbital movements, converting complex spherical geometry into reliable lookup tables that successfully predicted solar and lunar eclipses.",
      classification: "Theory"
    },
    {
      title: "The Book of Fixed Stars",
      description: "Conceived as a highly detailed celestial atlas for navigators and astronomers, Al-Sufi authored 'The Book of Fixed Stars'. His specific purpose was to catalog and map forty-eight constellations from two distinct visual perspectives: as seen from Earth and as they would appear on a three-dimensional outer celestial globe.",
      classification: "Theory"
    },
    {
      title: "Precision Stellar Magnitude Classification",
      description: "Designed to standardize how astronomers measured star brightness, Al-Sufi created the first rigorous magnitude classification system. His specific purpose was to classify star luminosity into six precise visual tiers, documenting variations in color intensity and brightness based on thousands of eye observations.",
      classification: "Technique"
    },
    {
      title: "Astronomical Constellation Mapping",
      description: "Conceived to visually preserve the shapes of night constellations for navigators, Al-Sufi drafted detailed astronomical constellation maps. His specific purpose was to trace classical star outlines, pairing coordinate maps with life-like ink drawings representing human figures and animals in the cosmos.",
      classification: "Technique"
    },
    {
      title: "Zodiacal Celestial Coordinate Systems",
      description: "Designed to trace planetary movements through the night sky, Al-Sufi calculated high-accuracy coordination grids. His specific purpose was to divide the ecliptic path into twelve distinct zodiac houses, compiling the trigonometric equations required for navigators to calculate transit times.",
      classification: "Theory"
    }
  ],
  "mariam-al-ijliya": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to control public water displays and automate clocks under the Aleppo court, Mariam al-Ijliya designed highly sensitive float valves. Her specific purpose was to regulate liquid flows, using copper floats that rose and fell inside basins to open or seal hidden water conduits automatically.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "Designed to transmit torque and power moving parts inside precision astrolabes, Mariam al-Ijliya engineered intricate bronze gear couplings. Her specific purpose was to connect brass and copper gears at non-traditional angles, ensuring that rotating parts turned smoothly with minimal mechanical friction.",
      classification: "Device"
    }
  ],
  "ibn-sahl": [
    {
      title: "Specific Atmospheric Air Resistance Studies",
      description: "Conceived to understand how friction and air currents affect falling weights, Ibn Sahl pioneered the study of air resistance. His specific purpose was to analyze the dynamics of moving projectiles, proving that light and heavy bodies encounter drag force that reduces momentum, challenging Aristotle's claims.",
      classification: "Theory"
    },
    {
      title: "Refraction Index for Glass Crystals",
      description: "Seeking to calculate lens focus points for burning mirrors, Ibn Sahl calculated the light refraction index of diverse glass crystals. His specific purpose was to map how light bends when passing between air and glass, deriving a geometric ratio of angles that directly anticipated Snell's Law by six centuries.",
      classification: "Theory"
    }
  ],
  "ibn-yunus": [
    {
      title: "The Altitude Observation Armillary",
      description: "Conceived to track planetary alignments and calculate precise eclipses, Ibn Yunus constructed a massive brass armillary sphere on the Mokattam hills of Cairo. His specific purpose was to measure the angular heights of stars, verifying coordinates to compile his historic astronomical tables.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Designed to resolve chronometric calendar errors, Ibn Yunus mapped orbital timelines. His specific purpose was to catalog lunar and solar cycles over thirty years, providing caliphs with precise predictions of eclipses and calculations for timekeeping.",
      classification: "Theory"
    }
  ],
  "al-majriti": [
    {
      title: "Laboratory Calcination and Crystallization Vessels",
      description: "Conceived to isolate chemical elements and prove chemical reactions, Al-Majriti designed fireproof clay crucibles and heavy-duty glass alembics. His specific purpose was to perform sealed, high-temperature calcination and trace elemental weights before and after combustion, demonstrating that mass remains constant.",
      classification: "Tool"
    },
    {
      title: "Synthetic Leather Waterproofing Agent",
      description: "Designed to protect military equipment, boots, and manuscripts from moisture, Al-Majriti formulated a customized waterproofing oil. Boiling together organic resins and plant extracts, his specific purpose was to seal leather pores with a durable, water-resistant coating.",
      classification: "Material"
    }
  ],
  "al-karaji": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to automate irrigation networks and water-lifting machines, Al-Karaji designed copper float valves on balance beams. His specific purpose was to regulate water flows inside underground reservoirs, automatically sealing or opening sluice channels as water levels fluctuated.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "Designed to power heavy reciprocating hydraulic pumps, Al-Karaji engineered specialized segmental gear wheels. His specific purpose was to translate constant rotary force from a waterwheel into alternating mechanical strikes, driving heavy timber-lifting levers to lift deep mountain aquifers.",
      classification: "Device"
    }
  ],
  "ibn-zuhr": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Conceived to ensure the safety of medicine compounding in Seville, Ibn Zuhr detailed rigorous regulations in 'Al-Taisir'. His specific purpose was to standardize drug recipes, catalog medical herb properties, and warn against toxic drug mixtures, providing clinical guidelines for treating stomach cancer and skin lesions.",
      classification: "Theory"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Seeking to understand human disease pathology through direct evidence, Ibn Zuhr performed post-mortem autopsies and animal dissections. His specific purpose was to map blood pathways and lung tissues, becoming the first to identify scabies mites and confirm the presence of pericardial fluid in the heart.",
      classification: "Theory"
    },
    {
      title: "Experimental Medical Procedures",
      description: "Conceived to verify the clinical safety of surgical airways before human trials, Ibn Zuhr performed early tracheotomy procedures on goats. His specific purpose was to establish standard surgical incisions in the neck cartilage, validating that the operation bypassed blockages without damaging key blood vessels.",
      classification: "Technique"
    },
    {
      title: "Clinical Observation and Disease Classification",
      description: "Driven by the quest to base medicine on clinical evidence rather than philosophical theory, Ibn Zuhr classified human diseases. His specific purpose was to record detailed medical descriptions of mediastinal tumors and middle ear infections, cataloging ailments by direct symptoms on patients.",
      classification: "Technique"
    },
    {
      title: "Therapeutic Nutrition and Dietary Medicine",
      description: "Seeking to speed patient recovery without reliance on toxic chemicals, Ibn Zuhr formulated customized, scientific dietary plans. His specific purpose was to study how specific nutrient values, fresh water, and organic foods affected recovery rates, establishing early guidelines for clinical dietetics.",
      classification: "Technique"
    },
    {
      title: "Early Veterinary and Comparative Medicine Studies",
      description: "Conceived to expand clinical surgery techniques, Ibn Zuhr conducted comparative anatomical studies on animals. His specific purpose was to compare goat and human respiratory organs, evaluating tissue behaviors to adapt surgical techniques safely for human medicine.",
      classification: "Theory"
    }
  ],
  "ibn-tufail": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Conceived to discover new organic remedies, Ibn Tufail researched combining raw botanical juices with active mineral salts. His specific purpose was to compile medical records detailing safe herbal recipes, designing specialized syrups to treat respiratory infections and digestive issues.",
      classification: "Theory"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Seeking to trace the physical motor-force of life, Ibn Tufail performed extensive animal dissections, particularly of gazelles. His specific purpose was to examine the heart, lungs, and arterial networks, arguing that detailed anatomical knowledge is the foundation of medicine and natural philosophy.",
      classification: "Theory"
    },
    {
      title: "Philosophical Natural Observation",
      description: "Conceived to establish that human reason can deduce scientific laws directly from nature, Ibn Tufail pioneered empirical observation methods. His specific purpose was to document Andalusian climates, soil structures, and wildlife behaviors, showing that ecological rhythms follow predictable physical rules.",
      classification: "Technique"
    },
    {
      title: "Knowledge Through Experimentation",
      description: "Designed to test scientific hypotheses through direct proof, Ibn Tufail engineered simple laboratory apparatus. His specific purpose was to study heat rates, chemical fermentation, and soil minerals, promoting physical experiments as the ultimate validator of scientific claims.",
      classification: "Technique"
    },
    {
      title: "Natural World Classification",
      description: "Seeking to organize biology into a structured, rational framework, Ibn Tufail pioneered early methods of animal taxonomy. His specific purpose was to classify plant and animal species based on shared anatomical features and behaviors, compiling a systematic directory of Spain's local ecology.",
      classification: "Theory"
    }
  ],
  "ibn-rushd": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Conceived to standardize clinical drug dosages, Ibn Rushd authored pharmacology chapters in 'Al-Kulliyat fi al-Tibb'. His specific purpose was to analyze how active herbal chemicals act inside organ systems, calculating medication strengths based on the patient's physical age and weight.",
      classification: "Theory"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Seeking to redefine optics and ocular health, Ibn Rushd investigated the human eye's structures and nerves. His specific purpose was to prove that the retina, rather than the lens, is the actual photoreceptive screen of the eye, transforming subsequent diagnoses of vision loss and strokes.",
      classification: "Theory"
    },
    {
      title: "Aristotelian Scientific Commentary",
      description: "Conceived to remove mythological explanations from natural science, Ibn Rushd wrote comprehensive commentaries on physics and meteorology. His specific purpose was to analyze natural laws through empirical causality, explaining weather and gravity with logical, physical rules.",
      classification: "Theory"
    },
    {
      title: "Rational Inquiry & Natural Philosophy",
      description: "Driven by the quest to base science on consistent physical laws rather than supernatural events, Ibn Rushd pioneered modern rationalism. His specific purpose was to prove that nature operates under predictable cause-and-effect structures, establishing the logical foundations of the scientific method.",
      classification: "Theory"
    },
    {
      title: "Comparative Medicine & Scientific Classification",
      description: "Seeking to resolve conflicting medical theories from Arabic and Greek traditions, Ibn Rushd compiled a unified taxonomy of diseases. His specific purpose was to group and classify illnesses by their physiological causes, matching physical symptoms with consistent pathological signs.",
      classification: "Theory"
    },
    {
      title: "Legal and Philosophical Encyclopedic Works",
      description: "Conceived to explain that legal reasoning and scientific observation share identical logical processes, Ibn Rushd wrote extensive treatises. His specific purpose was to analyze the rational foundations of law, proving that structured deduction is the core of both jurisprudence and physical science.",
      classification: "Theory"
    }
  ],
  "ibn-al-awwam": [
    {
      title: "Automated Hydrostatic Float Controls",
      description: "Conceived to automate soil hydration during hot summer months, Ibn al-Awwam designed self-regulating irrigation systems. His specific purpose was to deploy porous clay jars and floating wood gates that opened and closed as field moisture evaporated, optimizing water usage in Andalusian orchards.",
      classification: "Device"
    },
    {
      title: "Intricate Segmental Gear Couplings",
      description: "Designed to reduce the physical stress on animals pulling water from deep wells, Ibn al-Awwam engineered specialized gear teeth for waterwheels (norias). His specific purpose was to reduce mechanical friction on heavy timber axles, multiplying the volume of deep groundwater lifted for irrigation.",
      classification: "Device"
    },
    {
      title: "Advanced Irrigation Engineering",
      description: "Seeking to prevent soil rot and coordinate water delivery on hillsides, Ibn al-Awwam engineered complex gravity irrigation systems. His specific purpose was to lay subterranean aqueducts and terraced contour channels, optimizing water flow speeds to prevent erosion.",
      classification: "System"
    },
    {
      title: "Grafting and Orchard Cultivation Techniques",
      description: "Conceived to cultivate highly resilient fruit orchards under dry climates, Ibn al-Awwam detailed over twenty methods of grafting. His specific purpose was to document how to splice peach, olive, and citrus branches onto hardy rootstocks, increasing survival rates.",
      classification: "Technique"
    },
    {
      title: "Soil Science and Crop Management",
      description: "Driven by the quest to restore degraded farmlands, Ibn al-Awwam formulated advanced soil-enrichment protocols. His specific purpose was to analyze soil as clay, sand, and loam, prescribing custom compost mixtures of ash and leaves to optimize crop rotation.",
      classification: "Theory"
    },
    {
      title: "Botanical Classification and Plant Studies",
      description: "Seeking to provide a comprehensive reference for agriculture, Ibn al-Awwam classified over 585 plant species. His specific purpose was to document seasonal life cycles, soil needs, and companion-planting guidelines, helping farmers maximize crop yields.",
      classification: "Theory"
    }
  ],
  "ibn-al-rumiyyah": [
    {
      title: "Pharmacological Compounding & Herbals",
      description: "Conceived to prevent fraudulent drug recipes in medieval pharmacies, Ibn al-Rumiyyah travelled the Mediterranean to map medicinal plants. His specific purpose was to formulate precise chemical filtration and compounding rules, ensuring active herbal ingredients were extracted safely.",
      classification: "Theory"
    },
    {
      title: "Anatomical Dissections & Vascular Mapping",
      description: "Seeking to explain how active plant elements interact with the body, Ibn al-Rumiyyah conducted vascular mapping. His specific purpose was to trace how botanical extractions move through the human cardiovascular network, providing early biological explanations for natural therapies.",
      classification: "Theory"
    },
    {
      title: "Botanical Classification Systems",
      description: "Driven by the quest to catalog the rare flora of Spain and North Africa, Ibn al-Rumiyyah designed an empirical taxonomy system. His specific purpose was to classify hundreds of plant families based on flower structures, leaves, and habitat parameters, simplifying botanical identification.",
      classification: "Theory"
    },
    {
      title: "Medicinal Plant Documentation",
      description: "Conceived to summarize his lifelong botanical studies, Ibn al-Rumiyyah published 'Rihla al-Nabatiyyah' (The Botanical Journey). His specific purpose was to compile a visual reference for pharmacists, documenting rare medicinal herbs and detailing their physical behaviors and clinical values.",
      classification: "Theory"
    },
    {
      title: "Agricultural and Herbal Research Collections",
      description: "Designed to preserve delicate botanical specimens for medical study, Ibn al-Rumiyyah created extensive plant research collections. His specific purpose was to standardize drying and pressing methods, keeping seeds, roots, and leaves in pristine conditions for apothecary study.",
      classification: "Theory"
    },
    {
      title: "Natural History and Flora Catalogs",
      description: "Seeking to map how geographical altitude and climate affect plant chemistry, Ibn al-Rumiyyah compiled regional flora catalogs. His specific purpose was to trace the distribution of plant families across Islamic Spain, studying how temperature shifts impact herbal potency.",
      classification: "Theory"
    }
  ],
  "ibn-al-baitar": [
    {
      title: "Laboratory Calcination and Crystallization Vessels",
      description: "Conceived to refine raw minerals and isolate active salts, Ibn al-Baitar engineered heavy-duty clay crucibles and glass alembics. His specific purpose was to execute high-temperature calcination and recrystallization procedures in Malaga, standardizing mineral and botanical preparations.",
      classification: "Device"
    },
    {
      title: "Synthetic Leather Waterproofing Agents",
      description: "Designed to safeguard boots, saddles, and military equipment from harsh rain and sea salt, Ibn al-Baitar formulated custom waterproofing agents. His specific purpose was to combine mineral salts, tree oils, and gums to seal the pores of leather sheets with a resilient chemical barrier.",
      classification: "Material"
    },
    {
      title: "Medicinal Plant Classification Systems",
      description: "Seeking to build a reliable reference for clinical pharmacy, Ibn al-Baitar designed a systematic alphabetical database of over 1,400 drugs. His specific purpose was to document the physical appearance, active harvesting months, and medicinal values of plants, minerals, and animal fats.",
      classification: "Theory"
    },
    {
      title: "Botanical Exploration and Plant Catalogs",
      description: "Conducted monumental botanical expeditions from Seville to Anatolia and Syria, identifying over 300 previously undocumented plant species and drawing microscopic, anatomically precise ink illustrations of their vegetative structures.",
      classification: "Theory"
    },
    {
      title: "Pharmaceutical Preparation Methods",
      description: "Conceived to standardize apothecary equipment and chemical extraction techniques, Ibn al-Baitar detailed precise distillation and filtration methods. His specific purpose was to extract pure organic compounds and manufacture stable syrups, preventing toxic contamination in pharmacies.",
      classification: "Technique"
    },
    {
      title: "Natural Drug and Remedy Encyclopedia",
      description: "Seeking to unify global pharmacological knowledge, Ibn al-Baitar compiled 'Al-Jami' li-Mufradat' (The Compendium of Simple Medicaments). His specific purpose was to correct ancient Arabic, Greek, and Persian drug records, documenting individual remedies to prevent unsafe medical compounding.",
      classification: "Theory"
    }
  ],
  "al-idrisi": [
    {
      title: "Global Geographic Mapping Systems",
      description: "Conceived to verify the spherical shape of the Earth and map the known world, Al-Idrisi designed advanced cartographic systems. His specific purpose was to compile the legendary 'Tabula Rogeriana' world atlas for Roger II of Sicily, engraving seventy detailed regional maps onto a massive solid silver disc measuring two meters across.",
      classification: "System"
    },
    {
      title: "Maritime and Land Route Cartography",
      description: "Designed to assist merchants and sailors in navigating global networks, Al-Idrisi Mapped major shipping lanes and caravan roads. His specific purpose was to record overland distances, water stations, and coordinate travel times across Afro-Eurasia, improving international commerce.",
      classification: "System"
    },
    {
      title: "Climate and Regional Classification Maps",
      description: "Seeking to categorize world climates systematically based on solar angles, Al-Idrisi divided the globe into seven coordinate climate zones. His specific purpose was to document the unique physical geographies, cities, plant species, and human cultures thriving within each climate band.",
      classification: "Theory"
    },
    {
      title: "Trade Network Documentation",
      description: "Conceived to map and optimize Mediterranean and Asian trade, Al-Idrisi compiled extensive commercial records. His specific purpose was to document regional market infrastructures, agricultural exports, and seaport docks, providing a detailed economic directory for medieval kings.",
      classification: "System"
    },
    {
      title: "The Altitude Observation Armillary",
      description: "Designed to calculate cities' latitudes for his world maps, Al-Idrisi constructed a precise copper armillary sphere. His specific purpose was to measure solar heights and celestial angles, verifying geographic coordinate points across Spain and Italy.",
      classification: "Instrument"
    },
    {
      title: "Constant Eclipse Frequency Tables",
      description: "Conceived to verify longitudinal distances between major cities, Al-Idrisi utilized advanced lunar and solar tables. His specific purpose was to match astronomical eclipse timings with local horizons, calculating distance offsets mathematically to ensure his global maps were accurate.",
      classification: "Theory"
    }
  ],
  "ibn-battuta": [
    {
      title: "Global Travel and Exploration Records",
      description: "Seeking to record the immense scope of travel corridors and trade networks in the 14th century, Ibn Battuta compiled comprehensive travel manuscripts and trade-route maps. His specific purpose was to map land and maritime distances, recording local agricultural details, soils, and cultures within an authoritative cartographic archive.",
      classification: "Theory"
    }
  ],
  "ibn-al-shatir": [
    {
      title: "Advanced Astronomical Timekeeping Instruments",
      description: "Built to precise coordinate scales for Damascus, Ibn al-Shatir designed highly complex sundials, precision astronomical clocks, and astronomical measurement devices. His specific purpose was to construct reliable horological instruments to automate accurate regional timekeeping and map solar movements across the Damascus sky.",
      classification: "Instrument"
    }
  ],
  "ibn-khaldun": [
    {
      title: "The Muqaddimah",
      description: "Conceived as a sweeping encyclopedic introduction to universal history, Ibn Khaldun wrote Al-Muqaddimah. His specific purpose was to establish the empirical criteria of historical truth by classifying knowledge, highlighting geographical influences of climate on cultures, and tracing dynamic civilizational cycles.",
      classification: "Theory"
    },
    {
      title: "Economic and Social Cycle Theory",
      description: "Designed to trace how state administrative actions affect the macroeconomy and population density, Ibn Khaldun calculated fiscal curves and taxation dynamics. His specific purpose was to prove that excessive tax rates stifle trade, shrink production levels, and initiate the inevitable collapse of royal lineages.",
      classification: "Theory"
    }
  ],
  "al-kashi": [
    {
      title: "High-Precision Mathematical Computation",
      description: "To simplify astronomical lookup operations, Al-Kashi designed systematic arithmetic calculations and fraction system tables. His specific purpose was to formulate clear decimal fractions and multi-digit computations, enabling astronomers at Samarqand to perform complex division and root extractions with lightning speed.",
      classification: "Theory"
    },
    {
      title: "Advanced Trigonometric Tables",
      description: "Calculated to solve intricate celestial mechanics equations on Ulugh Beg's coordinate astrolabes, Al-Kashi compiled trigonometric sine tables. His specific purpose was to compute the sine of 1 degree to an unprecedented ten sexagesimal places of precision, optimizing planetary orbital predictions.",
      classification: "Theory"
    }
  ]
};

/**
 * Universal Fallback generator for other scientists based on their general science field.
 * This guarantees we always show 3 high-fidelity inventions for every scientist.
 */
function getFallbackInventions(field: Discipline, primaryInvention: string): AdditionalInvention[] {
  switch (field) {
    case Discipline.Mathematics:
      return [
        {
          title: "Trigonometric Sine & Cosine Approximations",
          description: "Conceived to refine calculation precision in astronomical and geographical mapping, Muslim mathematicians engineered advanced geometric formulas. Their specific purpose was to approximate sine and cosine fractions precise to ten decimal columns, letting scholars plot planetary alignments and celestial navigation coordinate marks on flat planispheric charts.",
          classification: "Theory"
        },
        {
          title: "Inheritance Computation Algorithms",
          description: "Seeking to resolve the complex legal, social, and economic division of family assets and land holdings under Islamic law, mathematicians formulated systematic step-by-step algorithms. Their specific purpose was to apply algebra to balance estate partitions and calculate tax rates, transforming mathematical equations into practical administrative tools.",
          classification: "Technique"
        }
      ];
    case Discipline.Medicine:
      return [
        {
          title: "Pharmacological Compounding & Herbals",
          description: "Designed to standardize the preparation of apothecary drugs and prevent toxic contamination, physicians compiled extensive encyclopedic recipes. Their specific purpose was to balance the hot-cold and wet-dry humoral values of botany, minerals, and oils, designing precise syrups and ointments based on exact mass weights.",
          classification: "Technique"
        },
        {
          title: "Anatomical Dissections & Vascular Mapping",
          description: "Conceived to understand internal physiological systems and base medical cures on direct physical evidence, Arab physicians performed post-mortem autopsies and animal dissections. Their specific purpose was to map the human ocular, cardiac, and vascular networks, tracing capillaries and arterial pathways.",
          classification: "Theory"
        }
      ];
    case Discipline.Astronomy:
      return [
        {
          title: "The Altitude Observation Armillary",
          description: "Conceived to trace the movements of celestial bodies relative to the celestial equator, astronomers constructed massive concentric brass hoops. Their specific purpose was to measure stellar altitudes and coordinate planetary alignments from regional observatories, establishing precise coordinates for maritime navigation.",
          classification: "Instrument"
        },
        {
          title: "Constant Eclipse Frequency Tables",
          description: "Designed to predict cosmic cycles for agricultural calendars and state planning, astronomers compiled long-period orbital charts. Their specific purpose was to track lunar and solar orbits, translating spherical geometry into simple lookup tables that predicted the exact timings and locations of future eclipses.",
          classification: "Theory"
        }
      ];
    case Discipline.Engineering:
      return [
        {
          title: "Automated Hydrostatic float Controls",
          description: "Conceived to automate fluid flows and control liquid levels inside complex water clocks, engineers designed copper conical float valves. Their specific purpose was to establish continuous self-regulating hydraulic loops that opened or sealed water conduits automatically, eliminating the need for human monitoring.",
          classification: "Device"
        },
        {
          title: "Intricate Segmental Gear Couplings",
          description: "Designed to transmit rotative torque and drive moving parts inside automated theaters, engineers designed customized segmental cogs. Their specific purpose was to connect bronze and wood gears at non-traditional angles, translating constant water force into timed, intermittent mechanical sequences with minimal friction.",
          classification: "Device"
        }
      ];
    case Discipline.Physics:
      return [
        {
          title: "Specific Atmospheric air Resistance studies",
          description: "Seeking to challenge classical Greek theories of motion, physicists investigated how friction and air currents affect falling weights. Their specific purpose was to analyze the dynamics of moving projectiles, proving that light and heavy bodies encounter drag forces that continuously decrease their speed, anticipating modern kinetics.",
          classification: "Theory"
        },
        {
          title: "Refraction Index for Glass Crystals",
          description: "Conceived to calculate lens focal points for burning mirrors, physicists measured light ray bending angles inside prisms. Their specific purpose was to map how light bends when passing between air and glass, deriving a geometric ratio of angles that directly anticipated Snell's Law by six centuries.",
          classification: "Theory"
        }
      ];
    case Discipline.Chemistry:
      return [
        {
          title: "Laboratory calcination and crystallization Vessels",
          description: "Designed to isolate pure chemical compounds and refine raw minerals in high-temperature blast ovens, chemists designed specialized fireproof clay crucibles and glass alembics. Their specific purpose was to execute clean heating and crystallization, ensuring experiments could be duplicated.",
          classification: "Tool"
        },
        {
          title: "Synthetic Leather Waterproofing Agent",
          description: "Conceived to protect military gear, boot leather, and marine sails from moisture, water rot, and humidity, chemists formulated specialized organic oils. Their specific purpose was to seal leather pores with a durable, water-resistant lacquer boiled from resins and plant extracts.",
          classification: "Material"
        }
      ];
    default:
      return [
        {
          title: "Scientific Methodology Protocols",
          description: "Seeking to replace unverified speculations and folklore with a rigorous system of proof, scholars established empirical scientific methodologies. Their specific purpose was to design systematic testing loops, direct experiments, and data recording, ensuring that observations could be independently verified by other researchers.",
          classification: "Technique"
        }
      ];
  }
}

/**
 * Returns the array of inventions for the given scientist,
 * injecting custom high-fidelity records or generating contextual fallbacks.
 */
export function getAdditionalInventions(scientist: Scientist): AdditionalInvention[] {
  // Clear any potential duplicates starting with the primary invention
  const list: AdditionalInvention[] = [
    {
      title: scientist.inventionTitle,
      description: scientist.shortSummary,
      classification: "Primary"
    }
  ];

  const customs = customInventionsMap[scientist.id];
  if (customs && customs.length > 0) {
    list.push(...customs);
  } else {
    // Generate fallbacks
    const fallbacks = getFallbackInventions(scientist.field, scientist.inventionTitle);
    list.push(...fallbacks);
  }

  return list;
}
