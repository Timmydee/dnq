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
            <div className="w-[100%] m-auto px-20px flex justify-between">


                <div className="block lg:hidden mx-4 my-4 flex-1">
                    <div onClick={handleToggle} className="relative flex justify-end">
                    {!toggle ? (
                        <BiMenuAltRight color="black" size={30} />
                    ) : (
                        <AiOutlineClose color="black" size={30}/>
                    )}
                    </div>

                {toggle && (
                <div className="bg-blue-500 absolute top-16 w-[40%] right-6 h-[30vh] rounded-lg">
                    <div className="flex-col justify-center items-center p-4 text-white text-[16px] text-sm">
                    <div className="text-[#0074D9]">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="mt-6">
                        <Link href="/about">About Us</Link>
                    </div>
                    <div 
                        href=""
                        className="w-[80px] h-[30px] font-light text-white lg:text-[#333333] mt-8 flex items-center justify-center rounded-xl border border-blue-400 hover:bg-blue-800"
                    >
                        <Link href="/login">Log In</Link>
                    </div>

                    <div
                        href=""
                        className="w-[80px] h-[30px] font-light mt-3 flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-800"
                    >
                        <Link href="/signup">Sign Up</Link>
                    </div>
                    </div>
                </div>
                )}
            </div>

                
            </div>

           

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
                
            <div className="w-[100%] h-[20px] lg:px-16 px-1 flex  lg:flex-row flex-col justify-center lg:justify-between items-center py-6 text-[#343A40] font-light lg:text-[16px] text-[14px] ">
                 <div className="flex lg:flex-row flex-col lg:gap-6 gap-1 items-center ">
                    <p>© 2023 Designers Query</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                  </div>
              
                <p>English</p>
            </div>
        </div>

        
    );
}
 
export default passwordForget;