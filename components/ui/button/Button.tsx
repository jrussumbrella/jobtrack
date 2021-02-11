import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

interface Props {
  type?: "submit" | "button";
  href?: string;
}

const Button: React.FC<Props> = ({ children, type = "button", href }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={styles.button}>{children}</a>
        </Link>
      ) : (
        <button type={type} className={styles.button}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
