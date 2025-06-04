import React from 'react';
import styles from './specification.module.scss';

const Description: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.wrapper}>
    {text
      .split('\n')
      .map((line) => (
        <p key={line} className={styles.text}>{line}</p>
      ))}
  </div>
);

export default Description;
