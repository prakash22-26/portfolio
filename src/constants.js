// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import SQL from "./assets/tech_logo/SQL.png";
import XAMPP from "./assets/tech_logo/XAMPP.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import finixia from "./assets/company_logo/finixia.jpg";
import eygds from "./assets/company_logo/eygds.jpg";

// Education Section Logo's
import NIT from "./assets/education_logo/NIT.jpg";
import jnv from "./assets/education_logo/jnvr.jpg";

// Project Section Logo's
import server from "./assets/work_logo/server.png";
import house from "./assets/work_logo/house.png";
import dashboard from "./assets/work_logo/dashboard.png";
import expense from "./assets/work_logo/expense.png";
import doctor from "./assets/work_logo/doctor.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "XAMPP", logo: XAMPP },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "SQL", logo: SQL },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: eygds,
    role: "Fullstack Web Development Intern",
    company: "EY GDS Next Gen Employability Program",
    date: "Feb 2025 – Mar 2025",
    desc: "•Developing a personal finance managment with MERN Technology •It is a User-friendly platform that track income, expenses, and manage budgets.•Features include user authentication, transaction management, and budget tracking.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "MongoDb",
      "Redux",
      "Express Js",
    ],
  },
  {
    id: 1,
    img: finixia,
    role: "Fullstack Web Development Intern",
    company: "Finixia Dedecons Private Limited",
    date: "Dec 2024 – Feb 2025",
    desc: "•Developing web applications using React.js for front-end and Node.js, Express.js for back-end. •Collaborating with teams to implement features, optimize performance, and ensure responsive design.",
    skills: ["ReactJS", "Redux", "JavaScript", "HTML", "CSS", "Express Js"],
  },
  {
    id: 2,
    img: NIT,
    role: "Emerging Technology for Intelligent system & Python Programming",
    company:
      "National Institute of Technology Sikkim (iHUB DivyaSampark IIT Roorkee)",
    date: "May 2023 – Jun 2023",
    desc: "Applied Python for numerical computations and used Pandas for data manipulation and Numpy for array operation.",
    skills: ["Python", "Pandas", "Numpy", "SQL", "Matplotlib"],
  },
];

export const education = [
  {
    id: 0,
    img: NIT,
    school: "National Institute of Technology Sikkim",
    date: "2022 – 2026",
    grade: "6.33 CGPA(5th)",
    desc: "Computer Science and Engineering",
    degree: "Bachelor of Technology - B.tech",
  },
  {
    id: 1,
    img: jnv,
    school: "Jawahar Navodya Vidyalaya Rothak, Sikkim",
    date: "2021 – 2022",
    grade: "78.6%",
    desc: "I completed my class 12 education from Jawahar Navodya Vidyalaya Rothak, Sikkim, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: jnv,
    school: "Jawahar Navodya Vidyalaya Rothak, Sikkim",
    date: " 2019 – 2020",
    grade: "73.2%",
    desc: "I completed my class 10 education from Jawahar Navodya Vidyalaya Rothak, Sikkim, under the CBSE board, where I complete my class 10.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "server monitorimng dashboard",
    description:
      "A full-stack server monitoring dashboard that provides real-time metrics such as CPU usage, memory consumption, and disk activity. Built with React.js, FastAPI, and PostgreSQL, and deployed on Render.",
    image: server,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Python"],
  },
  {
    id: 1,
    title: "Invoice Management System",
    description:
      "A full-stack web application where user can creating, managing, and tracking invoices.",
    image: dashboard,
    tags: [
      "React JS",
      "Node.js",
      "PostgreSQL",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "Expense management",
    description: "A web application where user can record there expenses.",
    image: expense,
    tags: [
      "React JS",
      "Mongodb",
      "HTML",
      "CSS",
      "JavaScript",
      "Express",
      "Node.js",
    ],
  },
  {
    id: 3,
    title: "Dental Appointment Web Application",
    description:
      "It is a user-friendly platform that offers patients the convenience of booking their appointment online.",
    image: doctor,
    tags: [
      "React JS",
      "Mongodb",
      "HTML",
      "CSS",
      "JavaScript",
      "Express",
      "Node.js",
    ],
  },
  {
    id: 4,
    title: "House Rental Management System",
    description:
      "The platform offers a seamless and user-friendly experience for managing rental processes online.",
    image: house,
    tags: ["MySQL", "PHP", "HTML", "CSS", "Javascript", "Bootstrap", "XAMPP"],
  },
];
