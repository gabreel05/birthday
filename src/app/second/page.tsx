"use client";

import React from "react";
import { useRouter } from "next/navigation";

import AnimatedText from "../components/AnimatedText";

import styles from "./page.module.css";

export default function Second() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <AnimatedText
        phrases={[
          "Então para os seus 26 anos, decidi trazer 26 motivos pelos quais você é a mulher mais incrível que existe: ",
          1000,
        ]}
      />
      <button onClick={() => router.push("/third")}>Próximo</button>
    </div>
  );
}
