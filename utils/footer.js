'use client'

import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialSharing from './social/page'
import logo from './../public/logos/logo-white.png'
import Nav from './nav/nav'

export default function Footer () {

  return (
    <footer className={style.footer}>
        <div className={style.topfooter}>
          <div>
            <div className={style.footerlogowrap}> 
              <Link href="/"> 
                <Image sizes='100vw' src={logo} alt='clevalogo'></Image> 
              </Link>
            </div>
          </div>
          <div className={style.navs}>
            <Nav></Nav>
          </div>
        </div>

        <div className={style.middlefooter}>
          <div><span>©2023 Cleva Wealth</span>
          </div>
          <div className={style.socialicons}>
            <p>We are Social</p>
            <SocialSharing fill='white'></SocialSharing>
            </div>
        </div>
    </footer>
  )
}