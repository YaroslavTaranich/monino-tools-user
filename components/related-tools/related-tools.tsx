'use client';

import { useState } from 'react';
import { IRelatedTool } from '@/services/api';
import PriceSelectorButton from '../price-selector/price-selector-button';
import RelatedToolsItem from './related-tools-item';
import styles from './related-tools.module.scss';

const rentalDays = [1, 3, 7, 21];

interface RelatedToolsProps {
  tools: (IRelatedTool & { href: string })[];
  accessoryOnly: boolean;
}

function RelatedTools({ tools, accessoryOnly }: RelatedToolsProps) {
  const [days, setDays] = useState(rentalDays[0]);

  if (!tools.length && !accessoryOnly) return null;

  return (
    <section className={styles.related}>
      <div className={styles.header}>
        <div className={styles.header__description}>
          <h2 className={styles.title}>
            {accessoryOnly ? 'Подходит к инструментам' : 'С этим инструментом берут'}
          </h2>
          <p className={styles.description}>
            {accessoryOnly
              ? 'Выберите основной инструмент для аренды вместе с этим дополнением.'
              : 'Дополнения к вашему инструменту. Оплачиваются отдельно.'}
          </p>
        </div>
        {!!tools.length && (
          <div className={styles.tariff}>
            <p className={styles.tariff__title}>Дней аренды</p>
            <div
              className={styles.tariff__buttons}
              role="group"
              aria-label="Срок аренды сопутствующих позиций"
            >
              {rentalDays.map((value) => (
                <PriceSelectorButton
                  key={value}
                  days={value}
                  isActive={days === value}
                  onClick={() => setDays(value)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {tools.length ? (
        <ul className={styles.list}>
          {tools.map((tool) => (
            <RelatedToolsItem key={tool.id} tool={tool} days={days} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          Подходящий инструмент уточните по телефону.
          Отдельная аренда дополнения недоступна.
        </p>
      )}
    </section>
  );
}

export default RelatedTools;
