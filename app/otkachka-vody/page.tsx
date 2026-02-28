import { Metadata } from 'next';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Title } from '@/components/UI';
import pic from '../../assets/otkachka-vody/2.jpg';
import { OrderOtkachkaForm } from '@/components/forms/order-otkachka-form';

export const metadata: Metadata = {
  title: 'Аренда мотопомп для откачки воды — Лосино-Петровский и окрестности',
  description:
    'Сдаем в аренду мотопомпы для откачки воды после таяния снега, паводков и аварий. Работаем в Лосино-Петровский, Обухово, Кабаново, Купавна, Ногинск. Быстро, надежно, круглосуточно. ☎ +7 (916) 677-39-56',
};

function Page() {
  return (
    <div className={styles.wrapper}>
      <Title variant="primary" number={1}>
        Аренда мотопомп для откачки воды после таяния снега
      </Title>

      <div className={styles.textBlock}>
        <p>
          Мы предлагаем
          {' '}
          <strong>аренду мотопомп для откачки воды</strong>
          {' '}
          в
          Лосино-Петровском и соседних районах. Быстрый выезд, мощное
          оборудование и опытные специалисты помогут освободить подвалы, гаражи,
          котлованы и участки от талой или грязной воды.
        </p>
      </div>

      <div className={styles.textBlock}>
        <Title variant="tertiary" number={2}>
          Когда нужна откачка воды?
        </Title>
        <ul>
          <li>Таяние снега и весенний паводок</li>
          <li>Затопление подвалов, гаражей, котлованов</li>
          <li>Аварийные протечки и затопления</li>
          <li>Строительные и дренажные работы</li>
        </ul>
      </div>

      <div className={styles.textBlock}>
        <Title variant="tertiary" number={2}>
          Почему выбирают наши мотопомпы
        </Title>
        <ul>
          <li>
            Собственные бензиновые и грязевые мотопомпы для чистой и грязной
            воды
          </li>
          <li>Быстрый выезд в день обращения</li>
          <li>Опытные операторы с откачкой воды любых объемов</li>
          <li>Круглосуточная работа — даже ночью</li>
          <li>Прозрачная стоимость аренды без скрытых платежей</li>
        </ul>
      </div>

      <div className={styles.textBlock}>
        <Title variant="tertiary" number={2}>
          Как мы работаем
        </Title>
        <ol>
          <li>Вы оставляете заявку онлайн или по телефону.</li>
          <li>Мы уточняем объем работ и подбираем подходящую мотопомпу.</li>
          <li>
            Выезд на объект в Лосино-Петровский, Обухово, Кабаново, Купавна и
            другие районы.
          </li>
          <li>Откачка воды и контроль процесса.</li>
          <li>
            Передача объекта в сухом состоянии и консультации по дальнейшей
            эксплуатации.
          </li>
        </ol>
      </div>

      <div className={styles.textBlock}>
        <Title variant="tertiary" number={2}>
          Наши мотопомпы
        </Title>
        <Image
          src={pic}
          alt="Мотопомпы для откачки воды и грязной воды"
          className={styles.image}
          width={1280}
          height={606}
        />
        <ul>
          <li>Бензиновые и дизельные модели</li>
          <li>Грязевые и для чистой воды</li>
          <li>Высокопроизводительные, до десятков кубов в час</li>
          <li>Простые в управлении и безопасные</li>
        </ul>
      </div>

      <div className={styles.textBlock}>
        <Title variant="tertiary" number={2}>
          Частые вопросы
        </Title>
        <p>
          <strong>Можно ли вызвать сразу?</strong>
          {' '}
          — Выезд возможен по
          согласованному времени в день или на следующий день.
        </p>
        <p>
          <strong>Сколько длится откачка?</strong>
          {' '}
          — От 30 минут, зависит от
          объема воды и сложности участка.
        </p>
        <p>
          <strong>Работаете ночью?</strong>
          {' '}
          — Нет, работы проводятся в рабочее
          время, согласованное с клиентом.
        </p>
        <p>
          <strong>Справляетесь с грязной водой?</strong>
          {' '}
          — Да, используем
          грязевые мотопомпы для больших объемов.
        </p>
      </div>

      <div className={classNames(styles.textBlock, styles.center)}>
        <Title variant="tertiary" number={2}>
          Заказать срочную откачку воды
        </Title>
        <p>
          <strong>Не ждите пока вода затопит подвал или участок! </strong>
          <p>
            Оставьте заявку или звоните
            {' '}
            <a href="tel:+79166773956">☎ +7 (916) 677-39-56</a>
          </p>
        </p>

        <OrderOtkachkaForm />
      </div>

      {/* JSON-LD для FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Можно ли вызвать сразу?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Выезд возможен по согласованному времени в день или на следующий день.',
                },
              },
              {
                '@type': 'Question',
                name: 'Сколько длится откачка?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'От 30 минут, зависит от объема воды и сложности участка.',
                },
              },
              {
                '@type': 'Question',
                name: 'Работаете ночью?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Нет, работы проводятся в рабочее время, согласованное с клиентом.',
                },
              },
              {
                '@type': 'Question',
                name: 'Справляетесь с грязной водой?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Да, используем грязевые мотопомпы для больших объемов.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

export default Page;
