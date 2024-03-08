import { skills } from "./data";

export const Skills = () => {
  return (
    <>
      <h1 className="text-5xl">Skills</h1>
      {skills.map(({ category, skills }) => {
        return (
          <>
            <h4 className="text-2xl mt-5 text-ocean font-bold">{category}</h4>
            <ul className="list-disc ml-6">
              {skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </>
        );
      })}
    </>
  );
};

export default Skills;