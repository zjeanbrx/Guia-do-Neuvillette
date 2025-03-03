import React from 'react';
import styles from './secao.module.css'

export default function Secao ({ children }) {
  return (
    <div className={styles.secao}>
      {children}
    </div>
  );
};