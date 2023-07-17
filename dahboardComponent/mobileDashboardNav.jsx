"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const MobileDashboardNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 shadow-lg relative">
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
        <div onClick={handleToggle} className="relative flex justify-end">
          {!toggle && <BiMenuAltRight color="black" size={30} />}
        </div>

        {toggle && (
          <div className="bg-blue-500 fixed w-[100%] top-0 right-0 bottom-0 left-0 h-full rounded-lg  ">
            <div className="flex-col justify-center items-center p-4 text-white text-[16px] w-full text-lg ">
              <div onClick={handleToggle} className="relative flex justify-end">
                {toggle && <AiOutlineClose color="white" size={24} />}
              </div>
              <div className="fle items-center justify-center mt-8">
                <div className="flex-col justify-start items-start text-white text-[24px] w-full text-lg ">
                  <div onClick={handleToggle} className="mt-6 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg">
                    <Image
                      src="/element3.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link onClick={() => setToggle(toggle)} href="/dashboard/home" >Home</Link>
                  </div>

                  <div onClick={handleToggle} className="mt-3 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg ">
                    <Image
                      src="/messagequestion.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link href="/dashboard/question">Question</Link>
                  </div>

                  <div onClick={handleToggle} className="mt-3 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg">
                    <Image
                      src="/answer.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link href="/dashboard/answer">Answer</Link>
                  </div>

                  <div onClick={handleToggle} className="mt-3 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
                    <Image
                      src="/account.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link href="/dashboard/interest">Interest</Link>
                  </div>

                  <div onClick={handleToggle} className="mt-3 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
                    <Image
                      src="/setting.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link href="/dashboard/setting">Setting</Link>
                  </div>

                  <div onClick={handleToggle} className="absolute bottom-[10%] mt-6 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
                    <Image
                      src="/logins.png"
                      width={30}
                      height={30}
                      alt="dnqHome"
                    />
                    <Link href="/dashboard/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDashboardNav;
