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
        src="/nos15.jfif"
        alt="Nós 15"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>QUE CASALZÃO! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ TEM O MELHOR ABRAÇO!</h2>
      <span>
        Ah céu, quando estamos abraçados! É o melhor lugar do mundo, é o melhor
        momento do dia, é o melhor sentimento que existe!
      </span>
      <button onClick={() => router.push("/18")}>Próximo</button>
    </div>
  );
}
