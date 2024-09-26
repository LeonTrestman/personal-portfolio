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

export const NAVIGATION_LINKS = ["Bio", "Skills", "Projects", "Contact"];

export const BIO_DATA: BioData = {
  name: "Leon",
  titles: ["Software engineer", "CS graduate", "Full-stack developer"],
  discription:
    "teLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, ex vel convallis posuere ",
};

export const SKILLS_DATA = [
  {
    name: "Python",
    icon: <FaPython className="m-auto text-4xl text-green-600" />,
  },
  {
    name: "Javascript",
    icon: <FaJs className="m-auto text-4xl text-yellow-400" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="m-auto text-4xl text-blue-500" />,
  },
  {
    name: "React",
    icon: <FaReact className="m-auto text-4xl text-cyan-400" />,
  },
  {
    name: "C",
    icon: (
      <FaC className="m-auto rounded-full bg-blue-700/50 p-1 text-4xl text-white" />
    ),
  },
  {
    name: "Java",
    icon: <FaJava className="m-auto text-4xl text-red-500" />,
  },
];

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
