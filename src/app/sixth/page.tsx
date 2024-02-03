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
        src="/nos3.jfif"
        alt="Nós 3"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>
        Uma segunda parte do rolê que não deu tão certo mas saiu essa bela foto!
        ❤️
      </span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE ATENCIOSA!</h2>
      <span>
        Você sempre está preocupada, interessada em saber, você está sempre
        presente, sempre atenta, sempre cuidadosa!
      </span>
      <button onClick={() => router.push("/1")}>Próximo</button>
    </div>
  );
}
