import {
  faGears,
  faScrewdriverWrench,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./benefits.module.scss";
import BenefitsCard from "./benefits-card";
import Title from "../UI/title/title";

const cards = [
  {
    title: "Исправный инструмент",
    text: "Вы всегда получите инструмент готовый к работе. Проверка и обслуживание после каждого клиента.",
    icon: faGears,
    link: null,
  },
  {
    title: "Арендовать выгоднее",
    text: "Цена аренды меньше 7% от стоимости инструмета. И Вам не нужно его хранить и обслуживать!",
    icon: faWallet,
    link: null,
  },
  {
    title: "Доставка и возврат",
    text: "Вы можете заказать доставку до вас и обратно!",
    icon: faTruck,
    link: "/delivery",
  },
  {
    title: "Ремонт при поломке",
    text: "В случае неисправности в процессе работы, проконсультируем по телефону, либо приедем и починим!",
    icon: faScrewdriverWrench,
    link: null,
  },
];

function Benefits() {
  return (
    <section className={styles.benefits}>
      <Title variant="secondary" number={2}>
        Аренда инструмента - это удобно!
      </Title>
      <ul className={styles.list}>
        {cards.map((card) => (
          <BenefitsCard
            key={card.title}
            title={card.title}
            text={card.text}
            icon={card.icon}
            link={card.link}
          />
        ))}
      </ul>
    </section>
  );
}

export default Benefits;
