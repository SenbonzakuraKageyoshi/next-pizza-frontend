import React from 'react';
import styles from './categoryName.module.scss';

type ICategoryNameProps = {
    value: string
};

const CategoryName = ({ value }: ICategoryNameProps) => {
  return (
    <h1 className={styles.categoryName}>{value}</h1>
  )
}

export default CategoryName