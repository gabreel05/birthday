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
        src="/nos1.jfif"
        alt="Nós 1"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Nossas primeiras fotos como casal e que casal bonito! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE CARINHOSA!</h2>
      <span>
        Você sempre acha como demonstrar o carinho que vem de dentro do seu
        coração, é sempre tão suave, tão perfeito, tão divino!
      </span>
      <button onClick={() => router.push("/fifith")}>Próximo</button>
    </div>
  );
}
