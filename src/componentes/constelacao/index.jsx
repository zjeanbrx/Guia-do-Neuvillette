import { ChevronDown, Star } from 'lucide-react';
import styles from './constelacoes.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Constelacao({ c, nome, children, valor, motivo }) {
  const constelacoes = {
    C1: '/icones/image34.png',
    C2: '/icones/image33.png',
    C3: '/icones/image9.png',
    C4: '/icones/image39.png',
    C5: '/icones/image43.png',
    C6: '/icones/image46.png',
  };

  const imagem = constelacoes[c];
  const starCount = Math.min(Math.max(parseInt(valor) || 2, 2), 5);
  const [isMotivoOn, setIsMotivoOn] = useState(false);

  const handleClick = () => {
    setIsMotivoOn(!isMotivoOn);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nome} >
        <Image src={imagem} alt={nome} width={60} height={60} />
        <h3>{nome}</h3>
      </div>
      <div>
        {children}
      </div>
      <div className={styles.nota} onClick={handleClick}>
        <h3>
          {Array(starCount).fill().map((_, index) => (
            <Star
              key={index}
              fill="#FFD700"
              stroke="#FFD700"
              style={{ filter: 'drop-shadow(0 0 3px #FFD700)' }}
              size={20}
            />
          ))}
        </h3>
        <ChevronDown  className={`${styles.arrow} ${isMotivoOn ? styles.arros_on : styles.arrow_off}`} />
      </div>
      <div className={`${styles.motivo} ${isMotivoOn ? styles.motivo_on : styles.motivo_off}`}>
        <p>{motivo}</p>
      </div>
    </div>
  );
}