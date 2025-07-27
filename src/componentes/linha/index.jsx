import styles from './compLinha.module.css';
import Image from 'next/image';

export default function CompLinha({ a, b, c, d }) {
    const personagens = {
        Albedo: { imagem: '/personagens/Albedo.webp', raridade: 5 },
        Anemo: { imagem: '/icones/Anemo.webp', raridade: null },
        Baizhu: { imagem: '/personagens/Baizhu.webp', raridade: 5 },
        Beidou: { imagem: '/personagens/Beidou.webp', raridade: 4 },
        Raiden_Shogun: { imagem: '/personagens/Chibi_Raiden.webp', raridade: 5 },
        Yae_Miko: { imagem: '/personagens/Chibi_Yae_Miko.png', raridade: 5 },
        Charlotte: { imagem: '/personagens/Charlotte.webp', raridade: 4 },
        Chiori: { imagem: '/personagens/Chiori.png', raridade: 5 },
        Citlali: { imagem: '/personagens/Citlali.png', raridade: 5 },
        Collei: { imagem: '/personagens/Collei.webp', raridade: 4 },
        Dehya: { imagem: '/personagens/Dehya.png', raridade: 5 },
        Emilie: { imagem: '/personagens/Emilie.png', raridade: 5 },
        Fischl: { imagem: '/personagens/Fischl.webp', raridade: 4 },
        Furina: { imagem: '/personagens/Furina.webp', raridade: 5 },
        Ganyu: { imagem: '/personagens/Ganyu.webp', raridade: 5 },
        Jean: { imagem: '/personagens/Jean.webp', raridade: 5 },
        Kachina: { imagem: '/personagens/Kachina.png', raridade: 4 },
        Kazuha: { imagem: '/personagens/Kazuha.webp', raridade: 5 },
        Kuki_Shinobu: { imagem: '/personagens/Kuki.webp', raridade: 4 },
        Layla: { imagem: '/personagens/Layla.webp', raridade: 4 },
        Lynette: { imagem: '/personagens/Lynette.png', raridade: 4 },
        Mona: { imagem: '/personagens/Mona.webp', raridade: 5 },
        Nahida: { imagem: '/personagens/Nahida.png', raridade: 5 },
        Neuvillette: { imagem: '/personagens/Neuvillette.webp', raridade: 5 },
        Ororon: { imagem: '/personagens/Ororon.png', raridade: 5 },
        Sucrose: { imagem: '/personagens/Sucrose.webp', raridade: 4 },
        Tartaglia: { imagem: '/personagens/Tartaglia.webp', raridade: 5 },
        Venti: { imagem: '/personagens/Venti.png', raridade: 5 },
        Viajante_Dendro: { imagem: '/personagens/Viajantes.png', raridade: 5 },
        Xiangling: { imagem: '/personagens/Xiangling.webp', raridade: 4 },
        Xianyun: { imagem: '/personagens/Xianyun.webp', raridade: 5 },
        Xilonen: { imagem: '/personagens/Xilonen.png', raridade: 5 },
        Yelan: { imagem: '/personagens/Yelan.webp', raridade: 5 },
        Zhongli: { imagem: '/personagens/Zhongli.webp', raridade: 5 },
    };

    const personagensArray = [a, b, c, d].map(nome => ({
        nome,
        dados: nome === 'vazio' ? { imagem: null, raridade: null } : personagens[nome.replace(' ', '_')] || { imagem: '/personagens/placeholder.webp', raridade: 4 }
    }));

    return (
        <div className={styles.container}>
            {personagensArray.map(({ nome, dados }, index) => (
                <div
                    key={index}
                    className={`${styles.imagem_container} ${dados.raridade === 5 ? styles.raridade5 : dados.raridade === 4 ? styles.raridade4 : ''}`}
                >
                    {dados.imagem && <Image src={dados.imagem} alt={nome} width={70} height={70} />}
                </div>
            ))}
        </div>
    );
}