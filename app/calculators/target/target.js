'use client'

import Finance from "tvm-financejs"
import Styles from './style.module.css'
import { useState, useEffect } from "react"
import { products } from './../Products'
import Image from "next/image"
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


export default function Target ({heading, details}) {

  const finance = new Finance();
  
  const [selectcurr, setCurr] = useState('')
  const [showResult, setshow] = useState('')
  const [contribution, setcontribution] = useState([])
  const [selectedContri, setSelectedcontri] = useState('')
  
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
    const contribution = forminput.get('contribut')
    setSelectedcontri(contribution)
    
    const tenor = (targetDate - today)/(1000 * 60 * 60 * 24);    
    settargetdate(Math.ceil(tenor))

    const prodCurr = products.filter(product => product.curr == targetCurr)
    
    prodCurr.forEach((product)=> {

      let payment = Number;

      switch (contribution) {
        case 'yearly':
          payment = Math.ceil(finance.PMT(product.rate/52, (tenor/365) - 1,0,-targetAmount,1))
          break;
          case 'semiannually':            
            payment = Math.ceil(finance.PMT(product.rate/52, (tenor/182) - 1,0,-targetAmount,1))
            break;
            case 'quarterly':              
              payment = Math.ceil(finance.PMT(product.rate/52, (tenor/91) - 1,0,-targetAmount,1))
              break;
              case 'weekly':                
                payment = Math.ceil(finance.PMT(product.rate/52, (tenor/7) - 1,0,-targetAmount,1))
                break;                
                default:
          payment = Math.ceil(finance.PMT(product.rate/52, (tenor/30) - 1,0,-targetAmount,1))
          break;
      }

      const data = {
        "issuer": product.name,
        "product": product.product,
        "rate": product.rate,
        "logo": product.img,
        "payment": payment
      }  
      
      array.push(data)
      setresult(array)
    })

    setshow('show')
  }

  function updateCurr (e) {
    setCurr(e.target.value)
  }

  function showcontribution (e) {

    const targetDate = new Date(e.target.value)
    const tenor = (targetDate - today)/(1000 * 60 * 60 * 24);
    const contribution = []
      
    if (tenor > 1) {      
      if (tenor > 1095) {
        contribution.push('yearly', 'monthly', 'quarterly', 'semiannually')
      } else if (tenor <= 180) {
        contribution.push('weekly', 'monthly')
      } else {contribution.push('monthly', 'quarterly', 'semiannually')}
    
      setcontribution(contribution) 
    } else {}
    
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.input}>
      <div className={Styles.midsection}>
          <h1 className={Satoshi.className}>{heading}</h1>
          <p className={Satoshi.className}>{details}</p>
        </div>
        <form onSubmit={handlesubmit}>
          <div>
          <div>
          <p className={Satoshi.className}>Select currency</p>
          <div className={Styles.inputRadio}>
            <label htmlFor="targetNGN">
              <input onChange={updateCurr} value='NGN' type="radio" id='targetNGN' name='targetcurr' required/>
              <span className={Satoshi.className}>NGN</span>
            </label>
            <label htmlFor="targetUSD">
              <input onChange={updateCurr} value='USD' type="radio" id='targetUSD' name='targetcurr' required/>
              <span className={Satoshi.className}>USD</span>
            </label>
          </div>
        </div> 
        <div>
          <p className={Satoshi.className}>Target Value</p>
          <div className={Styles.targetAmount}>
            <label>
              <input className={Satoshi.className} type='number' inputMode="numeric" name="targetamount" placeholder="Target Amount"/>
              <span className={Satoshi.className}>{selectcurr}</span>
            </label>
          </div>
        </div>
    
          </div>
          <div>
          <p className={Satoshi.className}>Choose target date</p>
          <label className={Styles.targetdate}>
            <input onChange={showcontribution} className={Satoshi.className} type="date" name="targetdate" placeholder="Choose Target Date" required/> 
          </label>
        </div>

          {contribution[0] && (<div>
          <p className={Satoshi.className}>Preferred Contribution Frequency</p>
          <div className={Styles.contriInput}>
          {contribution.map(contri => (
            <label key={contri} htmlFor={contri}>
              <input value={contri} type="radio" id={contri} name='contribution' required/>
              <span className={Satoshi.className}>{contri}</span>
            </label>
          ))}
          </div>
        </div>)}

        <div>
          <button className={Satoshi.className} type="submit">Discover</button>
        </div>
        </form>
      </div>

      {showResult === 'show' &&
      <div className={Styles.result}>
        <div>
          <div>
            <p className={Satoshi.className}>Target Value</p>
            <h3 className={Satoshi.className}>{selectcurr == 'USD'? '$' : 'N'}{targetamount.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
          </div>
          <div>
            <p className={Satoshi.className}>Duration</p>
            <h3 className={Satoshi.className}>{targetdate <= 365 ? `${targetdate} days` : targetdate < 729 ? `1 year ${targetdate - 365} days` : `${Math.ceil(targetdate/365)} years ${targetdate - (Math.ceil(targetdate/365) * 365)} days`}</h3>
          </div>
        </div>
        <div>
          <table className={Styles.resultTable}>
            <thead className={Satoshi.className}>
              <tr>
                <th>Issuer</th>
                <th>Product</th>
                <th>Annual Yield</th>
                <th>Recommended Contribution</th>
                <th>Total Contribution</th>
              </tr>
            </thead>
            <tbody className={Satoshi.className}>
            {Targetresult.map(({issuer, product, rate, payment, logo})=> (
              <tr key={product}>
                <td className={Satoshi.className}><Image src={logo} sizes="100vw" width={40} height={40} style={{borderRadius: '50%'}} ></Image></td>
                <td className={Satoshi.className}>{issuer} {product}</td>
                <td className={Satoshi.className}>{(rate * 100).toFixed(2)}%</td>
                <td className={Satoshi.className}>{payment.toLocaleString('en-US')}</td>
                <td className={Satoshi.className}>{payment}</td>
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