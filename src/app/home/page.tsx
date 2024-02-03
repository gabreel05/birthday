"use client";

import React from "react";
import { useRouter } from "next/navigation";

import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";

import phrases from "../data/phrases";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  function handleButtonClick() {
    router.push("/second");
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <AnimatedText phrases={phrases} />
      <button onClick={handleButtonClick}>Próximo</button>
    </div>
  );
}
