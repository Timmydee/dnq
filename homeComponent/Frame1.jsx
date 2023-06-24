import React from "react";
import styles from "@/styles";
import Image from "next/image";

const Frame1 = () => {
  return (
    <div
      className={`${styles.innerWidth} h-full relative px-[4rem] mt-[0rem] mb-[0rem]`}
    >
      <div className="">
        <div className="w-[922px] h-[556px] top-[0%] bottom-[0%] right-0 absolute hidden lg:block md:hidden">
          <Image src="/Decores.png" fill />
        </div>
        <div className=" lg:w-[90px] lg:h-[105px] w-[26px] h-[33px]  lg:top-[15%] top-[63%] bottom-[0%] right-[40%] absolute">
          <Image src="/bulb.png" fill />
        </div>
        <div className="w-[83px] h-[96px] top-[60%] bottom-[0%] right-[45%] absolute  hidden lg:block md:hidden">
          <Image src="/kite.png" fill />
        </div>
        <div className="w-[83px] h-[96px] top-[50%] bottom-[0%] right-[0%] absolute hidden lg:block md:hidden">
          <Image src="/star.png" fill />0
        </div>
        <div className="w-[83px] h-[96px] top-[76%] bottom-[0%] right-[35%] absolute hidden lg:block md:hidden">
          <Image src="/star.png" fill />
        </div>
      </div>

      <div className="relative lg:flex lg:flex-row flex-col lg:justify-between justify-cente items-cente w-full">
        <div className="fle w-">
          <div className=" flex-col justify-center lg:justify-start lg:items-start items-center inline-flex pt-[0.1rem] lg:pt-[3rem] mt-[1rem] lg:[4rem] ">
            <div className="lg-w-full w-[296px] mx-auto">
              <h2 className="text-zinc-800 text-[30px] lg:text-[57px] font-extrabold lg:text-start text-center ">
                Take your design
                career to a new level
              </h2>
              <p className="lg:w-[532px] text-zinc-800 text-[18px] pt-2 lg:text-[24px] font-normal w-[100%] lg:text-start text-center">
                Designers Query, every Designer's friend.
                Get expert answers to your questions as a Professional Designer.
              </p>
      
            </div>
            <div className="lg:px-[54px] px-[34px] pt-4 pb-[17px] mt-2  bg-blue-500 rounded-lg justify-center items-center inline-flex">
              <div className="text-white text-[16px] lg:text-[18px] font-bold">
                Get Started
              </div>
            </div>
          </div>
          {/* <div className="w-[117.67px] h-[150px] left-[864px] top-[138px] absolute">
            <div className="w-[117.67px] h-[100.85px] left-[0px] top-[0px] absolute"></div>
            <div className="w-[78.22px] h-[131.15px] left-[20.02px] top-[18.85px] absolute"></div>
          </div>
          <div className="w-[26px] h-[26px] left-[128px] top-[163px] absolute bg-amber-500 rounded-full" />
          <div className="w-[26px] h-[26px] left-[314px] top-[738px] absolute bg-amber-500 rounded-full" />{" "} */}
        </div>

        <div className="relativ">
          <div className="lg:w-[542px] lg:h-[688px] w-[300px] h-[400px] lg:mt-[4rem] mt-[1.5rem] relative">
            <Image src="/dnqHero.png" fill />
          </div>
        </div>
      </div>
      {/* <div className="w-[1128px] h-[976px] relative">
      <div className="w-[482px] h-[506px] left-[802px] top-[65px] absolute">
        <Image src="/dnqHero.png" fill />
      </div>

      <div className="p-[0px] left-[74px] top-[327px] absolute flex-col justify-start items-start gap-[20px] inline-flex">
        <div className="p-[0px] flex-col justify-start items-start gap-[10px] flex">
          <div className="text-zinc-800 text-[57px] font-extrabold">
            Take your design <br />
            career to a new level
          </div>
          <div className="w-[532px] text-zinc-800 text-[24px] font-normal">
            Designers Query, every Designer's friend. <br />
            Get expert answers to your questions as a Professional Designer.
          </div>
        </div>
        <div className="px-[54px] pt-4 pb-[17px] bg-blue-500 rounded-lg justify-center items-center inline-flex">
          <div className="text-white text-[18px] font-bold">Get Started</div>
        </div>
      </div>
      <div className="w-[117.67px] h-[150px] left-[864px] top-[138px] absolute">
        <div className="w-[117.67px] h-[100.85px] left-[0px] top-[0px] absolute"></div>
        <div className="w-[78.22px] h-[131.15px] left-[20.02px] top-[18.85px] absolute"></div>
      </div>
      <div className="w-[26px] h-[26px] left-[128px] top-[163px] absolute bg-amber-500 rounded-full" />
      <div className="w-[26px] h-[26px] left-[314px] top-[738px] absolute bg-amber-500 rounded-full" /> */}
      {/* </div> */}
      {/* <div className='flex justify-center items-center lg:h-[90vh] h-[70vh] my-auto'>
        <div className='lg:w-[680px] w-[80%] lg:h-[377px] h-[227px] bg-white rounded-xl flex justify-center items-center'>
          <div className='w-full'>
            <div>
              <h1 className={`${styles.h2Style} text-[#0074D9] text-center`}>Designers Help Desk</h1>
              <p className={`${styles.pStyle2} mt-1 text-[#333333] text-center`}>Where questions get answered and designers thrive</p>
              </div>
              <div className='flex items-center justify-center'>
              <input 
                placeholder='Search'
                className='lg:w-[70%] md:w-[80%] w-[92%] h-12 border mt-5 rounded-xl shadow-sm hover:shadow-lg border-[#333333] p-[10px] lg:p-[20px]'
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Frame1;
