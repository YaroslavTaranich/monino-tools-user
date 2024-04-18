"use client";

import React from "react";
import styles from "./not-found-page.module.scss";
import { Button } from "../UI";
import NotFoundIcon from "@/assets/not-found.svg";
import { useRouter } from "next/navigation";

interface INotFoundProps {
  title?: string;
  description?: string;
}

const defaultText = {
  title: "Запрашиваемой страницы не существует!",
};

const NotFound: React.FC<INotFoundProps> = ({
  title = defaultText.title,
  description,
}) => {
  const router = useRouter();

  return (
    <main className={styles.notFound}>
      <h1 className={styles.notFound__title}>{title}</h1>

      <NotFoundIcon className={styles.notFound__img} />
      {description && (
        <p className={styles.notFound__description}>{description}</p>
      )}

      <div className={styles.notFound__buttons}>
        <Button onClick={() => router.push("/")}>На главную</Button>
      </div>
    </main>
  );
};

export default NotFound;
