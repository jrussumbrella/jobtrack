import React, { InputHTMLAttributes } from "react";
import cName from "classnames";
import styles from "./Input.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  fullWidth?: boolean;
  onChange?: (...args: any[]) => any;
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
  itemRef,
  ...rest
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
        {...rest}
      />
    </>
  );
};

export default Input;
