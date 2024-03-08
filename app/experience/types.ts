export type project = {
  startDate: string;
  endDate?: Date;
  title: string;
  employer: string;
  employerUrl?: string;
  location: string;
  techStack: string[] | [];
  description: string;
  projectUrl?: string;
}