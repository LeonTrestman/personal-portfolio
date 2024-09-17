import { FaPython, FaJs, FaReact, FaJava } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

export type Project = {
  name: string;
  description: string;
  link: string;
};

export type BioData = {
  name: string;
  discription: string;
};

export const NAVIGATION_LINKS = ["Bio", "Skills", "Projects", "Contact"];

export const BIO_DATA: BioData = {
  name: "Leon Trestman",
  discription:
    "teLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, ex vel convallis posuere, dui libero molestie diam, non aliquam arcu augue non eros. Fusce a pulvinar velit, quis varius dolor. Praesent dolor urna, bibendum ut lacus nec, sodales pellentesque sapien. Sed risus neque, pulvinar id venenatis et, congue id nisi. Suspendisse faucibus finibus risus, sit amet blandit magna elementum quis. Sed id mauris a nibh hendrerit ullamcorper. Vestibulum volutpat sem nec nisi cursus, sed mollis massa pulvinar. Duis sodales nisl sed imperdiet fermentum. Maecenas posuere ipsum ut convallis accumsan. Aenean quis orci sit amet nisl aliquet placerat eget consectetur odio. Nulla in sagittis purus. Sed sed egestas dui, sit amet vulputate ante. Cras ac feugiat quam. Sed eget sem pellentesque, tincidunt nulla at, ultrices nisi. Nulla vehicula sollicitudin dapibus. Phasellus sit amet elit justo.st",
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
  icon: string;
};

export const CONTACT_DATA: ContactData[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/leon-trestman-0a0a7b1b2/",
    icon: "linkedin",
  },
  {
    name: "Github",
    link: "https://github.com/LeonTrestman",
    icon: "github",
  },
  {
    name: "Email",
    link: "mailto:tleonleont@gmail.com",
    icon: "email",
  },
];
