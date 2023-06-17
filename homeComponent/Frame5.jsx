import styles from "@/styles";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Frame5 = () => {
  return (
    <div>
    <div className={`${styles.innerWidth} relative mb-[0rem]`}>
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

      <div className="lg:px-16 px-1 flex lg:flex-col lg:justify-center justify-between items-center py-6 text-[#343A40] ">
        <div className="flex lg:gap-6 gap-1">
          <p>© 2023 Designers Query</p>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Frame5;
