import React from "react";
import styles from "@/styles";
import Search from "@/components/search";
import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi";
import { TiAttachmentOutline } from "react-icons/ti";
import { CiCircleChevUp, CiCircleChevDown, CiChat1 } from "react-icons/ci";
import Recent from "@/components/Recent";
import Active from "@/components/Active";

const Question = () => {
  return (
    <div className={`${styles.innerWidth} px-[2rem]`}>
      <Search />

      <div className="w-full mt-4 flex justify-between">
        <div className="w-[60%]">
          {/* input area */}
          <div className=" border rounded-xl">
            <div
              className={`${styles.flexStart} items-center gap-4 px-[2rem] my-2`}
            >
              <Image src="/actImage.png" width={60} height={60} />

              <input
                placeholder="Ask your question, Emem...."
                className="px-3 py-2 w-full font-light text-sm"
              />
            </div>

            <div className=" w-full bg-[#F4F4F4] flex items-center gap-3">
              <div className="px-[2rem] flex items-center py-2 gap-2">
                <HiOutlineCamera className="w-[24px] h-[24px] text-blue-400 cursor-pointer" />
                <div className="cursor-pointer">
                  <TiAttachmentOutline className="w-[24px] h-[24px] text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36%]">
          <div>
            <Recent />
          </div>

          <div className="mt-6">
            <Active />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
