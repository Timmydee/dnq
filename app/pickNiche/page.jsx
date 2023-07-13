"use client"

import React, { useState } from 'react';
{/*import { Progress } from 'flowbite-react';*/}

const pickNiche = () => {
    const [selectedOption, setSelectedOption] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3'];
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  


    return ( 
        <div className="w-[100%] h-[90vh]">
            <div className="lg:w-[40%] w-[70%] h-[90vh] m-auto">
                <h1 className="mt-[70px] text-[30px] font-serif text-center font-[500]">Almost there!</h1>
                <p className="text-[14px] text-center mt-[7px] mb-[4px]">Enter your username and pick a niche</p>
                {/*<Progress progress={45} className="w-[300px] m-auto "/>*/}


                
                
                <form action="" className="">
                    <div className="mt-9 w-[90%] m-auto">
                        <apan
                            className={`font-sans text-[14px] font-light text-start`}
                        >
                        Username 
                        </apan>

                        <div className="w-[100%] mt-2 h-[65px] border border-black rounded-2xl m-auto py-2 px-3">
                            <input 
                            placeholder="Enter your Username"
                            type="text" 
                            className="border-0 text-[13px] h-[50px] font-sans border-transparent focus:border-transparent focus:ring-0 outline-0 w-[100%] focus:outline-0"
                            />
                        </div>

                    </div>

                    <div className="mt-9 w-[90%] m-auto">
                        <apan
                            className={`font-sans text-[14px] font-light text-start`}
                        >
                        Niche 
                        </apan>

                        <div className="w-[100%] mt-2 h-[65px] border border-black rounded-2xl m-auto py-2 px-3">
                            <input 
                            placeholder="Create your Niche"
                            type="text" 
                            className="border-0 text-[13px] h-[50px] font-sans border-transparent focus:border-transparent focus:ring-0 outline-0 w-[100%] focus:outline-0"
                            />
                        </div>
                    </div>

                    <div className='mt-3 w-[90%] m-auto'>
                        <button className='w-[100%] font-sans bg-sky-400 m-auto p-3 rounded-2xl mt-3 text-white'>
                            Continue
                        </button>

                        <button className='w-[100%] font-sans bg-transparent m-auto p-3 rounded-2xl mt-3'>
                            Skip
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default pickNiche;