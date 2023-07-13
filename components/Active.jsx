"use client";
import React from "react";
import styles from "@/styles";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";

const recents = [
  {
    name: "The Impact of AI to Designers?",
  },
  {
    name: "The Impact of AI to Designers?",
  },
  {
    name: "The Impact of AI to Designers?",
  },
  {
    name: "The Impact of AI to Designers?",
  },
];

const Active = () => {
  return (
    <div className={`${styles.innerWidth} border px-4 py-5 rounded-2xl`}>
      <h2 className={`${styles.h5Style} mb-1 mt-2 font-semibold`}>Active Members </h2>
      <p className={`${styles.pStyle} font-light mb-2`}>Members based on you tag</p>

      <div className="w-[302px] h-[200px] relative">
        <Image src="/activeImg.png" fill />
      </div>
    </div>
  );
};

export default Active;
