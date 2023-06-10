
import Styles from './global.css'
import Header from '@/utils/header'
import Footer from '@/utils/footer'
import { Red_Hat_Display  } from 'next/font/google'

const redhatdisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body> 
        <Header className={Styles.header} ></Header>
         <div>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}
