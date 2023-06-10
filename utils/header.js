'use client';

import style from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';


export default function Header ( ) {

  const [menuDisplay, setMenuDisplay] = useState('inactive')
  

  function showMobileNav () {
    const nav = document.getElementById('mobileNav');

    if (menuDisplay == 'inactive') {
      nav.style.display = 'block';
      setMenuDisplay('active')
    }
    else {
      nav.style.display = 'none';
      setMenuDisplay('inactive')
    }

  }

  useEffect (()=> {

    const menu = document.getElementById('menu')
    const close = document.getElementById('close')

    if(menuDisplay == 'inactive') {
      close.style.display = 'none'
      menu.style.display = 'block'
    } else {
      close.style.display = 'block'
      menu.style.display = 'none'
    }
  })

  return (
    <>
      <header className={style.header}>
        <div className={style.headerlogo}>
          <Link href="/">
            <Image alt='pic' src='/../public/logos/logo-main.png' fill= 'true' objectFit='contain'/>
          </Link>
        </div>
        <nav className={style.navs}>
          <ul>
            <li><Link href='/'> Wealth 101 </Link></li>
            <li><Link href={`/investor-personality-test/`}> Investing Personality Test </Link></li>
            <li><Link href="/calculators/"> Calculators </Link></li>
            <li><Link href="/"> Guides </Link></li>
            <li><Link href="/"> Markets </Link></li>
          </ul>
        </nav>
        <div className={style.ctabutton}>
          <button> {`Sign Up >`} </button>
        </div>
        <div className={style.menu}>
          <button id='menuButton' onClick={showMobileNav}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="menu"><path fill="none" d="M0 0h48v48H0z"></path><path d="M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
          <svg style={{display: 'none'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" id="close" fill="rgba(24,40,102,255)"><path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path></svg>
          </button>
        </div>
        <nav id='mobileNav' className={style.mobileNav}>
          <ul>
              <li><Link onClick={showMobileNav} href='/'> Wealth 101 </Link></li>
              <li><Link  onClick={showMobileNav} href={`/investor-personality-test/`}> Investing Personality Test </Link></li>
              <li><Link onClick={showMobileNav} href="/calculators/"> Calculators </Link></li>
              <li><Link onClick={showMobileNav} href="/"> Guides </Link></li>
              <li><Link onClick={showMobileNav} href="/"> Markets </Link></li>
            </ul>
          </nav>  

      </header>
          </>
  )
}