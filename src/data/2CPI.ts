import type { Curriculum, Program } from "./types";

// The current program lives in the library under `2CP/2026-present-program`.
// That folder is created with the program's first resource, so the program and semester links are still absent.
// A module without a link has no folder yet and is shown as having no resources.
// When a module's first resource is added to the library, paste its folder's link here.
const currentProgram: Program = {
  label: "Current",
  period: "2026–present",
  note: "Resources are added as they are contributed.",
  semester1: [
    { title: "Computer Architecture Design" },
    { title: "Object Oriented Programming" },
    { title: "Computer Networks" },
    { title: "Mathematical Analysis III" },
    { title: "Linear Algebra II" },
    { title: "Probability and Statistics I" },
    { title: "Data Acquisition and Communication Electronics" },
    { title: "Soft Skills / Humanities Electives / IT" },
  ],
  semester2: [
    { title: "Databases: Fundamentals" },
    { title: "Graph Algorithms and Linear Optimization" },
    { title: "Web Technologies" },
    { title: "Mathematical Analysis IV" },
    { title: "Mathematical Logic" },
    { title: "Probability and Statistics II" },
    { title: "Multidisciplinary Project" },
    { title: "Entrepreneurship" },
  ],
};

const previousProgram: Program = {
  label: "Previous",
  period: "2015–2026",
  note: "These modules are no longer part of the program.",
  link: "https://drive.google.com/drive/folders/1LmQdUW2GHH2nvg4KsTKPdU9_-mFzd-GB?usp=drive_link",
  semester1Link:
    "https://drive.google.com/drive/folders/1i8St_o1D68a4lfYFFmXqMXBqcwHNvYSd?usp=drive_link",
  semester2Link:
    "https://drive.google.com/drive/folders/1_eqx9Ey8tNa7I1AuVibyeoBT6ySSY1lz?usp=drive_link",
  semester1: [
    {
      title: "File and Data Structures",
      link: "https://drive.google.com/drive/folders/1Mrw3oq_fzIkyks3Y_74ZQVYPo3i7IKLi?usp=drive_link",
    },
    {
      title: "Computer Architecture 2",
      link: "https://drive.google.com/drive/folders/19QrlJHPSxbbSbg1cBMdI72OVZkOw8hzT?usp=drive_link",
    },
    {
      title: "Mathematical Analysis 3",
      link: "https://drive.google.com/drive/folders/1CjCpTmJ6J8zxBPH6kPH26czmelDj1kdY?usp=drive_link",
    },
    {
      title: "Algebra 3",
      link: "https://drive.google.com/drive/folders/1Fw6eIHZ-Ai-2LBwqjxVget-bieuMjDGV?usp=drive_link",
    },
    {
      title: "Fundamental Electronics 2",
      link: "https://drive.google.com/drive/folders/1dUtwissojIXMRopHVPS1oySATFsClFaL?usp=drive_link",
    },
    {
      title: "Probability and Statistics 1",
      link: "https://drive.google.com/drive/folders/1S6lcOq2wwon3c27wIw3kDft-2DzbXBvf?usp=drive_link",
    },
    {
      title: "English Language 2",
      link: "https://drive.google.com/drive/folders/1yEUZmrGnqOk_ZCJqIg168TPrztXkPzDP?usp=drive_link",
    },
    {
      title: "Business Economics",
      link: "https://drive.google.com/drive/folders/11HVlIlGtVvnwYAzgY7lPEGqsfg16u7ZM?usp=drive_link",
    },
  ],
  semester2: [
    {
      title: "Object Oriented Programming",
      link: "https://drive.google.com/drive/folders/1n4clGg7y8zEGGBg-9V_omY9KRzSeW-5s?usp=drive_link",
    },
    {
      title: "Introduction to Information Systems",
      link: "https://drive.google.com/drive/folders/1I2TIBmzAY0mqh3ghJzUqvWGl7RuruxSB?usp=drive_link",
    },
    {
      title: "Mathematical Analysis 4",
      link: "https://drive.google.com/drive/folders/1EvOHzrqg7lFujqDJzNmdI-uHb8WWJLCZ?usp=drive_link",
    },
    {
      title: "Mathematical Logic",
      link: "https://drive.google.com/drive/folders/1wQ6BkTKKBOcXBp6WjtwiNvjYgih27cj9?usp=drive_link",
    },
    {
      title: "Optics and Electromagnetic Waves",
      link: "https://drive.google.com/drive/folders/1xV3VzdaIfPpw8uUybIBE0kXFNW3K6URB?usp=drive_link",
    },
    {
      title: "Probability and Statistics 2",
      link: "https://drive.google.com/drive/folders/1dFzZrJE7tkwWrJvB6rlzeNirZyGu5Cm3?usp=drive_link",
    },
    {
      title: "Multidisciplinary Project (resources)",
      link: "https://drive.google.com/drive/folders/1AlL8JAfXiJTm50DVQSmfYeF4LVeyUZUU?usp=drive_link",
    },
    {
      title: "English Language 3",
      link: "https://drive.google.com/drive/folders/1Ezwi-_R1VlycJuTIeh6JGNxMdJDF_joY?usp=drive_link",
    },
  ],
};

