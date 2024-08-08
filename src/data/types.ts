export interface Class {
  title: string;
  link: string;
}

export interface Curriculum {
  semester1: Class[];
  semester2: Class[];
}

export interface BranchedCurriculum {
  ISI: Curriculum;
  SIW: Curriculum;
  IASD: Curriculum;
}
