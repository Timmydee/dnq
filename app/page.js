'use client'
import Navbar from "@/components/Navbar";
import Frame1 from "@/homeComponent/Frame1";
import Frame3 from "@/homeComponent/Frame3";
import Frame4 from "@/homeComponent/Frame4";
import Frame5 from "@/homeComponent/Frame5";
import Swipe from "@/homeComponent/Swipe";
import Testimonial from "@/homeComponent/Testimonial";
import Unique from "@/homeComponent/unique";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div>
      <div className="font-gentium">
        <Frame1 />
        <Frame3 />
        <Unique />
        <Testimonial />
        {/* <Swipe /> */}
        {/* <Frame4 /> */}
        <Frame5 />
      </div>
      {/* <div>
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image src="/hero.png" width={1700} height={1000} alt="hero" />
          </div>
          <div className="relative z-1">
            <Frame1 />
            <Frame2 />
            <Frame3 />
            <Frame4 />
            
            <Frame5 />
          </div>
        </div>
      </div> */}
    </div>
  );
}
