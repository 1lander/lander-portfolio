import Image from "next/image";
import { skills } from "./data/skills";
import { workExperience } from "./data/workExperience";

const Skills = () => {
  return (
    <div>
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
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div>
      <h1 className="text-5xl">Work Experience</h1>
      {workExperience.map(
        ({
          title,
          startDate,
          endDate,
          location,
          employer,
          employerUrl,
          description,
        }) => {
          return (
            <>
              <div>{`${startDate} - ${endDate ?? "present"}`}</div>
              <h4 className="text-2xl text-ocean font-bold">{title}</h4>
              <a href={employerUrl} target="__blank">
                {`${employer},(${location})`}
              </a>

              <h2 className="text-2xl text-swamp font-bold">Description</h2>
              <div>{description}</div>
            </>
          );
        }
      )}
    </div>
  );
};

export const Home = () => {
  return (
    <main className="flex min-h-screen flex-col gap-10 p-24">
      <h1 className="font-bold text-7xl">Lander Van Landeghem</h1>
      <Skills />
      <WorkExperience />
      <Image src="/me.jpg" alt="a picture of me" width={500} height={500} />
    </main>
  );
};

export default Home;
