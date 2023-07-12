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
const [incomeTarget, setIncomeTarget] = useState()
const [submit, setsubmit] = useState(null)

function getIncomeRecom (e) {
  
    e.preventDefault();
  
    const forminput = new FormData(e.target)
    
    const incomePeriod = forminput.get('incomePeriod')        
    const incomeCurr = forminput.get('incomeCurr')
    setIncomeCurr(incomeCurr)
    const incomeTarget = forminput.get('incomeTarget')
    setIncomeTarget(incomeTarget)
    
    const filtered = products.filter(product => product.curr == incomeCurr)

    filtered.forEach((product)=> {

      let value = 0

      switch (incomePeriod) {
        case 'quarter':
          value = incomeTarget/product.rate * 4;
          break;
        case 'month':
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
    <div className={Styles.container}>
      <div className={Styles.input}>
        <form onSubmit={getIncomeRecom}>
          <div>
            <p>How often would you receive your investment income</p>
            <div className={Styles.inputRadio}>
              <label htmlFor="monthPeriod">
              <input onChange={setperiod} type='radio' id="monthPeriod" name="incomePeriod" value='month' required/>
              <span>Monthly</span>
              </label>
              <label  htmlFor="quarterPeriod">
              <input onChange={setperiod} type='radio' id="quarterPeriod" name="incomePeriod" value='quarter' required/>
              <span>Quarterly</span>
              </label>
              <label htmlFor="yearPeriod">
              <input onChange={setperiod} type='radio' id="yearPeriod" name="incomePeriod" value='year' required/>
              <span>Yearly</span>
              </label>
            </div>
          </div>
          <div>
            <p>What currency would your like to earn your investment income</p>
            <div className={Styles.inputRadio}>
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
            <div>
              <label className={Styles.inputamount}>
                <input type='number' id="incomeTarget" name="incomeTarget" placeholder="investment income..." required/>
                <span>{incomeCurr}</span>
              </label>
              <span>{incomePeriod && `Every ${incomePeriod}`}</span> 
            </div>
          </div>
          <div>
            <button type="submit">Discover</button>
          </div>
        </form>
      </div>
      
      { submit &&
      <div className={Styles.result}>
        <div>
          <h4>Porfolio Income</h4>
          <h4>{incomeCurr == 'USD'? '$' : 'N'}{incomeTarget.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})} every quarter</h4>
        </div>
        <div>
        <table className={Styles.resultTable}>
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
              <td><Image src={logo} sizes="100vw" width={40} height={40} style={{borderRadius: '50%', objectFit: "contain"}}></Image></td>
              <td>{issuer} {name}</td>
              <td>{(rate * 100).toFixed(2)}%</td>
              <td>{value.toLocaleString('en-US',{maximumFractionDigits: 2})}</td>
          </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
      } 
    </div>
  )
}