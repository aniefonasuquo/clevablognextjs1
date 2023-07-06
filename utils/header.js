'use client';

import style from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import logo from './../public/logos/logo-main.png'
import { useRouter } from 'next/navigation';



export default function Header ( ) {

  const [menuDisplay, setMenuDisplay] = useState('burger')

  function showMobileNav () {

    if (menuDisplay == 'burger') {
      setMenuDisplay('close')
    } else { 
      setMenuDisplay('burger')}
  }
  
  const handleLinkClick = async (e) => {  
    setMenuDisplay('burger')
  };

 
  return (
    <>
      <header className={style.header}>
        <div className={style.headerlogo}>
          <Link href="/">
            <Image alt='pic' sizes='100vw' src={logo}/>
          </Link>
        </div>
        <div id='nav' className={style.navs} style={{top: menuDisplay == 'close' ? '59px': '-300%'}}>
            <nav>
            <ul>
              <li><Link onClick={handleLinkClick} href='/blog'>Blog</Link></li>
              <li><Link onClick={handleLinkClick} href={`/investorquiz/`}> Investor Personality Quiz</Link></li>
              <li><Link onClick={handleLinkClick} href="/calculators/"> Discovery </Link></li>
              <li><Link onClick={handleLinkClick} href="/"> Guides </Link></li>
              <li><Link onClick={handleLinkClick} href="/"> Markets </Link></li>
            </ul>
          </nav>
        </div>
        <div className={style.ctabutton}>
          <Link href='/join'>
            <button>Join Cleva</button>
          </Link>
        </div>
        <div className={style.menu}>
          <button id='menuButton' onClick={showMobileNav}>
            {menuDisplay == 'burger' &&
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"  width="30" height="30" fill='navy'><g><path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/><path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/><path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/></g></svg>}
           {menuDisplay == 'close' &&  
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" width="30" height="30" fill='navy'><g><path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/></g></svg>}
          </button>
        </div> 
      </header>
          </>
  )
}