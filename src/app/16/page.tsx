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
        src="/nos14.jfif"
        alt="Nós 14"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Seu sorriso tão lindo e sempre alegre! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE GENTIL!</h2>
      <span>
        O que falar de sua gentileza! Todo mundo gosta de você, você é querida
        por todos e é por ser essa pessoa linda que você é!
      </span>
      <button onClick={() => router.push("/17")}>Próximo</button>
    </div>
  );
}
