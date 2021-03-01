import React, { useState } from "react";
import Modal from "components/ui/modal/Modal";
import Button from "@material-ui/core/Button";
import { useJobApplication } from "contexts/job-application/job-application-context";
import { makeStyles } from "@material-ui/core/styles";
import toast from "react-hot-toast";

interface Props {
  onClose(): void;
  isVisible: boolean;
}

const useStyles = makeStyles(() => ({
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginRight: 10,
  },
}));

const ConfirmDeleteModal: React.FC<Props> = ({ onClose, isVisible }) => {
  const classes = useStyles();
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
      <div className={classes.buttonsContainer}>
        <Button
          onClick={onClose}
          variant="text"
          className={classes.button}
          color="default"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="secondary"
          variant="contained"
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
