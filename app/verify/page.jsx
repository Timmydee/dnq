import { document } from "postcss";
import Link from "next/link";

import React from "react";

const verify = () => {
    
    
    return ( 
        <div className="w-[100%] h-full">
            <div className="w-[40%] h-[350px] flex-row m-auto justify-center items-center">
                <h1 className="mt-[100px] text-center font-semibold font-serif text-[35px]">Verification</h1>
                <p className="text-center font-sans text-[12px]">Enter the 4-digit code we sent to your email</p>
                <div className="h-2"></div>

                <div className="flex flex-col items-center  justify-center w-[100%] h-[230px]">
                    <form action="" className="flex flex-col items-center justify-center h-[75px] w-[75px] m-auto">
                        <div className="flex flex-row gap-x-3 my-6 items-center justify-center">
                            <input type="number" className="h-[75px] w-[75px] text-[20px] border text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400 outline-none rounded-2xl mr-2 "/>
                            <input type="number" className="h-[75px] w-[75px] text-[20px] border text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400 outline-none rounded-2xl mr-2" disabled />
                            <input type="number" className="h-[75px] w-[75px] text-[20px] border text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400 outline-none rounded-2xl mr-2 " disabled />
                            <input type="number" className="h-[75px] w-[75px] text-[20px] border text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-400 outline-none rounded-2xl " disabled />
                        </div>
                        <p className="text-sky-600 text-[11px]">00:30</p>


                        <button
                            type="submit"
                            
                            className={`font-sans mt-[10px] cursor-pointer my-3 py-5 w-[380px] h-[50px] transition-all  ease-in duration-500 text-[12px] bg-blue-500 active:bg-blue-700 hover:bg-blue-600 text-white hover:shadow-lg rounded-2xl `}
                        >
                            <Link
                            href="/Upload"
                            className="w-[100%] h-8"
                            >
                            Submit
                            </Link>
                        </button>
                        
                    </form>
                        
                        <p className="font-sans text-[12px]">Didn’t get code? <span className="font-sans text-[12px] font-bold">Resend</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default verify;