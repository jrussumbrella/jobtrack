import React from "react";
import styles from "./Avatar.module.css";

interface Props {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<Props> = ({ src, alt, size = 40 }) => {
  const styleSize = `${size}px`;

  return (
    <div
      className={styles.avatarContainer}
      style={{ width: styleSize, height: styleSize }}
    >
      <img src={src} alt={alt} className={styles.avatarImage} />
    </div>
  );
};

export default Avatar;
