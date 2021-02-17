import Button from "components/ui/button";
import React from "react";
import styles from "./JobApplicationHeader.module.css";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  onClickAdd(): void;
}

const JobAppicationHeader: React.FC<Props> = ({ onClickAdd }) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.heading}> My Job Applications </h2>
      <Button icon={<AiOutlinePlus />} onClick={onClickAdd}>
        Add Job Application
      </Button>
    </div>
  );
};

export default JobAppicationHeader;
