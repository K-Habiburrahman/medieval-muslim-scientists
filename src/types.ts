/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Discipline {
  Mathematics = "Mathematics",
  Medicine = "Medicine",
  Astronomy = "Astronomy",
  Engineering = "Engineering",
  Physics = "Physics",
  Chemistry = "Chemistry",
}

export interface TimelineNode {
  year: number;
  label: string;
}

export interface AdditionalInvention {
  title: string;
  description: string;
  classification: string; // e.g., "Instrument", "Technique", "Theory", "Device"
  mechanismBreakdown?: string[];
}

export interface Scientist {
  id: string;
  name: string;
  nickname: string;
  lifespan: string;
  birthYear: number; // approximate for sorting
  deathYear: number;
  birthPlace: string;
  field: Discipline;
  inventionTitle: string;
  shortSummary: string;
  detailedExplanation: string;
  mechanismBreakdown: string[];
  modernImpact: {
    medievalTech: string;
    modernTech: string;
    description: string;
  };
  timelineAchievements: TimelineNode[];
  historicalSignificance: string;
  imageUrl: string;
  accentColor: string; // Tailored gold/mint/emerald glows
  additionalInventions?: AdditionalInvention[];
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  instrumentName: string;
  instrumentDescription: string;
  featuredInventions: string[];
  backgroundFilter: string;
}
