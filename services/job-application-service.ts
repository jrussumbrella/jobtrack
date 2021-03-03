import {
  JobApplication,
  ManageJobApplication,
} from "interfaces/JobApplication";
import { db, auth, timestamp, increment } from "lib/firebase";
import {
  JOB_APPLICATIONS_COLLECTION,
  USERS_COLLECTION,
} from "./service-constants";

const getTotalJobApplications = async () => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const usersRef = db.collection(USERS_COLLECTION).doc(currentUser.uid);
  const getUsersRef = await usersRef.get();
  const userData = getUsersRef.data();
  return userData?.job_applications_count || 0;
};

const getJobApplications = async (): Promise<JobApplication[]> => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationsRef = db
    .collection(JOB_APPLICATIONS_COLLECTION)
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

  const batch = db.batch();

  const jobApplicationsRef = db.collection(JOB_APPLICATIONS_COLLECTION);
  const jobApplicationRef = jobApplicationsRef.doc();
  const usersRef = db.collection(USERS_COLLECTION).doc(currentUser.uid);

  const { company, job_title, status } = jobApplication;

  const newJobApplication = {
    company,
    job_title,
    user_id: currentUser.uid,
    status,
    created_at: timestamp(),
    updated_at: timestamp(),
  };

  batch.set(jobApplicationRef, newJobApplication);
  batch.update(usersRef, { job_applications_count: increment(1) });

  await batch.commit();

  const getJobApplication = await jobApplicationsRef
    .doc(jobApplicationRef.id)
    .get();

  return {
    ...(getJobApplication.data() as JobApplication),
    id: jobApplicationRef.id,
  };
};

const updateJobAppication = async (jobApplication: JobApplication) => {
  const { currentUser } = auth;
  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationRef = db
    .collection(JOB_APPLICATIONS_COLLECTION)
    .doc(jobApplication.id);
  const getJobApplication = await jobApplicationRef.get();

  if (!getJobApplication.exists) {
    throw new Error("Job Application not exists");
  }

  return jobApplicationRef.update({
    ...jobApplication,
    updated_at: timestamp(),
  });
};

const deleteJobApplication = async (id: string) => {
  const { currentUser } = auth;
  if (!currentUser) {
    throw new Error("Please sign in first");
  }

  const jobApplicationRef = db.collection(JOB_APPLICATIONS_COLLECTION).doc(id);

  return jobApplicationRef.delete();
};

export const JobApplicationService = {
  addJobApplication,
  updateJobAppication,
  getJobApplications,
  getTotalJobApplications,
  deleteJobApplication,
};
