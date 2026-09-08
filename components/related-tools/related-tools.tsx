'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IRelatedTool } from '@/services/api';
import { calculatePrice } from '@/utils/calculate-price';
import styles from './related-tools.module.scss';

interface Props {
  tools: (IRelatedTool & { href: string })[];
  accessoryOnly: boolean;
}

export default function RelatedTools({ tools, accessoryOnly }: Props) {
  const [days, setDays] = useState(1);
  if (!tools.length) {
    return accessoryOnly ? (
      <section className={styles.section}>
        <h2>Совместимые основные инструменты</h2>
        <p>
          Подходящий основной инструмент уточните по телефону.
          Отдельная аренда дополнения недоступна.
        </p>
      </section>
    ) : null;
  }
  return (
    <section className={styles.section}>
      <h2>{accessoryOnly ? 'Совместимые основные инструменты' : 'С этим инструментом берут'}</h2>
      <p>
        {accessoryOnly
          ? 'Это дополнение можно арендовать только вместе с одним из этих инструментов.'
          : 'Дополнения арендуются вместе с этим инструментом и оплачиваются отдельно.'}
      </p>
      <div className={styles.days} role="group" aria-label="Срок аренды сопутствующих позиций">
        <span>Дней аренды:</span>
        {[1, 3, 7, 21].map((value) => (
          <button key={value} type="button" aria-pressed={days === value} onClick={() => setDays(value)}>
            {value === 1 ? '1–2' : `${value}+`}
          </button>
        ))}
      </div>
      <ul className={styles.list}>
        {tools.map((tool) => (
          <li key={tool.id}>
            <Link className={styles.card} href={tool.href}>
              {tool.image && <Image src={tool.image} alt={tool.label} width={240} height={180} />}
              <h3>{tool.label}</h3>
              <p>
                {calculatePrice(tool.price, days)}
                {' '}
                ₽ / сутки
              </p>
              {tool.accessory_only && (
                <p className={styles.condition}>Только с основным инструментом</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
