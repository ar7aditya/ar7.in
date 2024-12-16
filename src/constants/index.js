import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  bash,
  ffmpeg,
  mui,
  antD,
  sql,
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
  jb,
  mmm,
  meta,
  hbf,
  sf,
  harness,
  carrent,
  cryptoverse,
  nodebus,
  realtor,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quality Engineer",
    icon: web,
  },
  {
    title: "C++ Coder",
    icon: creator,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "C++",
    icon: cpp,
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
    name: "Material UI",
    icon: mui,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "FFMPEG",
    icon: ffmpeg,
  },
];

const experiences = [
  {
    title: "Software Engineer, Full Time",
    company_name: "Harness",
    icon: harness,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - present",
    points: [
      "Resolved critical customer issues within a given timeframe, unblocking the customer and maintaining an 85% customer retention rate.",
      "Developed RESTful APIs in Java and SpringBoot for the Templates and later participated in the migration to FastAPI leading to 1.5x faster server response times.",
      "Orchestrated Docker and Kubernetes implementation, reducing server costs by 25% through improved resource allocation strategies.",
      "Played a key role in the Pipelines team by automating 200+ backend test cases, caught 80+ high-priority bugs, cutting regression testing time by 40%, and implemented Cypress with TypeScript for UI testing.",
    ],
  },
  {
    title: "Software Development Engineer in Test, Intern",
    company_name: "Harness",
    icon: harness,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Led the release sign-off process for the Pipelines team, overseeing four services and ensuring timely and efficient delivery in multiple environments.",
      "Reduced sign-off time by optimizing resource allocation strategies, fixing and enhancing test cases with dynamic approaches and efficient looping matrix utilization.",
      "Led end-to-end testing for multiple feature by creating comprehensive test plans based on technical specifications by integrating components like Expression Engine, Looping Strategies, Failure Strategies, OPA Policy, and RBAC to ensure cross-module functionality and execution.",
      "Developed and maintained robust end-to-end automation scripts for API testing using Java and TestNG, and UI testing with Cypress and TypeScript, emphasizing CFD and critical feature validations."
,
    ],
  },
  {
    title: "Maintainer (Open Source)",
    company_name: "Hacktoberfest",
    icon: hbf,
    iconBg: "#383E56",
    date: "Oct 2022 - Oct 2022",
    points: [
      "I have established and effectively managed a repository, ensuring its smooth operation.",
      " I have assisted over 100 students in their contributions to open-source projects, providing guidance and support.",
      "I have made valuable contributions to open source projects, demonstrating my skills and expertise in the community.",
    ],
  },
  {
    title: "Full Stack Web Developer, Intern",
    company_name: "JustBaat AI",
    icon: jb,
    iconBg: "#383E56",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Metahuman videos Upgradation: Transcode , add subtitles , edit and scale videos using FFMPEG and NodeJS and helped company to produce more than 1000 videos per day.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Analyzed data using BigQuery, and Firebase and rendered using API.",
    ],
  },
  {
    title: "Autonomy team (Core member)",
    company_name: "Mars Rover MUJ",
    icon: mmm,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Mar 2022",
    points: [
      "Engineered, designed, and built a Mars Rover prototype in a team of 30 students from various disciplines; successfully tested and validated rover’s ability to traverse Martian terrain and collect data on extraterrestrial environments.",
      "Integrate the working of LIDAR sensors with Raspberry PI",
      "Design an autonomous rover capable of traversing multiple locations without human intervention.",
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
    name: "CryptoVerse",
    description:
      "I have built a real-time cryptocurrency application using ReactJS and RapidAPI. The application fetches live exchange rates and updates for more than 50 cryptocurrencies. It presents this data in an intuitive manner using Chart.js, allowing users to easily visualize the trends and fluctuations.And also it has a news section which fetches the latest news from RapidAPI and displays it in a card format.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "reduxToolkit",
        color: "green-text-gradient",
      },
      {
        name: "AntDesign",
        color: "pink-text-gradient",
      },
      {
        name: "Rapid API",
        color: "orange-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/ar7aditya/Cryptoverse",
  },
  {
    name: "RealTor",
    description:
      " I have developed a dynamic real estate application using ReactJS and RapidAPI. This application provides users with real-time updates and live deal rates for over 100 cities. It empowers users to search for apartments to rent or buy, view asking prices, and apply various filters based on their specific requirements. Additionally, the application allows users to conveniently locate available apartments based on their preferences.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "Rapid API",
        color: "orange-text-gradient",
      },
      {
        name: "Filtering",
        color: "green-text-gradient",
      },
    ],
    image: realtor,
    source_code_link: "https://github.com/ar7aditya/Real_Tor",
  },
  {
    name: "Node Bus",
    description:
      "Nodebus is a platform that functions as a blogging website, allowing users to register, create their own accounts, and publish their articles. One unique aspect of Nodebus is the ability for users to engage in chat conversations with other users, fostering interaction and connection within the community. Users can also actively participate in discussions and engage with the blogs published on the platform.",
    tags: [
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Passport-JS",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "orange-text-gradient",
      },
    ],
    image: nodebus,
    source_code_link: "https://github.com/ar7aditya/node-bus",
  },
];

export { services, technologies, experiences, testimonials, projects };
