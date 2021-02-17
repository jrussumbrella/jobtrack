import React from "react";
import Modal from "components/ui/modal/Modal";
import Button from "components/ui/button";
import { useJobApplication } from "contexts/job-application/job-application-context";
import styles from "./ConfirmDeleteModal.module.css";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const ConfirmDeleteModal: React.FC<Props> = ({ onClose, isVisible }) => {
  const { deleteJobApplication, selectedJobApplication } = useJobApplication();

  const handleDelete = () => {
    if (!selectedJobApplication) return;
    deleteJobApplication(selectedJobApplication.id);
    onClose();
  };

  return (
    <Modal
      title="Delete Job Application"
      onClose={onClose}
      isVisible={isVisible}
    >
      <p>
        Are you sure you want to delete this job application
        <strong> {selectedJobApplication?.company} </strong>?
      </p>
      <div className={styles.buttonsContainer}>
        <Button onClick={onClose}> Cancel </Button>
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
