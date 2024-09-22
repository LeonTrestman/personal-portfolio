import { PROJECTS_DATA, Project } from "../data/Data";

const Projects = () => {
  return (
    <section id="Projects" className="full-section flex">
      <div className="m-auto grid h-3/4 w-3/4 max-w-3xl gap-8 md:grid-cols-2">
        {PROJECTS_DATA.map((project: Project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ name, description, link }: Project) => {
  return (
    <div
      key={name}
      className="rounded-xl border border-stone-800 bg-stone-800/25 p-2 text-white shadow shadow-stone-800/50 backdrop-blur-md"
    >
      <div>{name}</div>
      <div>{description}</div>
      <div> {link} </div>
    </div>
  );
};

export default Projects;
