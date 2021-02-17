import React from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Button from "components/ui/button";

const Intro = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          cumque vel rerum laudantium dolorum! A numquam voluptatum quas,
          repellat ratione pariatur sequi! A unde rerum, obcaecati sunt animi
          ipsam molestiae.
        </p>
        <Button> Get started for free </Button>
      </div>
    </section>
  );
};

export default Intro;
