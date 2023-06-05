import Navigation from '../components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jose Ramirez Portfolio',
  description: 'Software Developer Portfolio',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navigation/>
        {children} </body>
    </html>
  )
}
