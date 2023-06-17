import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <main className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </main>
    </html>
  )
}
