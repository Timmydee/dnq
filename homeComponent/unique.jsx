import React from "react";
import styles from "@/styles";
import Image from "next/image";

const Unique = () => {
  return (
    <div className={`${styles.innerWidth} px-[4rem]`}>
      <div className="">
        <p
          className={`${styles.pStyle2} text-[#333333] text-center py-6 hidden lg:block md:hidden`}
        >
          No matter your design niche, we've got a space for you in Designer's
          Query.
        </p>

        <div className="lg:flex lg:flex-row flex-col justify-between items-center lg:my-[6rem] my-[3rem] lg:space-y-0 space-y-6">
          <div className="fle fle-col items-center justify-start">
            <h4 className="text-zinc-800 text-[24px] lg:text-[39px] font-extrabold lg:text-start text-center ">
              Why Us?
            </h4>
            <p className="lg:w-[432px] text-zinc-800 text-[15px] pt-2 lg:text-[18px] font-normal w-[100%] lg:text-start text-center">
              DNQ is a community-driven platform dedicated to answering all of
              the designer's questions. Our platform is designed to be a
              one-stop shop for all your design queries. Whether you're into
              web, product, UX/UI, graphic, or brand design, we have something
              for everyone.
            </p>
          </div>

          <div className="relativ">
            <div className="lg:w-[500px] lg:h-[400px] w-[280px] h-[220px] relative">
              <Image src="/unique.png" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
