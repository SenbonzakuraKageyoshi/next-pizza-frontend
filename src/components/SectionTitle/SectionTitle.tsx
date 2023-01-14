import React from 'react';
import styles from './sectionTitle.module.scss';

type ISectionTitle = {
    value: string
};

const SectionTitle = ({ value }: ISectionTitle) => {
  return (
    <h1 className={styles.title}>{value}</h1>
  )
}

export default SectionTitle