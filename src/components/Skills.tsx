import { Skill, SKILLS_DATA } from "../data/Data";
import Reveal from "./UI/Reveal";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="full-section">
      <div className="container m-auto max-w-4xl">
        <SkillHeader />
        {Object.entries(SKILLS_DATA).map(([category, catSkills]) => (
          <SkillCategory category={category} catSkills={catSkills} />
        ))}
      </div>
    </section>
  );
};

const SkillHeader: React.FC = () => (
  <h1 className="mb-4 flex items-center gap-8 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
    <Reveal>
      <span className="flex-0">
        Skills
        <span className="text-rose-300">.</span>
      </span>
    </Reveal>
    <div className="flex-1 border-t border-rose-300/50"></div>
  </h1>
);

type SkillCategoryProps = {
  category: string;
  catSkills: Skill[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  catSkills: skills,
}) => (
  <div key={category} className="mb-4 flex flex-col gap-4">
    <Reveal>
      <h2 className="text-xl text-white md:text-2xl">{category}:</h2>
    </Reveal>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill: Skill) => (
        <SkillElement key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

type SkillElementProps = {
  name: string;
  icon: JSX.Element;
};

const SkillElement: React.FC<SkillElementProps> = ({ name, icon }) => {
  return (
    <Reveal>
      <div className="flex items-center justify-center gap-2 rounded-full bg-gray-800/50 p-4">
        {icon}
        <p className="text-white">{name}</p>
      </div>
    </Reveal>
  );
};

export default Skills;
