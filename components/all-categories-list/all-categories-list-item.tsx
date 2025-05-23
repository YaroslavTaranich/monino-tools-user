import Image from 'next/image';
import Link from 'next/link';
import styles from './all-categories-list.module.scss';
import { ICategory } from '@/services/api';

interface AllCategoriesListItemProps {
  category: ICategory;
}

function AllCategoriesListItem({ category }: AllCategoriesListItemProps) {
  return (
    <li className={styles.item}>
      <Link href={category.name} className={styles.link}>
        <Image
          width={600}
          height={600}
          src={category.image}
          alt={category.label}
          className={styles.img}
        />
        <h3 className={styles.title}>{category.label}</h3>
      </Link>
    </li>
  );
}

export default AllCategoriesListItem;
