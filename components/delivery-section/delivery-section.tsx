import { Title } from '../UI';
import styles from './delivery-section.module.scss';

function DeliverySection() {
  return (
    <div className={styles.wrapper}>
      <Title variant="secondary" number={2}>
        Доставка инструмента
      </Title>
      <div className={styles.price}>
        <p>
          Воспользуйтесь нашей услугой доставки оборудования и инструментов!
          Обратите внимание, что стоимость доставки может изменяться в
          зависимости от зоны доставки. Адреса, находящиеся за пределами зоны
          доставки, обсуждаются индивидуально. Мы гарантируем удобную доставку
          прямо к вам и легкий процесс возврата оборудования на наш склад.
        </p>
        <p>Стоимость доставки:</p>
        <ul>
          <li>Зелёная зона - 600 рублей.</li>
          <li>Жёлтая зона - 1500 рублей.</li>
        </ul>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abafc30a58065f10b8416e37beeba041c019975bfdd91bde418a9b2e7296a5edc&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
          title="карта доставки"
        />
      </div>
    </div>
  );
}

export default DeliverySection;