const secondYearCurriculum: Curriculum = {
  link: "https://drive.google.com/drive/folders/1SUE6mjbsJNstX6SyJsj0juvc_0VmfxSS?usp=drive_link",
  programs: [currentProgram, previousProgram],
  semester1Link: currentProgram.semester1Link,
  semester2Link: currentProgram.semester2Link,
  semester1: currentProgram.semester1,
  semester2: currentProgram.semester2,
  concourLink:
    "https://drive.google.com/drive/folders/1DnsQFQF_QYF66TuA9lBWzcv46-undIot?usp=drive_link",
  concour: [
    {
      year: "2026",
      link: "https://drive.google.com/drive/folders/1f3B02db71BuDsd2a4oOh8KHfXsUUwiV0?usp=drive_link",
    },
    {
      year: "2025",
      link: "https://drive.google.com/drive/folders/18TBcbpAA4R6-La-9BLdhHedC7_1Rjz7M?usp=drive_link",
    },
    {
      year: "2024",
      link: "https://drive.google.com/drive/folders/1stymGBntmt-9lgsmrd_guPUoqDo5CfxE?usp=drive_link",
    },
    {
      year: "2023",
      link: "https://drive.google.com/drive/folders/1wwu37VpKgVFIGLOnKrOilzk78qykqrA6?usp=drive_link",
    },
    {
      year: "2022",
      link: "https://drive.google.com/drive/folders/1GiBRglhCY2yw0BX0UHrM6OBpdz6l_ckN?usp=drive_link",
    },
    {
      year: "2021",
      link: "https://drive.google.com/drive/folders/1QvVz3bckRgyYoVxQaubCVXfzzhcPXlXE?usp=drive_link",
    },
    {
      year: "2020",
      link: "https://drive.google.com/drive/folders/1joApImXzwH51wMQbplwD65JAbugSwrpZ?usp=drive_link",
    },
    {
      year: "2019",
      link: "https://drive.google.com/drive/folders/1u9rv5zmH5mGt89vfkbxmJSsE5NQpLAO0?usp=drive_link",
    },
    {
      year: "2018",
      link: "https://drive.google.com/drive/folders/1CMlHkzSfxjxfRDBwpfhFHe7LG63WiLSs?usp=drive_link",
    },
    {
      year: "2017",
      link: "https://drive.google.com/drive/folders/11VtFRoH8VZu3h03u2u_a0-09OnCYrXWW?usp=drive_link",
    },
    {
      year: "2016",
      link: "https://drive.google.com/drive/folders/1Ax7PXDrEi6VM48mQbC1z7Fha6jwpF5lR?usp=drive_link",
    },
    {
      year: "2015",
      link: "https://drive.google.com/drive/folders/1Y04YDcfICYkeicUtEuVHGzDxmxOdYBZG?usp=drive_link",
    },
    {
      year: "2014",
      link: "https://drive.google.com/drive/folders/1OhM_hAh54xxO7rHRq2pBXG2EhORK3_ZO?usp=drive_link",
    },
    {
      year: "2013",
      link: "https://drive.google.com/drive/folders/1UrkmxhnFeHnpuF2q4g9Z-AIgSdeI1OzC?usp=drive_link",
    },
    {
      year: "2012",
      link: "https://drive.google.com/drive/folders/1_6XhD_FumaQOGMIE0y3QliXLtiUhVpxO?usp=drive_link",
    },
    {
      year: "2011",
      link: "https://drive.google.com/drive/folders/1hkWmV4pR7JQHkNcqCtBG4bNwskjlOWGq?usp=drive_link",
    },
  ],
};

export default secondYearCurriculum;
