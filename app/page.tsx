import { getAllCategories } from '@/services/api';
import { Benefits } from '@/components/benefits';
import { AllCategoriesList } from '@/components/all-categories-list';
import { DeliverySection } from '@/components/delivery-section';
import OtkachKaVodySection from '@/components/otkachka-vody-section/otkachka-vody-section';
import styles from './page.module.css';

export const revalidate = 360;
export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const categories = await getAllCategories();

    return (
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.hero__content}>
            <p className={styles.hero__eyebrow}>Аренда инструмента в Монино</p>
            <h1 className={styles.hero__title}>
              Строительный инструмент
              <br />
              в аренду
            </h1>
            <p className={styles.hero__text}>
              В наличии только исправное оборудование. Привезём, проверим на
              месте и заберём сами, когда закончите. Без скрытых платежей.
            </p>
            <a className={styles.hero__button} href="#tools">
              Выбрать инструмент
            </a>
          </div>
        </section>

        <section className={styles.catalog} id="tools">
          <div className={styles.sectionHeading}>
            <p>Каталог</p>
            <h2>Инструменты для любой задачи</h2>
            <span>
              Выберите категорию — внутри актуальные цены, характеристики и
              условия аренды.
            </span>
          </div>
          <AllCategoriesList categories={categories} />
        </section>

        <div id="about">
          <Benefits />
        </div>
        <DeliverySection />
        <OtkachKaVodySection />
      </div>
    );
  } catch (e) {
    console.error(e); // полезно для продакшена
    return <div>Ошибка загрузки данных</div>;
  }
}
