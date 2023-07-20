

import Styles from './global.css'
import Header from '@/utils/header'
import Footer from '@/utils/footer'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export const metadata = {
  title: 'Cleva Wealth',
  description: 'Smart decisions, limitless opportunities',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body className={Satoshi.className}> 
          <Header className={Styles.header} ></Header>
            <div className={Satoshi.className}>{children}</div>
          <Footer></Footer>
        </body>
    </html>
  )
}
