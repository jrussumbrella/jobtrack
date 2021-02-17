import React from "react";
import cName from "classnames";
import styles from "./Select.module.css";

interface Options {
  value: string;
  title: string;
}

interface Props {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  fullWidth?: boolean;
  className?: string;
  options: Options[];
}

const Select: React.FC<Props> = ({
  name,
  id,
  label,
  placeholder,
  value,
  onChange,
  fullWidth,
  className,
  options,
}) => {
  const styleFullWidth = fullWidth ? styles.fullWidth : "";

  const selectStyle = cName(className, styles.select, styleFullWidth);

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <select
        className={selectStyle}
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
      >
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
