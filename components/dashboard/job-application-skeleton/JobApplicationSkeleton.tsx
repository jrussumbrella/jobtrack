import React from "react";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
    padding: 20,
  },
  header: {},
  list: {
    display: "block",
    marginBottom: 10,
  },
  listContainer: {
    padding: "10px 0",
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
  },
}));

const JobApplicationSkeleton = () => {
  const skeletons = Array(9).fill(0);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Skeleton width={100} height={40} className={classes.header} />
      {skeletons.map((_, index) => (
        <div className={classes.listContainer} key={index}>
          <Skeleton className={classes.list} width={200} />
          <Skeleton className={classes.list} width={300} />
          <Skeleton className={classes.list} width={300} />
        </div>
      ))}
    </Container>
  );
};

export default JobApplicationSkeleton;
