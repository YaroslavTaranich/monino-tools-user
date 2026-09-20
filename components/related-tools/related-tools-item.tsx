import Link from 'next/link';
import Image from 'next/image';
import { faArrowRight, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRelatedTool } from '@/services/api';
import { calculatePrice } from '@/utils/calculate-price';
import { Rub } from '../UI';
import styles from './related-tools.module.scss';

interface RelatedToolsItemProps {
  tool: IRelatedTool & { href: string };
  days: number;
}

function RelatedToolsItem({ tool, days }: RelatedToolsItemProps) {
  return (
    <li className={styles.item}>
      <Link className={styles.card} href={tool.href}>
        <div className={styles.card__image}>
          {tool.image ? (
            <Image
              src={tool.image}
              alt={tool.label}
              width={240}
              height={240}
              sizes="(max-width: 650px) 100px, 180px"
            />
          ) : (
            <FontAwesomeIcon icon={faImage} className={styles.card__placeholder} />
          )}
        </div>
        <div className={styles.card__description}>
          <span className={styles.card__label}>
            {tool.accessory_only ? 'Дополнение к инструменту' : 'Основной инструмент'}
          </span>
          <h3 className={styles.card__title}>{tool.label}</h3>
          {tool.accessory_only && (
            <p className={styles.card__condition}>Аренда только с основным инструментом</p>
          )}
        </div>
        <div className={styles.card__footer}>
          <div className={styles.price}>
            <span className={styles.price__value}>
              {calculatePrice(tool.price, days)}
              {'\u00A0'}
              <Rub />
            </span>
            <span className={styles.price__unit}>/ сутки</span>
          </div>
          <span className={styles.card__link}>
            Подробнее
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default RelatedToolsItem;
