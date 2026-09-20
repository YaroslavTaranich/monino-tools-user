import { HTMLAttributes } from 'react';

import styles from './rub.module.css';

function Rub(props: HTMLAttributes<HTMLSpanElement>) {
  const { className, ...restProps } = props;

  return (
    <span
      className={[styles.rub, className].filter(Boolean).join(' ')}
      {...restProps}
    >
      &#8381;
    </span>
  );
}

export default Rub;
