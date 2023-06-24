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
                className={`${styles.h2Style} text-zinc-800 lg:text-[40px] text-[20px] font-semibold lg:w-[708px] w-full text-center`}
              >
                Join thousands of Designers Across the globe, together we learn
                and grow
              </h1>

              <div className="flex justify-center cursor-pointer items-center mx-auto mt-4">
                <div
                  href=""
                  className="w-[120px] h-[40px] font-light flex items-center justify-center rounded-xl bg-blue-500 shadow-sm hover:shadow-lg hover:bg-blue-700 text-white"
                >
                  <Link href="/connect">Join</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-16 px-1 flex  lg:flex-row flex-col justify-center lg:justify-between items-center py-6 text-[#343A40] font-light lg:text-[16px] text-[14px] ">
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-1 items-center ">
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
