export interface JobApplication {
  id: string;
  company: string;
  job_title: string;
  status: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ManageJobApplication {
  company: string;
  job_title: string;
  status: string;
}
