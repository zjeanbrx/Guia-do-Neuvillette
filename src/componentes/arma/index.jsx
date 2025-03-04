import React from 'react';
import styles from './arma.module.css'

export default function Arma ({nome, imagemUrl, children }) {
  return (
    <div className={styles.arma}>
        <div>

        </div>
      {children}
    </div>
  );
};