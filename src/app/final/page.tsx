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
      <h2>TE AMO!</h2>
      <span>
        Meu amor que seu dia seja abençoado, cheio de alegria, cheio de amor,
        cheio de você! Te amo eternamente, além do que é possível expressar!
      </span>
      <button onClick={() => router.push("/home")}>Voltar ao começo</button>
    </div>
  );
}
