import React from "react";
import Image from "next/image";
import Link from "next/link";


const errorPage = () => {
    return (  
        <div className="w-[100%] h-[100%]">
            <div className="mt-10">
                <Image
                    src={"/404.png"}
                    width={550}
                    height={200}
                    className="m-auto w-[300px] lg:w-[550px] lg:h-[200] h-[200]"
                />
            </div>

            <div className="lg:w-[40%] w-[50%] h-[150px] m-auto my-[20px] lg:my-[5px]">
                <h1 className="font-bold text-[27px] lg:text-[40px] font-serif text-center">Oops!</h1>
                <p className="lg:text-[14px] text-[16px] font-sans text-center mb-3">We can’t seem to find the page you are looking for</p>
                <Link href="/"
                className="m-auto flex justify-evenly h-10"
                >
                    <button className=" bg-blue-500 font-sans lg:text-[12px] text-white w-[100px] text-[11px] lg:w-[120px] h-10 rounded-md">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default errorPage;