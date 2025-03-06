import React from 'react';
import styles from './arma.module.css'
import Image from 'next/image';
import rito from '/public/armas/image42.png';
import sacrificio from '/public/armas/image23.png';
import prototipo from '/public/armas/image47.png';
import oracao from '/public/armas/image17.png';
import redemoinho from '/public/armas/image48.png';

export default function Arma ({nome, imagem, children, raridade}) {
  const t5 = styles.t5;
  const t4 = styles.t4;

  switch(nome) {
    case "Rito do Fluxo Eterno":
        imagem = rito;
        break;
    case "Sacrifício de Jade":
        imagem = sacrificio;
        break;
    case "Protótipo Âmbar":
        imagem = prototipo;
        break;
    case "Oração Perdida aos Ventos Sagrados":
        imagem = oracao;
        break;
    case "Redemoinho das Ondas":
        imagem = redemoinho;
        break;
  }
  const estrelasQuantidade = (raridade == "t5") ? "⭐⭐⭐⭐⭐" : "⭐⭐⭐⭐"

  return (
    <div className={styles.arma}>
        <div className={raridade == "t5" ? t5 : t4}>
          <Image src={imagem} className={styles.arma_imagem} alt={nome} placeholder='blur' quality={100} width={150} height={150}></Image>
        </div>
        <div className={styles.raridade}>{estrelasQuantidade}</div>
        <h3>{nome}</h3>
      {children}
    </div>
  );
};