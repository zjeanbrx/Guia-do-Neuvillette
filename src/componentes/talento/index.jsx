import React from 'react';
import Image from 'next/image';
import ataqueNormal from '/public/icones/image49.png';
import habilidade from '/public/icones/image22.png';
import supremo from '/public/icones/image11.png';
import a1 from '/public/icones/image20.png';
import a4 from '/public/icones/image45.png';
import styles from './talento.module.css'
import {Sun} from 'lucide-react'

export default function Talento ({imagem, talento, nome, children }) {

  switch(imagem) {
    case "ataqueNormal":
        imagem = ataqueNormal;
        break;
    case "habilidade":
        imagem = habilidade;
        break;
    case "supremo":
        imagem = supremo;
        break;
    case "a1":
        imagem = a1;
        break;
    case "a4":
        imagem = a4;
        break;
  }

  return (
    <div className={styles.talento}>
      <div className={styles.talento_nome}>
        <Image src={imagem} alt='icone'/>
        <h3>{talento}:</h3>
        <h3>{nome}</h3>
      </div>
      <div className={styles.talento_descricao}>
        {children}
      </div>
    </div>
  );
};