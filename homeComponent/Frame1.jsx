import React from 'react'
import styles from '@/styles'

const Frame1 = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className='flex justify-center items-center h-[90vh] my-auto'>
        <div className='w-[680px] h-[277px] bg-white rounded-xl flex justify-center items-center'>
          <div>
            <h1 className={`${styles.h2Style} text-[#0074D9]`}>Designers Help Desk</h1>
            <p className={`${styles.pStyle2} mt-1 text-[#333333] text-center`}>Where Designers Thrive and Questions Flourish</p>

            <input 
              placeholder='Search'
              className='w-full h-12 border mt-4 rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame1