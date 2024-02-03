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
        src="/nos23.jfif"
        alt="Nós 23"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Quero estar com você onde e quando for! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É PERFEITA!</h2>
      <span>
        Você é a pessoa mais perfeita que eu já conheci, você é a pessoa mais
        linda que eu já vi, você é a pessoa mais incrível que eu já amei!
      </span>
      <button onClick={() => router.push("/28")}>Próximo</button>
    </div>
  );
}
