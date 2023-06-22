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
    <div className='w-full bg-[#038A7D]'>
      <div className=''>
        <h3 className={`${styles.h5Style} text-center text-white font-bold`}>Helping all Designers get answers to there questions</h3>
        <div className='flex flex-wrap justify-evenly'>
          {help.map((item) => {
            return (
              <div className='flex items-center justify-center my-4 gap-2'>
                <Image src={item.image} width={20} height={20} alt='help1' />
                <p className={`${styles.pStyle2} text-white`}>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Frame3