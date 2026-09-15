import type { Metadata } from 'next';
import 'normalize.css';
import './globals.css';
import { Suspense } from 'react';
import { Header } from '@/components/header';
import styles from './page.module.css';
import { Metrika } from '@/components/metrika';
import { HOST } from '@/constants';

export const metadata: Metadata = {
  title: 'Монино Тулс - Строительный инструмент в аренду!',
  description:
    'Посуточная аренда инструмента в Монино. Доставка инструмента в ближайшие города. Звоните +79166773956!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href={`${HOST}/favicon.ico`} type="image/x-icon" />
      </head>
      <body className={styles.body}>
        <Header />
        <main>{children}</main>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
