import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";
import cName from "classnames";

interface Props {
  type?: "submit" | "button";
  href?: string;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactElement;
  onClick?(): void;
  disabled?: boolean;
  variant?: "primary" | "danger" | "info" | "default";
}

const Button: React.FC<Props> = ({
  children,
  className,
  type = "button",
  href,
  fullWidth,
  icon,
  variant = "primary",
  onClick,
  disabled,
}) => {
  const styleFullWidth = fullWidth ? styles.btnFullWidth : "";
  const buttonStyle = cName(
    className,
    styles.button,
    styles[variant],
    styleFullWidth
  );

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={buttonStyle}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
          </a>
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={buttonStyle}
          onClick={onClick}
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
