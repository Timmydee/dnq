import { Inter } from 'next/font/google'
import DashboardNavbar from '@/dahboardComponent/dashboardNavbar'
import MobileDashboardNav from '@/dahboardComponent/mobileDashboardNav'


export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function dashboardLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <div className='w-full lg:flex h-[100vh] hidden font-open'>
            <div className='w-[20%]'>
                <div className='fixed w-[20%]'>
                <DashboardNavbar />
                </div>    
            </div>

            <div className='w-[80%]'>
                {children}
            </div>
        </div>

        <div className='lg:hidden block'>
          <div className=''>
            <MobileDashboardNav />
          </div>
          
          <div className='relativ'>
            {children}
          </div>
          
        </div>
      </main>
    </html>
  )
}
