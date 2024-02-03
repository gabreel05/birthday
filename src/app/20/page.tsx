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
        src="/nos18.jfif"
        alt="Nós 18"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Sorrisos lindos e sinceros! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ TEM BELAS PALAVRAS!</h2>
      <span>
        Você sempre tem as palavras certas para me dizer, sempre me conforta com
        suas palavras, sempre me faz sorrir com suas palavras! E isso não só
        para mim mas para todos!
      </span>
      <button onClick={() => router.push("/21")}>Próximo</button>
    </div>
  );
}
