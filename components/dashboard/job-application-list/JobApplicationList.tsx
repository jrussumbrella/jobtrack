import React from "react";
import Button from "components/ui/button";
import styles from "./JobApplicationList.module.css";
import { JobApplication } from "interfaces/JobApplication";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import formatDate from "utils/formatDate";

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
          <div className={styles.listInfo}>
            <p>
              Company:
              <strong className={styles.value}>{jobApplication.company}</strong>
            </p>
            <p>
              Job Title:
              <strong className={styles.value}>
                {jobApplication.job_title}
              </strong>
            </p>
            <p>
              Status: <strong>{jobApplication.status.toUpperCase()}</strong>
            </p>
            <p>
              Date Created:
              <strong className={styles.value}>
                {jobApplication.updated_at &&
                  formatDate(jobApplication.created_at)}
              </strong>
            </p>
            <p>
              Date Updated:
              <strong className={styles.value}>
                {jobApplication.updated_at &&
                  formatDate(jobApplication.updated_at)}
              </strong>
            </p>
          </div>
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
