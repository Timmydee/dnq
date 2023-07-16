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
    name: "How to design a Game UI?",
  },
  {
    name: "What are the shortcuts for Figma?",
  },
  {
    name: "What is Photoshop Beta?",
  },
  {
    name: "How can I grow in UX?",
  },
  {
    name: "What design process do you use?",
  },
];

const Recent = () => {
  return (
    <div className={`${styles.innerWidth} border px-4 py-4 rounded-2xl`}>
      <h2 className={`${styles.h5Style} mt-4 mb-2 font-semibold `}>Recent Topics</h2>
      <div>
        {recents.map((recent) => {
          return (
            <div key={recent.name} className="mb-2">
              <div className="flex justify-between items-center mb-2 ">
                <div>
                  <h4 className={`${styles.pStyle} `}>{recent.name}</h4>
                </div>
                <div>
                  <CiCircleChevRight className="w-[20px] h-[20px]" />
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
