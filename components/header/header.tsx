import React from "react";
import LogoMain from "@/assets/logo/logo-footer.svg";
import styles from "./header.module.scss";
import Link from "next/link";
import Phone from "@/assets/icons/phone.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href={"/"} className={styles.header__logo}>
          <LogoMain />
          <div className={styles.header__logoText}>
            Хороший прокат инструмента
          </div>
        </Link>
        <div className={styles.header__phone}>
          <a href="tel:+79166773956" target="_blank">
            <Phone />
            <div>8 916 677 39 56</div>
          </a>
          <div className={styles.header__subtext}>с 9 до 21 ежедневно</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
