export type Class = {
  title: string;
  // Absent while the module has no folder in the library yet; the site then shows it as having no resources.
  link?: string;
};

// One version of a year's curriculum, as fixed by a ministerial decree.
export type Program = {
  // Shown as "<label> program (<period>)"; the word "program" is dropped on narrow screens.
  label: string;
  period?: string;
  note?: string;
  link?: string;
  semester1Link?: string;
  semester2Link?: string;
  semester1: Class[];
  semester2: Class[];
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
  // When a year has several programs, the first one is the current program.
  programs?: Program[];
  semester1: Class[];
  semester2: Class[];
  concour?: Concours[];
};

export type BranchedCurriculum = {
  link?: string;
  ISI: Curriculum;
  SIW: Curriculum;
  IASD: Curriculum;
  CyS?: Curriculum;
};
