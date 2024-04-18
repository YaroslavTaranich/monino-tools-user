import { forwardRef, HTMLAttributes } from "react";

import styles from "./input-fancy-label.module.scss";

interface InputFancyLabelProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: "text" | "email" | "phone" | "password" | "date" | "number";
  className?: string;
  error?: string;
}

const InputFancyLabel = forwardRef<HTMLInputElement, InputFancyLabelProps>(
  ({ name, label, type = "text", className, error, ...props }, ref) => {
    const inputClassName = [styles.input, className];

    return (
      <div className={styles.wrapper}>
        <input
          id={name}
          type={type}
          className={inputClassName.join(" ")}
          placeholder={label}
          ref={ref}
          {...props}
        />
        <label htmlFor={name} className={styles.label}>
          {label}:
        </label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

InputFancyLabel.displayName = "InputFancyLabel";

export default InputFancyLabel;
