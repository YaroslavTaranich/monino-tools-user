import { forwardRef, HTMLAttributes } from "react";

import styles from "./input-inline.module.scss";

interface InputInlineProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: "text" | "email" | "phone" | "password" | "date" | "number";
  className?: string;
  error?: string;
  min?: number;
}

const InputInline = forwardRef<HTMLInputElement, InputInlineProps>(
  ({ name, label, type = "text", className, error, min, ...props }, ref) => {
    const inputClassName = [styles.input, className];

    return (
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <label htmlFor={name} className={styles.label}>
            {label}:
          </label>
          <input
            id={name}
            type={type}
            className={inputClassName.join(" ")}
            placeholder={label}
            ref={ref}
            min={min}
            {...props}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

InputInline.displayName = "InputInline";

export default InputInline;
