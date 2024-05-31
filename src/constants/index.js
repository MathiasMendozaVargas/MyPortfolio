import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  csharp,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  supabase,
  jackpoole,
  erickcastro,
  bradon,
  git,
  rona,
  homedepot,
  sczCollege,
  puertomaderologo,
  bluespace,
  fiverr,
  cornerstone,
  electrisearch,
  mypurplespace,
  multicenter,
  puertomadero,
  spaceplush,
  selfDrivingCar,
  myPortfolio,
  bialetti,
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
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Expert Developer",
    icon: backend,
  },
  {
    title: "Data Science and Deep Learning self-student",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "python3",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer Intern",
    company_name: "BlueSpace.Ai - Remote in Vancouver, BC",
    icon: bluespace,
    iconBg: "#ffff",
    date: "August 2023 - Present",
    points: [
      "Implemented complex user interfaces using advanced ReactJs, NextJs, Python, TailwindCss, Typescript, etc.",
      "Utilized React for frontend web development and Flutter for cross-platform mobile app development.",
      "Collaborated on optimizing app performance and enhancing user experience.",
    ],
  },
  {
    title: "Full Stack Web Developer (Frontend Focus)",
    company_name: "Puerto Madero Urubo - Remote in Santa Cruz, Bolivia",
    icon: puertomaderologo,
    iconBg: "#071b43",
    date: "December 2020 - August 2023",
    points: [
      "Developed and maintained RESTful APIs using Node.js and Express, ensuring secure and efficient data handling.",
      "Implemented server-side rendering and dynamic routing using Next.js for improved SEO and performance",
      "Integrated third-party services and APIs.",
      "Designed and optimized database schemas with MySQL and MongoDB, focusing on scalability and data integrity."
    ],
  },
  {
    title: "Frontend Flutter App Developer Intern",
    company_name: "MultiCenter - Hybrid in Santa Cruz, Bolivia",
    icon: multicenter,
    iconBg: "#ffd300",
    date: "August 2020 - January 2021",
    points: [
      "Developed cross-platform mobile applications using Flutter for both iOS and Android",
      "Integrated RESTful APIs, databases, and server-side scripting",
      "Focused on UI/UX design, responsive layout, and state management using Flutter.",
    ],
  },
];

const educations = [
  {
    title: "Full Stack Web Development Co-op Course",
    company_name: "Cornerstone College - Vancouver, Canada",
    icon: cornerstone,
    iconBg: "#283b8a",
    date: "August 2022 - October 2023",
    points: [
      "Participated in a rigorous co-op program with a focus on full-stack web development.",
      "Gained expertise in both frontend and backend technologies, including React, Node.js, and databases.",
      "Contributed to real-world projects, practicing software engineering best practices.",
    ],
  },
  {
    title: "Full Stack Web and Mobile Development Course",
    company_name: "Community College - Santa Cruz, Bolivia",
    icon: sczCollege,
    iconBg: "#036838",
    date: "January 2019 - March 2020",
    points: [
      "Studied web and mobile development concepts, including HTML, CSS, JavaScript, and mobile app development.",
      "Worked with various programming languages and frameworks, such as React, React Native, and Node.js.",
      "Developed and deployed web and mobile applications for practical experience.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Thanks to our new Management System developed by Mathias our sales and company have been skyrocketing, amazing work.",
    name: "Erick Castro",
    designation: "CEO",
    company: "Puerto Madero",
    image: erickcastro,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about his career and programming like Mathias does.",
    name: "Jack Poole",
    designation: "Student",
    company: "Computer Science",
    image: jackpoole,
  },
  {
    testimonial:
      "After having worked with Mathias, I realized he's a very determined person, who will always give his best and make an excellent job.",
    name: "Bradon McInnes",
    designation: "HR",
    company: "Home Depot Richmond",
    image: bradon,
  },
];

const projects = [
  {
    name: "ElectriSearch",
    description:
      "Explore the world with ElectriSearch, your go-to for finding electric charging stations globally. Join our community to support clean energy, contribute to the charging network, and connect with eco-conscious users.",
    tags: [
      {
        name: "nextjs14",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-600",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "googlemapsApi",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: electrisearch,
    source_code_link: "https://github.com/MathiasMendozaVargas/MyPurpleSpaceNetwork",
  },
  {
    name: "My Purple Space",
    description:
      "Social Networking App that allow users to create their profiles, add friends, see other people's profiles, share photos, post comments, like or dislike posts. User have total control over their profile and the content they share.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "threejs",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: mypurplespace,
    live_version_link: "https://mypurplespace.netlify.app/",
    source_code_link: "https://github.com/MathiasMendozaVargas/MyPurpleSpaceNetwork",
  },
  {
    name: "Puerto Madero Management System",
    description:
      "Management System App built for Puerto Madero, a real estate company located in Bolivia. It allows employees inside the company to have their accounts, schedule viewings, manage company business and share photos and information valuable that could be useful for other employees such as photos, ads media, etc.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
      {
        name: "express",
        color: "text-purple-500",
      },
      {
        name: "nodejs",
        color: "text-green-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "text-pink-500",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: puertomadero,
    source_code_link: "https://github.com/MathiasMendozaVargas/puertomaderomanagementsystem",
  },
  {
    name: "Spaceplus",
    description:
      "React Js app connected to NASA's media API, it allows users to browse for anything related to space, such as: Planets, Stars, Rockets, Companies, etc. It has a beautiful and simple user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nasa-api",
        color: "text-blue-600",
      },
      {
        name: "react-hooks",
        color: "text-purple-600",
      },
      {
        name: "axios",
        color: "text-gray-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: spaceplush,
    source_code_link: "https://github.com/MathiasMendozaVargas/Spaceplush",
  },
  {
    name: "Self Driving Car",
    description:
      "Exciting Python-based implementation of a self-driving car simulation leveraging the power of Deep Q Learning (DQN) neural networks. Imagine a virtual world where our intelligent car not only roams autonomously but learns from its experiences to become an adept driver!",
    tags: [
      {
        name: "python3",
        color: "text-green-500",
      },
      {
        name: "pytorch",
        color: "text-orange-500",
      },
      {
        name: "deeplearning",
        color: "text-blue-600",
      },
      {
        name: "tcl-tk",
        color: "text-yellow-500",
      },
      {
        name: "reinforcement-learning",
        color: "text-blue-600",
      },
    ],
    image: selfDrivingCar,
    source_code_link: "https://github.com/MathiasMendozaVargas/SelfDrivingCar",
  },
  {
    name: "My Portfolio",
    description:
      "Interactive portfolio with React, Three.js, and Framer Motion for a dynamic user experience. Explore my work with smooth animations and 3D elements. Powered by Vite and Tailwind CSS for fast, stylish development. Make it yours and deploy effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "threejs",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/MathiasMendozaVargas/MyPortfolio",
  },
  {
    name: "Bialetti Coffee Shop",
    description:
      "JavaScript, HTML5, CSS3, and Bootstrap 5 power this site, enhancing the franchise's visibility. Key features include a commercial showcase, external stock management, and a robust delivery system. Actively developed, we welcome collaboration for a successful Bolivia launch.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "text-purple-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: bialetti,
    live_version_link: "https://bialetti-bolivia.netlify.app/",
    source_code_link: "https://github.com/MathiasMendozaVargas/BialettiBolivia",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
