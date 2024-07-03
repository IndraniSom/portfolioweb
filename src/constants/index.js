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
  nextjs,
  robo,
  tailwind,
 python,
 c,
 cpp,php,
 sql,
  mongodb,
  git,
  figma,
  port,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Next Js",
    icon: nextjs,
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
  {
    name: "python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name:"SQL",
    icon:sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }
  
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
    name: "Travelo",
    description:
      "It was a team project which is your ultimate tourguide ",
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
    source_code_link: "https://github.com/LoadingMinds/Loading-Minds_EC107A",
    linkedin_code_link:"/",
    live_link: "https://loading-minds-ec-107-a.vercel.app/",
  },
  {
    name: "My Portfolio Website",
    description:
      "A portfolio website which is made using reactjs and tailwindcss.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      
    ],
    image: port,
    source_code_link: "https://github.com/IndraniSom/portfolioweb",
    linkedin_code_link:"https://github.com/IndraniSom/Silent-Boomers",
    live_link: "https://indrani-som-portfolio.vercel.app/",
  },
 
  {
    name: "SC-CSE Website",
    description:
      "This is a community website and a team project",
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
    source_code_link: "",
    linkedin_code_link:"",
    live_link: "https://sccseaot.vercel.app/",
  },
  {
    name: "Python Desktop Assistant",
    description:
      "A desktop assistant which can do various tasks ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: robo,
    source_code_link: "https://github.com/IndraniSom/Python-Desktop-Assistant",
    linkedin_code_link:"https://www.linkedin.com/posts/indrani-som-258498248_voiceassistant-python-desktopassistant-activity-7106729066455547904-iycE?utm_source=share&utm_medium=member_android",
    live_link: "https://www.linkedin.com/posts/indrani-som-258498248_voiceassistant-python-desktopassistant-activity-7106729066455547904-iycE?utm_source=share&utm_medium=member_android",
  },
  {
    name: "To-do App",
    description:
      "Users can add tasks,mark tasks as completed",
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
    linkedin_code_link:"https://www.linkedin.com/posts/indrani-som-258498248_connections-oasisinfobyte-activity-7063840297927028738-WkPV?utm_source=share&utm_medium=member_android",
    live_link: "https://todolist-indranisom.vercel.app/",
  },
];

export { services, skills, experiences,  projects };
