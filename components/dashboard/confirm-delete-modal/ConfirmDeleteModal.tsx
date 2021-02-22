import React, { useState } from "react";
import Modal from "components/ui/modal/Modal";
import Button from "components/ui/button";
import { useJobApplication } from "contexts/job-application/job-application-context";
import styles from "./ConfirmDeleteModal.module.css";
import toast from "react-hot-toast";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const ConfirmDeleteModal: React.FC<Props> = ({ onClose, isVisible }) => {
  const { deleteJobApplication, selectedJobApplication } = useJobApplication();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      if (!selectedJobApplication) return;
      setIsDeleting(true);
      await deleteJobApplication(selectedJobApplication.id);
      setIsDeleting(false);
      toast.success("You've successfully deleted your job application");
      onClose();
    } catch (error) {
      setIsDeleting(false);
      toast.error(
        "Sorry! We were'nt able to delete your listing. Please try again later."
      );
    }
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
        <Button onClick={onClose} variant="default">
          {" "}
          Cancel{" "}
        </Button>
        <Button onClick={handleDelete} variant="danger" disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
