import React from "react";
import Image from "next/image";
import Link from "next/link";

const errorPage = () => {
    return ( 
        <div className="w-[100%] h-[60vh] lg:h-[73vh]">
            <div className="lg:h-[30px]"></div>

            <div className="w-[80%]  lg:w-[65%] m-auto">
                <Image 
                    src={"/404.png"}
                    width={320}
                    height={250} 
                    className="m-auto my-10 w-[320] h-[250] lg:w-[470px] lg:h-[280px] lg:my-3"/>
            </div>

            <div className="w-[50%] lg:w-[80%] m-auto">
                <h2 className="font-bold text-center font-serif text-[20px] lg:text-[35px]">Oops!</h2>
                <p className="text-[14px] font-sans text-center mb-3">We can’t seem to find the page you are looking for</p>

                <Link
                    href="/"
                    className="flex justify-center items-center"
                >
                    <button className="w-[100px] h-[30px] font-sans mb-4 lg:mb-0 bg-sky-400 hover:bg-sky-500 text-white text-[12px] rounded-sm">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default errorPage;