import React from 'react';
import styles from './bloco.module.css'

export default function Bloco ({ children }) {
  return (
    <div className={styles.bloco}>
      {children}
    </div>
  );
};