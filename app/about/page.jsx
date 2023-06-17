import Navbar from '@/components/Navbar'
import Frame5 from '@/homeComponent/Frame5'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div>
            <Navbar />
            <div className='absolut'>
                <Image src='/about.png' width={1000} height={500} alt='about' />
            </div>
            <Frame5/>
        </div>
    </div>
  )
}

export default page