import React from 'react'
import styles from '@/styles'
import Image from 'next/image'

export const help = [
  {
    image: "/help.png",
    text: "Logo Designers"
  },
  {
    image: "/help1.png",
    text: "UI/UX Designers"
  },
  {
    image: "/help2.png",
    text: "Graphic Designers"
  },
  {
    image: "/help3.png",
    text: "Digital Artists"
  },
  {
    image: "/help4.png",
    text: "Brand Designer",
  },
  {
    image: "/help5.png",
    text: "Motion Design"
  }
]


const Frame3 = () => {
  return (
    <div className='w-full bg-[#2E9EFF]'>
      <div className='py-4 lg:py-6 px-5 lg:px-0'>
        <h3 className={`${styles.h5Style} text-center text-white font-bold font-pius`}>Helping all Designers get answers to their questions</h3>
        <div className='flex flex-wrap justify-evenly'>
          {help.map((item) => {
            return (
              <div className='flex flex-col items-center justify-center my-4 gap-2'>
                <Image src={item.image} width={60} height={60} alt='help1' />
                <p className={`${styles.pStyle2} font-open text-white`}>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Frame3