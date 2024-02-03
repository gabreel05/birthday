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
        src="/nos20.jfif"
        alt="Nós 20"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>E tome mais desse casal bonito! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ MELHORA O AMBIENTE!</h2>
      <span>
        Com você o ambiente muda, tudo fica mais leve, mais alegre, mais bonito,
        reflexo de quem você é!
      </span>
      <button onClick={() => router.push("/23")}>Próximo</button>
    </div>
  );
}
