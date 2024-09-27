import { SKILLS_DATA } from "../data/Data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="full-section flex items-center justify-center"
    >
      <div className="container rounded-xl border border-stone-800 bg-stone-800/25 p-2 shadow shadow-stone-800/50 backdrop-blur-md">
        <div className="grid w-full divide-y divide-white/20">
          <h1 className="text-3 xl m-auto font-semibold italic text-white/90">
            Skills:
          </h1>
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center p-2 text-center text-white"
            >
              <div className="w-full">{skill.icon}</div>
              <div className="w-full">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
