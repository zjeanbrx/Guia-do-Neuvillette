'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Bloco from "@/componentes/bloco";
import Topico from "@/componentes/topico"
import { useState } from "react";

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
      <button className={styles.button} onClick={Menu}></button>
      <nav className={menuEstado ? `${menuAberto} ${menu}` : `${menuFechado} ${menu}`}>
      </nav>
      <div className={menuEstado ? `${displayBlock} ${fecharMenuDiv}` : displayNone} onClick={fecharMenu}></div>
      <header>
        <h1>Neuvillette by Sun</h1>
      </header>
      <main>
        <Topico titulo="Resumo">
          <p>Neuvi é horrivel lixo</p>
        </Topico>
        <Topico titulo="Armas">
          <p>usa qualquer merda</p>
        </Topico>
        <Topico titulo="Status">
          <p>deixa nivel 0 mesmo essa bosta</p>
        </Topico>
      </main>
    </div>
  );
}
