import React from 'react'
import styles from '@/styles'

const Frame1 = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className='flex justify-center items-center lg:h-[90vh] h-[70vh] my-auto'>
        <div className='lg:w-[680px] w-[80%] lg:h-[377px] h-[227px] bg-white rounded-xl flex justify-center items-center'>
          <div className='w-full'>
            <div>
              <h1 className={`${styles.h2Style} text-[#0074D9] text-center`}>Designers Help Desk</h1>
              <p className={`${styles.pStyle2} mt-1 text-[#333333] text-center`}>Where questions get answered and designers thrive</p>
              </div>
              <div className='flex items-center justify-center'>
              <input 
                placeholder='Search'
                className='lg:w-[70%] md:w-[80%] w-[92%] h-12 border mt-5 rounded-xl shadow-sm hover:shadow-lg border-[#333333] p-[10px] lg:p-[20px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame1