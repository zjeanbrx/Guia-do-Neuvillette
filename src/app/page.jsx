'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import detailsCor from "@/componentes/details/details.module.css"
import Secao from "@/componentes/secao";
import Topico from "@/componentes/topico";
import ImgFull from "@/componentes/imgfull";
import ImgFim from "@/componentes/imgFim";
import Details from "@/componentes/details";
import Arma from "@/componentes/arma";
import ParticleBackground from "@/componentes/background";
import Personagem from "@/componentes/personagem";
import Comp from "@/componentes/comp";
import CompLinha from "@/componentes/linha";
import { useState } from "react";
import { Hourglass, Filter, Crown } from 'lucide-react';

import Banner from '../../public/geral/Banner.png';
import funnyImage from '../../public/geral/funny_imagem_em_sun_caralho.png';
import Talento from "@/componentes/talento";
import Artefato from "@/componentes/artefato";
import ArmaTabela from "@/componentes/armaTabela";
import Constelacao from "@/componentes/constelacao";
import TabelaConstelacoes from "@/componentes/constelacoesTabela";

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
    <>
      <ParticleBackground />
      <div>
        <nav className={menuEstado ? `${menuAberto} ${menu}` : `${menuFechado} ${menu}`}>
          <Link onClick={Menu} href="#resumo">Resumo</Link>
          <Link onClick={Menu} href="#glossario">Glossário</Link>
          <Link onClick={Menu} href="#duvidas-frequentes">Dúvidas Frequentes</Link>
          <Link onClick={Menu} href="#talentos">Talentos</Link>
          <Link onClick={Menu} href="#status">Status</Link>
          <Link onClick={Menu} href="#armas">Armas</Link>
          <Link onClick={Menu} href="#sinergias">Sinergias</Link>
          <Link onClick={Menu} href="#composicoes">Composições</Link>
          <Link onClick={Menu} href="#constelacoes">Constelações</Link>
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
          <ImgFull imagem={Banner} alt='banner' />
          <Topico titulo="Resumo" id="resumo">
            <p>Neuvillette é um personagem T5 Hydro Catalisador com um estilo único de Gameplay, baseado principalmente em seus ataques carregados de dano constante e em área.</p>
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
                <p>Por seu kit escalar principalmente com HP, muitos suportes ficam inutilizáveis, e seu tempo em campo muitas vezes não permite renovação de buffs que têm pouca duração.</p>
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
              <p>Para a maior parte dos jogadores, Neuvillette tende a ser uma opção melhor de invocação por conta de sua capacidade como unidade universal para qualquer conteúdo e situação (que não envolva imunidade hydro); enquanto Mualani tem seu foco nas mãos de jogadores mais experientes e focados no nicho de speedrun.</p>
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
              <p>Essa habilidade também desfere um golpe do tipo Pneuma, que é considerado dano elemental Hydro, porém não causa aplicação.</p>
            </Talento>
            <Talento imagem={"supremo"} talento={"Supremo"} nome={"Marés, Eu Retornarei"}>
              <p>Desfere um ataque AoE Hydro que gera 6 Gotas d’Água Primordial. As Gotas sempre aparecem na frente de Neuvillette e em seu campo de visão. Ao contrário de sua habilidade, seu Supremo irá gerar Gotas independentemente de atingir inimigos ou não.</p>
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
              bonus2={"Aumenta o dano causado pelos Ataques normais e carregados em 15%."} bonus4={"Quando a Vida atual aumenta ou diminui, aumenta a Taxa CRIT em 12%. Esse efeito dura 5s e pode ser acumulado até 3 vezes."} />
            <Secao>
              <h3 style={{ marginTop: "20px" }}>Recomendações de atributos principais nos artefatos do Neuvillette:</h3>
              <div>
                <p><b><Hourglass size={15} strokeWidth={3.5} /> Relógio:</b> Vida%</p>
                <p><b><Filter size={15} strokeWidth={3.5} /> Cálice: </b> Hydro% / Vida%</p>
                <p><b><Crown size={15} strokeWidth={3.5} /> Coroa: </b> Crítico% / Vida%</p>
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
            <h3 style={{ fontWeight: "600", marginBottom: "20px" }}>Menções Honrosas:</h3>
            <Arma nome="Oração Perdida aos Ventos Sagrados" raridade={"t5"}>
              <p>Oferece Taxa Crítica e Bônus Elemental, dois status que Neuvillette aprecia. A taxa Crítica e 4 peças de Caçador das Sombras, podem dificultar a construção da build na prática, mas ainda não a tira do pódio. É uma arma mais acessível do que outras escolhas de 5 estrelas, já que os jogadores podem a obter no Banner Padrão.</p>
              <p><b>observação:</b> Para builds sem HP% ou com Taxa Crítica excessiva, o Protótipo Âmbar se torna  uma opção melhor do que a Oração Perdida aos Ventos Sagrados.</p>
            </Arma>
            <Arma nome="Redemoinho das Ondas" raridade={"t4"}>
              <p>Arma de Natlan que apresenta Recarga de Energia como atributo principal e passivas que aumentam a Vida Máxima, tornando-se uma opção superior ao Protótipo Âmbar a partir do refino 2 ou superior. Apesar de seu excelente desempenho, especialmente em refinos elevados, sua obtenção é limitada exclusivamente a banners, o que pode dificultar refinos maiores. Ainda assim, é uma escolha extremamente poderosa para o Neuvillette.</p>
            </Arma>
            <Secao>
              <h3>Tabela de Armas Gerais</h3>
              <p>Foi considerado:</p>
              <div>
                <p><b>Neuvillette:</b> C0; 4 Caçadores; HP% / Hydro DMG% / CR or CD - 128% ER req; 2 stacks na A1 </p>
                <p><b>Kazuha:</b> C0; Espada de Favonius; 4 VV; EM / EM / EM; 31.7% Elem DMG% da A4</p>
                <p><b>Rotação:</b>{" Neuvillette Q > Kazuha EQ > Neuvillette AC E AC > Kazuha E > Neuv AC E"}</p>
              </div>
              <div>
                <ArmaTabela>

                </ArmaTabela>
              </div>
              <p className={styles.fonte} ><b><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQsCcwyVh-P5mVIyRGUm8_XS49Bka9iLzTz-7cgny5kckk-SRZk4DPkUqi_3tmoGWwPAm_VgJPhuBA1/pubhtml#">Fonte</a></b></p>
            </Secao>
          </Topico>
          <Topico titulo={"Sinergias"} id={"sinergias"}>
            <Personagem nome={"Xiangling"} valor={"4"} elemento={"pyro"} frase={"Aplicação fora de campo AoE - ideal para times de Vaporização"}>
              <p>• Possui um grande requerimento de recarga de energia.</p>
              <p>• Pode utilizar o set de artefatos 'O Instrutor' que aumenta a EM do Time.</p>
            </Personagem>
            <Personagem nome={"Dehya"} valor={"3"} elemento={"pyro"} frase={"Mitigação de dano - resistência à interrupção - aplicação Pyro lenta - eficaz para Burn Vape"}>
              <p>• Aplicação elemental eficaz apenas com um personagem dendro na equipe</p>
              <p>• Pode utilizar o set de artefatos O Instrutor</p>
            </Personagem>
            <Personagem nome={"Furina"} valor={"6"} elemento={"hydro"} frase={"Melhora a aplicação de Hydro para reações de Redemoinho e Cristalização - Oferece um grande bônus de dano - Seu acúmulo de fanfarra é facilitado pelo Neuvillette - Possibilita maior variedade dos outros membros da equipe - Reduz necessidade de ER - Ativa a Ressonância Hydro (aumento de HP)"}>
              <p>• Nesses times, Furina requer em torno de 130 a 180 de Recarga de Energia, podendo variar dependendo da quantidade de armas de favonius presentes na equipe, de como você afunila as partículas do Neuvillette, ou em composições com Fischl/Raiden.</p>
            </Personagem>
            <Personagem nome={"Yelan"} valor={"2"} elemento={"hydro"} frase={"Oferece Bônus de Dano regular devido sua A4 - Reduz requisitos de ER/Uso de favonius - Ativa a Ressonância Hydro (aumento de HP)"}>
              <p>• Opção viável apenas com a C1 de Neuvillette e na ausência da Furina!</p>
            </Personagem>
            <Personagem nome={"Mona"} valor={"2"} elemento={"hydro"} frase={"Ativa a Ressonância Hydro (aumento de HP) -  Seu Supremo aumenta o dano do Time - Reduz os requisitos de ER usando Favonius ou Anel de Hakushin"}>
              <p>• Seu Supremo oferece grande aumento de dano, porém tem uma curta duração;</p>
              <p>• Opção viável apenas com a C1 de Neuvillette e na ausência da Furina!</p>
            </Personagem>
            <Personagem nome={"Tartaglia"} valor={"4"} elemento={"hydro"} frase={"Não precisa entrar em campo - Aumenta o nível de talento dos ataques normais - Ativa a Ressonância Hydro (aumento de HP) - Boa opção em speedruns - Pode entrar em campo caso necessário para aplicação hydro ou Favonius"}>
              <p>• Seu Talento Passivo aumenta o nível do Talento de Ataque Normal (mesmo quando nível 10 ou 13).</p>
            </Personagem>
            <Personagem nome={"Kazuha"} valor={"5"} elemento={"anemo"} frase={"Melhor opção anemo - Redução da Resistência Hydro - Bônus de dano elemental - Melhora a aplicação de Hydro com seu Supremo - Controle de Grupo - Reduz requisitos de ER/Uso de favonius"}>
              <p>• Sua ER varia entre 150 a 180, caso você tenha o necessário para usar seu Supremo em todas rotações, recomenda-se optar por mais proficiência para aumentar seu buff de dano elemental.</p>
              <p>• Pode acabar gastando tempo demais em campo; use a ult dele apenas caso necessário (ex. pegar o terceiro stack com a infusão dos inimigos).</p>
            </Personagem>
            <Personagem nome={"Jean"} valor={"3"} elemento={"anemo"} frase={"Boa opção com Furina/Healer Universal - Redução da Resistência Hydro"}>
              <p>• Opção viável para quem não tem o Kazuha, ou quando ele já está sendo usado em uma composição onde se mostra mais necessário.</p>
            </Personagem>
            <Personagem nome={"Xianyun"} valor={"3"} elemento={"anemo"} frase={"Boa opção com Furina/Healer Universal - Redução da Resistência Hydro"}>
              <p>• Opção viável para quem não tem o Kazuha, ou quando ele já está sendo usado em uma composição onde se mostra mais necessário.</p>
            </Personagem>
            <Personagem nome={"Venti"} valor={"3"} elemento={"anemo"} frase={"Extremamente situacional - Controle de Grupo poderoso - uma das melhores opções Anemo para várias ondas de monstros - Melhora a aplicação de Hydro com seu Supremo - Reduz requisitos de ER"}>
              <p>• Seu Supremo oferece 15 de Energia Flat aos aliados do elemento absorvido, o que é útil para algumas equipes de Vape ou Freeze.</p>
              <p>• Pode-se utilizar o artefato Sombra Verde para reduzir Resistência Hydro.</p>
            </Personagem>
            <Personagem nome={"Sucrose"} valor={"3"} elemento={"anemo"} frase={"Controle de Grupo fraco - Boa opção para times com maior foco em reações elementais"}>
              <p>• Sua A1/A4 dão EM sendo uma forte opção para times de reações no geral.</p>
              <p>• Pode-se utilizar o artefato Sombra Verde para reduzir Resistência Hydro.</p>
            </Personagem>
            <Personagem nome={"Lynette"} valor={"3"} elemento={"anemo"} frase={"Controle de Grupo fraco - Redução da Resistência Hydro"}>
              <p>• Sua provocação facilita para o Neuvillette não ser interrompido.</p>
              <p>• Tem uma leve cura que pode ajudar um pouco no stack de fanfarra da Furina.</p>
            </Personagem>
            <Personagem nome={"Beidou"} valor={"4"} elemento={"electro"} frase={"Situacional - Dano fora de campo AoE - Resistência à interrupção - Boa aplicação elemental"}>
              <p>• Pode desempenhar melhor em dano em conteúdos multi-target (2+ alvos).</p>
            </Personagem>
            <Personagem nome="Fischl" valor={"4"} elemento="Electro" frase="Dano fora de campo - Reduz requisitos de ER/Bateria universal">
              <p>• Causa muito dano fora de campo devido à sua A4, o que aumenta o dano geral do time por rotação.</p>
            </Personagem>

            <Personagem nome="Kuki Shinobu" valor={"2"} elemento="Electro" frase="Opção regular com Furina/Healer">
              <p>• Ativa a reação de Hyperbloom, porém tem um alcance limitado em sua habilidade elemental, o que pode forçar Neuvillette a ficar muito perto dos inimigos, um problema para quem não possui a C1 de Neuvillette ou opções de Shield.</p>
            </Personagem>

            <Personagem nome="Raiden Shogun" valor={"3"} elemento="Electro" frase="Dano fora de campo - Bateria Universal - Boa aplicação elemental">
              <p>• Ativa as reações de Hyperbloom e Electro-Charged com sua Habilidade Elemental.</p>
            </Personagem>
            <Personagem nome="Yae Miko" valor={"2"} elemento="Electro" frase="Dano fora de campo - Aplicação elemental">
              <p>• Apesar de poder usar opções mais defensivas para buffar Neuvillette como o Anel Hakushin, Yae Miko é mais eficiente para dano fora de campo, sendo mais eficaz em seu dano pessoal.</p>
            </Personagem>

            <Personagem nome="Ororon" valor={"5"} elemento="Electro" frase="Não precisa entrar em campo - Dano fora de campo - Pode oferecer Buffs - Dano AOE">
              <p>• Ororon pode oferecer buffs usando o set de suporte de Natlan (Pergaminhos do Herói da Cidade) e tem habilidades capazes de dano em conjunto multi-target.</p>
              <p>• Para não precisar entrar em campo, é necessário um personagem de Natlan no time (Como xilonen por ex.) ou um segundo Electro, causando dano pela ativação da sua A4, poupando tempo para Speedruns.</p>
            </Personagem>

            <Personagem nome="Baizhu" valor={"3"} elemento="Dendro" frase="Boa opção com Furina/Healer Universal - Resistência à interrupção - Reduz requisitos de ER/Uso de favoritos/Protótipo Âmbar">
              <p>• Pode usar 4 peças de Concha Tingida para dano off-field ou instruir para buff de EM no time.</p>
            </Personagem>
            <Personagem nome={"Nahida"} valor={"3"} elemento={"dendro"} frase={"Dano fora de campo AoE - Boa aplicação elemental - Buffs de EM - Reduz requisitos de ER/Uso de favonius"}>
              <p>• Seu Supremo fornece EM, o que aumenta o dano de Neuvillette em times de Vaporização.</p>
              <p>• Sua aplicação elemental mantém a aura Pyro nos oponentes, facilitando a reação de Vaporização.</p>
            </Personagem>
            <Personagem nome={"Viajante Dendro"} valor={"2"} elemento={"dendro"} frase={"Disponível para todos os jogadores - Dano fora de campo AoE - Boa aplicação elemental - Buffs do elemento absorvido"}>
              <p>• Problema com ER: Precisa de muita ER para usar o Supremo em cada rotação, especialmente em solo Dendro.</p>
            </Personagem>
            <Personagem nome={"Emilie"} valor={"3"} elemento={"dendro"} frase={"Dano fora de campo AoE - Boa aplicação elemental - Reduz requisitos de ER/Uso de favonius - Facilita reações de Vaporização"}>
              <p>• A aplicação Hydro constante pode dificultar a reação de queimadura e reduzir o dano de Emilie.</p>
              <p>• O Dano de Emilie vem das passivas ativadas pelo Burn, não do efeito de Burn diretamente.</p>
            </Personagem>
            <Personagem nome={"Charlotte"} valor={"3"} elemento={"cryo"} frase={"Boa opção com Furina por ser uma Healer Universal - Reduz requisitos de ER/Uso de favonius/Protótipo Âmbar - Viabiliza freeze"}>
              <p>• Pode usar 4 peças de Canção do Passado/Concha Tingida para buffar o dano do AC de Neuvillette.</p>
            </Personagem>
            <Personagem nome={"Layla"} valor={"3"} elemento={"cryo"} frase={"Ótima opção de escudo - C4 oferece bônus para AC - Viabiliza freeze"}>
              <p>• Duração do escudo é curto, mas pode ser reaplicado no meio das rotações.</p>
              <p>• Supremo pode causar problemas com Swirl se Neuvillette for o único Hydro, dificultando seus stacks da A1.</p>
            </Personagem>
            <Personagem nome={"Citlali"} valor={"5"} elemento={"cryo"} frase={"Escudo Excelente  - Viabiliza Freeze - Buff de Bônus Elemental - Altíssimo escalamento com constelações"}>
              <p>• Pode usar Pergaminhos do Herói da Cidade (Artefato de Natlan) ou Pedra Arcaica caso esteja em times com Xilonen/Geo de Natlan, e a Xilonen pode usar Pergaminhos do Herói da Cidade.</p>
            </Personagem>
            <Personagem nome={"Ganyu"} valor={"2"} elemento={"cryo"} frase={"Dano fora de campo AoE - Aplicação elemental - Reduz requisitos de ER/Uso de favonius - Viabiliza freeze"}>
              <p>• A aplicação de Cyro constante pode dificultar os stacks da A1 de Neuvillette.</p>
              <p>• Recomendado usar Favonius e 4 selos nela para usar o Supremo a cada rotação (220-250% de ER).</p>
            </Personagem>
            <Personagem nome={"Albedo"} valor={"3"} elemento={"geo"} frase={"Dano fora de campo - longa duração de habilidade elemental"}>
              <p>• Pode equipar 4 peças de Pedra Arcaica, oferecendo 35% de buff de dano elemental ao absorver um cristal.</p>
            </Personagem>
            <Personagem nome={"Chiori"} valor={"3"} elemento={"geo"} frase={"Dano fora de campo - Melhor segunda opção Double Geo para Neuvillette"}>
              <p>• Se usar em Double Geo, é melhor colocar Pedra Arcaica no outro Geo e focar no dano fora de campo de Chiori.</p>
              <p>• Pode usar 4 peças de Pedra Arcaica, oferecendo 35% de dano elemental ao absorver um cristal.</p>
            </Personagem>
            <Personagem nome={"Kachina"} valor={"4"} elemento={"geo"} frase={"Buffer - Escudo"}>
              <p>• Pode usar Pergaminhos do Heroi da Cidade (Artefato de Natlan) ou Pedra Arcaica (Artefato de Liyue).</p>
              <p>• Pode buildar a Kachina com EM para fortalecer o escudo dos cristais.</p>
            </Personagem>
            <Personagem nome={"Xilonen"} valor={"6"} elemento={"geo"} frase={"Redução de Resistência Elemental - Bônus Elemental - Cura - Escalamento alto por constelação"}>
              <p>• Pode ser usada em qualquer time do Neuvillette e vai ser uma grande melhoria.</p>
              <p>• Sua cura, apesar de só funcionar no personagem em campo, é o suficiente para maximizar a Fanfarra rapidamente graças à variação de vida natural do Neuvillette.</p>
            </Personagem>
            <Personagem nome={"Zhongli"} valor={"4"} elemento={"geo"} frase={"Escudo mais forte -  Redução de Resistência Universal"}>
              <p>• Pode usar 4 peças de Pedra Arcaica para oferecer 35% de dano elemental ao absorver um cristal, e a Lança  Favonius para reduzir a necessidade de ER.</p>
            </Personagem>
          </Topico>
          <Topico titulo={"Composições"} id={"composicoes"}>
            <p><b>Curiosidade:</b> Em times com um Geo que consegue usar Pergaminho (Set de Natlan que buffa 40% de Bônus elemental), você pode colocar por exemplo a Layla, que não tem um set específico para essa equipe e pode optar por usar Pedra Arcaica, Você só precisa usar a Xilonen antes para criar o cristalizar Hydro e pegar o cristalizar com a Layla por exemplo.</p>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>HyperCarries</h3>
              <p>Times de Hypercarries, no geral, são focados unicamente em buffar e garantir o maior dano possível de Neuvillette. Esses escalam muito bem com investimento no Neuvillette, não apenas por meio de Constelações e armas BiS, mas também por meio da qualidade dos artefatos.</p>
              <p>Nota: Atualmente Xilonen é uma substituta direta do Kazuha, sendo assim, em composições onde cite o Kazuha, naturalmente pode ser trocado pela xilonen.</p>
              <Comp titulo={"Neuvillette - Furina - Kazuha - Xilonen"} texto={"Esse é seu melhor time Hypercarry, contando com uma sinergia absurda, tendo duas unidades que reduzem RES, dão bônus de dano elemental, junto com a cura da xilonen que sinergizar diretamente com a Furina, aumentando o ganho de Fanfarra e dando mais DMG% para o time, sendo o time perfeito para Neuvillette atualmente."} rotacao={"Neuvillette E > Furina E > Xilonen EQ N2 > Kazuha EQ > Furina Q > Neuvillette AC E AC Q > Xilonen E N2 > Kazuha E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Kazuha"} d={"Xilonen"} />
              </Comp>

              <Comp titulo={"Neuvillette - Furina - Kazuha - Zhongli"} texto={"Esse é um dos seus times de Hypercarry antes da existência da Xilonen, contando com uma sinergia absurda,  Zhong também pode ser substituído por Baizhu ou Charlotte nesse time."} rotacao={"Neuvillette E > Furina E > Zhongli E > Kazuha E Q > Furina Q > Neuvillette AC E AC Q > Kazuha E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Kazuha"} d={"Zhongli"} />
              </Comp>

              <Comp titulo={"Neuvillette - Furina - Jean - Fischl"} texto={"Normalmente Jean será a melhor opção Anemo nesse time, o que se deve ao fato de sua cura ajudar a Furina stackar a Fanfarra facilmente, além de  poder carregar 4 peças de VV, tirando resistência hydro dos inimigos. Existem opções de T4/T5 anemos que podem ser usados nos lugares da Jean, tais como: Sayu, Lynette e Xianyun, as quais são opções que podem substituir Jean pela cura, além de  possibilitarem a utilização do set de VV."} rotacao={"Neuvillette E > Furina E Q > Jean E Q > Fischl E > Neuvillette AC Q E AC > Jean E > Fischl Q > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Jean"} d={"Fischl"} />
              </Comp>

              <Comp titulo={"Neuvillette - Furina - Jean - Zhongli/Xilonen"} texto={"Esse time pode usar Kazuha, mas enfrenta um problema: sem Healers e com Furina, todos os aliados acabam com 50% de HP na segunda rotação, o que dificulta o acúmulo da fanfarra de Furina com Neuvillette. Embora funcione com Kazuha, a diferença de DPS é mínima em comparação à Jean, o que pode tornar mais vantajoso substituir Kazuha e o colocar em um time mais relevante."} rotacao={"Neuvillette E > Furina E Q > Zhongli E Hold (Segurado) > Jean E Q > Neuvillette AC Q E AC > Zhongli E Hold (Segurado) > Jean E > Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Jean"} d={"Zhongli"} />
              </Comp>
            </Secao>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>HyperCarries Sem Furina</h3>
              <p>Nessa composição você pode usar a maioria dos anemos disponíveis, pois não há necessidade de um healer sem a Furina. O Flex nesse time pode ser o Zhongli, Layla e Baizhu, por exemplo, tendo outros Flexes que mencionei no Guia que poderá usar também.</p>
              <Comp titulo={"Neuvillette - Yelan - Kazuha - Zhongli/Xilonen"} texto={"Como dito anteriormente, esse será o Hypercarry sem Furina mais forte que você conseguirá com sua C1, possuindo um buff grande e longo, o que permite ser bem flexível para as rotações grandes com Neuvillette."} rotacao={"Neuvillette E > Kazuha EQ > Zhongli E Hold (Segurado) > Yelan Q E > Neuvillette AC E Q > Kazuha E >  Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Yelan"} c={"Kazuha"} d={"Zhongli"} />
              </Comp>
              <Comp titulo={"Neuvillette - Tartaglia - Kazuha - Zhongli/Xilonen"} texto={"Tartaglia serve apenas para o buff de AA +1 e Double Hydro, porém você pode usar seu supremo nesse time, no fim da rotação."} rotacao={"Neuvillette E > Kazuha Q > Zhongli E Hold (Segurado) > Neuvillette AC Q E AC > Kazuha E > Zhongli E Hold (Segurado) > Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Tartaglia"} c={"Kazuha"} d={"Zhongli"} />
              </Comp>
              <Comp titulo={"Neuvillette - Mona - Kazuha - Zhongli/Xilonen"} texto={"Mona é uma opção usável de segundo Hydro com Neuvillette, seu Supremo causa um debuff no inimigo de até 60%, porém sua baixa duração a torna uma opção pior do que os outros Hydros, no geral."} rotacao={"Neuvillette E > Kazuha EQ > Zhongli E Hold (Segurado) > Mona E Q > Neuvillette AC Q E AC > Kazuha E > Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Mona"} c={"Kazuha"} d={"Zhongli"} />
              </Comp>
              <Comp titulo={"Neuvillette - Kazuha - Fischl - Zhongli/Xilonen"} texto={"Esse time era o seu antigo Hypercarry antes da existência da Furina, caso você não tenha Furina, mas tenha todos esses personagens citados,será um dos seus melhores times. Caso você possua a C1 de Neuvillette, dê uma olhada nos times abaixo, onde usamos double hydros sem ter a furina, caso você não a tenha."} rotacao={"Neuvillette E > Kazuha Q > Zhongli E Hold (Segurado)  > Fischl E > Kazuha E > Neuvillette AC Q E AC > Kazuha E > Zhongli E Hold (Segurado) > Fischl Q > Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Kazuha"} c={"Fischl"} d={"Zhongli"} />
              </Comp>
            </Secao>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>Electro-Charged</h3>
              <p>Composição padrão de Electro-Charged, a qual, normalmente, tem 2 electros no time. É importante dizer que Fischl sempre estará em times de electro charged devido à sua A4, dano constante e alto, além de ser excelente bateria, principalmente para Yae e Beidou.</p>
              <Comp titulo={"Neuvillette - Fischl - Yae - Kazuha/Zhongli/Xilonen"} texto={"Fischl causa muito dano pessoal e serve de bateria para Yae Miko que, por sua vez, tem um alto dano pessoal, além de ser  bem flexível nessa composição."} rotacao={"Neuvillette Q > Kazuha Q > Fischl E > Yae Miko 3x E > Kazuha E > Neuvillette 2x AC E > Kazuha E > Yae Miko Q 3x E> Fischl Q > Neuvillette AC E AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Fischl"} c={"Yae Miko"} d={"Kazuha"} />
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Zhongli"} />
              </Comp>
              <Comp titulo={"Neuvillette - Fischl - Beidou - Kazuha/Zhongli/Xilonen"} texto={"Fischl causa muito dano pessoal com sua Habilidade Elemental e A4, servindo de bateria para Beidou, a qual tem problemas, normalmente, com sua ER. Beidou é uma ótima opção visto que ela brilha quando está contra múltiplos inimigos."} rotacao={"Neuvillette Q > Kazuha Q > Beidou EQ > Kazuha E > Fischl E > Neuvillette E  2x AC> Kazuha E > Fischl Q > Beidou E > Neuvillette E AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Fischl"} c={"Beidou"} d={"Kazuha"} />
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Zhongli"} />
              </Comp>
            </Secao>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>Vaporização</h3>
              <p>Times de Vaporize,no geral, são uma opção usada principalmente para Speedruns, onde temos números extremamente altos devido às reações de vaporização que podem deixar qualquer jogador feliz, normalmente esses times tendem a ser usados com personagens dendro no geral, por conta do Burn, porém pode ser usado tranquilamente sem personagens dendro, trocando-os por algum personagem anemos ou flex.</p>
              <Comp titulo={"Neuvillette - Xiangling - Kazuha - Furina"} texto={"Uma variação do time Hypercarry do Neuvillette, essa composição é uma das melhores quando se trata de speedruns pelo fato da alta constância da Xiangling de aplicar pyro, fazendo você vaporizar tanto a furina quanto o Neuvillette, dando bastante dano em praticamente todas as ocasiões."} rotacao={"Neuvillette E > Kazuha Q > Xiangling Q E > Furina E Q > Neuvillette AC E AC Q > Kazuha E > Xiangling E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Xiangling"} c={"Kazuha"} d={"Furina"} />
              </Comp>
              <Comp titulo={"Neuvillette - Dehya - Nahida - Kazuha/Xilonen"} texto={"Um dos times de vaporização mais conhecidos do Neuvillette. Nesse time, Dehya fornece resistência à interrupção e aplica Pyro para vapes, já Nahida consegue fazer algumas reações de burn com Dehya, o que torna o Vape um pouco mais constante."} rotacao={"Nahida EQ > Neuvillette E Q > Kazuha E Q > Dehya 2x E > Neuvillette AC E 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Dehya"} c={"Nahida"} d={"Kazuha"} />
              </Comp>
              <Comp titulo={"Neuvillette - Xiangling - Nahida - Furina"} texto={"Neuvillette e Furina é uma opção muito boa, principalmente quando se trata de aumentar o dano de Neuvillette, além de ter a Xiangling que aplicará Pyro constantemente, temos a Nahida que fará reações de Burn e causa um dano considerável com sua Habilidade Elemental (É recomendado nesses times a xiangling ter por volta de 270~300 de ER)."} rotacao={"Neuvillette E > Nahida E Q > Xiangling Q E > Furina E Q > Neuvillette AC E AC Q > Nahida E > Xiangling E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Xiangling"} c={"Nahida"} d={"Furina"} />
              </Comp>
              <Comp titulo={"Neuvillette - Xiangling - Kazuha - Zhongli/Xilonen"} texto={"Esse é um dos time que, além de números grandes, tem um conforto incrível devido ao Zhongli, o qual fornece shield, além de contar com um debuff universal nos inimigos de resistência e o possível uso de 4 peças de pedra arcaica, tornando-o uma opção incrível para times sem dendro que fazem vaporização (É recomendado nesses times a xiangling ter por volta de 270~300 de ER)."} rotacao={"Neuvillette Q > Zhongli E Hold (Segurado) > Kazuha E > Xiangling Q E > Neuvillette 2x AC E> Kazuha Q E> Zhongli E Hold (Segurado) > Xiangling E > Neuvillette AC E AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Xiangling"} c={"Kazuha"} d={"Zhongli"} />
              </Comp>
              <Comp titulo={"Neuvillette - Xiangling - Emilie - Zhongli/Xilonen/Kazuha"} texto={"Esse é o novo time que Emilie faz com Neuvillette, onde tem tudo que a Emilie precisa, um Pyro para ativar sua A1 e A4, um Shield para proteger Neuvillette dos Burgeons e demais reações ligados ao Pyro, sem contar seu alto dano como Sub Dps nesse time (É recomendado nesses times a xiangling ter por volta de 270~300 de ER)."} rotacao={""}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Xilonen"} />
                <CompLinha a={"Neuvillette"} b={"Xiangling"} c={"Emilie"} d={"Zhongli"} />
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Kazuha"} />
              </Comp>
            </Secao>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>HyperBloom</h3>
              <p>Esta é uma opção viável dado que Neuvillette consegue aplicar Hydro de forma consistente, mesmo que outros Hydros possam ser mais eficientes, devido sua aplicação Hydro ser melhor e ser fora de campo, o que gera maior valor nos times de Hyperbloom . Ainda assim, é considerado uma opção viável para aqueles que ainda não possuem melhores aplicadores hydro, porém querem se utilizar dessa reação.</p>
              <Comp titulo={"Neuvillette - Raiden/Kuki - Nahida - Fischl"} texto={"Caso utilizar a Kuki no lugar da Raiden a rotação abaixo se mantém igual, apenas mudando o ‘’Raiden E’’ por ‘’Kuki E’’."} rotacao={"Nahida EQ > Raiden E > Fischl E > Neuvillette E AC Q AC > Fischl Q > Neuvillette AC E AC"}>
                <CompLinha a={"vazio"} b={"Kuki Shinobu"} c={"vazio"} d={"vazio"} />
                <CompLinha a={"Neuvillette"} b={"Raiden Shogun"} c={"Nahida"} d={"Fischl"} />
              </Comp>

              <Comp titulo={"Neuvillette - Raiden - Baizhu - Furina"} texto={"Caso utilizar a Kuki no lugar da Raiden a rotação abaixo se mantém igual, apenas mudando o ‘’Raiden E’’ por ‘’Kuki E’’."} rotacao={"Neuvillette Q > Raiden E > Furina EQ > Baizhu EQ > Neuvillette 2x AC E AC"}>
                <CompLinha a={"vazio"} b={"Kuki Shinobu"} c={"vazio"} d={"vazio"} />
                <CompLinha a={"Neuvillette"} b={"Raiden Shogun"} c={"Baizhu"} d={"Furina"} />
              </Comp>

              <Comp titulo={"Neuvillette - Kuki - Nahida - Furina"} texto={"Kuki e Furina têm uma sinergia consideravelmente interessante no Hyperbloom, devido ao fato de sua cura ajudar no stack de fanfarra."} rotacao={"Neuvillette E > Furina E > Kuki Q > Nahida EQ > Furina Q > Kuki E > Neuvillette AC E AC Q > Nahida E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Kuki Shinobu"} c={"Nahida"} d={"Furina"} />
              </Comp>

              <Comp titulo={"Neuvillette - Kuki - Viajante Dendro - Collei"} texto={"Time mais “barato” de Hyperbloom, onde o jogo dá praticamente todos personagens do time."} rotacao={"Neuvillette E > Dendro Traveler EQ > Kuki E > Collei QE > Neuvillette AC E Q AC > Dendro Traveler E > Kuki E > Collei > QE > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Kuki Shinobu"} c={"Viajante Dendro"} d={"Collei"} />
              </Comp>
            </Secao>
            <Secao>
              <h3 style={{ fontWeight: '600' }}>Freeze</h3>
              <Comp titulo={"Neuvillette - Furina - Ganyu - Kazuha/Lynette/Anemo"} texto={"Um dos times mais fortes de Neuvillette Freeze, mesmo não tendo um healer, Furina ainda tem valor nesse time, Ganyu colabora com o dano geral do time e no controle de inimigos, através do Freeze, o que torna menos necessário um Shielder ou um healer."} rotacao={"Furina E > Neuvillette E > Kazuha Q > Ganyu EQ > Furina Q > Kazuha E > Neuvillette AC Q E AC> Kazuha E > Ganyu E > Neuvillette 2x AC"}>
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Anemo"} />
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Ganyu"} d={"Kazuha"} />
                <CompLinha a={"vazio"} b={"vazio"} c={"vazio"} d={"Lynette"} />
              </Comp>
              <Comp titulo={"Neuvillette - Furina - Kazuha - Charlotte"} texto={"Uma outra variação de Hypercarry do Neuvillette muito forte, Charlotte tem uma cura sensacional e pode usar 4 peças de Canção do Passado, o que aumenta consideravelmente o dano do AC de Neuvillette."} rotacao={"Neuvillette E > Furina E Q > Kazuha E Q > Charlotte E(Q) > Neuvillette AC Q E AC > Kazuha E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Kazuha"} d={"Charlotte"} />
              </Comp>
              <Comp titulo={"Neuvillette - Furina - Lynette - Charlotte"} texto={"Uma variação do time citado acima para quem não tem o Kazuha."} rotacao={"Neuvillette E > Furina E Q > Lynette Q E > Charlotte E(Q) > Neuvillette AC Q E AC > Lynette E > Neuvillette 2x AC"}>
                <div className={styles.display_none}></div>
                <CompLinha a={"Neuvillette"} b={"Furina"} c={"Lynette"} d={"Charlotte"} />
              </Comp>
            </Secao>
            <p className={styles.fonte} ><b><a target="_blank" href="https://docs.google.com/spreadsheets/d/10XyjMxeWu59gFDU9VVSsmG0MTlh8r7RevRfa7Bk9r-0/edit?gid=1579367017#gid=1579367017">Fonte</a></b></p>
          </Topico>
          <Topico titulo={"Constelações"} id={"constelacoes"} >
            <Constelacao c={"C1"} nome={"Instituição Venerável"} valor={"5"} motivo={"A C1 de Neuvillette é um ótimo investimento, proporcionando um aumento considerável no dano e uma melhoria na qualidade de vida ao ganhar um stack de A1 ao entrar no campo, aumentando o dano em equipes de Dois Elementos e melhorando a resistência a interrupções. Seu valor varia conforme a composição da equipe e o estilo de jogo, mas com toda certeza é uma das melhores constelações dele."} >
              <p>Quando Neuvillette entra no campo de batalha, ele obtém um acúmulo de "Glória do Dragão" do Talento Passivo "Herdeiro do Antigo Legado do Mar". É necessário ter desbloqueado o Talento Passivo "Herdeiro do Antigo Legado do Mar".</p>
              <p>Além disso, ao lançar seu Fortalecimento de <b>Ataque Carregado: Reprimenda Judicial</b> e <b>Ataque Carregado: Justiça Igual,</b> sua Resistência contra Interrupção aumenta.</p>
            </Constelacao>
            <Constelacao c={"C2"} nome={"A Lei Ordena"} valor={"3"} motivo={"A C2 de Neuvillette oferece um aumento direto no dano, concedendo até 42% de CRIT DMG para seus ataques carregados, a sua maior fonte de dano, A sua C2 pode deixar a opção de Coroa de HP% mais viável do que de Dano Crítico. Apesar disso, em builds com muito dano Crítico, essa constelação trará pouco aumento de DPS para Neuvillette, sendo uma constelação que serve normalmente como ponte para sua C3."} >
              <p>O Talento Passivo "Herdeiro do Antigo Legado do Mar" é fortalecido: para cada acúmulo de "Glória do Dragão", aumenta o Dano CRIT de <b>Ataque Carregado: Justiça Igual</b> em 14%, com um máximo de aumento de 42%. É necessário ter desbloqueado o Talento Passivo "Herdeiro do Antigo Legado do Mar".</p>
            </Constelacao>
            <Constelacao c={"C3"} nome={"Ficção Antiga"} valor={"5"} motivo={"Aumenta o nível do talento de Ataques Normais de Neuvillette, resultando em um bom aumento de dano, sendo uma das suas melhores constelações é recomendável parar por aqui, já que suas próximas constelações não irão compensar tanto."} >
              <p>Aumenta o nível do Ataque Normal: Como Águas Paradas em 3.</p>
              <p>O nível máximo de elevação é 15.</p>
            </Constelacao>
            <Constelacao c={"C4"} nome={"Coroado em Compaixão"} valor={"2"} motivo={"A C4 de Neuvillette gera gotas adicionais por rotação, as gotas que ele gera em sua C4 resultam entre 1~2 AC por rotação, o que parece ser uma boa coisa, porém, dificilmente você vai querer estender tanto o tempo em campo de Neuvillette sem querer re-aplicar os Buffs passados. Sua C4 só compensa se você for atrás da C6, sendo muito ruim sua C4 sem a C6."} >
              <p>Quando Neuvillette está ativo no campo de batalha e é curado, gerará 1 Gota d'Água Primordial. Esse efeito pode ser desencadeado uma vez a cada 4s.</p>
            </Constelacao>
            <Constelacao c={"C5"} nome={"Julgamento Axiomático"} valor={"2"} motivo={"Aumenta o nível do talento Supremo de Neuvillette, oferecendo um leve aumento de dano, mas muito pouco comparado às demais constelações, a tornado uma das piores constelação de Neuvillette."} >
              <p>Aumenta o nível do Supremo: Marés, Eu Retornei em 3.</p>
              <p>O nível máximo de elevação é 15.</p>
            </Constelacao>
            <Constelacao c={"C6"} nome={"Recompensa Furiosa"} valor={"5"} motivo={"A C6 de Neuvillette aumenta a duração e o dano dos seus Ataques Carregados, permitindo estender a duração absorvendo Gotas de Água e adicionando dano adicional a cada 2s. Essa constelação oferece um grande aumento de dano, mas pode exigir ajustes nas rotações e na duração dos buffs. É um ótimo aprimoramento para Neuvillette."} >
              <p>Ao lançar <b>Ataque Carregado: Justiça Igual,</b> Neuvillette pode absorver as Gotas d'Água Primordial em uma certa AdE próxima. Cada Gota d'Água Primordial absorvida prolongará a duração de Ataque Carregado: Justiça Igual em 1s.</p>
              <p>Além disso, quando seu <b>Ataque Carregado: Justiça Igual</b> atingir um inimigo, lançará 2 correntes adicionais a cada 2s. Cada corrente causa Dano Hydro equivalente a 10% da Vida Máxima de Neuvillette. O dano causado dessa forma é considerado <b>Dano de Ataque Carregado: Justiça Igual.</b></p>
            </Constelacao>
            <Secao>
              <h3 style={{fontWeight: '600', marginTop: '40px'}} >Aumento de Dano por Constelação</h3>
              <p>Foi considerado:</p>
              <div>
                <p><b>Neuvillette:</b> R1, 4 peças de MH</p>
                <p><b>Furina:</b>  Espada Pútrida, 4 peças de GT</p>
                <p><b>Kazuha:</b> Xiphos, 4 peças de VV</p>
                <p><b>Zhongli:</b> Favonius, 4 peças de Pedra arcaica</p>
              </div>
              <TabelaConstelacoes></TabelaConstelacoes>
              <p className={styles.fonte} ><b><a target="_blank" href="https://docs.google.com/spreadsheets/d/1RIN5Clqlqq3h2wLHNQ-wbOSE3lGAT2Y9DYFnC7KqJTg/edit?gid=1820417672#gid=1820417672">Fonte</a></b></p>
            </Secao>
            <ImgFim imagem={funnyImage} alt={"fim"}/>
          </Topico>
        </main>
      </div>
    </>
  );
}
