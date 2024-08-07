
import { Inter,Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'
import Provider from './Provider'

export const revalidate = 300
const inter = Inter({ subsets: ['latin'] })

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-sourceSans',
})

export const metadata = {
  title:{
    default: 'Chalchitra',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
      <body  className={sourceSans.className}>
        <Header/>
        {children}
      </body>
      </Provider>
    </html>
  )
}
