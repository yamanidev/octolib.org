export type Class = {
  title: string;
  // Absent while the module has no folder in the library yet; the site then shows it as having no resources.
  link?: string;
};

export type Concours = {
  year: string;
  link: string;
};

export type Curriculum = {
  link?: string;
  semester1Link?: string;
  semester2Link?: string;
  concourLink?: string;
  semester1: Class[];
  semester2: Class[];
  concour?: Concours[];
};

export type BranchedCurriculum = {
  link?: string;
  ISI: Curriculum;
  SIW: Curriculum;
  IASD: Curriculum;
};
