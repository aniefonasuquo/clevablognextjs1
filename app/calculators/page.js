'use client'

import React, { useEffect, useState } from "react"
const Finance = require("tvm-financejs");
import Styles from './styles.module.css'
import { Raleway  } from 'next/font/google'
import Rangeslider from './multiRangeSlider/MultiRangeSlider'
import { PieChart } from 'react-minimal-pie-chart';
import Image from "next/image";
import retireimage from './../../public/retire.jpg'

import Retire from "./retire/retire";
import Target from "./target/target";
import Income from "./income/income";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export function Calc ({calc}) {

  switch (calc) {
    case 'target':  
      return (<Target></Target>)
      // break;
    case 'income':  
      return (<Income></Income>)
      // break;
    default:
      return (<Retire></Retire>)
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
    image: retireimage},
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
        <h1 className={`${raleway.className}`}>Discover the best investment decision for you</h1> 
      </div> 
      <div className={Styles.options}>
        <button id='retire' onClick={changeDisplay} style={{backgroundColor: calcdisplay == 'retire' ? 'rgb(17, 30, 72)' : '', color: calcdisplay == 'retire' ? 'white' : ''}}>Retirement</button>
        <button id='target' onClick={changeDisplay} style={{backgroundColor: calcdisplay == 'target' ? 'rgb(17, 30, 72)' : '', color: calcdisplay == 'target' ? 'white' : ''}}>Target Investment</button>
        <button id='income' onClick={changeDisplay} style={{backgroundColor: calcdisplay == 'income' ? 'rgb(17, 30, 72)' : '', color: calcdisplay == 'income' ? 'white' : ''}}>Income Portfolio</button>
        <button id='equity'>Stock Porfolio</button>
      </div>
      <div className={Styles.midsection}>
        {/* <div> */}
          <h1>{calcdetails.heading}</h1>
          <p>{calcdetails.details}</p>
        {/* </div> */}
      </div>
      <Calc className={Styles.calculators} calc={calcdisplay}></Calc>
    </div>
  )
}