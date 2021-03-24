import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  offerContainer: {
    marginBottom: 150,
  },
  heading: {
    textAlign: "center",
    marginBottom: 60,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  offerSection: {},
  description: {},
  item: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
}));

const offers = [
  {
    title: "Easy to use",
    description:
      "This tool will help you to make your job application easy to manage. We provide an easy to use dashboard for you.",
    image: "/images/offer_image_1.svg",
  },
  {
    title: "Organize enviroment",
    description:
      "Organize your job application. Add, edit and delete job applications. We will help you to monitor your job application easily",
    image: "/images/offer_image_2.svg",
  },
];

const Offer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.offerContainer}>
      <Typography variant="h5" className={classes.heading}>
        What We Can offer
      </Typography>
      <Grid container className={classes.offerSection}>
        {offers.map((offer, key) => {
          return (
            <Grid item xs={12} md={6} className={classes.item} key={key}>
              <Typography variant="h6" className={classes.title}>
                {offer.title}
              </Typography>
              <Image src={offer.image} width="240" height="240" />
              <Typography variant="body1" className={classes.description}>
                {offer.description}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Offer;
