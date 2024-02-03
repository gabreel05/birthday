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
        src="/nos10.jfif"
        alt="Nós 10"
        width={200}
        height={300}
        className={styles.image}
      />
      <span>Essa foto que ficou eternizada pra nós! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É UMA ARTISTA INIGUALÁVEL!</h2>
      <span>
        É a melhor que conheço! Pinta, desenha, borda, faz maquete, faz de tudo!
        É realmente espetacular!
      </span>
      <button onClick={() => router.push("/13")}>Próximo</button>
    </div>
  );
}
