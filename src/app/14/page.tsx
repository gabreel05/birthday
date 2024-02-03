"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AnimatedText from "../components/AnimatedText";

import styles from "./page.module.css";

export default function Second() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Image
        src="/nos12.jfif"
        alt="Nós 12"
        width={200}
        height={300}
        className={styles.image}
      />
      <span>Mais desse Ano Novo que foi o melhor da minha vida! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE ESTUDIOSA!</h2>
      <span>
        2 faculdades e caminhando pra um mestrado? Você é uma máquina de estudar
        hein! Você me inspira muito!
      </span>
      <button onClick={() => router.push("/15")}>Próximo</button>
    </div>
  );
}
