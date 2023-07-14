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
            <p>Global investment opportunites, for you</p>
            <div className={style.socialicons}>
            <SocialSharing fill='white'></SocialSharing>
            </div>
          </div>
          <div className={style.navs}>
            <Nav></Nav>
          </div>
        </div>

        <div className={style.middlefooter}>
          <div>
            <p>
            ©2023 Cleva Wealth
            </p>
          </div>
          <div className={style.copywritewrap}>
           Terms of service
          </div>
        </div>
    </footer>
  )
}