import Button from "components/ui/button";
import { useAuth } from "contexts/auth/AuthContext";
import Link from "next/link";
import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const { currentUser } = useAuth();

  const redirectLink = currentUser ? "/dashboard" : "/login";

  return (
    <div className={styles.pricingContainer}>
      <h1> JobTrack is always free. </h1>
      <h2 className={styles.headerSub}> Find a plan that's right for you. </h2>
      <ul className={styles.pricingListContainer}>
        <li>
          <Link href={redirectLink}>
            <a>
              <div className={styles.card}>
                <p className={styles.title}> Free </p>
                <p className={styles.desc}>
                  Limited to up to 50 job applications.
                </p>
                <p>
                  <span className={styles.price}>$0</span>/Month
                </p>
                <Button> Try It Now </Button>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={redirectLink}>
            <a>
              <div className={styles.card}>
                <p className={styles.title}> Premium </p>
                <p className={styles.desc}> Unlimited job applications. </p>
                <p>
                  <span className={styles.price}>$5</span>/Month
                </p>
                <Button> Go Premium </Button>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pricing;
