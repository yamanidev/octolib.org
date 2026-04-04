export interface Class {
  title: string;
  link: string;
}

export interface Concours {
  year: string;
  link: string;
}

export interface Curriculum {
  link?: string;
  semester1Link?: string;
  semester2Link?: string;
  concourLink?: string;
  semester1: Class[];
  semester2: Class[];
  concour?: Concours[];
}

export interface BranchedCurriculum {
  link?: string;
  ISI: Curriculum;
  SIW: Curriculum;
  IASD: Curriculum;
}
