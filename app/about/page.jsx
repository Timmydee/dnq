import Frame5 from "@/homeComponent/Frame5";
import React from "react";
import Image from "next/image";
import styles from "@/styles";

const about = [
  {
    img: "/qa.png",
    title: " Q&A",
    desc: "Ask questions and help provide answers to questions related to design, tools, and techniques.",
  },
  {
    img: "/library.png",
    title: "Resource library",
    desc: "Gain access to a collection of design resources, and tools from design experts that you can use to improve your skills and stay up-to-date with the latest trends in the industry.",
  },
  {
    img: "/community.png",
    title: "Community support",
    desc: "Connect with other designers, share your work, and get feedback and support from the DNQ community.",
  },
  {
    img: "/learning.png",
    title: "Learning",
    desc: "Learn from experts and share your knowledge, get feedback to improve your skill, and collaborate. It’s all a part of the learning process.",
  },
];

const page = () => {
  return (
    <div className={`${styles.innerWidth} overflow-x-hidden`}>
      <div>
        <div className="w-full relative">
          <div className="flex flex-col items-center justify-center h-[500px] mx-auto">
            <h2 className="text-[#2E9EFF] text-[32px] lg:text-[57px]">
              WHO WE ARE
            </h2>
            <p className="text-[#333333] text-[14px] lg:text-[16px] lg:w-[712px] w-[90%] text-justify">
              DNQ is a community-driven platform dedicated to answering all of
              the designers questions Our platform is designed to be a one-stop
              shop for all your design queries. Whether you are into web
              product, UX/UI, graphic, or brand design, we have something for
              everyone.
            </p>
          </div>
          <div className="absolute bottom-10 right-0 lg:w-[83px] lg:h-[96px] w-[26px] h-[33px]">
            <Image src="/softstar.png" fill className="rotate-animation"/>
          </div>
          <div className="absolute bottom-10 left-20 lg:w-[83px] lg:h-[96px] w-[26px] h-[33px]">
            <Image src="/kite.png" fill />
          </div>
          <div className="absolute top-10 left-20 lg:w-[83px] lg:h-[96px] w-[26px] h-[33px]">
            <Image
              src="/softstar.png"
              fill
              className="rotate-animation"
            />
          </div>
        </div>
        <div class="w-full bg-slate-950 py-[40px] justify-center items-center inline-flex">
          <div class="self-stretch flex-col justify-start items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-[32px] lg:text-[57px] font-bold">
              WHAT WE DO?
            </div>
            <div class="lg:w-[85%] w-[90%] text-justify text-white text-[16px] font-semibold">
              Here, we cater to the needs of designers of all levels, guiding
              them to a wealth of resources and support to help them excel in
              their careers. One of the most unique features of our platform is
              our Q&A section. Here, you can ask questions and receive prompt
              responses from our AI solution and other designers who have
              encountered related difficulties. You will also be directed to a
              wealth of resources that can help you improve your skills and stay
              current with design trends. Because DNQ is made up of designers
              from all over the world, you can be confident that you will
              receive a diverse range of perspectives and insights.
            </div>
          </div>
        </div>

        <div className="w-full lg:px-20 px-5 relative">
          <div class=" grid lg:grid-cols-2 grid-cols-1 justify-between">
            {about.map((abt, index) => {
              return (
                <div class="lg:w-[569px] w-[98%] lg:h-[317px] h-full relative mx-auto">
                  <div className="relative top-10 z-30 px-8 ">
                    <Image
                      src={abt.img}
                      width={95}
                      height={94}
                      alt="dnq about"
                    />
                  </div>

                  <div class="relative bg-gray-200 rounded-[30px] px-8 pt-14 pb-4 z-0">
                    <div class="text-blue-500 text-[24px] font-bold my-2">
                      {abt.title}
                    </div>
                    <div class="lg:w-[474px] w-[95%] lg:h-[100px] h-[150px] text-black text-[16px] font-normal">
                      {abt.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-10 right-0">
            <Image src="/isolation1.png" width={98} height={94} />
          </div>
          <div className="absolute top-10 left-0">
            <Image src="/isolation2.png" width={98} height={94} />
          </div>
        </div>
      </div>

      <Frame5 />
    </div>
  );
};

export default page;
