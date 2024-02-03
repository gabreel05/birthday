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
        src="/nos6.jfif"
        alt="Nós 6"
        width={250}
        height={250}
        className={styles.image}
      />
      <span>Dessa bela apresentação, mas você é mais bela! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É DEDICADA!</h2>
      <span>
        Em tudo que você faz, você se dedica, você se entrega, você se doa, e
        isso é notável em tudo!
      </span>
      <button onClick={() => router.push("/9")}>Próximo</button>
    </div>
  );
}
