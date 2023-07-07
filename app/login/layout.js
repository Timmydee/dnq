import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Designers Query',
  description: 'Stackoverflow for designers',
}

export default function aboutLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </html>
  )
}
