'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </html>
  )
}
