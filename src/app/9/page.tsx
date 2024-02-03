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
        src="/nos7.jfif"
        alt="Nós 7"
        width={250}
        height={250}
        className={styles.image}
      />
      <span>Dessa outra apresentação extremamente especial! ❤️</span>
      {/* <AnimatedText phrases={["VOCÊ É EXTREMAMENTE CARINHOSA!", 1000]} /> */}
      <h2>VOCÊ É EXTREMAMENTE ALEGRE!</h2>
      <span>
        Você sempre tem uma boa história, uma boa risada, um bom papo!
      </span>
      <button onClick={() => router.push("/10")}>Próximo</button>
    </div>
  );
}
