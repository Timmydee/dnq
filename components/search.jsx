import React from "react";
import styles from "@/styles";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";

const Search = () => {
  return (
    <div className={`${styles.innerWidth} mt-4`}>
      <div>
        <div className="flex justify-between items-center ">
          <form className="flex items-center rounded-2xl w-[40%]">
            <input
              // type="text"
              // value={searchTerm}
              // onChange={handleChange}
              placeholder="Search..."
              className="px-3 py-2 text-base w-full rounded-l-xl border border-gray-300"
            />
            <button
              type="submit"
              className="px-3 py-3 bg-[#58B1FF] text-white rounded-r-md "
            >
              <BsSearch />
            </button>
          </form>

          <div className="flex items-center gap-[3rem]">
            <div className="flex justify-between items-center gap-6">
              <div className="border h-10 w-[1px]" />
              <h1>ENG</h1>
              <div className="border h-10 w-[1px]" />
            </div>

            <div className="flex gap-[1rem] justify-center items-center w-full">
              <IoMdNotificationsOutline className="w-[30px] h-[30px] text-gray-700" />

              <Image src="/actImage.png" width={52} height={52} />

              <div>
                <h6 className={`${styles.pStyle} font-normal mb-2`}>Emem</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="border mt-2"></div>
      </div>
    </div>
  );
};

export default Search;
