import React from 'react'
import styles from '@/styles'

const Frame1 = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className='flex justify-center items-center lg:h-[90vh] h-[70vh] my-auto'>
        <div className='lg:w-[680px] w-[80%] h-[277px] bg-white rounded-xl flex justify-center items-center'>
          <div className='w-full'>
            <div>
            <h1 className={`${styles.h2Style} text-[#0074D9] text-center`}>Designers Help Desk</h1>
            <p className={`${styles.pStyle2} mt-1 text-[#333333] text-center`}>Where Designers Thrive and Questions Flourish</p>
            </div>
            <div className='flex items-center justify-center'>
            <input 
              placeholder='Search'
              className='lg:w-[70%] w-full h-12 border mt-4 rounded-2xl'
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame1