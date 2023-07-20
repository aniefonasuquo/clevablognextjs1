'use client'

import Image from "next/image"
import Link from "next/link"
import logo from './../public/logos/logo-white.png'
import styles from './header.module.css'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Header () {

  const router = useRouter()

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


  return (<div className={styles.navanim}>

    <div className={styles.navcontainer}>
      <Link onClick={handleLinkClick} href='/'>
        <div className={styles.logocontainer}>
            <Image src={logo} sizes="100vw" width={100} height={35}></Image>
        </div>
      </Link>
      <nav className={styles.nav}>
        
        <div>
        <Link onClick={handleLinkClick} href='/blog'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Zm-10-1c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c4.136,0,7.5,3.364,7.5,7.5Zm6,0c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-6.893-5.607-12.5-12.5-12.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c7.444,0,13.5,6.056,13.5,13.5Zm-12-.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
          </Link>
          <div><span><Link href='/blog'>Blog</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/calculators'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M23.854,23.146l-6.449-6.449c1.607-1.775,2.596-4.12,2.596-6.697C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.577,0,4.922-.989,6.697-2.596l6.449,6.449c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707ZM1,10C1,5.037,5.038,1,10,1s9,4.037,9,9-4.037,9-9,9S1,14.963,1,10Zm13,2.374c0,1.448-1.178,2.626-2.626,2.626h-.874v1.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5h-.926c-.979,0-1.891-.526-2.381-1.375-.139-.238-.057-.545,.182-.683,.239-.14,.545-.057,.683,.183,.312,.54,.894,.875,1.516,.875h2.8c.896,0,1.626-.729,1.626-1.626,0-.803-.575-1.479-1.368-1.604l-3.423-.552c-1.28-.204-2.209-1.295-2.209-2.592,0-1.448,1.178-2.626,2.626-2.626h.874v-1.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.5h.926c.979,0,1.891,.526,2.381,1.375,.139,.238,.057,.545-.183,.683-.237,.138-.544,.057-.683-.183-.312-.54-.894-.875-1.516-.875h-2.8c-.896,0-1.626,.729-1.626,1.626,0,.803,.575,1.479,1.368,1.604l3.423,.552c1.279,.204,2.209,1.295,2.209,2.592Z"/></svg>
          </Link>
          <div><span><Link onClick={handleLinkClick} href='/calculators'>Advisory</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/investorquiz'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Zm-7.063-14.722c.298,1.701-.509,3.4-2.009,4.227-.761,.42-1.428,1.647-1.428,2.628v.867h-1v-.867c0-1.34,.873-2.912,1.946-3.503,1.143-.631,1.734-1.878,1.506-3.179-.211-1.203-1.2-2.191-2.404-2.403-.905-.155-1.784,.073-2.476,.653-.681,.572-1.072,1.41-1.072,2.299h-1c0-1.186,.521-2.302,1.429-3.064,.908-.763,2.107-1.08,3.292-.872,1.611,.282,2.933,1.604,3.216,3.215Zm-2.937,10.722c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
          </Link >
          <div><span><Link onClick={handleLinkClick} href='/investorquiz'>Investor Personality Quiz</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/join'><svg fill="white" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
c49.899,49.92,115.456,74.859,181.013,74.859s131.115-24.939,181.013-74.859C536.709,337.095,536.709,174.663,436.891,74.866z
			 M341.211,319.879c-11.797,0-21.333-9.557-21.333-21.333v-76.501l-134.251,134.25c-4.16,4.16-9.621,6.251-15.083,6.251
			c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l134.251-134.251h-76.501
			c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h128c2.773,0,5.547,0.576,8.149,1.643
			c5.227,2.155,9.387,6.315,11.541,11.541c1.088,2.603,1.643,5.376,1.643,8.149v128h0
			C362.544,310.322,353.008,319.879,341.211,319.879z"/></g></g></svg>
          </Link>
          <div><span><Link onClick={handleLinkClick} href='/join'>Join Cleva</Link></span></div>
        </div>
        </nav>
        <div onClick={showMobileNav} className={styles.menu}><div className={menuDisplay == 'close' ? styles.crossOne : styles.flatone}></div><div className={menuDisplay == 'close' ? styles.crossTwo : styles.flatwo}></div></div>
             
    </div>
        <div className={styles.mobileNav} style={{left: menuDisplay == 'close' ? '0' : '-100%'}}>
        <nav className={styles.navtwo}>
        
        <div>
        <Link onClick={handleLinkClick} href='/blog'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Zm-10-1c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c4.136,0,7.5,3.364,7.5,7.5Zm6,0c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-6.893-5.607-12.5-12.5-12.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c7.444,0,13.5,6.056,13.5,13.5Zm-12-.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
          </Link>
          <div><span><Link onClick={handleLinkClick} href='/blog'>Blog</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/calculators'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M23.854,23.146l-6.449-6.449c1.607-1.775,2.596-4.12,2.596-6.697C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.577,0,4.922-.989,6.697-2.596l6.449,6.449c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707ZM1,10C1,5.037,5.038,1,10,1s9,4.037,9,9-4.037,9-9,9S1,14.963,1,10Zm13,2.374c0,1.448-1.178,2.626-2.626,2.626h-.874v1.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5h-.926c-.979,0-1.891-.526-2.381-1.375-.139-.238-.057-.545,.182-.683,.239-.14,.545-.057,.683,.183,.312,.54,.894,.875,1.516,.875h2.8c.896,0,1.626-.729,1.626-1.626,0-.803-.575-1.479-1.368-1.604l-3.423-.552c-1.28-.204-2.209-1.295-2.209-2.592,0-1.448,1.178-2.626,2.626-2.626h.874v-1.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.5h.926c.979,0,1.891,.526,2.381,1.375,.139,.238,.057,.545-.183,.683-.237,.138-.544,.057-.683-.183-.312-.54-.894-.875-1.516-.875h-2.8c-.896,0-1.626,.729-1.626,1.626,0,.803,.575,1.479,1.368,1.604l3.423,.552c1.279,.204,2.209,1.295,2.209,2.592Z"/></svg>
          </Link>
          <div><span><Link onClick={handleLinkClick} href='/calculators'>Advisory</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/investorquiz'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Zm-7.063-14.722c.298,1.701-.509,3.4-2.009,4.227-.761,.42-1.428,1.647-1.428,2.628v.867h-1v-.867c0-1.34,.873-2.912,1.946-3.503,1.143-.631,1.734-1.878,1.506-3.179-.211-1.203-1.2-2.191-2.404-2.403-.905-.155-1.784,.073-2.476,.653-.681,.572-1.072,1.41-1.072,2.299h-1c0-1.186,.521-2.302,1.429-3.064,.908-.763,2.107-1.08,3.292-.872,1.611,.282,2.933,1.604,3.216,3.215Zm-2.937,10.722c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
          </Link >
          <div><span><Link onClick={handleLinkClick} href='/investorquiz'>Investor Personality Quiz</Link></span></div>
        </div>
        <div>
        <Link onClick={handleLinkClick} href='/join'><svg fill="white" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
c49.899,49.92,115.456,74.859,181.013,74.859s131.115-24.939,181.013-74.859C536.709,337.095,536.709,174.663,436.891,74.866z
			 M341.211,319.879c-11.797,0-21.333-9.557-21.333-21.333v-76.501l-134.251,134.25c-4.16,4.16-9.621,6.251-15.083,6.251
			c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l134.251-134.251h-76.501
			c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h128c2.773,0,5.547,0.576,8.149,1.643
			c5.227,2.155,9.387,6.315,11.541,11.541c1.088,2.603,1.643,5.376,1.643,8.149v128h0
			C362.544,310.322,353.008,319.879,341.211,319.879z"/></g></g></svg>
          </Link>
          <div><span><Link onClick={handleLinkClick} href='/join'>Join Cleva</Link></span></div>
        </div>
        </nav>

        <span> Cleva is a wealth advisory resource that helps individuals make the right investment decisions, specific to their objectives and personal characteristics.</span>
        </div>
  
  </div>)
}