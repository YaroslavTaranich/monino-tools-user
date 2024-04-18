"use client";

import { useState } from "react";
import { calculatePrice, calculateZalog } from "../../utils/calculate-price";
import { Rub } from "../UI";
import styles from "./price-selector.module.scss";
import PriceSelectorButton from "./price-selector-button";

const buttons = [1, 3, 7, 21];

interface PriceSelectorProps {
  price: number;
  zalog: number;
}

function PriceSelector({ price, zalog }: PriceSelectorProps) {
  const [selected, setSelected] = useState(buttons[0]);

  const currentPrice = calculatePrice(price, selected);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Тарифы на аренду</h4>
      <div className={styles.tarif}>
        <p className={styles.tarif__title}>Дней аренды</p>
        <div className={styles.buttons}>
          {buttons.map((btn) => (
            <PriceSelectorButton
              key={btn}
              days={btn}
              isActive={btn === selected}
              onClick={() => setSelected(btn)}
            />
          ))}
        </div>
      </div>
      <div className={styles.price}>
        <span className={styles.price__item}>{currentPrice} </span>
        <Rub />
        <span className={styles.price__item}> / День</span>
      </div>
      <div className={styles.zalog}>
        <span className={styles.zalog__item}>
          Залог: {calculateZalog(zalog, price, selected)}{" "}
        </span>
        <Rub />
      </div>
    </div>
  );
}

export default PriceSelector;
