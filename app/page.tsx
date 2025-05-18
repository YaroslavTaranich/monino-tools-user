import { getAllCategories } from '@/services/api';
import { Title } from '@/components/UI';
import { Benefits } from '@/components/benefits';
import { AllCategoriesList } from '@/components/all-categories-list';
import { DeliverySection } from '@/components/delivery-section';

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();

    return categories;
  } catch (e) {
    return [];
  }
}

export const revalidate = 360;
export const dynamic = 'force-dynamic'; // Важно!

export default async function Home() {
  try {
    const categories = await getAllCategories();
    return (
      <div>
        <Title>Строительный инструмент в аренду</Title>
        <AllCategoriesList categories={categories} />
        <Benefits />
        <DeliverySection />
      </div>
    );
  } catch (e) {
    return <div>Ошибка</div>;
  }
}
