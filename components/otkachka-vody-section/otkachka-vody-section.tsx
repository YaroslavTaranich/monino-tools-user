import Link from 'next/link';
import Image from 'next/image';
import { Button, Title } from '../UI';
import styles from './otkachka-vody-section.module.scss';
import pic from '../../assets/otkachka-vody/2.jpg';

function OtkachKaVodySection() {
  return (
    <div className={styles.wrapper}>
      <Title variant="secondary" number={2}>
        Откачка воды мотопомпами
      </Title>

      <div className={styles.content}>
        <Image
          src={pic}
          alt="Мотопомпы для откачки воды"
          width={1280}
          height={600}
          className={styles.image}
        />
        <p>
          Весной, во время таяния снега и паводков, участки, подвалы и гаражи
          часто оказываются затоплены. Мы предоставляем мощные мотопомпы для
          быстрой и эффективной откачки воды. Подходит для чистой и грязной
          воды, строительных работ и осушения котлованов.
        </p>

        <p>
          Вы можете заказать выезд специалиста или взять мотопомпу в аренду для
          самостоятельной работы. Согласуем удобное время и подберём подходящее
          оборудование.
        </p>

        <Link href="/otkachka-vody" className={styles.link}>
          <Button variant="secondary">Подробнее об услуге</Button>
        </Link>
      </div>
    </div>
  );
}

export default OtkachKaVodySection;
