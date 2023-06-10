'use client';

import style from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react';


export default function Header ( ) {

  const [scrolled,setScrolled]=React.useState(false);
  
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }

    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    })


  return (
    <header >
    <div className={scrolled ? style.sticky : style.header}>
      <nav className={style.headerwrapper}>
        <div className={style.headerlogo}>
          <Link href="/">
            <Image alt='pic' src='/../public/logos/logo-main.png' layout='fill' objectFit='contain'/>
          </Link>
        </div>
        <div className={style.headernav}>
          <ul>
            <li><Link href='/'> Wealth 101 </Link></li>
            <li><Link href={`/investor-personality-test/`}> Investing Personality Test </Link></li>
            <li><Link href="/calculators/"> Calculators </Link></li>
            <li><Link href="/"> Guides </Link></li>
            <li><Link href="/"> Markets </Link></li>
          </ul>
        </div>
        <div className={style.ctabutton}>
          <button> {`Sign Up >`} </button>
        </div>
      </nav>
    </div>
      
    </header>
  )
}