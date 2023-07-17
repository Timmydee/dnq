import React from "react";
import styles from "@/styles";
import Search from "@/components/search";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi";
import { TiAttachmentOutline } from "react-icons/ti";
import { CiCircleChevUp, CiCircleChevDown, CiChat1 } from "react-icons/ci";
import Recent from "@/components/Recent";
import Active from "@/components/Active";

const Home = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className=" lg:px-[2rem] px-3">
        <div className="hidden lg:block">
          <Search />
        </div>
      

      <div className="w-full mt-4 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[60%] w-full">
          {/* input area */}
          <div className=" border rounded-xl">
            <div
              className={`${styles.flexStart} items-center gap-4 lg:px-[2rem] px-2 my-2`}
            >
              <Image src="/actImage.png" width={60} height={60} />

              <input
                placeholder="Ask your question, Emem...."
                className="lg:px-3 px-1 py-2 h-[100px] w-full font-light text-sm outline-none"
              />
            </div>

            <div className=" w-full bg-[#F4F4F4] flex items-center gap-3">
              <div className="lg:px-[2rem] px-2 flex items-center py-2 gap-2">
                <HiOutlineCamera className="w-[24px] h-[24px] text-blue-400 cursor-pointer" />
                <div className="cursor-pointer">
                  <TiAttachmentOutline className="w-[24px] h-[24px] text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-xl mt-5 lg:p-4 p-2">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/leeImg.png" width={40} height={40} />
                <div>
                  <h4 className={`${styles.pStyle}`}>Melissa Lee</h4>
                  <div className={`${styles.flexCenter}`}>
                    <div className="rounded-full bg-green-600 w-2 h-2"></div>
                    <p className={`${styles.pStyl} text-[12px] font-light`}>
                      UI/UX Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* post */}
            <div className="max-w-[550px]">
              <h2 className={`lg:text-[22px] text-[11px] mb-2 mt-4`}>
                How do you create a consistent visual design in UI/UX?
              </h2>
              
              {/* <div className="w-[100%] lg:h-[259px] h-[126px]">
                <Image src="/leePost.png"  className="" />
              </div> */}
              <img src="/leePost.png" className="w-[100%] lg:h-[259px] h-[126px]"/>
              <h4 className={`lg:text-[16px] text-[10px] mt-2`}>
                Creating a consistent visual design in UI/UX involves
                establishing a visual style guide that defines guidelines for
                colors, typography, spacing, and other visual elements.
                Consistency ensures a unified and cohesive experience across
                different screens and interactions, making the product more
                visually appealing and easy to na....(more)
              </h4>
            </div>
            <div className="flex gap-4 items-center mt-3">
              <p className={`$ text-[12px] font-light text-[#BDBBBB]`}>
                {" "}
                1M Views{" "}
              </p>
              <p className={` text-[12px] font-light text-[#BDBBBB]`}>
                View 39,669 upvotes
              </p>
            </div>

            <div className="flex gap-4 items-center mt-3">
              <div className="flex items-center cursor-pointer gap-2 ">
                <CiCircleChevUp />
                <p className={` text-[12px] font-light text-[#333333]`}>
                  {" "}
                  39.6K{" "}
                </p>
              </div>
              <div className="flex items-center cursor-pointer gap-2 ">
                <CiCircleChevDown />
                <p className={` text-[12px] font-light text-[#333333]`}>
                  {" "}
                  39.6K{" "}
                </p>
              </div>
              <div className="flex items-center cursor-pointer gap-2 ">
                <CiChat1 />
                <p className={` text-[12px] font-light text-[#333333]`}>
                  {" "}
                  39.6K{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[36%] hidden lg:block">
          <div>
            <Recent />
          </div>

          <div className="mt-6">
            <Active />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
