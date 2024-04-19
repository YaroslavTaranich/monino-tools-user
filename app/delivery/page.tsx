import { Metadata } from 'next';
import { DeliverySection } from '@/components/delivery-section';

export const metadata: Metadata = {
  title: 'Монино-тулс - Доставка инструмента',
  description:
    'Доставим арендованный инструмент по Щёлковскому и Ногинскому району. Доставляем в Лосино-петровский, Обухово, Кабаново, Купавна, Ногинск, Электросталь, Электроугли, Щёлково, Черноголовка. Звоните! ☎ +7 (916) 677-39-56',
};

function Page() {
  return <DeliverySection />;
}

export default Page;
