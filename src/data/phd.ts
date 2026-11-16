// The doctoral entrance concours sessions held at ESI SBA, newest first.
// A paper is listed before it is collected, without a link, and appears on the site once its link is pasted here.
// A session appears only once it has a paper with a link.
// In the library a paper is filed as `phd-concours/<session>/<file name>`, the file names being those noted below.
// Sessions not held at ESI SBA are left out (2025-2026 was a national quantum computing session sat elsewhere).

type ExpectedPaper = { title: string; common?: boolean; link?: string };
type Session = { label: string; examDate: string; link?: string; papers: ExpectedPaper[] };

export type PhdPaper = { title: string; common: boolean; link: string };
export type PhdSession = { label: string; examDate: string; link?: string; papers: PhdPaper[] };

// common-exam-software-engineering.pdf
const softwareEngineering = { title: "Software Engineering", common: true };
// specialty-exam-advanced-databases.pdf
const advancedDatabases = { title: "Advanced Databases" };
// specialty-exam-ai-and-knowledge-engineering.pdf
const knowledgeEngineering = { title: "AI and Knowledge Engineering" };
// specialty-exam-networks-and-security.pdf
const networksAndSecurity = { title: "Networks and Security" };

const sessions: Session[] = [
  {
    label: "2026-2027",
    examDate: "5 Dec 2026",
    papers: [
      // common-exam-advanced-algorithms.pdf
      { title: "Advanced Algorithms", common: true },
      knowledgeEngineering,
      advancedDatabases,
      networksAndSecurity,
    ],
  },
  {
    label: "2024-2025",
    examDate: "8 Feb 2025",
    link: "https://drive.google.com/drive/folders/188STGG1G1y_RVPw14qHusOW0ayZuVi7F?usp=drive_link",
    papers: [
      {
        ...softwareEngineering,
        link: "https://drive.google.com/file/d/1QYs25lURhPFyRf6NW1wZQKjhev_gfkco/view?usp=drive_link",
      },
      {
        ...knowledgeEngineering,
        link: "https://drive.google.com/file/d/1hkFE4walSudcQ4_CtB9ANkipA3-L2EsK/view?usp=drive_link",
      },
      advancedDatabases,
      networksAndSecurity,
    ],
  },
  {
    label: "2021-2022",
    examDate: "5 Mar 2022",
    papers: [softwareEngineering, advancedDatabases, knowledgeEngineering],
  },
  { label: "2019-2020", examDate: "2 Nov 2019", papers: [softwareEngineering, advancedDatabases] },
  { label: "2017-2018", examDate: "14 Oct 2017", papers: [softwareEngineering, advancedDatabases] },
];

const phdSessions: PhdSession[] = sessions
  .map((session) => ({
    label: session.label,
    examDate: session.examDate,
    link: session.link,
    papers: session.papers.flatMap((paper) =>
      paper.link ? [{ title: paper.title, common: paper.common === true, link: paper.link }] : [],
    ),
  }))
  .filter((session) => session.papers.length > 0);

export const phdFolderLink =
  "https://drive.google.com/drive/folders/1qSDFnxh0sDCtdkdEmfe_EdAsijbx-4pJ?usp=drive_link";

export default phdSessions;
