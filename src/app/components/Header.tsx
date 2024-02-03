"use client";

import Image from "next/image";
import React from "react";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/flower.svg" alt="Flowers" width={50} height={50} />
      <span>FELIZ ANIVERSÁRIO, AMOR DA MINHA VIDA!</span>
      <Image src="/flower.svg" alt="Flowers" width={50} height={50} />
    </header>
  );
}
