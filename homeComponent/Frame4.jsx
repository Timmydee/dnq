import React from "react";
import styles from "@/styles";
import Link from "next/link";
import Image from "next/image";

const Frame4 = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className={`${styles.xPaddings} py-[13rem]`}>
        <div className="flex justify-between flex-wrap items-center">
          <div className="lg:w-[560px] w-full">
            <h3 className={`${styles.h5Style}`}>Ask Questions</h3>
            <p className={`${styles.pStyle} my-4`}>
              Tap into the collective knowledge of our community by posting your
              design-related questions and receiving expert answers in no time
            </p>

            <div
              href=""
              className="w-[120px] h-[40px] font-light flex items-center justify-center rounded-xl bg-blue-500 text-white"
            >
              <Link href="/connect">Get Started</Link>
            </div>
          </div>

          <div className="bg-white lg:w-[700px] w-full mt-10 lg:mt-0 h-[125px] rounded-xl p-8 shadow-lg z-10 ">
            <div className="gradient-02 z-0" />
            <div className="flex items-center justify-center gap-4">
              <Image src="/ask.png" width={67} height={67} alt="ask form" />

              <input className="h-12 w-full border" placeholder="search" disabled />
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap items-center mt-[6rem] lg:mt-[10rem] mb-[6rem] lg:mb-[10rem]">
          <div className="">
            {/* <div className='gradient-02 z-0'/> */}
            <div className="bg-white lg:w-[700px] w-full mt-10 lg:mt-0 rounded-xl p-8 shadow-lg">
              <input className="h-12 w-full border" placeholder="search" disabled />
            </div>
            <div className="flex justify-center items-center">
              <Image src="/robust.png" width={500} height={500} alt="robust" />
            </div>
          </div>

          <div className="lg:w-[560px] w-full">
            <h3 className={`${styles.h5Style}`}>Ask Questions</h3>
            <p className={`${styles.pStyle} my-4 `}>
              Tap into the collective knowledge of our community by posting your
              design-related questions and receiving expert answers in no time
            </p>

            <div
              href=""
              className="w-[120px] h-[40px] font-light flex items-center justify-center rounded-xl bg-blue-500 text-white"
            >
              <Link href="/connect">Get Started</Link>
            </div>
          </div>
        </div>

        {/* user Testimony */}
        <div>
          <Image src='/user.png' width={1700} height={800} alt="user" />
        </div>
        {/* <div>
          <div >
            <div className="flex justify-center items-center">
              <div className="bg-[#D9F8F5] lg:w-[708px] w-full h-[218px] flex justify-around items-center rounded-2xl">
                <Image src="/user1.png" width={151} height={151} alt="user1" />

                <div>
                  <h5 className={`${styles.h5Style}`}>Emem Udom</h5>
                  <p className={`${styles.pStyle}`}>Ui/Ux Designer</p>
                </div>

                <div className="bg-[#FFB400] w-[93px] h-[50px] flex justify-center items-center rounded-xl">
                  <p className={`${styles.pStyle} text-white`}> Verified</p>
                </div>
              </div>
            </div>

            <div className="lg:flex block justify-end items-center my-16">
              <div className="bg-[#EEF7FF] lg:w-[708px] w-full h-[218px] flex justify-around items-center rounded-2xl">
                <Image src="/user1.png" width={151} height={151} alt="user1" />

                <div>
                  <h5 className={`${styles.h5Style}`}>Emem Udom</h5>
                  <p className={`${styles.pStyle}`}>Ui/Ux Designer</p>
                </div>

                <div className="bg-[#FFB400] w-[93px] h-[50px] flex justify-center items-center rounded-xl">
                  <p className={`${styles.pStyle} text-white`}> Verified</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-[#BBD9D6] lg:w-[708px] w-full h-[218px] flex justify-around items-center rounded-2xl">
                <Image src="/user1.png" width={151} height={151} alt="user1" />

                <div>
                  <h5 className={`${styles.h5Style}`}>Emem Udom</h5>
                  <p className={`${styles.pStyle}`}>Ui/Ux Designer</p>
                </div>

                <div className="bg-[#FFB400] w-[93px] h-[50px] flex justify-center items-center rounded-xl">
                  <p className={`${styles.pStyle} text-white`}> Verified</p>
                </div>
              </div>
            </div>          
          </div>
          <p className={`${styles.pStyle} text-black text-center mt-8`}>Get Answers to your questions based your Design field</p>
        </div> */}
      </div>
    </div>
  );
};

export default Frame4;
