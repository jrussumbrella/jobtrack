import { firebase } from "lib/firebase";

export interface JobApplication {
  id: string;
  company: string;
  job_title: string;
  status: string;
  user_id: string;
  created_at: firebase.firestore.Timestamp;
  updated_at: firebase.firestore.Timestamp;
}

export interface ManageJobApplication {
  company: string;
  job_title: string;
  status: string;
}
