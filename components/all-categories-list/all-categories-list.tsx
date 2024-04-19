import React from 'react';
import styles from './all-categories-list.module.scss';
import AllCategoriesListItem from './all-categories-list-item';
import { ICategory } from '@/services/api';

interface IAllCategoriesListProps {
  categories: ICategory[];
}

const AllCategoriesList: React.FC<IAllCategoriesListProps> = ({
  categories,
}) => (
  <section className={styles.categores}>
    <ul className={styles.list}>
      {categories.map((category) => (
        <AllCategoriesListItem key={category.id} category={category} />
      ))}
    </ul>
  </section>
);

export default AllCategoriesList;
