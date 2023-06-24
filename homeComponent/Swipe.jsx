"use client";
import React, { useState } from "react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "@/styles";
// import {motion} from 'framer-motion'

const events = [
  {
    imgUrl: "/swipe2.png",
    title: "Emily - UI/UX Designer.",
    location: "Designers Query has been an invaluable resource for me. The community is incredibly supportive, and I've received insightful answers to my questions that have helped me grow as a designer. The platform is user-friendly and intuitive, making it easy to navigate and find the information I need. I highly recommend Designers Query to any designer looking to expand their skills and connect with like-minded professionals.",
  },
  {
    imgUrl: "/swipe2.png",
    title: "Alex - Experienced Designer",
    location: "As a beginner designer,  Designers Query has been a game-changer for me. The platform has a welcoming and supportive community that has answered my questions and provided guidance every step of the way. The resources available, such as tutorials and articles, have helped me learn new techniques and improve my design skills. I feel more confident and inspired thanks to Designers Query.",
  },
  {
    imgUrl: "/swipe3.png",
    title: "Learning a skill in Web3.",
    location: "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",

  },
  {
    imgUrl: "/swipe3.png",
    title: "Esther - Graphic Designer",
    location: "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
  },
  {
    imgUrl: "/swipe3.png",
    title: "Learning a skill in Web3.",
    location: "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",

  },
  {
    imgUrl: "/swipe3.png",
    title: "Esther - Graphic Designer",
    location: "Being a part of Designers Query has connected me with talented designers from around the world. I've had the opportunity to collaborate on projects, exchange ideas, and receive valuable feedback on my work. The platform provides a wealth of learning resources, tutorials, and expert articles that have helped me stay updated with the latest design trends. Designers Query is a must-have for any designer looking to enhance their skills and build meaningful relationships within the design community.",
  },
];

const Swipe = () => {
  
    
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className={`${styles.innerWidth}`}>
      <div>
        <div className="flex w-full flex-col items-center justify-center px-12">
          <div className="">
            <Slider ref={setSliderRef} {...sliderSettings}>
              {events.map((speak, index) => (
                <div className="">
                  <div >
                    <div className="flex items-center justify-center">
                      <img src={speak.imgUrl} alt={speak.title} />
                    </div>

                    <div className="">
                      <h4 className="">{speak.title}</h4>
                      <div className="text-[10px]">
                        <span>{speak.location} </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="">
            <button onClick={sliderRef?.slickPrev} className="w-[20px] h-[20px]  text-blue-500 rounded-full>">
              <FaChevronLeft />
            </button>
            <button onClick={sliderRef?.slickNext} className="w-[20px] h-[20px] text-blue-500 rounded-full">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
