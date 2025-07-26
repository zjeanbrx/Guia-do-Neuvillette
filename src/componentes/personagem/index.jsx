import styles from './personagem.module.css';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Personagem({ nome, valor, frase, children, elemento }) {
  const personagens = {
    Albedo: '/personagens/Albedo.webp',
    Baizhu: '/personagens/Baizhu.webp',
    Beidou: '/personagens/Beidou.webp',
    Chibi_Raiden: '/personagens/Chibi_Raiden.webp',
    Chibi_Yae_Miko: '/personagens/Chibi_Yae_Miko.png',
    Chiori: '/personagens/Chiori.png',
    Citlali: '/personagens/Citlali.png',
    Dehya: '/personagens/Dehya.png',
    Emilie: '/personagens/Emilie.png',
    Fischl: '/personagens/Fischl.webp',
    Furina: '/personagens/Furina.webp',
    Ganyu: '/personagens/Ganyu.webp',
    Jean: '/personagens/Jean.webp',
    Kachina: '/personagens/Kachina.png',
    Kazuha: '/personagens/Kazuha.webp',
    Kuki: '/personagens/Kuki.webp',
    Layla: '/personagens/Layla.webp',
    Lynette: '/personagens/Lynette.png',
    Mona: '/personagens/Mona.webp',
    Nahida: '/personagens/Nahida.png',
    Neuvillette: '/personagens/Neuvillette.webp',
    Ororon: '/personagens/Ororon.png',
    Sucrose: '/personagens/Sucrose.webp',
    Tartaglia: '/personagens/Tartaglia.webp',
    Venti: '/personagens/Venti.png',
    Viajantes: '/personagens/Viajantes.png',
    Xiangling: '/personagens/Xiangling.webp',
    Xianyun: '/personagens/Xianyun.webp',
    Xilonen: '/personagens/Xilonen.png',
    Yelan: '/personagens/Yelan.webp',
    Zhongli: '/personagens/Zhongli.webp',
  };
  const imagem = personagens[nome] || '/personagens/default.webp';

  const renderStars = () => {
    const count = valor == 2 ? 2
      : valor == 3 ? 3
      : valor == 4 ? 4
      : valor == 5 ? 5
      : valor == 6 ? 6
      : 0;
    const fillColor = valor == 2 ? '#5d8aa8'
      : valor == 3 ? '#5d8aa8'
      : valor == 4 ? '#9966cc'
      : valor == 5 ? '#ffbf00'
      : valor == 6 ? '#ff033e'
      : 'gray';
    return Array.from({ length: count }, (_, index) => <Star key={index} fill={fillColor} stroke={fillColor} />);
  };

  const starClass = valor == 2 ? styles.valor_dois
    : valor == 3 ? styles.valor_tres
    : valor == 4 ? styles.valor_quatro
    : valor == 5 ? styles.valor_cinco
    : valor == 6 ? styles.valor_seis
    : styles.valor_zero;

  const elementClass = elemento ? styles[elemento.toLowerCase()] : styles.none;

  return (
    <div className={`${styles.container} ${elementClass}`}>
      <h3>{nome}</h3>
      <Image src={imagem} alt={nome} width={150} height={150} className={styles.personagem_imagem}/>
      <p className={`${starClass} ${styles.icone_valor}`}>{renderStars()}</p>
      <div className={styles.info}>
        <p><b>{frase}</b></p>
        {children}
      </div>
    </div>
  );
}