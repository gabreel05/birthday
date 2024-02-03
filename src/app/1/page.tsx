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
        src="/nos4.jfif"
        alt="Nós 4"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>A gente combinando! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ TEM O MELHOR CARINHO!</h2>
      <span>
        Seja de rosto, nossos carinhos nas mãos, ou até mesmo um cafuné, você
        tem o melhor carinho do mundo!
      </span>
      <button onClick={() => router.push("/7")}>Próximo</button>
    </div>
  );
}
