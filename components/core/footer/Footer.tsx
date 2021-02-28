import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "100px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: theme.palette.primary.dark,
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p> Copyright 2021 © JobTrack </p>
      <p>
        Made with Love by <a href="#">James Russel C. Bautista</a>
      </p>
    </footer>
  );
};

export default Footer;
