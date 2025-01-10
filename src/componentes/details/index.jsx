'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './details.module.css';

export default function Details ({titulo, children, cor}) {
  
  const [details, setDetails] = useState(false);
  const detailsClosed = styles.details_txt_closed;
  const detailsOpen = styles.details_txt_open;

  function detailsInvert() {
    setDetails(!details);
  }

  return (
    <div className={styles.details}>
      <button onClick={detailsInvert} className={cor}>{titulo}</button>
      <div className={details ? detailsOpen : detailsClosed}>{children}</div>
    </div>
  );
};