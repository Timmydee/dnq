"use client"

import React from "react";
{/*import { Progress } from 'flowbite-react';*/}
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";


const select = () => {
    


    return ( 
        <div>
            <div>
                <div className="lg:w-[100%] w-[80%] m-auto">
                    <h1 className="mt-[50px] text-[30px] font-serif text-center font-[500]">Choose to select</h1>
                    <p className="text-[14px] text-center mt-[7px]">Please select the categories that you would love to get content from.</p>
                    {/*<Progress progress={100} className="w-[300px] m-auto "/>*/}
                    <p className="text-[12px] text-center mt-[7px] mb-[4px]">Pick four niches, one from every line</p>
                </div>

                <div className="lg:h-[130vh] h-[180vh]">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-[60%] h-[800px] lg:w-[40%] lg:h-[100vh] m-auto mt-5" >
                        <div className="relative" >
                            <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="abc"  className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/Gd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Graphic Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" id="myRadio" name="abc" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/md.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full "
                            />
                            <h3 className="absolute top-24 z-40  text-white text-[12px] left-3">Motion Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="abc" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/ud.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Ui/Ux Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="bca" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/da.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Digital Artist</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="bca" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/ld.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24  z-40 text-white text-[12px] left-3">Logo Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="bca" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/bd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Brand Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="cab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/packd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Packaging Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="cab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/gamd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Game Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="cab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/webd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Web Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="ab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/Id.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Industrial Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="ab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/intd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Interaction Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[100%] h-full lg:w-[100%] lg:h-full absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" name="ab" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/intiod.png"
                            width={150} 
                            height={150}
                            className="absolute z-10 w-[100%] h-full"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Interior Design</h3>
                        </div>


                    </div>

                    <div className='mt-9 w-[35%] m-auto'>
                    <Link
                            href="/dashboard/home"
                            className="w-[100%] h-8"
                        >
                        <button className='w-[100%] font-sans bg-blue-500 m-auto p-3 rounded-2xl mt-3 text-white'>
                            
                            
                            Continue
                        </button>
                            
                        </Link>

                        <button className='w-[100%] font-sans bg-transparent hover:font-bold m-auto p-3 rounded-2xl mt-3'>
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default select;