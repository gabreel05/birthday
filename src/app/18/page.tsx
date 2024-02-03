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
        src="/nos16.jfif"
        alt="Nós 16"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Desse passeio que foi tão divino! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ TEM O MELHOR BEIJO!</h2>
      <span>
        Não podia deixar de falar desse hehe pois como bem disse, depois dele
        nem quero lavar minha boca haha!
      </span>
      <button onClick={() => router.push("/19")}>Próximo</button>
    </div>
  );
}
