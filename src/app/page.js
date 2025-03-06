'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import detailsCor from "@/componentes/details/details.module.css"
import Secao from "@/componentes/secao";
import Topico from "@/componentes/topico";
import ImgFull from "@/componentes/imgfull";
import Details from "@/componentes/details";
import Arma from "@/componentes/arma";
import { useState } from "react";
import { Hourglass, Filter, Crown } from 'lucide-react';

import Banner from '../../public/geral/Banner.png';
import Talento from "@/componentes/talento";
import Artefato from "@/componentes/artefato";

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

  return (
    <div>
      <nav className={menuEstado ? `${menuAberto} ${menu}` : `${menuFechado} ${menu}`}>
        <Link onClick={Menu} href="#resumo">Resumo</Link>
        <Link onClick={Menu} href="#glossario">Glossário</Link>
        <Link onClick={Menu} href="#duvidas-frequentes">Dúvidas Frequentes</Link>
        <Link onClick={Menu} href="#talentos">Talentos</Link>
        <Link onClick={Menu} href="#status">Status</Link>
        <Link onClick={Menu} href="#armas">Armas</Link>
      </nav>
      <div className={menuEstado ? `${displayBlock} ${fecharMenuDiv}` : displayNone} onClick={Menu}></div>
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
        <ImgFull imagem={Banner} alt='banner'/>
        <Topico titulo="Resumo" id="resumo">
          <p>Neuvillette é um personagem T5 Hydro Catalisador com um estilo único de Gameplay, baseado principalmente em seus ataques carregados de dano constante e em área</p>
        </Topico>
        <Secao>
          <Details titulo="Glossário" id="glossario" cor={detailsCor.branco}>
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
        </Secao>
        <Topico titulo="Dúvidas Frequentes" id="duvidas-frequentes"> 
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
            <p>Sim 👑. É de longe o talento que possui a principal fonte de dano do Neuvillette, pois é aqui onde encontramos os multiplicadores do seu ataque carregado.</p>
            <p><b>Curiosidade: Coroar seu ataque normal tem um aumento de dano maior do que upar o talento de todas as suas Habilidades para (9/9/9).</b></p>
          </Details>
          <Details titulo={"Mualani vs Neuvillette"} cor={detailsCor.vazio}>
            <p>Mualani e Neuvillette são ótimas opções como DPS no geral, ambos tendo estilos de Gameplay e focos diferentes. Neuvillette é um personagem extremamente fácil de jogar e focado em dano contínuo, conseguindo fazer qualquer conteúdo do jogo tranquilamente com pouco investimento, sendo “um exército de um homem só”.</p>
            <p>Mualani por outro lado tem um estilo de Gameplay focado em Speedruns, com foco em investimento vertical, fazendo conteúdos mais rapidamente baseado puramente em seu investimento de artefatos e na habilidade do jogador. Além disso, seu time é extremamente barato quando se trata de investimento em gemas essenciais (Primogems), podendo usar diversos personagens dados de graça ou com raridade 4 estrelas.</p>
            <p>Para a maior parte dos jogadores, Neuvillette tende a ser uma opção melhor de pull por conta de sua capacidade como unidade universal para qualquer conteúdo e situação (que não envolva imunidade hydro); enquanto Mualani tem seu foco nas mãos de jogadores mais experientes e focados no nicho de speedrun.</p>
          </Details>
          <Details titulo={"Kazuha vs Xilonen"} cor={detailsCor.vazio}>
            <p>Xilonen e Kazuha têm funções semelhantes, mas diferem em como aplicam seus buffs e debuffs. Xilonen reduz a resistência dos inimigos em uma área ampla e fornece bônus elemental, o que é útil contra grupos de inimigos, além de poder curar o personagem ativo. Já Kazuha oferece uma redução de resistência maior, porém por um tempo mais curto, também com bônus elemental, sendo ideal para equipes que usam múltiplos elementos.</p>
            <p>Ambos são personagens versáteis, e Xilonen pode substituir diretamente o Kazuha em várias situações, especialmente em times de double geo com Neuvillette. Um dos seus melhores times atualmente utiliza os dois juntos, o que melhora significativamente o DPS/DPR geral da equipe. Além disso, ambos são flexíveis, podendo se encaixar em diversos tipos de composições.</p>
          </Details>
          <Details titulo={"Qual compensa mais para Neuvillette, C1 ou Arma Assinatura?"} cor={detailsCor.vazio}>
            <p>Sua assinatura (Rito do Fluxo Eterno) é mais vantajosa para Neuvillette devido ao aumento de dano significativo, especialmente quando comparado ao Protótipo Âmbar. Se você já possui a Sacrifício de Jade R2+ e pretende pegar mais refinos, considere a C1, pois tal arma compete com a sua Assinatura em termos de desempenho.</p>
            <p>Além disso, atualmente você precisa de menos tiros para garantir a arma assinatura do que sua C1, sendo mais benéfica sua obtenção tanto em aumento de dano, quanto em Custo x Benefício.</p>
            <p>Embora a C1 de Neuvillette ofereça um aumento de dano inferior à sua arma assinatura, ela apresenta benefícios notáveis em composições com Furina, devido à sinergia proporcionada pelo acúmulo adicional da passiva A1. Isso permite maior flexibilidade na formação de equipes, tornando viável o uso de composições com dois elementos de forma eficiente.</p>
          </Details>
        </Topico>
        <Topico titulo="Talentos" id="talentos">
          <Talento imagem={"ataqueNormal"} talento={"Ataque Normal"} nome={"Como Águas Paradas"}>
            <p>Os Ataques Carregados (AC) de Neuvillette são o foco de seu kit, possuindo um dano contínuo elevado, podendo atravessar diversos inimigos em seu alcance. O AC pode ser realizado de forma instantânea caso ocorra a absorção de 3 Gotas d’Água Primordial. Essas gotas são geradas por meio de sua habilidade Elemental e Supremo. Caso não ocorra a absorção das gotas, seu AC irá demorar 4 segundos para ser completamente carregado, atrapalhando sua rotação. Após desferir seu AC, Neuvillette perde HP de forma contínua e, ao absorver novas gotas, cura-se instantaneamente.</p>
          </Talento>
          <Talento imagem={"habilidade"} talento={"Habilidade Elemental"} nome={"Lágrimas, Eu Retribuirei"}>
            <p>Causa dano AoE (área de efeito) aos oponentes e gera 3 Gotas d’Água Primordial ao acerto. Se a habilidade não atingir um inimigo as gotas não serão criadas. A habilidade de Neuvillette não representa uma parte significativa de seu dano e tem seu foco na regeneração de energia e em gerar Gotas d’Água Primordial.</p>
            <p>Essa habilidade também desfere um um golpe do tipo Pneuma, que é considerado dano elemental Hydro, porém não causa aplicação.</p>
          </Talento>
          <Talento imagem={"supremo"} talento={"Supremo"} nome={"Marés, Eu Retornarei"}>
            <p>Desfere um ataque AoE Hydro que gera 6 Gotas d’ Água Primordial. As Gotas sempre aparecem na frente de Neuvillette e em seu campo de visão. Ao contrário de sua habilidade, seu Supremo irá gerar Gotas independentemente de atingir inimigos ou não.</p>
            <p>Seu supremo tem um bom dano, diferentemente de sua habilidade elemental, sendo usado principalmente para composições de vaporização (Vape).</p>
          </Talento>
          <Talento imagem={"a1"} talento={"Ascensão 1"} nome={"Herdeiro do Antigo Legado do Mar"}>
            <p>A passiva A1 de Neuvillette aumenta o dano dos Ataques Carregados com um multiplicador base que se intensifica a cada acúmulo. Ela multiplica o dano com base em reações Hydro únicas, até um máximo de 3 stacks (cada reação conta apenas uma vez). Cada acúmulo aumenta o dano em 110%, 125% e 160%, respectivamente, e dura 30 segundos, sendo renovada se a mesma reação Hydro for acionada antes do vencimento.</p>
            <p>Essa passiva o incentiva a ter uma variedade de personagens não hydros no time, porém existem exceções a essas regras que beneficiam o Neuvillette mais do que o terceiro acúmulo dessa passiva.</p>
          </Talento>
          <Talento imagem={"a4"} talento={"Ascensão 4"} nome={"Disciplina do Grande Juiz"}>
            <p>A passiva A4 de Neuvillette concede um bônus de Dano Hydro com base em sua vida máxima, podendo chegar a até 30% quando ele está com 100% da vida. Embora ofereça um aumento de dano pequeno, esse efeito é significativo. Durante o uso dos Ataques Carregados (AC), Neuvillette perde vida e, consequentemente, o bônus de Dano Hydro reduz. No entanto, ele rapidamente se cura e retorna à sua vida máxima, recuperando o bônus de 30% de Dano Hydro.</p>
          </Talento>
        </Topico>
        <Topico titulo="Status" id="status">
          <Artefato title={"Caçador das Sombras"} iconUrl={"/artefatos/Cacador_das_Sombras.png"}
          bonus2={"Aumenta o dano causado pelos Ataques normais e carregados em 15%."} bonus4={"Quando a Vida atual aumenta ou diminui, aumenta a Taxa CRIT em 12%. Esse efeito dura 5s e pode ser acumulado até 3 vezes."}/>
          <Secao>
            <h3 style={{marginTop: "20px"}}>Recomendações de atributos principais nos artefatos do Neuvillette:</h3>
            <div>
              <p><b><Hourglass size={15} strokeWidth={3.5}/> Relógio:</b> Vida%</p>
              <p><b><Filter size={15} strokeWidth={3.5}/> Cálice: </b> Hydro% / Vida%</p>
              <p><b><Crown size={15} strokeWidth={3.5}/> Coroa: </b> Crítico% / Vida%</p>
            </div>
          </Secao>
          <Secao>
            <h3>Cálice: Hydro ou Vida?</h3>
            <p>Ambos possuem valor parecido. Porém, em composições com muitos buffs de bônus de dano, como por exemplo com Furina/Kazuha/Xilonen, o cálice de HP% pode ser uma opção muitas vezes melhor, já que também oferece aumentos massivos em seu DPS. Nessas situações, você deve preferir aquele com melhores atributos secundários. (Use o Optimizer para sanar suas dúvidas com clareza).</p>
          </Secao>
          <Secao>
            <h3>Coroa: Crítico ou Vida?</h3>
            <p>Possua a arma assinatura do Neuvillette ou uma arma com Crit, além de ter uma coroa de HP%  com bons atributos secundários de taxa crítica e dano crítico. Caso esses sub-atributos sejam muito bons, essa coroa pode até ultrapassar uma coroa convencional de CRIT (Use o Optimizer para sanar suas dúvidas com clareza).</p>
          </Secao>
          <Secao>
            <h3>Recarga de Energia:</h3>
            <div className={styles.recarga}>
              <table className={styles.tabela_recarga}>
                <thead>
                  <tr>
                    <th>Cenários</th>
                    <th>R5 Protótipo Ambar</th>
                    <th>R1 Fluxo Eterno</th>
                    <th>Outras armas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Double Hydro com Furina</td>
                    <td>100–105%</td>
                    <td>100–115%</td>
                    <td>110–125%</td>
                  </tr>
                  <tr>
                    <td>Double Electro com Fischl</td>
                    <td>100–105%</td>
                    <td>100–110%</td>
                    <td>120–140%</td>
                  </tr>
                  <tr>
                    <td>Fischl Solo Electro</td>
                    <td>100–115%</td>
                    <td>100–120%</td>
                    <td>130–150%</td>
                  </tr>
                  <tr>
                    <td>Outros times</td>
                    <td>100–125%</td>
                    <td>100–130%</td>
                    <td>140–160%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Secao>
        </Topico>
        <Topico titulo="Armas" id="armas">
          <Arma nome="Rito do Fluxo Eterno" raridade={"t5"}>
           <p>É a arma assinatura do Neuvillette e sua BiS. Oferece uma grande quantidade de CRIT DMG, HP% que aumenta de dano para o AC, e restauração de energia (ER). Logo, além de eliminar a necessidade adicional de ER%, permite também a construção de status mais ofensivos.</p>
          </Arma>
          <Arma nome="Sacrifício de Jade" raridade={"t4"}>
           <p>É uma arma de passe e a segunda melhor na maioria dos cenários por uma margem decente. Oferece uma quantidade razoável de status que o Neuvillette deseja. Possui uma estatística secundária de Taxa Crítica e uma passiva  com um buff elevado de HP%. Porém, este catalisador restringe o tempo de campo a um máximo de 10s; mas não  chega a ser um problema, já que Neuvillette quer rotacionar para atualizar seus buffs. A desvantagem dessa arma, seria o excesso de taxa crítica, tornando difícil o equilíbrio dos status ideais ao ser combinada com 4 peças do conjunto Caçador das Sombras.</p>
          </Arma>
          <Arma nome="Protótipo Âmbar" raridade={"t4"}>
           <p>Fornece bastante HP% por meio de seus status secundários, sendo a melhor arma que pode ser feita sem gastar tiros para Neuvillette. Suas vantagens são a cura e a recarga de energia para todos os membros da equipe, já que em composições com Furina, facilitará o acúmulo do bônus de fanfarra. Como resultado, pode superar até o Esplendor Índigo R5.</p>
          </Arma>
          <h3 style={{fontWeight: "600", marginBottom: "20px"}}>Menções Honrosas:</h3>
          <Arma nome="Oração Perdida aos Ventos Sagrados" raridade={"t5"}>
           <p>Oferece Taxa Crítica e Bônus Elemental , dois status que Neuvillette aprecia. A taxa Crítica e 4 peças de Caçador das Sombras, podem dificultar a construção da build na prática, mas ainda não a tira do pódio. É uma arma mais acessível do que outras escolhas de 5 estrelas, já que os jogadores podem a obter no Banner Padrão.</p>
           <p><b>observação:</b> Para builds sem HP% ou com Taxa Crítica excessiva, o Protótipo Âmbar se torna  uma opção melhor do que a Oração Perdida aos Ventos Sagrados.</p>
          </Arma>
          <Arma nome="Redemoinho das Ondas" raridade={"t4"}>
           <p>Arma de Natlan que apresenta Recarga de Energia como atributo principal e passivas que aumentam a Vida Máxima, tornando-se uma opção superior ao Protótipo Âmbar a partir do refino 2 ou superior. Apesar de seu excelente desempenho, especialmente em refinos elevados, sua obtenção é limitada exclusivamente a banners, o que pode dificultar refinos maiores. Ainda assim, é uma escolha extremamente poderosa para o Neuvillette.</p>
          </Arma>
        </Topico>
      </main>
    </div>
  );
}
