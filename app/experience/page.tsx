import { workExperience } from "./data";

export const Experience = () => {
  return (
    <>
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
    </>
  );
};

export default Experience;
