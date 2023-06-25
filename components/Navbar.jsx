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
        className={` ${styles.xPaddings} py-2 lg:py-3 flex justify-between items-center shadow-lg `}
      >
        <div className="w-20 h-[76.91px] relative">
        <Link href="/">
          <Image
            src="/dnqLogo.png"
            width={87}
            height={87}
            alt="Picture of the author"
          />
        </Link>
        </div>
        <div className="lg:flex hidden justify-between items-center gap-6">
          <div>
            <Link href="/about" className="font-700 text-[20px] text-zinc-800 hover:text-blue-500 ">About Us</Link>
          </div>
          <div
            href=""
            className="w-[120px] h-[58px] text-zinc-800 text-[18px] cursor-pointer font-bold items-center justify-center rounded-xl border border-blue-500 hover:bg-blue-700 hover:text-white inline-flex"
          >
            <Link href="/login">Log In</Link>
          </div>

          <div
            href=""
            className="w-[120px] h-[58px] font-bold inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-800"
          >
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>

        <div className="block lg:hidden flex-1">
          <div onClick={handleToggle} className="relative flex justify-end">
            {!toggle ? (
              <BiMenuAltRight color="black" size={30} />
            ) : (
              <AiOutlineClose color="black" size={30} />
            )}
          </div>

          {toggle && (
            <div className="bg-blue-500 absolute w-[70%] top-0 right-0 bottom-0 left-0 h-[100vh] rounded-lg">
              <div className="flex-col justify-center items-center p-4 text-white text-[16px] w-full text-lg ">
                <div className="mt-6 text-center" onClick={() => setToggle(!toggle)}>
                  <Link href="/about">About Us</Link>
                </div>
                <div
                  href=""
                  onClick={() => setToggle(!toggle)}
                  className="w-[130px] h-[40px] mx-auto font-light text-white lg:text-[#333333] mt-8 flex items-center justify-center rounded-xl border border-white hover:bg-blue-800"
                >
                  <Link href="/login">Log In</Link>
                </div>

                <div
                  href=""
                  onClick={() => setToggle(!toggle)}
                  className="w-[130px] h-[40px] mx-auto font-light mt-3 flex items-center justify-center rounded-xl bg-white hover:bg-blue-800 text-blue-500"
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
