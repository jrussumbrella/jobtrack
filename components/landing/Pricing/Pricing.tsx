import Button from "components/ui/button";
import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricingContainer}>
      <h1> JobTrack is always free. </h1>
      <h2 className={styles.headerSub}> Find a plan that's right for you. </h2>
      <ul className={styles.pricingListContainer}>
        <li>
          <div className={styles.card}>
            <p className={styles.title}> Free </p>
            <p className={styles.desc}>Limited to up to 50 job applications.</p>
            <p>
              <span className={styles.price}>$0</span>/Month
            </p>
            <Button> Try It Now </Button>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <p className={styles.title}> Premium </p>
            <p className={styles.desc}> Unlimited job applications. </p>
            <p>
              <span className={styles.price}>$5</span>/Month
            </p>
            <Button> Go Premium </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pricing;
