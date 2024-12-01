export interface Class {
  title: string;
  link: string;
}

export interface Concours {
  year: string;
  link: string;
}

export interface Curriculum {
  semester1: Class[];
  semester2: Class[];
  concour?: Concours[];
}

export interface BranchedCurriculum {
  ISI: Curriculum;
  SIW: Curriculum;
  IASD: Curriculum;
}
