import React from "react";
import cName from "classnames";
import styles from "./Input.module.css";

interface Props {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  fullWidth?: boolean;
  className?: string;
}

const Input: React.FC<Props> = ({
  name,
  id,
  label,
  placeholder,
  value,
  onChange,
  fullWidth,
  className,
}) => {
  const styleFullWidth = fullWidth ? styles.fullWidth : "";

  const inputStyle = cName(className, styles.input, styleFullWidth);

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={inputStyle}
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Input;
