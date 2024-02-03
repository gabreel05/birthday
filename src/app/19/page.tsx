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
        src="/nos17.jfif"
        alt="Nós 17"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Mais uma desse grandioso dia! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É UMA EXCELENTE TEÓLOGA!</h2>
      <span>
        Você sempre tem bons comentários, boas ligações, boas histórias, uma boa
        percepção do texto!
      </span>
      <button onClick={() => router.push("/20")}>Próximo</button>
    </div>
  );
}
