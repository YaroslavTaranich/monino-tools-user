import React, { HTMLAttributes } from 'react';

import styles from './title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  number?: 1 | 2 | 3 | 4;
}

function Title({
  children,
  variant = 'primary',
  number = 1,
  ...props
}: TitleProps) {
  return React.createElement(
    `h${number}`,
    {
      ...props,
      className: styles[variant!],
    },
    children,
  );
}

export default Title;
