'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import detailsCor from "@/componentes/details/details.module.css"
import Bloco from "@/componentes/bloco";
import Topico from "@/componentes/topico";
import ImgFull from "@/componentes/imgfull";
import Details from "@/componentes/details";
import { useState } from "react";

import Banner from '../../public/geral/Banner.png'

export default function Home() {
  
  const displayNone = styles.display_none;
  const displayBlock = styles.display_block;
  const menuFechado = styles.menu_fechado;
  const fecharMenuDiv = styles.fechar_menu;
  const menuAberto = styles.menu_aberto;
  const menu = styles.menu;
  const [menuEstado, setMenuEstado] = useState(false);

  function Menu() {
    setMenuEstado(!menuEstado)
  }
  function fecharMenu() {
    setMenuEstado(!menuEstado)
  }

  return (
    <div>
      <nav className={menuEstado ? `${menuAberto} ${menu}` : `${menuFechado} ${menu}`}>
        <Link onClick={fecharMenu} href="#resumo">Resumo</Link>
        <Link onClick={fecharMenu} href="#">Armas</Link>
        <Link onClick={fecharMenu} href="#">Status</Link>
        <Link onClick={fecharMenu} href="#">Teste</Link>
      </nav>
      <div className={menuEstado ? `${displayBlock} ${fecharMenuDiv}` : displayNone} onClick={fecharMenu}></div>
      <header>
        <div className={styles.counter}></div>
        <h1>Neuvillette by Sun</h1>
        <button className={styles.button} onClick={Menu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
      <main>
        <ImgFull imagem={Banner} alt={'banner'}/>
        <Topico titulo="Resumo" id="resumo">
          <p>Neuvillette é um personagem T5 Hydro Catalisador com um estilo único de Gameplay, baseado principalmente em seus ataques carregados de dano constante e em área</p>
        </Topico>
        <Details titulo="Glossário" cor={detailsCor.branco}>
          <table className={styles.glossario}>
            <tbody>
              <tr>
                <td>AOE</td>
                <td>Área de Efeito</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>Ataque Carregado</td>
              </tr>
              <tr>
                <td>E</td>
                <td>Habilidade Elemental</td>
              </tr>
              <tr>
                <td>Q</td>
                <td>Supremo</td>
              </tr>
              <tr>
                <td>ER</td>
                <td>Recarga de Energia</td>
              </tr>
              <tr>
                <td>Stacks</td>
                <td>Acúmulo</td>
              </tr>
              <tr>
                <td>VV</td>
                <td>Set de Artefatos Sombra Verde</td>
              </tr>
              <tr>
                <td>Res</td>
                <td>Resistência</td>
              </tr>
              <tr>
                <td>A1</td>
                <td>Ascensão 1</td>
              </tr>
              <tr>
                <td>A4</td>
                <td>Ascensão 4</td>
              </tr>
              <tr>
                <td>Funneling</td>
                <td>Uma das maneiras pelas quais uma unidade pode servir como uma bateria. Envolve trocar personagens imediatamente após gerar Partículas Elementais</td>
              </tr>
              <tr>
                <td>Enabler</td>
                <td>Personagens que aplicam Elementos para “habilitar” reações</td>
              </tr>
            </tbody>
          </table>
        </Details>
        <div className={styles.pros_cons}>
          <Details titulo="Pros" cor={detailsCor.verde}>
            <p>Tem um dano altíssimo com investimentos mínimos, conseguindo fazer qualquer conteúdo do jogo. Pode ser jogado sozinho por ter auto-sustain, o que abre slots que seriam de healers para personagens mais agressivos.</p>
            <p>Tem uma Gameplay simples e pode ser usado de uma distância considerável contra inimigos, evitando tomar dano.</p>
            <p>É o único personagem no jogo com potencial de dano em área “infinito” no abismo, sendo o melhor DPS do meta atual para conteúdos com múltiplos alvos ou ondas de inimigos, ainda com muita relevância em conteúdos de alvos únicos.</p>
            <p>Possui uma grande variedade de times, podendo ser usado com essencialmente “qualquer coisa” de elementos diferentes para a sua passiva.</p>
          </Details>
          <Details titulo="Contras" cor={detailsCor.vermelho}>
            <p>Por seu kit escalar principalmente com HP muitos suportes ficam inutilizáveis, e seu tempo em campo muitas vezes não permite renovação de buffs que têm pouca duração.</p>
            <p>Na C0, Neuvillette não tem resistência à interrupção, tendo seus ataques carregados cancelados ao sofrer dano.</p>
            <p>A forma como Neuvillette dá dano não é apropriada para speedruns, existindo opções melhores para dano explosivo em janelas minúsculas de tempo.</p>
          </Details>
        </div>
        <Topico titulo="Dúvidas Frequentes"> 
          <Details titulo={"O Neuvillette precisa de escudo na C0?"} cor={detailsCor.vazio}>
            <p>Não é necessário ter um escudo mesmo na c0. Neuvillette possui a propriedade especial de se mover livremente durante seu ataque carregado, podendo desviar de ataques com facilidade. Todavia, para jogadores mais casuais enfrentando inimigos mais agressivos, um escudo é recomendável pois toda sua rotação é cancelada caso ele seja interrompido. Em cenários onde o foco será apenas fazer os conteúdos do jogo da forma mais rápida possível, é recomendado para jogadores mais experientes usarem opções mais ofensivas como buffers ou DPS fora de campo.
            </p>
          </Details>
          <Details titulo={"Tem problema em não pegar todos os acúmulos de sua A1?"} cor={detailsCor.vazio}>
            <p>Não pegar todos os acúmulos da sua A1 pode prejudicar gravemente seu escalonamento de dano. É possível mitigar isso através do uso de sinergias fortes, como o caso da Furina, que provém buffs expressivos com seu rápido stack de fanfarra que o Neuvillette proporciona. Ainda assim, usar personagens como o Kazuha que podem dar 2 acúmulos para a A1 através da auto-infusão de ataques inimigos é extremamente desejável caso decida usar um segundo Hydro.</p>
          </Details>
          <Details titulo={"Vale a pena upar o Supremo e sua Habilidade Elemental?"} cor={detailsCor.vazio}>
            <p>Dependendo do seu time, o aumento de dano será mínimo. Salvo em situações onde você não tem demais prioridades para gastar suas resinas ou especialmente em equipes de Vaporização, na qual seu supremo possui sim, um aumento significativo de dano, ao desencadear essa reação.
            </p>
          </Details>
          <Details titulo={"Vale a pena coroar o Auto Ataque do Neuvillette?"} cor={detailsCor.vazio}>
            <p>Sim. É de longe o talento que possui a principal fonte de dano do Neuvillette, pois é aqui onde encontramos os multiplicadores do seu ataque carregado.</p>
            <p><b>Curiosidade: Coroar seu ataque normal tem um aumento de dano maior do que upar o talento de todas as suas Habilidades para (9/9/9).</b></p>
          </Details>
          <Details titulo={"Mualani vs Neuvillette"} cor={detailsCor.vazio}>
            <p>Mualani e Neuvillette são ótimas opções como DPS no geral, ambos tendo estilos de Gameplay e focos diferentes. Neuvillette é um personagem extremamente fácil de jogar e focado em dano contínuo, conseguindo fazer qualquer conteúdo do jogo tranquilamente com pouco investimento, sendo “um exército de um homem só”. Mualani por outro lado tem um estilo de Gameplay focado em Speedruns, com foco em investimento vertical, fazendo conteúdos mais rapidamente baseado puramente em seu investimento de artefatos e na habilidade do jogador. Além disso, seu time é extremamente barato quando se trata de investimento em gemas essenciais (Primogems), podendo usar diversos personagens dados de graça ou com raridade 4 estrelas.</p>
            <p>Para a maior parte dos jogadores, Neuvillette tende a ser uma opção melhor de pull por conta de sua capacidade como unidade universal para qualquer conteúdo e situação (que não envolva imunidade hydro); enquanto Mualani tem seu foco nas mãos de jogadores mais experientes e focados no nicho de speedrun.
            </p>
          </Details>
          <Details titulo={"Kazuha vs Xilonen"} cor={detailsCor.vazio}>
            <p>Xilonen e Kazuha têm funções semelhantes, mas diferem em como aplicam seus buffs e debuffs. Xilonen reduz a resistência dos inimigos em uma área ampla e fornece bônus elemental, o que é útil contra grupos de inimigos, além de poder curar o personagem ativo. Já Kazuha oferece uma redução de resistência maior, porém por um tempo mais curto, também com bônus elemental, sendo ideal para equipes que usam múltiplos elementos.</p>
            <p>Ambos são personagens versáteis, e Xilonen pode substituir diretamente o Kazuha em várias situações, especialmente em times de double geo com Neuvillette. Um dos seus melhores times atualmente utiliza os dois juntos, o que melhora significativamente o DPS/DPR geral da equipe. Além disso, ambos são flexíveis, podendo se encaixar em diversos tipos de composições.</p>
          </Details>
          <Details titulo={"Qual compensa mais para Neuvillette, C1 ou Arma Assinatura?"} cor={detailsCor.vazio}>
            <p>Sua assinatura (Rito do Fluxo Eterno) é mais vantajosa para Neuvillette devido ao aumento de dano significativo, especialmente quando comparado ao Protótipo Âmbar. Se você já possui a Sacrifício de Jade R2+ e pretende pegar mais refinos, considere a C1, pois tal arma compete com a sua Assinatura em termos de desempenho.</p>
            <p>Além disso, atualmente você precisa de menos tiros para garantir a arma assinatura do que sua C1, sendo mais benéfica sua obtenção tanto em aumento de dano, quanto em Custo x Benefício.</p>
            <p>Sua C1 apesar de menos benéfica em dano, Tem um aumento muito superior à sua r1 quando se colocado com o Neuvillette em time com furina tendo um DPS avassalador além de habilitar uma grande variedade de times já que dará um acúmulo a mais da sua passiva A1, permitindo-o rodar em times de double elemento tranquilamente.</p>
          </Details>
        </Topico>
        <Topico titulo="Armas">
          <p>usa qualquer <b>merda</b></p>
        </Topico>
        <Topico titulo="Status">
          <p>deixa nivel 0 mesmo essa bosta</p>
        </Topico>
      </main>
    </div>
  );
}
