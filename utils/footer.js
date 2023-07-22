'use client'

import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialSharing from './social/page'
import logo from './../public/logos/logo-white.png'
import Nav from './nav/nav'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default function Footer () {

  return (
    <footer className={style.footer}>
        <div className={style.topfooter}>
          <div className={style.footerlogowrap}> 
            <Link href="/"> 
              <Image sizes='100vw' src={logo} alt='clevalogo'></Image> 
            </Link>
          </div>
          <div className={style.navs}>
            <Nav></Nav>
          </div>
        </div>

        <div className={style.middlefooter}>
          <div><span className={Satoshi.className}>©2023 Cleva Wealth</span>
          </div>
          <div className={style.socialicons}>
            <span className={Satoshi.className}>We are Social</span>
            <SocialSharing fill='white'></SocialSharing>
            </div>
        </div>
    </footer>
  )
}