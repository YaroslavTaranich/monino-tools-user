import Link from 'next/link';
import Image from 'next/image';
import { ITool } from '@/services/api';
import { Rub } from '../UI';
import styles from './tools-list.module.scss';

interface ToolsListItemProps {
  tool: ITool;
  url: string;
}

function ToolsListItem({ tool, url }: ToolsListItemProps) {
  return (
    <Link className={styles.tool} href={url}>
      <Image
        width={400}
        height={400}
        src={tool.image}
        alt={tool.label}
        className={styles.pic}
      />
      <div className={styles.description}>
        <h2 className={styles.title}>{tool.label}</h2>
        {tool.accessory_only && (
          <p className={styles.condition}>Только с основным инструментом</p>
        )}
        <p className={styles.summary}>
          {tool.description.split('\n').find(Boolean) || tool.title}
        </p>
        <div className={styles.price}>
          <span>
            <span className={styles.price__span}>
              от
              {' '}
              {tool.price}
            </span>
            {'\u00A0'}
            <Rub />
            <span className={styles.price__unit}> / сутки</span>
          </span>
          <span className={styles.more}>Подробнее →</span>
        </div>
      </div>
    </Link>
  );
}

export default ToolsListItem;
