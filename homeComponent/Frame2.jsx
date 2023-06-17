import React from 'react'
import Image from 'next/image'
import styles from '@/styles'

const Frame2 = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <div className='flex justify-center items-center my-auto'>
        <Image src="/section1.png" width={1200} height={900} alt='design'/>
      </div>
  </div>
  )
}

export default Frame2