import React from "react";
import styles from "./Avatar.module.css";

interface Props {
  src: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={src} alt={alt} className={styles.avatarImage} />
    </div>
  );
};

export default Avatar;
