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


export default function Thispage () {

 

  // Target logic

      // Target Income logic
   
      const [calcdisplay, setCalc] = useState('target')
      const [calcdetails, setcalcdetails] = useState({})
      
      
      const calcDB = [
        {type: 'retire',
        details: 'Retire Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet mauris ex. Integer et nisi vitae diam tincidunt auctor. Maecenas ultrices dictum fringilla. Cras in magna et massa tempus pharetra. Etiam et semper nisl. Aenean malesuada dui quis diam varius, tincidun',
        image: retireimage   
      },
      {type: 'income',
      details: 'Income Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet mauris ex. Integer et nisi vitae diam tincidunt auctor. Maecenas ultrices dictum fringilla. Cras in magna et massa tempus pharetra. Etiam et semper nisl. Aenean malesuada dui quis diam varius, tincidun ',
      image: ''   
    },
    {type: 'target',
    details: 'target Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet mauris ex. Integer et nisi vitae diam tincidunt auctor. Maecenas ultrices dictum fringilla. Cras in magna et massa tempus pharetra. Etiam et semper nisl. Aenean malesuada dui quis diam varius, tincidun ',
    image: ''   
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
    <>
      <div className={Styles.pagecontainer}></div>  
          <div className={Styles.topheading}> 
            <p className={`${raleway.className}`}> Discover the best investment decision for you </p> 
          </div> 
          <div className={Styles.midsection}>
            <div>
              <div className={Styles.up}>
                <button id='retire' onClick={changeDisplay}>Retirement</button>
                <button id='target' onClick={changeDisplay}>Target Investment</button>
                <button id='income' onClick={changeDisplay}>Income Portfolio</button>
                <button id='equity'>Stock Porfolio</button>
              </div>
              <h1>Calculate the return on investiment you could earn with our powered demos</h1>
              <p>{calcdetails.details}</p>
              <div className={Styles.downarrow}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="downarrow"><path d="M349.7 322.2c-3.1-3.1-8-3-11.3 0L264 388.6V104c0-4.4-3.6-8-8-8s-8 3.6-8 8v284.6l-74.4-66.3c-3.4-2.9-8.1-3.2-11.2-.1-3.1 3.1-3.3 8.5-.1 11.4 0 0 87 79.2 88 80s2.8 2.4 5.7 2.4 4.9-1.6 5.7-2.4 88-80 88-80c1.5-1.5 2.3-3.6 2.3-5.7s-.8-4.1-2.3-5.7z" fill="rgb(24, 40, 102)" class="color000000 svgShape"></path></svg></div>
            </div>
            <div className={Styles.calcInfo}>
              <div><Image src={calcdetails.image} fill={true} sizes='100vw'></Image></div>
            </div>

          </div>

          <div className={Styles.bodycontainer}>
            <div className={Styles.calculators}> 
              <div className={calcdisplay == 'target' ? Styles.active : Styles.invisible}>
                <Target></Target>
              </div>        
              <div className={calcdisplay == 'retire' ? Styles.active : Styles.invisible}>
                <Retire></Retire>
              </div>
              <div className={calcdisplay == 'income'? Styles.active : Styles.invisible}>
                <Income></Income>
              </div>
            </div>  
          </div>               
  </>
  )
}