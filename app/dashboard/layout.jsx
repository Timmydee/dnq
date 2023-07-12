import { Inter } from 'next/font/google'
import DashboardNavbar from '@/dahboardComponent/dashboardNavbar'


export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function dashboardLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <div className='w-full flex h-[100vh]'>
            <div className='w-[20%]'>
                <div className='fixed w-[20%]'>
                <DashboardNavbar />
                </div>
                
            </div>

            <div className='w-[80%]'>
                {children}
            </div>
        </div>
      </main>
    </html>
  )
}
