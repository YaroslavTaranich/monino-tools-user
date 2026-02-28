import { getAllCategories } from '@/services/api';
import { Title } from '@/components/UI';
import { Benefits } from '@/components/benefits';
import { AllCategoriesList } from '@/components/all-categories-list';
import { DeliverySection } from '@/components/delivery-section';
import OtkachKaVodySection from '@/components/otkachka-vody-section/otkachka-vody-section';

export const revalidate = 360;
export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const categories = await getAllCategories();

    return (
      <div>
        <Title>Строительный инструмент в аренду</Title>
        <AllCategoriesList categories={categories} />
        <Benefits />
        <DeliverySection />
        <OtkachKaVodySection />
      </div>
    );
  } catch (e) {
    console.error(e); // полезно для продакшена
    return <div>Ошибка загрузки данных</div>;
  }
}
