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
        src="/nos2.jfif"
        alt="Nós 2"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Nosso belo passeio no ônibus turismo, tão especial ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE ATENCIOSA!</h2>
      <span>
        Você sempre está preocupada, interessada em saber, você está sempre
        presente, sempre atenta, sempre cuidadosa!
      </span>
      <button onClick={() => router.push("/sixth")}>Próximo</button>
    </div>
  );
}
