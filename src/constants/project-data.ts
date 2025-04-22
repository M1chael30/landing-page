import robertImg1 from "../assets/images/robert-proj-1.jpg";
import robertImg2 from "../assets/images/robert-proj-2.jpg";
import robertImg3 from "../assets/images/robert-proj-3.jpg";
import michaelImg from "../assets/images/michael-proj.png";
import melImg1 from "../assets/images/mel-proj1.jpg";
import melImg2 from "../assets/images/mel-proj2.jpg";
import {
 Avatars,
 Datas,
 KeyFeaturesData,
 ProblemsSolved,
 ProjectData,
} from "@/types/types";

export const Title: string =
 " SNHS STUDENT PORTAL: A Digital Platform for Records Academic Management and Enrollment.";

export const subTitle: string =
 " Empowering education through innovation, our student portal is designed to simplify communication, enhance accessibility, and optimize academic management for students, teachers, and administrators alike.";

export const projectData: ProjectData[] = [
 {
  id: 1,
  projectName: "Note App",
  createdBy: "Michael",
  img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MJ",
  description: `I created a simple note application for practice and also to explore more thing in backend developement`,
  projectImg: [michaelImg],
 },
 {
  id: 2,
  projectName: "Steam-based Application",
  createdBy: "Mel Moses",
  img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MM",
  description: `Mel Moses M. Seeping is a software engineer focused on mobile app development. He has designed multiple application like steam-based applications and mobile fitness tracker application using languages like android studio and react-native`,
  projectImg: [melImg1, melImg2],
 },
 {
  id: 3,
  projectName: "Realm Forge",
  createdBy: "Mark Robert",
  img: "https://img.freepik.com/premium-photo/photorealistic-eye-catching-hyper-realistic-best-quality-image-white-background-generated-by-pikaso_643360-505121.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MR",
  description: `A main menu design concept for a game called Realm Forge. This project serves as practice for designing web-based game interfaces and websites. It stands out as one of my finest—if not the finest—web design I have created. The layout combines immersive fantasy elements with intuitive navigation to reflect the MMORPG theme of the game. Every detail was crafted with user experience and visual storytelling in mind.

   In addition to the main menu, I also designed a custom game launcher interface. The launcher features a sleek, dark-themed aesthetic with dynamic elements such as update logs, patch notes, and a start button that brings the world of Realm Forge to life before players even enter the game.`,
  projectImg: [robertImg1, robertImg2, robertImg3],
 },
 {
  id: 4,
  projectName: "Wala pa",
  createdBy: "Czianel",
  img: "https://img.freepik.com/premium-photo/journalist-digital-avatar-generative-ai_934475-9380.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "CZ",
  description: `Wala pa`,
  projectImg: [],
 },
];

export const datas: Datas[] = [
 {
  title: "About us",
  path: "about-our-team",
 },
 {
  title: "Projects",
  path: "our-projects",
 },
 {
  title: "Capstone",
  path: "about-our-capstone",
 },
];

export const avatars: Avatars[] = [
 {
  id: 1,
  img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MJ",
 },
 {
  id: 2,
  img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MM",
 },
 {
  id: 3,
  img: "https://img.freepik.com/premium-photo/photorealistic-eye-catching-hyper-realistic-best-quality-image-white-background-generated-by-pikaso_643360-505121.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "MR",
 },
 {
  id: 4,
  img: "https://img.freepik.com/premium-photo/journalist-digital-avatar-generative-ai_934475-9380.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
  nn: "CZ",
 },
];

export const problemsSolved: ProblemsSolved[] = [
 {
  key: "item-1",
  title: "Disorganized Academic Records",
  value:
   "Eliminating manual record-keeping by providing a structured and accessible database for students and faculty.",
 },
 {
  key: "item-2",
  title: "Inefficient Communication",
  value:
   "Bridging the gap between students, teachers, and administrators through real-time updates and messaging features.",
 },
 {
  key: "item-3",
  title: "Time-Consuming Administrative Tasks",
  value:
   "Automating scheduling, attendance tracking, and grading to reduce workload and improve efficiency.",
 },
 {
  key: "item-4",
  title: "Limited Accessibility",
  value:
   "Ensuring that users can access essential academic information anytime, anywhere, on any device.",
 },
 {
  key: "item-5",
  title: "Lack of Engagement",
  value:
   "Encouraging student participation through interactive features and timely updates.",
 },
];

export const keyFeaturesData: KeyFeaturesData[] = [
 {
  feature: "Student Information System",
  description: "Easy access to grades, attendance, and schedules.",
 },
 {
  feature: "Teacher Portal",
  description: "Simplified grading and communication tools.",
 },
 {
  feature: "Administrative Dashboard",
  description: "Streamlined management of school operations.",
 },
 {
  feature: "Interactive Features",
  description: "Discussion boards, announcements, and event updates.",
 },
];
