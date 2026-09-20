'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoMain from '@/assets/logo/logo-main.svg';
import styles from './header.module.scss';
import Phone from '@/assets/icons/phone.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          <LogoMain />
          <div className={styles.header__logoText}>
            строительный инструмент в аренду
          </div>
        </Link>
        <nav className={styles.header__nav} aria-label="Основная навигация">
          <Link href="/#tools">Инструменты</Link>
          <Link href="/#about">О нас</Link>
          <Link href="/delivery">Доставка</Link>
        </nav>
        <div className={styles.header__actions}>
          <div className={styles.header__phone}>
            <a href="tel:+79166773956">
              <Phone />
              <div className={styles.header__phoneNumber}>8 916 677 39 56</div>
            </a>
            <div className={styles.header__subtext}>с 9 до 21 ежедневно</div>
          </div>
          <button
            type="button"
            className={styles.header__menuButton}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className={`${styles.header__mobileNav} ${
            menuOpen ? styles['header__mobileNav--open'] : ''
          }`}
          aria-label="Мобильная навигация"
        >
          <Link href="/#tools" onClick={closeMenu}>Инструменты</Link>
          <Link href="/#about" onClick={closeMenu}>О нас</Link>
          <Link href="/delivery" onClick={closeMenu}>Доставка</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
