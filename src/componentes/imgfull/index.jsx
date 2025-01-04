import React from 'react';
import Image from 'next/image';
import styles from './imgfull.module.css';

export default function ImgFull ({imagem, alt}) {
  return (
    <Image src={imagem} className={styles.imgfull} quality={100} placeholder='blur' alt={alt}>

    </Image>
  );
};