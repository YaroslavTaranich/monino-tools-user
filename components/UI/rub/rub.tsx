import { HTMLAttributes } from 'react';

import styles from './rub.module.css';

function Rub(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={styles.rub} {...props}>
      &#8381;
    </span>
  );
}

export default Rub;
