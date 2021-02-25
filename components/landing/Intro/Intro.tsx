import React from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Button from "components/ui/button";
import { useAuth } from "contexts/auth/AuthContext";

const Intro = () => {
  const { currentUser } = useAuth();

  const redirectLink = currentUser ? "/dashboard" : "/login";

  return (
    <section className={styles.section}>
      <div className={styles.illustration}>
        <Image src="/images/landing_search.svg" width="300" height="300" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.heading}>
          Having trouble tracking your job applications ?
        </h1>
        <p className={styles.description}>
          Keeping track of all your job applications is hard. JobTrack makes
          this process easy for you.
        </p>
        <Button className={styles.button} href={redirectLink}>
          Get started for free
        </Button>
      </div>
    </section>
  );
};

export default Intro;
