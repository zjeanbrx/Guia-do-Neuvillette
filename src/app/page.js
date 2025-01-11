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
