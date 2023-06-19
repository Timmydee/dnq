import React from "react";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import FcGoogle from 'react-icons/fc'

const Login = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className="flex h-[90vh] w-[100%]">
        <div className={`lg:w-[50%] w-full`}>
          <div className="w-[100%]">
            <Link href='/' className="lg:p-4 p-2 lg:block flex items-center justify-center">
                <Image
                src="/dnqLogo.png"
                width={87}
                height={87}
                alt="Picture of the author"
                />
            </Link>
          </div>
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

                    <input
                      placeholder="Enter  your email"
                      className="w-full h-16 border rounded-2xl px-2 my-1 mx-auto"
                      type="email"
                      // value={email}
                      id="email"
                      // onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <span className={`${styles.pStyle} text-[14px] font-light`}>
                      Password
                    </span>
                    <input
                      placeholder="Enter your password"
                      className="w-full h-16 rounded-2xl border px-2 my-2"
                      // value={password}
                      id="password"
                      type="password"
                      // onChange={handleInput}
                    />
                  </div>

                  <div className=" my-2">
                    <Link href="/forgotPassword" className="text-blue-500 shadow-sm hover:shadow-lg hover:bg-blue-700">
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
                   
                    Sign In with Google
                  </button>
                  {/* <FcGoogle/> */}

                  <button
                    type="submit"
                    className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-16 bg-blue-500 shadow-md text-white hover:shadow-lg rounded-2xl hover:bg-blue-700`}
                  >
                    Log In
                  </button>

                  <div className="flex justify-center w-full my-1">
                    <p>
                      Don't Have an account?{" "}
                      <Link href="/signup" className="text-blue-500 shadow-sm hover:shadow-lg hover:bg-blue-700">
                        Sign Up
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] hidden lg:block">
          <div className="w-[100%]">
            <Image src="/log.png" width={883} height={200} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
