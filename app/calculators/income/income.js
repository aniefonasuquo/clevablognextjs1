'use client'

import Finance from "tvm-financejs"
import Styles from './style.module.css'
import { useState, useEffect } from "react"
import { products } from './../Products'
import Image from "next/image"
import { log } from "logrocket"


export default function Income () {

const finance = new Finance()

const incomeArray = [];
const [incomeResult, setIncomeResult] = useState(incomeArray)
const [incomePeriod, setIncomePeriod] = useState()
const [incomeCurr, setIncomeCurr] = useState()
const [submit, setsubmit] = useState(null)

function getIncomeRecom (e) {
  
    e.preventDefault();
  
    const forminput = new FormData(e.target)
    
    const incomePeriod = forminput.get('incomePeriod')        
    const incomeCurr = forminput.get('incomeCurr')
    const incomeTarget = forminput.get('incomeTarget')
    
    const filtered = products.filter(product => product.curr == incomeCurr)

    filtered.forEach((product)=> {

      let value = 0

      switch (incomePeriod) {
        case 'Quarter':
          value = incomeTarget/product.rate * 4;
          break;
        case 'Month':
          value = incomeTarget/product.rate * 12;
          break;
        default:
          value = incomeTarget/product.rate
      }
     
      const data = {
        "issuer": product.name,
        "name": product.product,
        "rate": product.rate,
        "value": value,
        "logo": product.img 
      }

      incomeArray.push(data)
    })

    setIncomeResult(incomeArray)
    
    setsubmit('yes')
}

function setperiod (e) {
  setIncomePeriod(e.target.value)
}

function setcurr (e) {
  setIncomeCurr(e.target.value)
}

  return (
            <div className={Styles.incomeContainer}>
              <div className={Styles.incomeInput}>
                <form onSubmit={getIncomeRecom}>
                  <div>
                    <p>How often would you receive your investment income</p>
                    <div>
                    <label htmlFor="monthPeriod">
                    <input onChange={setperiod} type='radio' id="monthPeriod" name="incomePeriod" value='Month' required/>
                    <span>Monthly</span>
                    </label>
                    <label  htmlFor="quarterPeriod">
                    <input onChange={setperiod} type='radio' id="quarterPeriod" name="incomePeriod" value='Quarter' required/>
                    <span>Quarterly</span>
                    </label>
                    <label htmlFor="yearPeriod">
                    <input onChange={setperiod} type='radio' id="yearPeriod" name="incomePeriod" value='Year' required/>
                    <span>Yearly</span>
                    </label>
                    </div>
                  </div>
                  <div>
                    <p>What currency would your like to earn your investment income</p>
                    <div>
                    <label onChange={setcurr} htmlFor="incomeNGN">
                      <input type='radio' id="incomeNGN" name="incomeCurr" value='NGN' required/>
                      <span>NGN Naira</span>
                    </label>
                    <label htmlFor="incomeUSD">
                    <input onChange={setcurr} type='radio' id="incomeUSD" name="incomeCurr" value='USD' required/>
                    <span>US Dollars</span>
                    </label>
                    </div>
                  </div>
                  <div>
                    <p htmlFor="tagetincome">How much are you looking to earn from your investments</p>
                    <div className={Styles.inputamount}>
                      <input type='number' id="incomeTarget" name="incomeTarget" required/> every {incomePeriod}
                      <span>{incomeCurr}</span>
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
              
              { submit &&
              <div className={Styles.incomeResult}>
                <table>
                  <thead>
                    <tr>
                      <th>Issuer</th>
                      <th>Product</th>
                      <th>Annual Yield</th>
                      <th>Initial Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                  {incomeResult.map(({logo, issuer, name, rate, value})=> (
                  <tr key={name}>
                      <td><Image src={logo} sizes="100vw" width={20} height={20} style={{borderRadius: '50%'}}></Image></td>
                      <td>{issuer} {name}</td>
                      <td>{(rate * 100).toFixed(2)}%</td>
                      <td>{value.toLocaleString('en-US',{maximumFractionDigits: 2})}</td>
                  </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              } 
            </div>
  )
}