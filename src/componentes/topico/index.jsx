import React from 'react';
import styles from './topico.module.css';

export default function Topico ({id, titulo, children }) {
  return (
    <div id={id}>
      <h2 className={styles.titulo_topico}>{titulo} 💧</h2>
      {children}
    </div>
  );
};