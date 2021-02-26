import {
  JobApplication,
  ManageJobApplication,
} from "interfaces/JobApplication";
import { db, auth, timestamp } from "lib/firebase";

const getJobApplications = async (): Promise<JobApplication[]> => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationsRef = db
    .collection("jobApplications")
    .where("user_id", "==", currentUser.uid);
  const getJobApplicationsRef = await jobApplicationsRef.get();
  const jobApplications = getJobApplicationsRef.docs.map((jobApplication) => {
    return {
      ...(jobApplication.data() as JobApplication),
      id: jobApplication.id,
    };
  });
  return jobApplications;
};

const addJobApplication = async (jobApplication: ManageJobApplication) => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationsRef = db.collection("jobApplications");

  const { company, job_title, status } = jobApplication;

  const newJobApplication = {
    company,
    job_title,
    user_id: currentUser.uid,
    status,
    created_at: timestamp(),
    updated_at: timestamp(),
  };

  const { id } = await jobApplicationsRef.add(newJobApplication);

  const getJobApplication = await jobApplicationsRef.doc(id).get();

  return {
    ...(getJobApplication.data() as JobApplication),
    id,
  };
};

const updateJobAppication = async (jobApplication: JobApplication) => {
  const { currentUser } = auth;
  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationRef = db
    .collection("jobApplications")
    .doc(jobApplication.id);
  const getJobApplication = await jobApplicationRef.get();

  if (!getJobApplication.exists) {
    throw new Error("Job Application not exists");
  }

  return jobApplicationRef.update(jobApplication);
};

const deleteJobApplication = async (id: string) => {
  const { currentUser } = auth;
  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationRef = db.collection("jobApplications").doc(id);

  return jobApplicationRef.delete();
};

export const JobApplicationService = {
  addJobApplication,
  updateJobAppication,
  getJobApplications,
  deleteJobApplication,
};
