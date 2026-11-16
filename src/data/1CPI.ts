import type { Curriculum, Program } from "./types";

// The current program lives in the library under `1CP/2025-present-program`.
// A module without a link has no folder yet and is shown as having no resources.
// When a module's first resource is added to the library, paste its folder's link here.
const currentProgram: Program = {
  label: "Current",
  period: "2025–present",
  note: "Resources are added as they are contributed.",
  link: "https://drive.google.com/drive/folders/1c3YMmbSRaZ0K7G8eqOHm65NAB6QvmA8V?usp=drive_link",
  semester1Link:
    "https://drive.google.com/drive/folders/1JzeqZ7C_VJt-T6jZTjnxcYRXCF2QN8cJ?usp=drive_link",
  semester1: [
    { title: "Fundamental Data Structures and Algorithms" },
    { title: "Computer Architecture: Fundamentals" },
    { title: "Linux System Foundations" },
    { title: "Basic Abstract Algebra" },
    { title: "Mathematical Analysis I" },
    { title: "General Electronics" },
    { title: "English Communication" },
    {
      title: "Digital & AI Literacy",
      link: "https://drive.google.com/drive/folders/1KJwayWBXMzHMk6A7vSKZHOOZrwUBVc7F?usp=drive_link",
    },
  ],
  semester2: [
    { title: "Dynamic Data Structures and Algorithms" },
    { title: "Assembly Language" },
    { title: "Information Systems Fundamentals" },
    { title: "Mathematical Analysis II" },
    { title: "Linear Algebra I" },
    { title: "Digital Electronics" },
    { title: "English for Engineers" },
    { title: "Digital Economy" },
  ],
};

const previousProgram: Program = {
  label: "Previous",
  period: "2014–2025",
  note: "These modules are no longer part of the program.",
  link: "https://drive.google.com/drive/folders/1j1YgZ9sPxGbuCgDMhSqCbd_Syr619bRJ?usp=drive_link",
  semester1Link:
    "https://drive.google.com/drive/folders/1rPU0a-PQIa4TWN4-i2ngsFN4Izi_QclT?usp=drive_link",
  semester2Link:
    "https://drive.google.com/drive/folders/1c7RdZjcHso3zFSbBd8vsadxq6AWXKFOD?usp=drive_link",
  semester1: [
    {
      title: "Algorithms and Static Data Structures",
      link: "https://drive.google.com/drive/folders/1-acdARyTxjaP9mfTMyTsiBWtvXieNKol?usp=drive_link",
    },
    {
      title: "Computer Architecture 1",
      link: "https://drive.google.com/drive/folders/1zoLYPn-MBnb_SxFC6kUaxBnc4xNZqmHf?usp=drive_link",
    },
    {
      title: "Introduction to Operating Systems 1",
      link: "https://drive.google.com/drive/folders/1bbnW1Ri6DRXjiMerxK58mGMYb9YAQebD?usp=drive_link",
    },
    {
      title: "Mathematical Analysis 1",
      link: "https://drive.google.com/drive/folders/1yneXsxIznOCUEP2e_fu8PLw6Q0M09P4Y?usp=drive_link",
    },
    {
      title: "Algebra 1",
      link: "https://drive.google.com/drive/folders/1mUzInm0dJhhvypSUszW1Y-2Ac2D9-EnC?usp=drive_link",
    },
    {
      title: "Electricity",
      link: "https://drive.google.com/drive/folders/1GoLtkZqJpDFCL1K5isy-ox-n1nj7olsK?usp=drive_link",
    },
    {
      title: "Office and Web",
      link: "https://drive.google.com/drive/folders/1iETqAjcHVxheAENSMutoo7KSIyKAgOCZ?usp=drive_link",
    },
  ],
  semester2: [
    {
      title: "Algorithms and Dynamic Data Structures",
      link: "https://drive.google.com/drive/folders/11Ngl4Ct9VBB_F-1uJLaIyxeip43DJFdb?usp=drive_link",
    },
    {
      title: "Introduction to Operating Systems 2",
      link: "https://drive.google.com/drive/folders/1c3wA7JY1N1uSeR7pWx93bSST2sGodKC7?usp=drive_link",
    },
    {
      title: "Mathematical Analysis 2",
      link: "https://drive.google.com/drive/folders/1RUloq4QLOCFXXzXKAm0msBLT5Q97sQO9?usp=drive_link",
    },
    {
      title: "Algebra 2",
      link: "https://drive.google.com/drive/folders/1NSRMsq_uK6tGF003XexFyo5By3tj3T-C?usp=drive_link",
    },
    {
      title: "Point Mechanics",
      link: "https://drive.google.com/drive/folders/1aP7UUcAjk4tZW27tCxv6g85EFln3ngJo?usp=drive_link",
    },
    {
      title: "Fundamental Electronics 1",
      link: "https://drive.google.com/drive/folders/1CDkV2jBjCrtXsOgGLtUJTMnWIFtH3f8A?usp=drive_link",
    },
  ],
};

const firstYearCurriculum: Curriculum = {
  link: "https://drive.google.com/drive/folders/191na8LEKUEpwA3M5LuLNJpNVl8Y2Lm5H?usp=drive_link",
  programs: [currentProgram, previousProgram],
  semester1Link: currentProgram.semester1Link,
  semester2Link: currentProgram.semester2Link,
  semester1: currentProgram.semester1,
  semester2: currentProgram.semester2,
};

export default firstYearCurriculum;
