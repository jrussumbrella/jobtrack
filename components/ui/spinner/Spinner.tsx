import React from "react";
import styles from "./Spinner.module.css";

interface Props {
  color?: string;
  size?: number;
}

const Spinner: React.FC<Props> = ({ color, size = 20 }) => {
  const sizeStyle = `${size}px`;

  return (
    <div
      className={styles.loader}
      style={{ width: sizeStyle, height: sizeStyle, borderLeftColor: color }}
    />
  );
};

export default Spinner;
