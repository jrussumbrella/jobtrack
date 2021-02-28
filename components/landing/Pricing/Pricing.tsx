import React from "react";
import { useAuth } from "contexts/auth/AuthContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PricingCard from "./PricingCard";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    marginBottom: 150,
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  headerSub: {
    textAlign: "center",
    marginBottom: 60,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  pricingListContainer: {
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Pricing = () => {
  const { currentUser } = useAuth();

  const classes = useStyles();

  const redirectLink = currentUser ? "/dashboard" : "/login";

  return (
    <Container className={classes.pricingContainer}>
      <Typography variant="h5" className={classes.heading}>
        JobTrack is always free.
      </Typography>
      <Typography variant="h6" className={classes.headerSub}>
        Find a plan that's right for you.
      </Typography>
      <Grid container spacing={5} className={classes.pricingListContainer}>
        <Grid item xs={12} md={6} data-aos="zoom-in-up">
          <PricingCard
            title="Free"
            description="Limited to up to 50 job applications."
            link={redirectLink}
            pricing={
              <span>
                <Typography display="inline" variant="h4">
                  $0
                </Typography>
                <Typography display="inline"> / month</Typography>
              </span>
            }
          >
            <Button variant="contained" color="primary" size="large">
              Try it now
            </Button>
          </PricingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <PricingCard
            title="Premium"
            description="Limited to up to 50 job applications."
            isHighlighted
            link={redirectLink}
            pricing={
              <span>
                <Typography display="inline" variant="h4">
                  $5
                </Typography>
                <Typography display="inline"> / month</Typography>
              </span>
            }
          >
            <Button size="large" variant="outlined" color="inherit">
              Go Premium
            </Button>
          </PricingCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
