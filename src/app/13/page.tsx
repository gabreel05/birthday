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
        src="/nos11.jfif"
        alt="Nós 11"
        width={200}
        height={250}
        className={styles.image}
      />
      <span>Abraço de urso! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE DIVERTIDA!</h2>
      <span>
        Que pessoa boa de se estar ao lado é você! Sempre tirando uma boa
        risada, um bom sorriso, um bom momento!
      </span>
      <button onClick={() => router.push("/14")}>Próximo</button>
    </div>
  );
}
