import Button from "@material-ui/core/Button";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  onClickAdd(): void;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: 20,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  headerContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "30px 0",
  },
}));

const JobAppicationHeader: React.FC<Props> = ({ onClickAdd }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <Typography variant="h5" className={classes.heading}>
        My Job Applications
      </Typography>
      <Button onClick={onClickAdd} variant="contained" color="primary">
        Add Job Application
      </Button>
    </div>
  );
};

export default JobAppicationHeader;
