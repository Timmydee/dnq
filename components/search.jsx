import React from "react";
import styles from "@/styles";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div>
        <form className="flex items-center border rounded-2xl">
          <input
            // type="text"
            // value={searchTerm}
            // onChange={handleChange}
            placeholder="Search..."
            className="px-3 py-2 text-base"
          />
          <button
            type="submit"
            className="px-3 py-3 bg-[#58B1FF] text-white rounded-r-md "
          >
            <BsSearch/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
