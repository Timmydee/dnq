import styles from "@/styles";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Frame5 = () => {
  return (
    <div>
      <div className={`${styles.innerWidth} relative mb-[2rem] mt-[4rem]`}>
        <div className="absolut">
          <Image src="/map.png" fill alt="map" />
        </div>

        <div className="py-[4rem] lg:py-[6rem]">
          <div className="flex justify-center items-center">
            <div>
              <h1
                className={`${styles.h2Style} text-zinc-800 lg:text-[40px] text-[20px] font-sans font-semibold lg:w-[708px] w-full text-center`}
              >
                Join thousands of designers across the globe, together we learn
                and grow
              </h1>

              <div className="flex justify-center cursor-pointer items-center mx-auto mt-4">
                <div
                  href=""
                  className="w-[130px] h-[40px] font-light font-sans flex items-center justify-center rounded-xl bg-blue-500 cursor-pointer shadow-sm hover:shadow-lg hover:bg-blue-600 text-white"
                >
                  <Link href="/connect">Join</Link>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Frame5;
