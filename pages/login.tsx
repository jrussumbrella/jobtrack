import React from "react";
import Layout from "components/core/layout";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import GoogleIcon from "components/icons/Google";
import GithubIcon from "components/icons/Github";
import { useAuth } from "contexts/auth/AuthContext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    margin: "40px auto",
  },
  btnGoogle: {
    marginBottom: 20,
  },
  btnGithub: {
    backgroundColor: "#3d3d3d",
    color: "#fff ",
  },
  heading: {
    marginBottom: 20,
  },
  illustration: {},
  gridContainer: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse",
    },
  },
  alert: {
    marginBottom: 20,
  },
}));

const Login = () => {
  const classes = useStyles();
  const { socialLogin } = useAuth();

  return (
    <Layout title="Login">
      <Container className={classes.loginContainer}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.heading}>
              Log In With
            </Typography>

            <div>
              <Button
                variant="contained"
                className={classes.btnGoogle}
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={() => socialLogin("google")}
                size="large"
              >
                Google
              </Button>
              <Button
                className={classes.btnGithub}
                fullWidth
                startIcon={<GithubIcon />}
                variant="contained"
                size="large"
                onClick={() => socialLogin("github")}
              >
                Github
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.illustration}>
            <Image src="/images/sign_in.svg" width="500" height="500" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Login;
