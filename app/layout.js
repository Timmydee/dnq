import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/>
      </Head>
      <main className={inter.className}>
        <Navbar />
        {children}
      </main>
    </html>
  )
}
