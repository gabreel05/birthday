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
        src="/nos5.jfif"
        alt="Nós 1"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Mais uma desse belo passeio! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É REFLEXO DO ESPIRITO SANTO!</h2>
      <span>
        E como me alegra poder escrever isso! Você é um reflexo vivo da Graça de
        Deus em tudo que faz!
      </span>
      <button onClick={() => router.push("/8")}>Próximo</button>
    </div>
  );
}
