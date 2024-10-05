import { PROJECTS_DATA, Project } from "../data/Data";
import Reveal from "./UI/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="full-section">
      <div className="container m-auto flex max-w-4xl flex-col gap-4 p-4">
        <ProjectsHeader />
        {PROJECTS_DATA.map((project: Project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectsHeader: React.FC = () => (
  <h1 className="mb-4 flex items-center gap-8 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
    <div className="flex-1 border-t border-rose-300/50"></div>
    <Reveal>
      <span className="flex-0">
        Projects
        <span className="text-rose-300">.</span>
      </span>
    </Reveal>
  </h1>
);

const ProjectCard: React.FC<Project> = ({ name, description, link }) => {
  return (
    <div
      key={name}
      className="rounded-xl border border-stone-800 bg-stone-800/25 p-2 text-white shadow shadow-stone-800/50 backdrop-blur-md"
    >
      <div className="flex">
        <div>pic</div>
        {/* text part */}
        <div className="">
          <div>{name}</div>
          <div>{description}</div>
          <div> {link} </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
