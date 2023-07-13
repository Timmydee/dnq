import { document } from "postcss";

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
                        <button className=" w-[380px] h-[50px] py-5 rounded-2xl cursor-pointer transition-all duration-500 ease-in text-white text-[12px] bg-sky-300 active:bg-blue-700 hover:bg-blue-400">Submit</button>
                    </form>
                        
                        <p className="font-sans text-[12px]">Didn’t get code? <span className="font-sans text-[12px] font-bold">Resend</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default verify;