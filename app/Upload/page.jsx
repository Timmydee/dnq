"use client"

import React from "react";
{/*import { Progress } from 'flowbite-react';*/}
import Image from "next/image";

const Upload = () => {
    return ( 
        <div>
            <div className="h-[500px] w-full">
                <h1 className="mt-[50px] text-[30px] font-serif text-center font-[500]">Upload a Picture</h1>
                <p className="text-[14px] text-center mt-[7px] mb-[4px]">Upload your Picture</p>
                {/*<Progress progress={65} className="w-[300px] m-auto "/>*/}

                <div className="h-[200px] mt-4">
                    <Image src="/Uploaddp.png" width={200} height={100} className="m-auto"/>

                    <div className='mt-9 w-[35%] m-auto'>
                        <button className='w-[100%] font-sans bg-sky-400 m-auto p-3 rounded-2xl mt-3 text-white'>
                            Continue
                        </button>

                        <button className='w-[100%] font-sans bg-transparent m-auto p-3 rounded-2xl mt-3'>
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Upload;