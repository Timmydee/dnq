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

const Login = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles.innerWidth}`}>
      <div className="h-[190vh] w-[100%]">

        <div className="w-[100%] m-auto h-[100px] px-20px flex justify-between lg:shadow-md shadow-blue-600">

          <div className="lg:w-[10%] w-[20%]">
            <Link
              href="/"
              className="lg:p-4 p-2 lg:block flex items-center justify-center"
            >
              <Image
                className="w-[90px] h-[85px] lg:w-[80.155px] lg:h-[76.911px]"
                src="/dnqLogo.png"
                width={80.155}
                height={76.911}
                alt="Picture of the author"
              />
            </Link>
          </div>

          <div className="w-[28%] lg:flex font-open justify-between lg:items-center hidden lg:h-10 m-7">
              <Link href="/about"
                className="text-22 text-#333 font-bold lg:w-[30]"
              >
                About Us
              </Link>

              <div className="w-[120px] h-[58px] font-open text-[16px] text-[#333333] font-semibold flex items-center justify-center rounded-[10px] border border-blue-400 hover:bg-blue-800 hover:text-white">
                <Link href="/login"
                  className=""
                >
                  Login
                </Link>
              </div>
              
              

              <button className="w-[120px] h-[58px] font-open text-[16px] font-semibold text-[#fff] bg-sky-500 flex items-center justify-center rounded-[10px] border border-blue-400 hover:bg-blue-800">
                <Link href="/signup"
                  className=""
                >
                  SignUp
                </Link>
              </button>
          </div>

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

        
        

        <div className={"lg:w-[50%] mx-auto w-full"}>
          <div className="">
            <div className="h-20 lg:h-20"></div>

            <h1 className={`${styles.h2Style} text-center font-pius text-59 font-bold mt-30`}>Welcome back</h1>
            <p className={`${styles.pStyle} text-center font-sans text-14`}>
              Please enter your login details to access your account
            </p>

            <div className="h-7"></div>

            <div className="py-6 lg:w-[80%] w-[95%] mx-auto">
              <div className="flex justify-center items-center ">
                <form className="w-[90%]">
                  <div className="">
                    <apan
                      className={`${styles.pStyle} font-sans text-[14px] font-light text-start`}
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
                  </div>
                  <div className="mt-4">
                    <span className={`${styles.pStyle} font-sans text-[14px] font-light`}>
                      Password
                    </span>

                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <CiLock className="text-gray-400" />
                      </div>
                      <input
                        placeholder="Enter your Password"
                        className="w-full h-16 font-sans ml-2 bg-transparent focus:outline-none"
                        type="password"
                        id="password"
                      />

                      <div className="flex items-center justify-center h-10 w-10">
                        <BsFillEyeSlashFill className="text-gray-400"/>
                      </div>
                        
                    </div>
                  </div>

                  <div className=" my-2">
                    <Link
                      href="/passwordForget"
                      className="text-blue-500 text-sm font-serif shadow-sm hover:shadow-lg hover:bg-blue-700"
                    >
                      Forgot Password
                    </Link>
                  </div>

                  <div className="h-7"></div>

                  <div className={`${styles.flexCenter} gap-4 my-5 `}>
                    <div className="border border-[#818181]-400 w-[40%] " />
                    <p>or</p>
                    <div className="border border-[#818181]-400 w-[40%]" />
                  </div>

                  <button
                    className={`${styles.flexCenter} ${styles.btnStyle} border-[1px] border-[#81818] cursor-pointer my-3 w-full h-16 hover:shadow-lg rounded-2xl hover:text-white hover:bg-blue-700`}
                  >
                    <div className="flex items-center">
                      <FcGoogle className="mr-2" size={40} />
                      <span className="font-sans">Sign In with Google</span>
                    </div>
                  </button>

                  <button
                    type="submit"
                    className={`${styles.flexCenter} ${styles.btnStyle} font-sans cursor-pointer my-10 w-full h-16 bg-blue-500 shadow-md text-white hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                  >
                    Log In
                  </button>

                  <div className="flex font-sans justify-center w-full my-1">
                    <p>
                      Don't Have an account?{" "}
                      <Link
                        href="/signup"
                        className="text-blue-500 shadow-sm font-sans hover:shadow-lg hover:bg-blue-700"
                      >
                        Sign Up
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>

            
          </div>

          </div>

        {/* <div className="w-[50%] hidden lg:block">
          <div className="w-[100%]">
            <Image src="/log.png" width={883} height={200} alt="login" />
          </div>
        </div> */}
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
};

export default Login;
