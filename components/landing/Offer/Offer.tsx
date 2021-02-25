import React from "react";
import styles from "./Offer.module.css";
import Image from "next/image";

const cards = [
  {
    title: "Easy to use",
    description:
      "This tool will help you to make your job application easy to manage.",
    image: "/images/offer_image_1.svg",
  },
  {
    title: "Organize enviroment",
    description:
      "Organizer your job application. Add, edit and delete job applications. We will help you to monitor your job application easily",
    image: "/images/offer_image_2.svg",
  },
];

const Offer = () => {
  return (
    <div className={styles.offerContainer}>
      <h1 className={styles.heading}>What We Can offer</h1>
      <div className={styles.offerSection}>
        {cards.map((item, key) => {
          return (
            <div className={styles.item} key={key}>
              <p className={styles.title}>{item.title}</p>
              <Image src={item.image} width="240" height="240" />
              <p className={styles.description}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
