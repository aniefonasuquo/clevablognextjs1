'use client'

import { useState } from 'react';
import Styles from './style.module.css'
const Finance = require("tvm-financejs");


const finance = Finance()

export default async function Target () {

  const [result, setresult] = useState(Array)
  const [targetamount, settargetamount] = useState(0)
  const [targetdate, settargetdate] = useState("")

  let today = new Date();

  const handlesubmit = (e) => {
    e.preventDefault();
  
    const forminput = new FormData(e.target)
    
    const inputDate = forminput.get('targetdate')
    const targetDate = new Date(inputDate)
    settargetdate(inputDate)

    const targetAmount = forminput.get('targetamount')
    settargetamount(targetAmount)
  
    const tenor = (targetDate - today)/(1000 * 60 * 60 * 24);
    const year = Math.ceil(tenor/365) 
    const month = tenor/30
    const week = tenor/7
    
    const array = []
  
    products.forEach((product)=> {
      const weeklypay = Math.ceil(finance.PMT(product.rate/52, week - 1,0,-targetAmount,1))
      const totalweek = weeklypay * (week - 1)
      const yearlypay = Math.ceil(finance.PMT(product.rate, year - 1,0,-targetAmount,1))
      const totalyear = yearlypay * (year - 1)
      const monthlypay = Math.ceil(finance.PMT(product.rate/12, month - 1,0,-targetAmount,1))
      const totalmonth = monthlypay * (month - 1)
     
      const data = {
        "product": product.name,
        "rate": product.rate,
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
    })
  
    console.log(array)
    setresult(array)
    console.log(result)
  }

  return (
    <>

    
    </>

  )
}