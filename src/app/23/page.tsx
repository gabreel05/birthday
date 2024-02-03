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
        src="/nos21.jfif"
        alt="Nós 21"
        width={250}
        height={200}
        className={styles.image}
      />
      <span>Na espontaneidade também somos bonitos! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ AMA SUA FAMÍLIA!</h2>
      <span>
        A forma que você ama sua família é algo que me encanta, a união de vocês
        e o quanto se amam!
      </span>
      <button onClick={() => router.push("/25")}>Próximo</button>
    </div>
  );
}
