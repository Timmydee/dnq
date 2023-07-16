import React from "react";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

const Frame1 = () => {
  return (
    <div
      className={`${styles.innerWidth} h-full relative px-[4rem] pt-[1rem] mb-[0rem]`}
    >
      <div className="">
        <div className="w-[922px] h-[556px] top-[0%] bottom-[0%] right-0 absolute hidden lg:block md:hidden">
          <Image src="/Decores.png" fill />
        </div>
        <div className=" lg:w-[90px] lg:h-[105px] w-[26px] h-[33px] lg:top-[15%] top-[65%] bottom-[0%] lg:right-[40%] right-[69%]  absolute">
          <Image src="/bulb.png" fill />
        </div>
        <div className="lg:w-[83px] lg:h-[96px] w-[26px] h-[33px] lg:top-[75%] top-[70%] bottom-[0%] lg:right-[45%] right-[10%] absolute  ">
          <Image src="/kite.png" fill />
        </div>
        <div className="lg:w-[83px] lg:h-[96px] w-[26px] h-[33px] top-[85%] lg:top-[50%] bottom-[0%] right-[10%] absolute ">
          <Image src="/star.png" fill />
        </div>
        <div className="lg:w-[83px] lg:h-[96px] w-[26px] h-[33px] lg:top-[84%] top-[80%] bottom-[0%] lg:right-[37%] right-[83%] absolute">
          <Image src="/star.png" fill />
        </div>
      </div>

      <div className="relative lg:flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full">
        <div className="fle w-">
          <div className=" flex-col justify-center lg:justify-start lg:items-start items-center inline-flex ">
            <div className="lg:w-full w-[296px]">
              <h2 className="text-zinc-800 text-[30px] lg:text-[57px] font-extrabold lg:text-start text-center ">
                Take your design <br/>
                career to a new level
              </h2>
              <p className="lg:w-[532px] text-zinc-800 text-[18px] lg:text-[24px] font-normal w-[100%] lg:text-start text-center">
              
                Get expert answers to your questions as a Professional Designer.
              </p>
      
            </div>
            <div className="lg:px-[54px] px-[34px] pt-4 pb-[17px] mt-2 cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-lg justify-center items-center inline-flex">
              <Link href='/' className="text-white text-[16px] lg:text-[18px] font-bold">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="w-[20px] h-[20px] left-[128px] top-[30%] absolute bg-amber-500 rounded-full lg:block hidden" />
          <div className="w-[20px] h-[20px] left-[314px] bottom-[10%] absolute bg-amber-500 rounded-full lg:block hidden" />{" "}
        </div>

        <div className="relativ">
          <div className="lg:w-[682px] lg:h-[806px] w-[260px] h-[320px] lg:mt-[4rem] mt-[1.5rem] relative">
            <Image src="/dnqHero.png" fill />
          </div>
          {/* <div className="w-[100%] h-[20px] bg-white opacity-10 block lg:hidden md:hidden"/> lg:w-[542px] lg:h-[700px]*/}

          {/* div */}
        </div>
        
      </div>

    </div>
  );
};

export default Frame1;
