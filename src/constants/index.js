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
  
  school,
  college,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const skills = [
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
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Binodini Girls High School",
    company_name: "10 th Board",
    icon: school,
    iconBg: "#383E56",
    date: "2020",
    points: [
      "92% in 10th Board Examination",
    ],
  },
  {
    title: "Binodini Girls High School",
    company_name: "12 th Board",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "86.4% in 12th Board Examination",
    ],
  },
  {
    title: "Academy of Technology",
    company_name: "Bachelor in Computer Science and Engineering",
    icon: college,
    iconBg: "#383E56",
    date: "2022 - 2026",
    points: [
      "7+ cgpa till now",
    ],
  },
  
];



const projects = [
  {
    name: "TastyMeal",
    description:
      "Web-based platform that allows users to search for recipes, view nutritional information, and create a shopping list for ingredients.They can save the items in their cart also",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/IndraniSom/TastyMeal.github.io",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://indranisom.github.io/TastyMeal.github.io/",
  },
  {
    name: "To-do App",
    description:
      "Web application that allows users to create, update, and delete tasks, and mark them as complete.Users can add tasks, set deadlines, mark tasks as completed, and sometimes prioritize or categorize them.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/IndraniSom/To-Do-List",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://todolist-indranisom.vercel.app/",
  },
  {
    name: "Silent Boomers",
    description:
      "It was a team project which we submitted on a intracollege where i was the team leader and worked on both frontend and backend.A comprehensive website for older generation to connect with each other. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/IndraniSom/Silent-Boomers",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://silentboomers1.netlify.app/",
  },
  {
    name: "To-do App",
    description:
      "Web application that allows users to create, update, and delete tasks, and mark them as complete.Users can add tasks, set deadlines, mark tasks as completed, and sometimes prioritize or categorize them.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/IndraniSom/To-Do-List",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://todolist-indranisom.vercel.app/",
  },
  {
    name: "To-do App",
    description:
      "Web application that allows users to create, update, and delete tasks, and mark them as complete.Users can add tasks, set deadlines, mark tasks as completed, and sometimes prioritize or categorize them.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/IndraniSom/To-Do-List",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://todolist-indranisom.vercel.app/",
  },
];

export { services, skills, experiences,  projects };
