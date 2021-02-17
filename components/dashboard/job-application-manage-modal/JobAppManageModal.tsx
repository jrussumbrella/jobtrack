import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "components/ui/modal/Modal";
import Button from "components/ui/button";
import Input from "components/ui/input/Input";
import Select from "components/ui/select/Select";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { JOB_APPLICATION_STATUSES } from "utils/constants";
import styles from "./JobApplicationManageModal.module.css";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const initialState = {
  job_title: "",
  company: "",
  status: "",
};

const JobApplicationManageModal: React.FC<Props> = ({ onClose, isVisible }) => {
  const {
    selectedJobApplication,
    updateJobApplication,
    addJobApplication,
  } = useJobApplication();

  const [jobApplication, setJobApplication] = useState(initialState);

  const modalTitle = selectedJobApplication
    ? "Edit Job Application"
    : "Add Job Application";

  useEffect(() => {
    if (selectedJobApplication) {
      setJobApplication({
        job_title: selectedJobApplication.job_title,
        company: selectedJobApplication.company,
        status: selectedJobApplication.status.toLowerCase(),
      });
    } else {
      setJobApplication(initialState);
    }
  }, [selectedJobApplication]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setJobApplication({
      ...jobApplication,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedJobApplication) {
      updateJobApplication({
        id: selectedJobApplication?.id as string,
        ...jobApplication,
      });
    } else {
      addJobApplication({
        id: Date.now().toString(),
        ...jobApplication,
      });
    }

    onClose();
  };

  return (
    <Modal title={modalTitle} onClose={onClose} isVisible={isVisible}>
      <form onSubmit={handleSubmit}>
        <Input
          id="company"
          label="Company"
          name="company"
          onChange={handleChange}
          value={jobApplication.company}
          fullWidth
          className={styles.input}
        />
        <Input
          id="job_title"
          label="Job Title"
          name="job_title"
          onChange={handleChange}
          value={jobApplication.job_title}
          fullWidth
          className={styles.input}
        />
        <Select
          id="status"
          label="Status"
          name="status"
          onChange={handleChange}
          value={jobApplication.status}
          fullWidth
          className={styles.input}
          options={JOB_APPLICATION_STATUSES}
        />
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose}> Cancel </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
};

export default JobApplicationManageModal;
