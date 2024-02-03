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
        src="/nos22.jfif"
        alt="Nós 22"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Porque a gente combinando ficou muito bonito! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ AMA A VIDA!</h2>
      <span>
        Você é uma pessoa que ama a vida, que ama viver, que ama aproveitar cada
        segundo, cada momento, cada oportunidade!
      </span>
      <button onClick={() => router.push("/26")}>Próximo</button>
    </div>
  );
}
