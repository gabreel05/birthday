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
        src="/nos9.jfif"
        alt="Nós 9"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Casal bonito! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE CRIATIVA!</h2>
      <span>
        A pessoa mais criativa que conheço! Você sempre tem uma ideia, uma
        solução, um jeito de fazer as coisas acontecerem, um "mental explosion"
        de coisas novas!
      </span>
      <button onClick={() => router.push("/12")}>Próximo</button>
    </div>
  );
}
