import React from "react";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className="border bg-[#060028] h-[100vh]">
        <div className="p-[3rem] mt-10">
          <Image
            className=""
            src="/logowhite.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="fle items-center justify-center">
          <div className="flex-col justify-start items-start text-white text-[24px] w-full text-lg ">
            <div className="mt-6 px-[3rem] py-[1rem] w-full  flex items-start justify-center space-x-2 hover:bg-[#58B1FF]">
              <Image src="/element3.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/home">Home</Link>
            </div>
            <div
              className={`flex gap-2 items-center my-2 hover:text-blue-500 `}
            >
              <Image src="/element3.png" width={30} height={30} alt="dnqHome" />
              <h1>Feeds</h1>
            </div>

            <div className="mt-6 px-[3rem] py-[1rem] h-[100px] w-full flex items-start justify-center space-x-2 hover:bg-[#58B1FF]">
              <Image
                src="/messagequestion.png"
                width={30}
                height={30}
                alt="dnqHome"
              />
              <Link href="/dashboard/question">Question</Link>
            </div>

            <div className="mt-3 px-[3rem] py-[1rem] w-full  flex items-start justify-start space-x-2 hover:bg-[#58B1FF]">
              <Image src="/answer.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/answer">Answer</Link>
            </div>

            <div className="mt-3 px-[3rem] py-[1rem] w-full fle items-start justify-start space-x-2 hover:bg-[#58B1FF]">
              <Image src="/account.png" width={20} height={20} alt="dnqHome" />
              <Link href="/dashboard/interest">Interest</Link>
            </div>

            <div className="mt-3 px-[3rem] py-[1rem] w-full fle items-start justify-start space-x-2 hover:bg-[#58B1FF]">
              <Image src="/setting.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/setting">Setting</Link>
            </div>

            <div className="mt-3 px-[3rem] py-[1rem] w-full flex items-start justify-start space-x-2 hover:bg-[#58B1FF]">
              <Image src="/logins.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
