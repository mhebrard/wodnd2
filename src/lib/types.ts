export interface Attributes {
  physical: {
    strength: number;
    dexterity: number;
    stamina: number;
  };
  social: {
    presence: number;
    manipulation: number;
    composure: number;
  };
  mental: {
    intelligence: number;
    wits: number;
    resolve: number;
  };
}

export interface Skill {
  name: string;
  value: number;
  specialty?: string;
}

export interface Skills {
  mental: Skill[];
  physical: Skill[];
  social: Skill[];
}

export interface OtherTraits {
  merits: Skill[];
  health: {
    current: number;
    max: number;
  };
  willpower: {
    current: number; // Temporary (boxes)
    max: number;     // Permanent (dots)
  };
  mastery: {
    current: number;
    max: number;
  };
  mana: {
    current: number;
    max: number;
  };
  xp: {
    spent: number;
    earned: number;
  };
  advantages: {
    size: number;
    speed: number;
    defense: number;
    armor: string;
    initiative: number;
  };
  paths: {
    air: number;
    earth: number;
    fire: number;
    water: number;
    evil: number;
    holy: number;
    mind: number;
  };
}

export interface Weapon {
  name: string;
  damage: string;
  size: string;
  hand: string;
  special: string;
}

export interface Equipment {
  name: string;
  armor: string;
  structure: string;
  defense: string;
  special: string;
}

export interface Character {
  slug: string;
  name: string;
  concept: string;
  race: string;
  player: string;
  fellowship: string;
  chronicle: string;
  campaign: string;
  date: string;
  attributes: Attributes;
  skills: Skills;
  other_traits: OtherTraits;
  weapons: Weapon[];
  equipment: Equipment[];
  content: string; // The markdown content (Backstory)
}
