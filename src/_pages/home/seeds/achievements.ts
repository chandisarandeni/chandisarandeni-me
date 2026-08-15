import type { StaticImageData } from "next/image";
import medalImage from "../assets/achievements/PROF-SARATH_AMONUGALA_MEDAL.png";
import icacitImage from "../assets/achievements/ICACIT_EVENT.jpg";
import codex1Image from "../assets/achievements/NIBMCODEX 1.0.jpeg";
import lksigImage from "../assets/achievements/LKSIG_2026.jpg";
import diplomaImage from "../assets/achievements/DIPLOMA__CONVOCATION.png";

export type AchievementItem = {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  image?: string | StaticImageData;
  link?: string;
  featured?: boolean;
};

const achievements: AchievementItem[] = [
  {
    title: "Sri Lanka School of Internet Governance (LKSIG) | Fellowship",
    issuer: "LKSIG",
    date: "May 2026",
    summary: "Awarded a fellowship to participate in the Sri Lanka School of Internet Governance (LKSIG), engaging in comprehensive discussions and training on internet governance topics.",
    image: lksigImage,
    featured: true
  },
  {
    title: "ICACIT 2026 | Organizing Committee",
    issuer: "ICACIT",
    date: "March 2026",
    summary: "Participated in planning and execution activities as part of the organizing team for the ICACIT conference.",
    image: icacitImage,
    featured: false
  },
  /*
  {
    title: "NIBMCodeX 2.0 | IEEEXtreme 20.0 - Chairperson",
    issuer: "IEEE / NIBM",
    date: "2025",
    summary: "Led the organizing committee as Chairperson, overseeing event planning, execution, and overall success.",
    image: "https://picsum.photos/seed/event/600/400"
  },
  */
  {
    title: "NIBMCodeX 1.0 | IEEEXtreme 19.0 - Logistics Team Member",
    issuer: "IEEE / NIBM",
    date: "October 2025",
    summary: "Served as a Logistics Team Member, contributing to coordination and operational support during the competition.",
    image: codex1Image,
    featured: true
  },
  {
    title: "Diploma in Software Engineering",
    issuer: "National Institute of Business Management (NIBM)",
    date: "August 2025",
    summary: "Successfully completed the Diploma in Software Engineering, establishing a strong foundation in modern software development practices.",
    image: diplomaImage,
    featured: true
  },
  {
    title: "Prof. Sarath Amunugama Gold Medal",
    issuer: "IMBS Green Campus",
    date: "January 2025",
    summary: "Recognized for outstanding academic performance in Diploma in Information Technology.",
    image: medalImage,
    featured: true
  },
  /*
  {
    title: "IEEE Student Branch - NIBM",
    issuer: "IEEE",
    date: "Active",
    summary: "Active student branch involvement through technical and community-oriented initiatives.",
    image: "https://picsum.photos/seed/students/600/400"
  }
  */
];

export default achievements;
