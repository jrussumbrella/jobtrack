import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 6,
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: 600,
    },
  },
  closeContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

interface Props {
  isVisible: boolean;
  onClose(): void;
  title: string;
}

const CustomModal: React.FC<Props> = ({
  title,
  isVisible,
  onClose,
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      {isVisible &&
        ReactDOM.createPortal(
          <>
            <Modal
              open={isVisible}
              onClose={onClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={classes.modal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={isVisible}>
                <div className={classes.paper}>
                  <div className={classes.modalHeader}>
                    <Typography>{title}</Typography>
                    <div className={classes.closeContainer}>
                      <IconButton aria-label="delete" onClick={onClose}>
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                  {children}
                </div>
              </Fade>
            </Modal>
          </>,
          document.body
        )}
    </>
  );
};

export default CustomModal;
