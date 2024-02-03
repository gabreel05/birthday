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
        src="/ariele.jpg"
        alt="Ariele"
        width={200}
        height={200}
        className={styles.image}
      />
      <span>Olha só que mulherão que eu namoro hein! 🤭</span>
      {/* <AnimatedText phrases={["VOCÊ É A MULHER MAIS LINDA DO MUNDO!", 1000]} /> */}
      <h2>VOCÊ É A MULHER MAIS LINDA DO MUNDO!</h2>
      <span>
        Não podia começar de outra forma que não falando do fato de que você é a
        mulher mais bela, bonita, linda que existe!
      </span>
      <button onClick={() => router.push("/fourth")}>Próximo</button>
    </div>
  );
}
