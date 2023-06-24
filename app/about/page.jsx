import Navbar from '@/components/Navbar'
import Frame5 from '@/homeComponent/Frame5'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div>
            <div className='relative lg:w-[100%] lg:h-[450px] h-[300px] w-[100%]'>
              <div className='overlay'></div>
                <Image src='/about.png' width={1500} height={450} alt='about' className='object-contain' />
                <div className="content">
                  <h1 className='text'>About DesignersQuery</h1>
                </div>
            </div>

            <div className="triangle lg:w-[100%] lg:h-[40vh]">

            </div>

            <div className='w-[100%] h-[130vh] lg:flex lg:h-[70vh] lg:w-[100%]'>

              <div className="text w-[80%] m-auto h-[40vh]  mt-20px lg:w-[50%] lg:h-[50vh] lg:p-20 lg:items-center" >
                <h2 className='font-bold mt-10 text-center text-2xl lg:text-xl lg:text-start'>WHO WE ARE</h2>
                <p className='text-lg lg:text-sm '>DNQ is a community-driven platform dedicated to answering all of the designer's questions. 
                  Our platform is designed to be a one-stop shop for all your design queries. Whether you're into web, 
                  product UX/UI, graphic, or brand design, we have something for everyone.</p>
              </div>

              <div className=" img w-[100%] h-[80vh] relative img lg:w-[50%] lg:h-[70vh]">
                <div className='bg-blue-200 mt-20 z-1 w-[90%] m-auto h-[57vh] rounded-lg lg:mt-20 lg:w-[500px] lg:h-[47vh] '>
                  <image src="/about1.png" className='absolute top-15 lg:top-25 object-cover z-2 lg:w-[510px] lg:h-[50vh] ml-5 -mt-10 w-[90%] h-[60vh]'/>
                </div>
                
              </div>
            </div>


              <div className="space lg:w-[100%] lg:h-[20vh]" >

              </div>

             <div className="flex lg:h-[70vh] h-[160vh] lg:flex flex-col-reverse lg:flex-row w-[100%]" >
              <div className="img w-[100%] h-[70vh] lg:w-[55%] lg:h-[70vh] " >
                <div className='bg-blue-200 z-1 w-[90%] h-[57vh] m-auto lg:w-[590px] lg:h-[55vh] rounded-lg'>
                  <image src="about3.png" className='absolute object-cover w-[90%] h-[60vh] z-2 lg:w-[600px] lg:h-[58vh] ml-5 -mt-10' />
                </div>
              </div>

              <div className="text w-[80%] m-auto h-[90vh] lg:w-[35%] lg:h-[70vh]" >
                <h2 className='font-bold lg:text-xl text-2xl text-center m-3'>WHAT WE DO</h2>
                <p className='lg:text-sm text-lg  '>Here, we cater to the needs of designers of all levels, guiding them to
                a wealth of resources and support to help them excel in their careers. One of the most unique 
                features is our Q&A section. Here, you can ask questions and receive prompt responses from our AI 
                solution and other designers who have encountered related difficulties. You will also be directed to 
                a wealth of resources that can help you improve your skills and stay with design trends. Because 
                DNQ is made up of designers from all over the world, you can be confident that you will receive a 
                diverse range of perspective and insights
                </p>
              
              </div>
            </div>
            <Frame5/>
        </div>
    </div>
  )
}

export default page