import Link from 'next/link';
import Image from 'next/image';
import { ITool } from '@/services/api';
import { Rub } from '../UI';
import { Specification } from '../specification';
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
        src={`${process.env.NEXT_PUBLIC_API_URL}file/${tool.image}`}
        alt={tool.name}
        className={styles.pic}
      />
      <div className={styles.description}>
        <h2 className={styles.title}>{tool.label}</h2>
        <Specification data={tool.specification} />
        <div className={styles.price}>
          <span className={styles.price__span}>
            от
            {tool.price}
          </span>
          <Rub />
          <span className={styles.price__span}> / сутки</span>
        </div>
      </div>
    </Link>
  );
}

export default ToolsListItem;
