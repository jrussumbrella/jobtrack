import React from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { useAuth } from "contexts/auth/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Router from "next/router";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-70px",
    },
  },
  illustration: {
    flex: 1,
    textAlign: "center",
  },
  info: {},
  heading: {
    marginBottom: "40px",
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  description: {
    marginBottom: "40px",
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  button: {},
}));

const Intro = () => {
  const { currentUser } = useAuth();

  const classes = useStyles();

  const redirectLink = currentUser ? "/dashboard" : "/login";

  const handleGetStartedClick = () => {
    Router.push(redirectLink);
  };

  return (
    <Container className={classes.section}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <div className={classes.info}>
            <Typography variant="h5" className={classes.heading}>
              Having trouble tracking your job applications ?
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Keeping track of all your job applications is hard. JobTrack makes
              this process easy for you.
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
              color="primary"
              size="large"
              onClick={handleGetStartedClick}
            >
              Get started for free
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className={classes.illustration}>
            <Image src="/images/landing_search.svg" width="300" height="300" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
