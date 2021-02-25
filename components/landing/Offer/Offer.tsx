import React from "react";
import styles from "./Offer.module.css";
import Image from "next/image";

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
  return (
    <div className={styles.offerContainer}>
      <h1 className={styles.heading}>What We Can offer</h1>
      <div className={styles.offerSection}>
        {offers.map((offer, key) => {
          return (
            <div className={styles.item} key={key}>
              <p className={styles.title}>{offer.title}</p>
              <Image src={offer.image} width="240" height="240" />
              <p className={styles.description}>{offer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
