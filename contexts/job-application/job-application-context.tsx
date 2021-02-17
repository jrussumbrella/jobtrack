import React, { createContext, useReducer, useContext, useMemo } from "react";
import { JobApplication } from "interfaces/JobApplication";
import reducer from "./job-application-reducer";
import { jobApplications } from "data/data";
import {
  ADD_JOB_APPLICATION,
  DELETE_JOB_APPLICATION,
  SELECT_JOB_APPLICATION,
  UPDATE_JOB_APPLICATION,
  CLEAR_SELECTED_JOB_APPLICATION,
} from "./job-application-type";

interface InitialState {
  jobApplications: JobApplication[];
  selectedJobApplication: null | JobApplication;
  deleteJobApplication(id: string): void;
  addJobApplication(jobApplication: JobApplication): void;
  selectJobApplication(jobApplication: JobApplication): void;
  updateJobApplication(jobApplication: JobApplication): void;
  clearSelectedJobApplication(): void;
}

const initialState = {
  jobApplications: jobApplications,
  selectedJobApplication: null,
};

const JobApplicationContext = createContext<InitialState>({
  ...initialState,
  deleteJobApplication: () => {},
  selectJobApplication: () => {},
  updateJobApplication: () => {},
  clearSelectedJobApplication: () => {},
  addJobApplication: () => {},
});

export const JobApplicationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteJobApplication = (id: string) => {
    dispatch({ type: DELETE_JOB_APPLICATION, payload: { id } });
  };

  const addJobApplication = (jobApplication: JobApplication) => {
    dispatch({ type: ADD_JOB_APPLICATION, payload: { jobApplication } });
  };

  const updateJobApplication = (jobApplication: JobApplication) => {
    dispatch({ type: UPDATE_JOB_APPLICATION, payload: { jobApplication } });
  };

  const selectJobApplication = (jobApplication: JobApplication) => {
    dispatch({ type: SELECT_JOB_APPLICATION, payload: { jobApplication } });
  };

  const clearSelectedJobApplication = () => {
    dispatch({ type: CLEAR_SELECTED_JOB_APPLICATION });
  };

  const value = useMemo(
    () => ({
      ...state,
      addJobApplication,
      deleteJobApplication,
      selectJobApplication,
      updateJobApplication,
      clearSelectedJobApplication,
    }),
    [state]
  );

  return (
    <JobApplicationContext.Provider value={value}>
      {children}
    </JobApplicationContext.Provider>
  );
};

export const useJobApplication = () => useContext(JobApplicationContext);
