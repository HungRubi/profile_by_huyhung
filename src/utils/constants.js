import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
} from "../assets";

const navItem = [
  {
    text: "home",
    link: "home"
  },
  {
    text: "about",
    link: "about"
  },
  {
    text: "work",
    link: "work"
  },
  {
    text: "contact",
    link: "contact"
  }
]

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern Front-end Developer",
    company_name: "Andin JSC",
    icon: "/img/andin.jpg",
    iconBg: "#383E56",
    date: "February 2024 - May 2024",
    points: [
      "Joined as a Front-End Intern at Andin Trading JSC",
      "Developed responsive user interfaces using React",
      "Worked with designers to implement UI/UX for the company’s e-commerce platform",
      "Assisted in integrating APIs and debugging UI components",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Hybrid Elevator",
    icon: "/img/hybrid_elevator.png",
    iconBg: "#383E56",
    date: "December 2024 - May 2025",
    points: [
      "Designed and developed a full-stack web application for Hybrid Elevator Company",
      "Built a responsive front-end using React",
      "Developed an admin dashboard to manage products, customer, report, orders, content, and user permissions, improving operational efficiency for the company",
      "Implemented back-end services and RESTful APIs, deployed and maintained the entire system",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
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
];

const projects = [
  {
    name: "Elevator Parts",
    description:
      "The web-based platform allows users to view information, search, place and manage orders, providing a convenient and efficient customer experience solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://vmu.com.vn/",
  },
  {
    name: "Admin Panel",
    description:
      "A responsive management website allows administrators to manage users, content, orders, statistical reports and system data efficiently and accurately.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://admin.vmu.com.vn/",
  },
  {
    name: "ZingMP3",
    description:
      "An engaging online music streaming platform where users can explore, play, and manage songs from various genres and artists with a seamless and personalized experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, navItem };
