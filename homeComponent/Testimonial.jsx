"use client";
import React, { useState } from "react";
import {FcPrevious, FcNext} from "react-icons/fc"

const testimonies = [
  {
    imgUrl: "/swipe2.png",
    title: "Emily - UI/UX Designer.",
    desc:
      "Designers Query has been an invaluable resource for me. The community is incredibly supportive, and I've received insightful answers to my questions that have helped me grow as a designer. The platform is user-friendly and intuitive, making it easy to navigate and find the information I need. I highly recommend Designers Query to any designer looking to expand their skills and connect with like-minded professionals.",
  },
  {
    imgUrl: "/swipe2.png",
    title: "Alex - Experienced Designer",
    desc:
      "As a beginner designer,  Designers Query has been a game-changer for me. The platform has a welcoming and supportive community that has answered my questions and provided guidance every step of the way. The resources available, such as tutorials and articles, have helped me learn new techniques and improve my design skills. I feel more confident and inspired thanks to Designers Query.",
  },
  {
    imgUrl: "/swipe3.png",
    title: "Learning a skill in Web3.",
    desc:
      "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
  },
//   {
//     imgUrl: "/swipe3.png",
//     title: "Esther - Graphic Designer",
//     location:
//       "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
//   },
//   {
//     imgUrl: "/swipe3.png",
//     title: "Learning a skill in Web3.",
//     location:
//       "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
//   },
//   {
//     imgUrl: "/swipe3.png",
//     title: "Esther - Graphic Designer",
//     location:
//       "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
//   },
];

const Testimonial = () => {
  const [slide, setSlide] = useState(1);

  const handleClick = (index) => {
    setSlide(index)
  }

  const prevBtn = (prevIndex) => {
    setSlide(prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1);
    console.log(add)
  };

  const nextBtn = () => {
    // setSlide((prevIndex) => prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1);
    console.log(sub)
  };
  return (
    <div className="w-full ">
      <div className="lg:flex w-[100%] mx-auto justify-between overflow-hidden hidden ">
        {testimonies.map((testimony, index) => (
          <div className={` flex flex-col items-center ${
            index === slide ? 'w-[40%] h-[271px] relative bg-white rounded-[31.87px]' : ' w-[30%] h-[235px] pl-12 pr-[59.55px] pt-10 pb-[12px] bg-white rounded-3xl justify-start items-center inline-flex'
          }`}>
            
              <div className={`flex items-center justify-center ${index === slide ? 'w-[225px] h-[225px]' : 'w-[144px] h-[144px]'}`}>
                <img src={testimony.imgUrl} fill alt={testimony.title} />
              </div>

              <div className={`flex flex-col items-center justify-center bg-white ${index === slide ? "shadow-lg px-3" : "px-2 shadow-md"}`}>
                <h4 className="text-blue-500 text-[16px] font-semibold mt-1 mb-2">{testimony.title}</h4>
                <div className="w-[100%] h-[159px] text-zinc-800 text-[12px] font-normal">
                  <span>{testimony.desc} </span>
                </div>
              </div>
            
          </div>
        ))}
      </div>

      <div className="lg:flex justify-center mt-10 space-x-3 hidden ">
        <div className="w-[50px] h-[50px] border border-blue-500 rounded-full flex items-center justify-center">
        <button
          className=""
          onClick={prevBtn}
        >
          <FcPrevious />
        </button>
        </div>
        <div className="w-[50px] h-[50px] border border-blue-500 rounded-full flex items-center justify-center">
        <button
          className=""
          onClick={nextBtn}
        >
          <FcNext />
        </button>
        </div>
      </div>
      {/* <div class="w-full h-[450px] p-[0px] justify-start items-center gap-[52px] inline-flex">
        <div class="w-[372px] h-[200.76px] relative">
          <div class="w-[372px] h-[190px] left-[0px] top-[114.38px] absolute bg-white rounded-3xl"></div>
          <div class="p-[0px] left-[51px] top-[0px] absolute flex-col justify-start items-center gap-[10px] inline-flex">
            <img
              class="w-36 h-36 rounded-full border border-sky-600"
              src="https://via.placeholder.com/145x145"
            />
            <div class="p-[0px] flex-col justify-start items-center gap-[10px] flex">
              <div class="text-blue-500 text-[16px] font-semibold">
                Alex - Experienced Designer
              </div>
              <div class="w-[400.83px] h-[104.71px] text-zinc-800 text-[12px] font-normal">
                “As a beginner designer, Designers Query has been a game-changer
                for me. The platform has a welcoming and supportive community
                that has answered my questions and provided guidance every step
                of the way. The resources available, such as tutorials and
                articles, have helped me learn new techniques and improve my
                design skills. I feel more confident and inspired thanks to
                Designers Query.”
              </div>
            </div>
          </div>
        </div>
        <div class="w-[735.55px] h-[450px] relative shadow">
          <div class="w-[736px] h-[261px] left-[0px] top-[178px] absolute bg-white rounded-[31.87px]"></div>
          <div class="p-[0px] left-[55px] top-[0px] absolute flex-col justify-start items-center gap-[10px] inline-flex">
            <img
              class="w-[225.64px] h-[225.64px] rounded-full border border-sky-600"
              src="https://via.placeholder.com/226x226"
            />
            <div class="p-[0px] flex-col justify-start items-center gap-[10px] flex">
              <div class="text-blue-500 text-[16px] font-semibold">
                Emily - UI/UX Designer
              </div>
              <div class="w-[625px] h-[159px] text-zinc-800 text-[18px] font-normal">
                "Designers Query has been an invaluable resource for me. The
                community is incredibly supportive, and I've received insightful
                answers to my questions that have helped me grow as a designer.
                The platform is user-friendly and intuitive, making it easy to
                navigate and find the information I need. I highly recommend
                Designers Query to any designer looking to expand their skills
                and connect with like-minded professionals."
              </div>
            </div>
          </div>
        </div>
        <div class="w-[472px] h-[304px] relative">
          <div class="pl-12 pr-[59.55px] pt-10 pb-[12px] left-[0.45px] top-[115px] absolute bg-white rounded-3xl justify-start items-center inline-flex">
            <div class="self-stretch p-[0px] flex-col justify-start items-center gap-[10px] inline-flex">
              <div class="text-blue-500 text-[16px] font-semibold">
                Esther - Graphic Designer
              </div>
              <div class="w-[365px] h-[105px] text-zinc-800 text-[12px] font-normal">
                "Being a part of Designers Query has connected me with talented
                designers from around the world. I've had the opportunity to
                collaborate on projects, exchange ideas, and receive valuable
                feedback on my work. The platform provides a wealth of learning
                resources, tutorials, and expert articles that have helped me
                stay updated with the latest design trends. Designers Query is a
                must-have for any designer looking to enhance their skills and
                build meaningful relationships within the design community."
              </div>
            </div>
          </div>
          <img
            class="w-36 h-36 left-[163.16px] top-[0.62px] absolute rounded-full border border-sky-600"
            src="https://via.placeholder.com/145x145"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
