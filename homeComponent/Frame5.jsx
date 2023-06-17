import styles from "@/styles";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Frame5 = () => {
  return (
    <div className={`${styles.innerWidth} relative mb-[12rem]`}>
      <div className="absolut">
        <Image src="/map.png" fill alt="map" />
      </div>

      <div className="py-[4rem] lg:py-[6rem]">
        <div className="flex justify-center items-center">
          <div>
            <h1 className={`${styles.h2Style} text-[black] lg:w-[708px] w-full text-center`}>
            Join thousands of Designers Across the globe, 
together we learn and grow
            </h1>
            
            <div className="flex justify-center items-center mx-auto mt-4">
            <div href="" className="w-[120px] h-[40px] font-light flex items-center justify-center rounded-xl bg-blue-500 text-white">
                    <Link href="/connect">Join</Link>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame5;
