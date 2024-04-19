import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "normalize.css";
import "./globals.css";
import { Header } from "@/components/header";
import styles from "./page.module.css";
import { Suspense } from "react";
import { Metrika } from "@/components/metrika";

const inter = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Монино Тулс - Строительный инструмент в аренду!",
  description:
    "Посуточная аренда инструмента в Монино. Доставка инструмента в ближайшие города. Звоните +79166773956!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className + " " + styles.body}>
        <Header />
        <main>{children}</main>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
