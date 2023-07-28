'use client'

import React, { useEffect, useState } from "react"
const Finance = require("tvm-financejs");
import Styles from './styles.module.css'
import { Raleway  } from 'next/font/google'
import Link from "next/link";
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


import Retire from "./retire/retire";
import Target from "./target/target";
import Income from "./income/income";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export function Calc ({calc, heading, details}) {

  switch (calc) {
    case 'target':  
      return <Target heading={heading} details={details}></Target>
      break;
    case 'income':  
      return <Income heading={heading} details={details}></Income>
      break;
    default:
      return <Retire heading={heading} details={details}></Retire>
      break;
  }
}

export default function Thispage () {
   
  const [calcdisplay, setCalc] = useState('target')
  const [calcdetails, setcalcdetails] = useState({})
      
      
  const calcDB = [
    {type: 'retire',
    heading: 'Retirement Advisor',
    details: 'Retirement planning is essential for ensuring financial security during your golden years. By carefully managing your savings, investments, and expenses, you can create a solid financial foundation for a comfortable retirement. Start planning early, set realistic goals, and regularly review and adjust your retirement plan to stay on track towards a financially stable future.',
    image: ''},
    {type: 'income',
    heading: 'Income Portfolio',
    details: 'Earning income from numerous sources, including investments helps protect against sudden financial shocks that could arise from job losses or disability. Estimate the required investment value required to meet your desired income goals, and find the investment that help you achieve this goals',
      image: ''   },
    {type: 'target',
    heading: 'Target Portfolio',
    details: 'Either planning for a vacation, or purchasing that new car, find the right investments that help you bring your aspirations to reality',   
    }, 
  ]

  function changeDisplay (e) {

    e.preventDefault()

    setCalc(e.target.id)
  }

  async function showTarget () {
    const calc = calcDB.find((calc) => calc.type == calcdisplay)
    calc ? setcalcdetails(calc)  : ''
  }
      
  useEffect(() =>  {
    showTarget()
  }, [calcdisplay])

  return (
    <div className={Styles.pagecontainer}>  
      <div className={Styles.topheading}> 
        <h1 className={Satoshi.className}>Discover the right investment decision for you</h1> 
      </div> 
      <div id="calc" className={Styles.options}>          
       <a href='#calc' onClick={changeDisplay}>
        <button id='target' style={{backgroundColor: calcdisplay == 'target' ? 'rgb(17, 30, 72)' : '', borderColor: calcdisplay == 'target' ? 'greenyellow' : ''}}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg></button>
          <p className={Satoshi.className}>Target Investing</p>
        </a>

        <a href='#calc' onClick={changeDisplay}>
        <button id='income' style={{backgroundColor: calcdisplay == 'income' ? 'rgb(17, 30, 72)' : '', borderColor: calcdisplay == 'income' ? 'greenyellow' : ''}}>
          <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M0 0h48v48H0z" fill="none"/><g id="Shopicon"><path d="M25.662,19.651C26.402,19.877,27.187,20,28,20c4.418,0,8-3.582,8-8s-3.582-8-8-8c-2.212,0-4.214,0.898-5.662,2.349	C21.598,6.123,20.814,6,20,6c-4.418,0-8,3.582-8,8s3.582,8,8,8C22.212,22,24.214,21.102,25.662,19.651z M28,8c2.206,0,4,1.794,4,4		s-1.794,4-4,4c-2.206,0-4-1.794-4-4S25.795,8,28,8z M16,14c0-2.206,1.794-4,4-4c0.088,0,0.169,0.02,0.256,0.026	C20.095,10.658,20,11.317,20,12c0,2.079,0.8,3.967,2.1,5.389C21.488,17.77,20.773,18,20,18C17.795,18,16,16.206,16,14z"/><path d="M30,24c-5.952,0-10.813,1.913-12.9,4.777c-1.05-0.914-1.862-1.813-2.3-2.379c-1.986-2.643-5.754-3.181-8.4-1.198 c-2.646,1.984-3.185,5.753-1.199,8.4C5.519,34.025,13.131,44,24,44h20V32C44,27.439,37.981,24,30,24z M8.4,31.2	c-0.662-0.882-0.482-2.139,0.397-2.8c0.36-0.27,0.783-0.399,1.201-0.399c0.608,0,1.207,0.274,1.596,0.791	C11.647,28.864,17.026,36,24,36h8v-2l0,0v-2h-8c-1.229,0-2.46-0.385-3.61-0.962C21.518,29.573,25.025,28,30,28c6.104,0,10,2.369,10,4v8h-2H24C15.107,40,8.669,31.559,8.4,31.2z"/></g></svg></button>
          <p className={Satoshi.className}>Income Investing</p>
        </a>
        
        <a onClick={changeDisplay} href='#calc'  >
        <button id='retire' style={{backgroundColor: calcdisplay == 'retire' ? 'rgb(17, 30, 72)' : '', borderColor: calcdisplay == 'retire' ? 'greenyellow' : ''}}>
          <svg width="40px" height="40px" viewBox="-96 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M264,288c-30.928,0 -56,25.072 -56,56l0,38.25c0,8.837 7.163,16 16,16c8.837,0 16,-7.163 16,-16l0,-38.25c0,-13.255 10.745,-24 24,-24c13.255,0 24,10.745 24,24l0,152c0,8.837 7.163,16 16,16c8.837,0 16,-7.163 16,-16l0,-152c0,-30.928 -25.072,-56 -56,-56Zm-133.257,-175.437c12.189,0.75 20.568,6.001 25.139,15.752l44.827,83.406l79.784,9.066c14.116,1.604 24.259,14.347 22.655,28.463c-1.607,14.142 -14.394,24.291 -28.532,22.646l-93.616,-10.896c-4,-0.5 -10.596,-2.633 -15.262,-6.384c-4.666,-3.751 -9.284,-8.392 -13.855,-13.924c-4.571,-5.532 -8.38,-10.455 -11.427,-14.768c-3.047,-4.313 -6.809,-9.939 -11.284,-16.878c-4.476,-6.938 -7.57,-11.626 -9.284,-14.064l-31.424,82.138l11.998,69.76c1.714,7.689 2.571,12.94 2.571,15.753c0,2.813 -0.762,7.782 -2.285,14.909l-25.425,109.423c-4.19,16.69 -17.617,25.035 -40.28,25.035c-9.522,-0.188 -17.188,-4.219 -22.996,-12.096c-5.809,-7.876 -7.856,-16.69 -6.142,-26.441l21.425,-114.206l-17.712,-75.668c-8.379,-18.753 -11.284,-37.881 -8.713,-57.384c2.571,-19.503 9.666,-38.349 21.283,-56.54c24.187,-37.506 51.421,-56.727 81.702,-57.665c13.331,0 22.282,0.188 26.853,0.563Zm109.257,-56.563c0,30.928 -25.072,56 -56,56c-30.928,0 -56,-25.072 -56,-56c0,-30.928 25.072,-56 56,-56c30.928,0 56,25.072 56,56Z"></path></svg></button>
          <p className={Satoshi.className}>Retirement</p>
        </a>
        

        <a href='#calc'>
        <button onClick={changeDisplay} style={{backgroundColor: calcdisplay == 'stocks' ? 'rgb(17, 30, 72)' : '', color: calcdisplay == 'stocks' ? 'white' : ''}}>
          <svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 410.916 410.915" ><g><path d="M410.916,375.428v22.415H0V13.072h22.413v362.355H410.916z M89.193,315.652h11.208v-50.431h10.27V145.689h-10.27V93.393H89.193v52.296H78.917v119.533h10.277V315.652z M152.69,241.872h11.207v-51.365h10.276V70.971h-10.276V19.606H152.69v51.365h-10.27v119.536h10.27V241.872z M215.727,279.229h11.207v-49.488h10.271V110.194h-10.271V56.963h-11.207v53.231h-10.276V229.73h10.276V279.229z M287.169,300.243h11.21v-49.965h10.273V130.742h-10.273V77.976h-11.21v52.767h-10.269v119.536h10.269V300.243zM360.484,242.349h11.206v-51.833h10.271V70.971H371.69V20.077h-11.206v50.895h-10.276v119.536h10.276V242.349z"/></g></svg></button>
          <p className={Satoshi.className}>Stock Investing</p>
        </a>
        </div>
        <Calc 
          className={Styles.calculators} 
          calc={calcdisplay}
          heading={calcdetails.heading}
          details={calcdetails.details}>
          </Calc>
    </div>
  )
}