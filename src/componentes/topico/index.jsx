import React from 'react';
import styles from './topico.module.css';

export default function Topico ({ titulo, children }) {
  return (
    <div>
        <h2 className={styles.titulo_topico}>{titulo} 💧</h2>
      {children}
    </div>
  );
};