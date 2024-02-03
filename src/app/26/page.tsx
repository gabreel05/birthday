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
        src="/nos24.jfif"
        alt="Nós 24"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>A GENTE ATÉ APARECEU NA TV! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ TEM UM INTERIOR TÃO LINDO QUANTO SEU EXTERIOR!</h2>
      <span>
        Você é linda por dentro e por fora, e isso é uma das coisas que mais amo
        em você!
      </span>
      <button onClick={() => router.push("/27")}>Próximo</button>
    </div>
  );
}
