'use client'

import Finance from "tvm-financejs"
import Styles from './style.module.css'
import { useState, useEffect } from "react"
import { products } from './../Products'
import Image from "next/image"


export default function Target () {

  const finance = new Finance();
  
  const [selectcurr, setCurr] = useState('')
  const [showResult, setshow] = useState('')
  
  const [Targetresult, setresult] = useState(Array)
  const [targetamount, settargetamount] = useState(0)
  const [targetdate, settargetdate] = useState()

  let today = new Date();

  const array = []

  const handlesubmit = (e) => {
    e.preventDefault();
  
    const forminput = new FormData(e.target)
    
    const inputDate = forminput.get('targetdate')
    const targetDate = new Date(inputDate)
    const targetCurr = forminput.get('targetcurr')
    setCurr(targetCurr)
    const targetAmount = forminput.get('targetamount')
    settargetamount(targetAmount)
    
    const tenor = (targetDate - today)/(1000 * 60 * 60 * 24);
    const year = Math.ceil(tenor/365) 
    const month = tenor/30
    const week = tenor/7
    
    settargetdate(Math.ceil(tenor))

    const prodCurr = products.filter(product => product.curr == targetCurr)
    
    prodCurr.forEach((product)=> {
      const weeklypay = Math.ceil(finance.PMT(product.rate/52, week - 1,0,-targetAmount,1))
      const totalweek = weeklypay * (week - 1)
      const yearlypay = Math.ceil(finance.PMT(product.rate, year - 1,0,-targetAmount,1))
      const totalyear = yearlypay * (year - 1)
      const monthlypay = Math.ceil(finance.PMT(product.rate/12, month - 1,0,-targetAmount,1))
      const totalmonth = monthlypay * (month - 1)
     
      const data = {
        "issuer": product.name,
        "product": product.product,
        "rate": product.rate,
        "logo": product.img,
        "payments": []
      }  
  
      if (year >= 3) {
        data.payments.push({'year': yearlypay, 'total': totalyear})
        data.payments.push({'month': monthlypay, 'total': totalmonth})
      } else if (month >= 18) {
        data.payments.push({'month': monthlypay, 'total': totalmonth})
      } else if (month < 3) {
        data.payments.push({'week': weeklypay, 'tota': totalweek})
      } else {
        data.payments.push({'month': monthlypay,  'total': totalmonth}) 
        data.payments.push({'week': weeklypay, 'tota': totalweek})
      } 
      
      array.push(data)
      setresult(array)
    })

    setshow('show')
  }

  function updateCurr (e) {
    setCurr(e.target.value)
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.input}>
        <form onSubmit={handlesubmit}>
        <div>
          <p>Select currency</p>
          <div className={Styles.inputRadio}>
            <label htmlFor="targetNGN">
              <input onChange={updateCurr} value='NGN' type="radio" id='targetNGN' name='targetcurr' required/>
              <span>NGN</span>
            </label>
            <label htmlFor="targetUSD">
              <input onChange={updateCurr} value='USD' type="radio" id='targetUSD' name='targetcurr' required/>
              <span>USD</span>
            </label>
          </div>
        </div> 
        <div>
          <p>Target Value</p>
          <div className={Styles.targetAmount}>
            <label>
              <input type='number' inputMode="numeric" name="targetamount" placeholder="Target Amount"/>
              <span>{selectcurr}</span>
            </label>
          </div>
        </div>
        <div>
          <p>Choose target date</p>
          <label className={Styles.targetdate}>
            <input type="date" name="targetdate" placeholder="Choose Target Date" required/> 
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>

      {showResult === 'show' &&
      <div className={Styles.result}>
        <div>
          <div>
            <p>Target Value</p>
            <h3>{selectcurr == 'USD'? '$' : 'N'}{targetamount.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
          </div>
          <div>
            <p>Duration</p>
            <h3>{targetdate <= 365 ? `${targetdate} days` : targetdate < 729 ? `1 year ${targetdate - 365} days` : `${Math.ceil(targetdate/365)} years ${targetdate - (Math.ceil(targetdate/365) * 365)} days`}</h3>
          </div>
        </div>
        <div>
          <table className={Styles.resultTable}>
            <thead>
              <tr>
                <th>Issuer</th>
                <th>Product</th>
                <th>Annual Yield</th>
                <th>Recommended Contribution</th>
                <th>Total Contribution</th>
              </tr>
            </thead>
            <tbody>
            {Targetresult.map(({issuer, product, rate, payments, logo})=> (
              <tr key={product}>
                <td><Image src={logo} sizes="100vw" width={40} height={40} style={{borderRadius: '50%'}} ></Image></td>
                <td>{issuer} {product}</td>
                <td>{(rate * 100).toFixed(2)}%</td>
                <td>
                {payments.map((e)=>(
                  <tr key={Object.keys(e)[0]}>
                    <div>{selectcurr == 'USD'? '$' : 'N'}{(Object.values(e)[0]).toLocaleString("en-us", {minimumFractionDigits: 2,maximumFractionDigits: 2,})}
                    </div>          
                    <div>every {Object.keys(e)[0]}
                    </div> 
                  </tr>))}
                </td>
                <td>
                {payments.map((e)=>(
                  <tr key={Object.keys(e)[0]}>{selectcurr == 'USD'? '$' : 'N'}{(Object.values(e)[1]).toLocaleString("en-us", {minimumFractionDigits: 2,maximumFractionDigits: 2,})}
                  </tr>))}              
                </td>
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