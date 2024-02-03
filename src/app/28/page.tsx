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
        src="/nos25.enc"
        alt="Nós 25"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>
        Volto a colocar uma foto sua porque você é a maior perfeição que existe
        ! ❤️
      </span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É SIMPLESMENTE VOCÊ!</h2>
      <span>
        Ariele dos Santos dos Anjos! É quem você é e é quem você precisa ser
        para ser a pessoa mais incrível que existe!
      </span>
      <button onClick={() => router.push("/final")}>Próximo</button>
    </div>
  );
}
