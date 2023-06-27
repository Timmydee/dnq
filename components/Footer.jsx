import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="lg:px-16 px-1 flex  lg:flex-row flex-col justify-center lg:justify-between items-center py-6 text-[#343A40] font-light lg:text-[16px] text-[14px] ">
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-1 items-center ">
          <p>© 2023 Designers Query</p>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
