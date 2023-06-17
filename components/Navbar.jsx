"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles.innerWidth} relative z-20`}>
      <div
        className={` ${styles.xPaddings} py-2 flex justify-between items-center`}
      >
        <Link href='/'>
          <Image
            src="/dnqLogo.png"
            width={87}
            height={87}
            alt="Picture of the author"
          />
        </Link>

          <div className=" lg:flex hidden justify-center items-center gap-6">
            <div className="text-[#0074D9]">
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div className="lg:flex hidden justify-between items-center gap-6">
            <div
              href=""
              className="w-[120px] h-[40px] font-light text-[#333333] flex items-center justify-center rounded-xl border border-blue-400"
            >
              <Link href="/login">Log In</Link>
            </div>

            <div
              href=""
              className="w-[120px] h-[40px] font-light flex items-center justify-center rounded-xl bg-blue-500 text-white"
            >
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>

        <div className="block lg:hidden flex-1">
          <div onClick={handleToggle} className="relative flex justify-end">
            {!toggle ? (
              <BiMenuAltRight color="black" />
            ) : (
              <AiOutlineClose color="black" />
            )}
          </div>

          {toggle && (
            <div className="bg-blue-900 absolute top-14 w-[100%] h-[30vh] rounded-lg">
              <div className="flex-col justify-center items-center p-4 text-white font-WorkSans text-[16px] text-sm">
                <div className="text-[#0074D9]">
                  <Link href="/">Home</Link>
                </div>
                <div className="mt-6">
                  <Link href="/about">About</Link>
                </div>
                <div 
                  href=""
                  className="w-[120px] h-[40px] font-light text-[#333333] mt-8 flex items-center justify-center rounded-xl border border-blue-400"
                >
                  <Link href="/login">Log In</Link>
                </div>

                <div
                  href=""
                  className="w-[120px] h-[40px] font-light mt-3 flex items-center justify-center rounded-xl bg-blue-500 text-white"
                >
                  <Link href="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
