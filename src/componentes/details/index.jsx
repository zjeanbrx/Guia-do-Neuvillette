'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './details.module.css';
import arrow from '../../../public/icones/arrow.png';

export default function Details ({id, titulo, children, cor}) {
  
  const detailsStyle = styles.details;
  const detailsClosed = styles.details_txt_closed;
  const detailsOpen = styles.details_txt_open;
  const arrowClosed = styles.arrow_closed;
  const arrowOpen = styles.arrow_open;

  const [details, setDetails] = useState(false);

  function detailsInvert() {
    setDetails(!details);
  }

  return (
    <div id={id} className={`${detailsStyle} ${cor}`}>
      <button onClick={detailsInvert}>{titulo} <Image className={details ? arrowOpen : arrowClosed} src={arrow} width={20} height={20} alt='arrow'/> </button>
      <div className={details ? detailsOpen : detailsClosed}>{children}</div>
    </div>
  );
};