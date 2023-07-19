import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  illuminiaStudios,
  Ccharp,
  C,
  Laravel,
  VisualBasic,
  PHP,
  SQL,
  OmegaMarket,
  ItRun,
  UnityCertification,
  CcharpCertification,
  Overmon_Rpg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Softwer Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: Laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: Ccharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "Visual Basic",
    icon: VisualBasic,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: PHP,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

//Refence to the experiences table 
//use to view different work experiences 
const experiences = [
  {
    title: "Game Developer",//title of the work 
    company_name: "illuminia Studios Inc",//name of the current compagny 
    icon: illuminiaStudios,//icon of the compagny 
    iconBg: "#E6DEDD",//back ground of the icon 
    date: "Jan 2022 - Present",//time line of this work 
    points: [
      "Provice technical implementations for video game projects.",
      "Expand,update and implement new game play feature.",
      "Continuous documentation of code source of studios.",
      "Expand, update and implement new class modules in C#.",
      "Collaborate with artist and designers in order to properly implement coherent game mechanics.",
      "Work with Unity and Visual Studio to implement game features.",
      "Work with visual studio to implement pipeline tools."
    ],
  },
];

/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Emmanuel proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];*/

const Certificate =[
  {
    title:"C# Certification",
    image :CcharpCertification
  },
  {
    title :"Unity Certification",
    image :UnityCertification
  },
]

const projects = [
  {
    name: "Omega-Big Market",
    description:
      "E-commerce website that allows the user to search and buy various products with confidence",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: OmegaMarket,
    source_code_link: "https://github.com/EmmanuelJoas/E-commerce_Tamplate",
  },
  {
    name: "It Run",
    description:
      "2D infinite runner game made with unity, where you play a little guy who must avoid a goblin by avoiding obstacles on his way.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: ItRun,
    source_code_link: "https://github.com/EmmanuelJoas/It_Run",
  },
  {
    name: "Overmon Rpg",
    description:
      "A 2D RPG game in development, inspired by the first Pokémon games.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: Overmon_Rpg,
    source_code_link: "https://github.com/EmmanuelJoas/OverMon-Rpg-Monster",
  },
];

export { 
  services
  , technologies
  , experiences
  , projects
  ,Certificate 
};
