import { db, auth } from "lib/firebase";
import { JobApplication } from "./../interfaces/JobApplication";

const addJobAppication = async (jobApplication: JobApplication) => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationsRef = db.collection("jobApplications");

  const { company, job_title } = jobApplication;

  const newJobApplication = {
    company,
    job_title,
    user_id: currentUser.uid,
  };

  return jobApplicationsRef.add(newJobApplication);
};

export const JobApplicationService = {
  addJobAppication,
};
