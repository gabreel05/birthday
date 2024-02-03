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
        src="/nos13.jfif"
        alt="Nós 13"
        width={250}
        height={250}
        className={styles.image}
      />
      <span>
        E essas fotos que ficaram tão lindas que nem tenho o que falar! ❤️
      </span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE INSPIRADORA!</h2>
      <span>
        Falando em inspiração, você é inspiradora em tudo! Você me inspira a ser
        melhor todos os dias, pois sei que você busca isso também!
      </span>
      <button onClick={() => router.push("/16")}>Próximo</button>
    </div>
  );
}
