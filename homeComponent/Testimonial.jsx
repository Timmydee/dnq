"use client";
import React, { useState } from "react";
import {FcPrevious, FcNext} from "react-icons/fc"

const testimonies = [
  {
    imgUrl: "/swipe1.png",
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

];

const Testimonial = () => {

  return (
    <div className="w-full my-10 lg:px-11 px-2">
      <div className="lg:flex w-[100%] mx-auto justify-between overflow-hidden relative gap-4">
        {testimonies.map((testimony, index) => (
          <div className={`w-full flex flex-col items-center justify-center py-5 lg:h-[400px] h-fit`}>      
              <div className={`flex items-center justify-center w-[56px] h-[56px] lg:w-[125px] lg:h-[125px] lg:absolute top-[0px] bottom-[0px] z-30`}>
                <img src={testimony.imgUrl} fill alt={testimony.title} />
              </div>

              <div className={`flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg shadow-blue-200 lg:w-[390px] px-3 lg:h-[185px] w-[90%] h-fit relative z-0 lg:pt-5`}>
                <h4 className="text-blue-500 text-[16px] font-semibold mt-1 mb-2">{testimony.title}</h4>
                <div className="w-[100%] h-[159px] text-zinc-800 text-[12px] font-light">
                  <span>{testimony.desc} </span>
                </div>
              </div>
            
          </div>
        ))}
      </div>

  
      
    </div>
  );
};

export default Testimonial;
