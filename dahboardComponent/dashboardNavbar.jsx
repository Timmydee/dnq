import React from "react";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className="bg-[#060028] h-[100vh] relative borderDash">
        <div className="w-full">
        <div className="w-[10%] padding px-10">
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
            <div className="mt-6 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg">
              <Image src="/element3.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/home">Home</Link>
            </div>

            <div className="mt-3 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg ">
              <Image
                src="/messagequestion.png"
                width={30}
                height={30}
                alt="dnqHome"
              />
              <Link href="/dashboard/question">Question</Link>
            </div>

            <div className="mt-3 w-full paddingX flex items-center gap-6 cursor-pointer hoverBg">
              <Image src="/answer.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/answer">Answer</Link>
            </div>

            <div className="mt-3 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
              <Image src="/account.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/interest">Interest</Link>
            </div>

            <div className="mt-3 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
              <Image src="/setting.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/setting">Setting</Link>
            </div>

            <div className="absolute bottom-[10%] mt-6 paddingX py-[1rem] w-full flex items-center gap-6 cursor-pointer hoverBg">
              <Image src="/logins.png" width={30} height={30} alt="dnqHome" />
              <Link href="/dashboard/login">Login</Link>
            </div>
          </div>
        </div>
        </div>
      </div> 
    </div>
  );
};

export default DashboardNavbar;
