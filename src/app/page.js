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
        <ImgFull imagem={Banner} alt="Você é um merda, Sun"/>
        <Topico titulo="Resumo" id="resumo">
          <p>Neuvillette é um personagem T5 Hydro Catalisador com um estilo único de Gameplay, baseado principalmente em seus ataques carregados de dano constante e em área</p>
        </Topico>
        <div className={styles.pros_cons}>
          <Details titulo="Pros" cor={detailsCor.verde}>
            <div>
              <p>hydro gay</p>
              <p>hydro gay</p>
              <p>hydro gay</p>
              <p>hydro gay</p>
            </div>
          </Details>
          <Details titulo="Contras" cor={detailsCor.vermelho}>
            <div>
              <p>velho broxa</p>
              <p>velho broxa</p>
              <p>velho broxa</p>
              <p>velho broxa</p>
            </div>
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
