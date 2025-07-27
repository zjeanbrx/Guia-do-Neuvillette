import React from 'react';
import Image from 'next/image';
import styles from './imgfim.module.css';

export default function ImgFim ({imagem, alt}) {
  return (
    <Image src={imagem} className={styles.imgfim} quality={100} placeholder='blur' alt={alt}>

    </Image>
  );
};