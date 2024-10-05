import { BiLogoGmail } from "react-icons/bi";
import {
  FaPython,
  FaJs,
  FaReact,
  FaJava,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

export type Project = {
  name: string;
  description: string;
  link: string;
};

export type BioData = {
  name: string;
  titles: string[];
  discription: string;
};

export const NAVIGATION_LINKS = ["bio", "skills", "projects", "contact"];

export const BIO_DATA: BioData = {
  name: "Leon",
  titles: ["Software engineer", "CS graduate", "Full-stack developer"],
  discription:
    "teLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, ex vel convallis posuere ",
};

export type Skill = {
  name: string;
  icon: JSX.Element;
};

export const SKILLS_DATA: Record<string, Skill[]> = {
  "Programming Language": [
    {
      name: "Python",
      icon: <FaPython className="text-green-600" />,
    },
    {
      name: "Javascript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "C",
      icon: <FaC className="rounded-full bg-blue-700/50 p-1 text-white" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-500" />,
    },
  ],
  Tools: [
    {
      name: "Docker",
      icon: <FaPython className="text-blue-500" />,
    },
    {
      name: "Git",
      icon: <FaPython className="text-red-500" />,
    },
    {
      name: "Linux",
      icon: <FaPython className="text-yellow-500" />,
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      icon: <FaPython className="text-blue-500" />,
    },
    {
      name: "MongoDB",
      icon: <FaPython className="text-green-500" />,
    },
    {
      name: "SQLite",
      icon: <FaPython className="text-yellow-500" />,
    },
  ],
  Other: [
    {
      name: "REST",
      icon: <FaPython className="text-blue-500" />,
    },
    {
      name: "GraphQL",
      icon: <FaPython className="text-green-500" />,
    },
    {
      name: "CI/CD",
      icon: <FaPython className="text-yellow-500" />,
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    name: "Project1",
    description: "This is a description of project number 1",
    link: "#",
  },
  {
    name: "Project2",
    description: "This is a description of project number 2",
    link: "#",
  },
  {
    name: "Project3",
    description: "This is a description of project number 3",
    link: "#",
  },
  {
    name: "Project4",
    description: "This is a description of project number 4",
    link: "#",
  },
];

export type ContactData = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const CONTACT_DATA: ContactData[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/leon-trestman/",
    icon: <FaLinkedin className="size-full text-blue-700" />,
  },

  {
    name: "Email",
    link: "mailto:tleonleont@gmail.com",
    icon: <BiLogoGmail className="size-full text-red-500" />,
  },
  {
    name: "Github",
    link: "https://github.com/LeonTrestman",
    icon: <FaGithub className="size-full text-black" />,
  },
];
