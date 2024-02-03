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
        src="/nos19.jfif"
        alt="Nós 19"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>
        De mais um dia que foi incrível, porque todos os dias com você são
        incríveis! ❤️
      </span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE CRENTE!</h2>
      <span>
        Sim, seu amor intenso ao Senhor é lindo! Você é uma mulher de fé, que
        sabe de quem é Filha, e que tem um coração que busca agradar a Deus!
      </span>
      <button onClick={() => router.push("/22")}>Próximo</button>
    </div>
  );
}
