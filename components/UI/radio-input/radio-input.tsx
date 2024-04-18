import { ChangeEvent, forwardRef, HTMLAttributes } from "react";

import styles from "./radio-input.module.scss";

interface RadioInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ name, value, label, onChange, ...props }, ref) => (
    <label htmlFor={value} className={styles.radio}>
      <input
        ref={ref}
        type="radio"
        id={value}
        value={value}
        name={name}
        onChange={onChange}
        className={styles.radio__input}
        {...props}
      />
      <span className={styles.radio__label}>{label}</span>
    </label>
  )
);

RadioInput.displayName = "RadioInput";

export default RadioInput;
