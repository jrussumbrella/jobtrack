import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> Copyright 2021 © JobTrack </p>
      <p>
        Made with Love by <a href="#">James Russel C. Bautista</a>
      </p>
    </footer>
  );
};

export default Footer;
