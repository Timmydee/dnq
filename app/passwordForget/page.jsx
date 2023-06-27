"use client";


import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";

const passwordForget = () => {
    const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

    return (  

        <div>

           

            <div className="h-7"></div>
            <div className="py-6 lg:w-[80%] w-[95%] mx-auto">
                <div className="flex justify-center items-center ">
                        <div className="lg:w-[55%] h-[100vh] lg:h-[65vh] mx-auto w-full">
                        <div className="h-20 lg:h-[20px]"></div>

                        <h1 className={`${styles.h2Style} font-serif font-bold text-center text-47 mt-30`}>Forgot Password</h1>
                        <p className={`${styles.pStyle} text-center font-sans px-5 `}>
                            Enter your email for vertification process, we will send 4digits code to your mail.
                        </p>
                        

                        <div className="lg:h-[25px]"></div>

                            <form action="w-[90%] ">
                                    <div className="w-[90%] lg:w-[100%] m-auto">
                                    <apan
                                    className={`${styles.pStyle} text-[14px] font-sans font-light text-start`}
                                    >
                                    Email
                                    </apan>

                                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                                        <div className="flex items-center justify-center h-65 w-10">
                                            <BsPerson className="text-#333333-400" />
                                        </div>
                                        <input
                                            placeholder="Enter your email"
                                            className="w-full font-sans h-16 ml-2 bg-transparent focus:outline-none"
                                            type="email"
                                            id="email"
                                        />

                                        
                                    </div>

                                    <button
                                    type="submit"
                                    className={`${styles.flexCenter} ${styles.btnStyle} font-sans cursor-pointer my-10 w-full h-16 bg-blue-500 shadow-md text-white hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                                    >
                                    Send
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
                
        </div>

        
    );
}
 
export default passwordForget;