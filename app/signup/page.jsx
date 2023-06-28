"use client";


import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsPerson } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillEyeSlashFill } from "react-icons/bs";
import React, { useState } from "react";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles.innerWidth}`}>
      <div className=" h-full w-[100%]">

        <div className={`lg:w-[50%] mx-auto w-full`}>
          <div className="h-20 lg:h-20"></div>
          
          <div className="px-[50px] lg:px-0">
            <h1
              className={`${styles.h2Style} text-center font-bold text-[24px] lg:text-[40px] font-serif max-w-[500px] mx-auto`}
            >
              Let’s Create your DesignersQuery Account
            </h1>
            <p className={`${styles.pStyle} font-sans text-center`}>
              Kindly enter your valid information to get you signed up
            </p>
            <div className="mt-10 lg:w-[80%] w-[95%] mx-auto">
              <div className="flex justify-center items-center ">
                <form className="w-[90%]">
                  <div className="">
                    <apan
                      className={`font-sans text-[14px] font-light text-start`}
                    >
                      Email
                    </apan>

                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <BsPerson className="text-gray-400" />
                      </div>
                      <input
                        placeholder="Enter your email"
                        className="w-full h-16 ml-2 bg-transparent font-sans focus:outline-none"
                        type="email"
                        id="email"
                      />
                        
                      
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`${styles.pStyle} text-[14px] font-sans font-light`}>
                      Password
                    </span>

                    <div className="flex items-center justify-between border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <CiLock className="text-gray-400" />
                      </div>
                      <input
                        placeholder="Enter your Password"
                        className="w-full h-16 ml-2 bg-transparent font-sans focus:outline-none"
                        type="password"
                        id="password"
                      />

                      <div className="flex items-center justify-center h-10 w-10">
                          <BsFillEyeSlashFill className="text-gray-400"/>
                      </div>

                      
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`${styles.pStyle} font-sans text-[14px] font-light`}>
                      Confirm Your Password
                    </span>
                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <CiLock className="text-gray-400 " />
                      </div>
                      <input
                        placeholder="Confirm your Password"
                        className="w-full h-16 ml-2 bg-transparent focus:outline-none font-sans"
                        type="password"
                        id="password"
                      />

                      <div className="flex items-center justify-center h-10 w-10">
                          <BsFillEyeSlashFill className="text-gray-400"/>
                      </div>
                    </div>
                  </div>

                

                  <div className={`${styles.flexCenter} gap-4 my-5 `}>
                    <div className="border border-[#818181]-400 w-[40%]" />
                    <p>or</p>
                    <div className="border border-[#818181]-400 w-[40%]" />
                  </div>

                  <button
                    className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer hover:text-white my-3 w-full h-16 shadow-md hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                  >
                    <div className="flex items-center">
                      <FcGoogle className="mr-2" size={40}/>
                      <span className="font-sans text-[16px]">Sign In with Google</span>
                    </div>
                  </button>

                  <button
                    type="submit"
                    className={`${styles.flexCenter} ${styles.btnStyle}font-sans mt-[50px] cursor-pointer my-3 w-full h-16 bg-blue-500 shadow-md text-white hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                  >
                    Continue
                  </button>

                  <div className="flex font-sans justify-center w-full my-1">
                    <p>
                      Have an account?{" "}
                      <Link
                        href="/signup"
                        className="text-blue-500 font-sans shadow-sm hover:shadow-lg hover:bg-blue-700"
                      >
                        Login
                      </Link>{" "}
                    </p>
                  </div>
                </form>

                
                
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[90px] h-[150px]"></div>

        
        {/* <div className="w-[50%] h-full hidden lg:block">
          <div className="w-[100%] h-[100%]">
            <Image src="/log.png" width={800} height={1200} alt="login" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
