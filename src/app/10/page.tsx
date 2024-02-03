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
        src="/nos8.jfif"
        alt="Nós 8"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>A gente e nosso filho kkkkkkkk! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE DISPOSTA!</h2>
      <span>
        Com você não tem tempo ruim! Em tudo, você sempre topa tudo e está
        sempre disposta a ajudar, a fazer, a ir, a estar!
      </span>
      <button onClick={() => router.push("/11")}>Próximo</button>
    </div>
  );
}
