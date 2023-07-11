"use client"

import React from "react";
import { Progress } from 'flowbite-react';
import Image from "next/image";
import { useState } from 'react';


const select = () => {
    const Input = useState();

    return ( 
        <div>
            <div>
                <div className="lg:w-[100%] w-[80%] m-auto">
                    <h1 className="mt-[50px] text-[30px] font-serif text-center font-[500]">Choose to select</h1>
                    <p className="text-[14px] text-center mt-[7px] mb-[4px]">Please select the categories that you would love to get content from.</p>
                    <Progress progress={100} className="w-[300px] m-auto "/>
                </div>

                <div className="lg:h-[130vh] h-[180vh]">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[60%] h-[150vh] lg:w-[40%] lg:h-[100vh] m-auto mt-5" >
                        <div className="relative " >
                            <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/Gd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Graphic Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/md.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Motion Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/ud.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Ui/Ux Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/da.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Digital Artist</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/ld.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Logo Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/bd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Brand Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/packd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Packaging Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/gamd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Game Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/webd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Web Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/Id.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Industrial Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/intd.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Interaction Design</h3>
                        </div>

                        <div className="relative " >
                        <div className="overlay w-[132px] h-[120px] lg:w-[150px] lg:h-[138px] absolute z-20 bg-black rounded-3xl opacity-30"></div>
                            <input type="radio" className="absolute bg-transparent focus:bg-transparent border-white top-4 left-2 z-30"/>
                            <Image 
                            
                            src="/intiod.png"
                            width={150} 
                            height={150}
                            className="absolute z-10"
                            />
                            <h3 className="absolute top-24 z-40 text-white text-[12px] left-3">Interior Design</h3>
                        </div>


                    </div>

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
 
export default select;