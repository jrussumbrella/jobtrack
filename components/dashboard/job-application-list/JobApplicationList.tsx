import React from "react";
import Button from "components/ui/button";
import styles from "./JobApplicationList.module.css";
import { JobApplication } from "interfaces/JobApplication";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

interface Props {
  jobApplications: JobApplication[];
  onDelete(jobApplication: JobApplication): void;
  onEdit(jobApplication: JobApplication): void;
}

const JobApplicationList: React.FC<Props> = ({
  onDelete,
  onEdit,
  jobApplications,
}) => {
  return (
    <ul className={styles.listContainer}>
      {jobApplications.map((jobApplication) => (
        <li key={jobApplication.id} className={styles.listItem}>
          <p>
            Company: <strong>{jobApplication.company}</strong>
          </p>
          <p>
            Job Title: <strong>{jobApplication.job_title}</strong>
          </p>
          <p>
            Status: <strong>{jobApplication.status.toUpperCase()}</strong>
          </p>
          <div className={styles.buttonsContainer}>
            <Button
              icon={<MdEdit color="#fff" />}
              onClick={() => onEdit(jobApplication)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              icon={<IoMdTrash />}
              onClick={() => onDelete(jobApplication)}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobApplicationList;
