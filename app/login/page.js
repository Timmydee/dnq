import React from "react";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import { BsPerson } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className="h-[90vh] w-[100%]">
        <div className={`lg:w-[50%] mx-auto w-full`}>
          <div className="">
            <h1 className={`${styles.h2Style} text-center`}>Welcome back</h1>
            <p className={`${styles.pStyle} text-center`}>
              Kindly enter your valid information to get you Login
            </p>
            <div className="py-6 lg:w-[80%] w-[95%] mx-auto">
              <div className="flex justify-center items-center ">
                <form className="w-[90%]">
                  <div className="">
                    <apan
                      className={`${styles.pStyle} text-[14px] font-light text-start`}
                    >
                      Email
                    </apan>

                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <BsPerson className="text-gray-400" />
                      </div>
                      <input
                        placeholder="Enter your email"
                        className="w-full h-16 ml-2 bg-transparent focus:outline-none"
                        type="email"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`${styles.pStyle} text-[14px] font-light`}>
                      Password
                    </span>

                    <div className="flex items-center border rounded-2xl px-2 my-1 mx-auto">
                      <div className="flex items-center justify-center h-10 w-10">
                        <CiLock className="text-gray-400" />
                      </div>
                      <input
                        placeholder="Enter your Password"
                        className="w-full h-16 ml-2 bg-transparent focus:outline-none"
                        type="password"
                        id="password"
                      />
                    </div>
                  </div>

                  <div className=" my-2">
                    <Link
                      href="/forgotPassword"
                      className="text-blue-500 shadow-sm hover:shadow-lg hover:bg-blue-700"
                    >
                      Forgot Password
                    </Link>
                  </div>

                  <div className={`${styles.flexCenter} gap-4 my-5 `}>
                    <div className="border border-gray-400 w-[50%]" />
                    <p>OR</p>
                    <div className="border border-gray-400 w-[50%]" />
                  </div>

                  <button
                    className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-16 shadow-md hover:shadow-lg rounded-2xl hover:bg-red-700`}
                  >
                    <div className="flex items-center">
                      <FcGoogle className="mr-2" size={40} />
                      <span>Sign In with Google</span>
                    </div>
                  </button>

                  <button
                    type="submit"
                    className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-16 bg-blue-500 shadow-md text-white hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                  >
                    Log In
                  </button>

                  <div className="flex justify-center w-full my-1">
                    <p>
                      Don't Have an account?{" "}
                      <Link
                        href="/signup"
                        className="text-blue-500 shadow-sm hover:shadow-lg hover:bg-blue-700"
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
    </div>
  );
};

export default Login;
