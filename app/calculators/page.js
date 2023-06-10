"use client"

import React, { useEffect, useState } from "react"
const Finance = require("tvm-financejs");
import Styles from './styles.module.css'
import { Raleway  } from 'next/font/google'
import options from "./calcoptions/optioncard";
import Rangeslider from './multiRangeSlider/MultiRangeSlider'
import { PieChart } from 'react-minimal-pie-chart';
import Target from "./target/target";
import Image from "next/image";

const CalcOptions = React.memo(options)

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

const products = [
  {name: "piggyvets", rate: 0.04},
  {name: "cowrywise", rate: 0.09},
  {name: "fairmoney", rate: 0.18}
]

export default function Thispage () {

  const finance = new Finance()

  const [userage, setuserage] = useState(32);
  const [retireage, setretireage] = useState(60);
  const [expenses, setexpenses] = useState(200000);
  const [rental, setrental] = useState(2000000);
  const [otherexpenses, setotherexpenses] = useState(0)
  const [active, setActive] = useState('month')

  const retiretime = retireage - userage
  
  const averageAnnualInflation = 0.10
  const retirementReturn = 0.10
  const averageInvestReturn = 0.10

  const value = finance.FV(averageAnnualInflation, retiretime, 0, -((expenses * 12)+(rental * 1)+(otherexpenses * 1)), 1)/ retirementReturn; 
  const annaulpayments = (finance.PMT(averageInvestReturn, retiretime, 0, -value, 1));
  const semipayments = (finance.PMT((averageInvestReturn/2), retiretime * 2, 0,-value, 1));
  const quarterpayments = (finance.PMT((averageInvestReturn/4), retiretime * 4, 0,-value, 1));
  const monthlypayments = (finance.PMT((averageInvestReturn/12), retiretime * 12, 0, -value, 1));

  //finance.PPMT(rate, per, nper, pv, [fv\], [type]);

  const accruedInterest = (contriOption) => {
    
    switch (contriOption) {
      case 'year':
        return value - (annaulpayments * retiretime);
      case 'quarter':
        return value - (quarterpayments * retiretime * 4);
      default:
        return value - (monthlypayments * retiretime * 12);
    }
  }

  function changeColor (e) {
  
    const otherOptions = document.querySelectorAll(['#month','#year','#quarter']);
    otherOptions.forEach((e) => {
      e.style.backgroundColor = 'whitesmoke';
      e.style.color = 'black';
    })

    const button = e.target.id;
    setActive(button)

    const contriActive = document.getElementById(button);
    contriActive.style.backgroundColor = 'rgba(24,40,102,255)'
    contriActive.style.color = 'white';
  }

  const [contriDisplay, setContri]  = useState(monthlypayments);

  useEffect(() =>{

    if (active === 'year') {
      setContri(annaulpayments)
    } else if (active === 'month') {
      setContri(monthlypayments) 
    } else setContri(quarterpayments)

  })

  // Target logic

  const [selectcurr, setCurr] = useState('NGN')

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
    
    const targetAmount = forminput.get('targetamount')
    settargetamount(targetAmount)
    
    const tenor = (targetDate - today)/(1000 * 60 * 60 * 24);
    const year = Math.ceil(tenor/365) 
    const month = tenor/30
    const week = tenor/7
    
    settargetdate(Math.ceil(tenor))
    
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
      setresult(array)
    })
  }

      // Target Income logic
      const incomeArray = [];
      const [incomeResult, setIncomeResult] = useState(incomeArray)

      function getIncomeRecom (e) {
        
          e.preventDefault();
        
          const forminput = new FormData(e.target)
          
          const incomePeriod = forminput.get('incomePeriod')        
          const incomeCurr = forminput.get('incomeCurr')
          const incomeTarget = forminput.get('incomeTarget')
         
          
          products.forEach((product)=> {
            const value = incomeTarget/product.rate;
           
            // query database result
            const data = {
              "product": product.name,
              "rate": product.rate,
              "value": value 
            }
  
            incomeArray.push(data)
          })
  
          setIncomeResult(incomeArray)  
      }

      function showTarget () {
        const refDiv = document.getElementById('referencediv');
        refDiv.style.display = 'block'

        const targetDiv = document.getElementById('targetcontainer');
        targetDiv.style.display = 'block'

        console.log(refDiv)
        console.log(targetDiv)
      }

  return (
    <>
      <div className={Styles.topsection}>   
        <div className={Styles.topheading}> 
          <p className={`${raleway.className}`}> Discover the best investment decision for you </p> 
        </div> 
      
        <div className={Styles.toOptions}>
          {/* <CalcOptions
          onClick={showTarget} 
          option='Investment Goals' 
          detail='Discover the best ways to achieve your investment goals'
          className={Styles.optionsCard}>
          </CalcOptions> */}
          <div onclick={showTarget} className={Styles.targetOption}> 
            <p>Investment Goals</p>
            <p>Discover the best ways to achieve your investment goals</p>
          </div>
          <CalcOptions className={Styles.optionsCard}></CalcOptions>
          <CalcOptions className={Styles.optionsCard}></CalcOptions>
          <CalcOptions className={Styles.optionsCard}></CalcOptions>
        </div>
      </div>

      <div id='referencediv' className={Styles.referencediv}>

      <div id='targetcontainer' className={Styles.targetcontainer}> 
           
            <div>
            <form onSubmit={handlesubmit}>
            <div className={Styles.targetinput}>
              <div className={Styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" id="currency"><path d="M8.006 8.018h22.072c.526.046.928.46.928 1v4.957c-.174.016-.332.043-.526.043h-4.974c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5H30.512a.501.501 0 0 0 .146-.024c.125-.004.229-.028.348-.037v5.027c0 .573-.446 1.016-1.018 1.016H14.637a7.432 7.432 0 0 0 1.506-4.482.502.502 0 0 0-.04-.188c-.106-4.043-3.406-7.312-7.482-7.312-.555 0-1.095.064-1.615.18v-6.18a.986.986 0 0 1 1-1zm23.723 0h.277c.562 0 1 .437 1 1v4.26c-.224.184-.554.365-1 .507V9.018c0-.365-.106-.704-.277-1zm-23.723 1v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zM8.023 11.016l-.003 1 1 .01.003-1zm19.989 1.004v1.007h.994V12.02zm-19.998.996-.006 1 1 .01.006-1zm24.992 1.38v4.86c-.418.356-1.206.752-2.5.762h-5a2.484 2.484 0 0 1-2.5-2.5c0-1.394 1.106-2.5 2.5-2.5h4.974c1.102 0 1.886-.276 2.526-.622zM8.62 16.018c3.602 0 6.522 2.909 6.522 6.5 0 3.592-2.92 6.5-6.522 6.5a6.47 6.47 0 0 1-6.48-6.5c0-3.595 2.877-6.5 6.48-6.5zm16.969 0c-.869 0-1.584.717-1.584 1.586 0 .868.715 1.583 1.584 1.583a1.59 1.59 0 0 0 1.582-1.583c0-.87-.713-1.586-1.582-1.586zm0 1c.328 0 .582.257.582.586a.575.575 0 0 1-.582.583.577.577 0 0 1-.584-.583c0-.33.256-.586.584-.586zm-16.955 1a.52.52 0 0 0-.492.507v.541c-.965.21-1.75.911-1.75 1.895 0 1.163 1.042 2.055 2.25 2.055.73 0 1.248.493 1.248 1.052 0 .56-.518 1.055-1.248 1.055s-1.25-.496-1.25-1.055a.52.52 0 0 0-.5-.507.52.52 0 0 0-.5.507c0 .998.769 1.792 1.75 1.998v.446a.52.52 0 0 0 .5.507.52.52 0 0 0 .5-.507v-.547c.964-.21 1.748-.913 1.748-1.897 0-1.299-1.16-2.053-2.248-2.053-.73 0-1.25-.495-1.25-1.054 0-.552.508-1.038 1.222-1.051a.51.51 0 0 0 .057.002c.713.014 1.219.498 1.219 1.049a.52.52 0 0 0 .5.507.52.52 0 0 0 .5-.507c0-.998-.768-1.794-1.748-2v-.436a.52.52 0 0 0-.508-.507zm24.37 2.431v5.569c0 .562-.437 1-1 1h-.296c.184-.304.297-.655.297-1.034v-5.18c.378-.09.71-.21 1-.355zm-5 2.072-.001.997h1.01v-.997zm-12.062 2.497v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1z" color="white" font-family="sans-serif" font-weight="400" overflow="visible"></path></svg>
              </div>
              <div>
                <select onInput={e => setCurr(e.target.value)} name="currency" id="currency" className={Styles.selectInput}>
                  <option value="" hidden> Select currency </option>
                  <option value="NGN">Naira (NGN) </option>
                  <option value="USD">US Dollar (USD) </option>
                </select>
              </div>
              <div className={Styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" id="target"><path d="M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm9-2H19.93A8,8,0,0,0,13,4.07V3a1,1,0,0,0-2,0V4.07A8,8,0,0,0,4.07,11H3a1,1,0,0,0,0,2H4.07A8,8,0,0,0,11,19.93V21a1,1,0,0,0,2,0V19.93A8,8,0,0,0,19.93,13H21a1,1,0,0,0,0-2Zm-9,7a6,6,0,1,1,6-6A6,6,0,0,1,12,18Z"></path></svg>
              </div>
              <div className={Styles.inputDiv}>
                <input type='number' className={Styles.inputAmount} name="targetamount" placeholder="Target Amount"/>
                <div className={Styles.amountcurr}>{selectcurr}</div>
              </div>
              <div className={Styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="check-meeting"><path fill="white" d="M13 3a1 1 0 1 0-2 0H8a1 1 0 0 0-2 0 4 4 0 0 0-4 4v.004c.033-.003.066-.004.1-.004h19.8c.034 0 .067.001.1.004V7a4 4 0 0 0-4-4 1 1 0 1 0-2 0h-3Z"></path><path fill="white" fill-rule="evenodd" d="M2 18V8.996c.033.003.066.004.1.004h19.8c.034 0 .067-.001.1-.004V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Zm13.707-5.707a1 1 0 0 0-1.414 0L12 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <input type="date" className={Styles.targetdate} name="targetdate" placeholder="Choose Target Date" required/> 
              </div>
    
              <button type="submit" className={Styles.targetSubmit}> Submit </button>
            </div>
            </form>
            </div>
        
          {/* Target Return */}

            <div className={Styles.targetresult}>
              <div className={Styles.resultHead}>
                <div>
                  <p>Target Value</p>
                  <p>N{targetamount.toLocaleString('en-us', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</p>
                </div>

                <div>
                  <p>Duration</p>
                  <p>{targetdate <= 365 ? `${targetdate}days` : targetdate < 729 ? `1year ${targetdate - 365}days` : `${Math.ceil(targetdate/365)}years ${targetdate - (Math.ceil(targetdate/365) * 365)}days`}</p>
                </div>
              </div>
          
          
              <div className={Styles.targetResultContainer}>
                <div className={Styles.targetTableHeading}>
                  <div>Issuer</div>
                  <div>Product</div>
                  <div>Rate</div>
                  <div>Periodic Contribution</div>
                  <div>Total Contribution</div>
                  <div>Return</div>
                </div>
              
                <div>
                {Targetresult.map(({product, rate, payments})=> (
                  <div className={Styles.targetResultRow} id={product}>
                    <div className={Styles.targetResultProduct}>
                      <div><div>Company logo</div>{product}</div>
                      <div>{product} Flex Savings</div>
                      <div>{(rate * 100).toFixed(2)}% </div>
                    </div>
                  
                    <div className={Styles.targetResultContri}>
                      {payments.map((e)=>(
                      <div className={Styles.targetRecomRow} id={Object.keys(e)[0]}>
                        <div>              
                          <p>
                            {(Object.values(e)[0]).toLocaleString("en-us", {minimumFractionDigits: 2,maximumFractionDigits: 2,})}  
                          </p>                                                           
                          <p>
                            every {Object.keys(e)[0]}
                          </p> 
                        </div>

                        <div className={Styles.totalContri}>
                          <div>
                            {(Object.values(e)[1]).toLocaleString("en-us", {minimumFractionDigits: 2,maximumFractionDigits: 2,})}
                          </div>
                          <div>
                            {(targetamount - (Object.values(e)[1])).toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}
                          </div>
                        </div>
                      </div> 
                      ))}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
      </div>        
      
        {/* Retirement  */}

              <div className={Styles.retirementContainer} >
                <div className={Styles.retireInputCard}>                   
                <div className={Styles.retireage}>
                  <p>Select current age and retirement age</p>
                  <div className={Styles.slidercontainer}>
                    <Rangeslider id={Styles.slider}
                    min={28}
                    max={60}
                    onChange={({ min, max }) => 
                    {setuserage(min)
                      setretireage(max)
                    }}>
                    </Rangeslider>
                  </div>
                </div>
              
                <div className={Styles.expenseinput}>
                  <p>Estimated monthly basic survival expense (food, energy, clothing, utilities, transportation) 
                  </p>
                  <input
                    name="foodspend"
                    type="number"
                    onChange={e => setexpenses(e.target.value)}
                    value={expenses}
                    />
                    <p id={Styles.retireCurr}></p>
                </div>

                <div className={Styles.expenseinput}>
                  <p>Estimated annual rental expenses
                  </p>
                  <input
                    name="rental"
                    type="number"
                    onChange={e => setrental(e.target.value)}
                    value={rental}
                  />
                  <p id={Styles.retireCurr}></p>
                </div>
                    
                <div className={Styles.expenseinput}>
                  <p>
                  Estimated annual medical/health expenses
                  </p>
                  <input
                    name="otherexpense"
                    type="number"
                    onChange={e => setotherexpenses(e.target.value)}
                    value={otherexpenses}
                    />
                  <p id={Styles.retireCurr}></p>
                </div>
              </div>
            
                  
              <div div className={Styles.resultsdisplay}>
                <div  className={Styles.retireValueOutput} >
                  <div>
                    <p>Projected portfolio value at retirement</p> 
                    <div>N{value.toLocaleString('en-US', {maximumFractionDigits: 2})}</div>
                  </div>
                  <div>
                    <p>Retirement age</p> 
                    <div>{retireage}</div>
                  </div>
                  <div>
                    <p>Contribution Duration</p>
                    <div>
                      {(retireage - userage).toLocaleString("en-US",{maximumFractionDigits: 2})}
                    </div>
                  </div>       
                </div>

                <div className={Styles.retireContribution}>
                  <p>Select preferred frequency</p>
                  <div id={Styles.buttonSwitch}>
                    <button onClick={changeColor} className={Styles.buttons} style={{backgroundColor: 'rgba(24,40,102,255)', color: 'white'}} id='month'>Monthly</button>
                    <button onClick={changeColor} className={Styles.buttons} id='quarter'>Quarterly</button>
                    <button onClick={changeColor} className={Styles.buttons} id='year'>Annually</button>
                  </div>
                  <div>
                    <div>
                      <p>{active}ly retirment portfolio contribution</p>
                      <p>N{contriDisplay.toLocaleString("en-US",{maximumFractionDigits: 2})}</p>
                    </div>               
                  </div>

                  <div>
                    <p>Total portfolio gain at retirement</p>
                    N{accruedInterest(active).toLocaleString("en-US",{maximumFractionDigits: 2})}
                  </div>

                  <div>
                    <p>Minimum average yearly portfolio return</p>
                    <div>{averageInvestReturn.toLocaleString('en-US', { style: 'percent' })}</div>
                  </div>
                
                  <div className={Styles.pieChartContainer}>
                    <PieChart className={Styles.pieChart}
                    data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                    ]}/>;
                  </div>
                </div>
              </div>
          </div>
          {/* Income Portfolio  */}
          <div className={Styles.incomeContainer}>
            <div>
              <form onSubmit={getIncomeRecom}>
              <div className={Styles.incomeInput}>
                <p>How often would you receive your investment income</p>
                <label htmlFor="monthlyPeriod">
                <input type='radio' id="monthPeriod" name="incomePeriod" value='monthly' required/>
                Monthly
                </label>
                <label htmlFor="quarterlyPeriod">
                <input type='radio' id="quarterPeriod" name="incomePeriod" value='quartely' required/>
                Quarterly
                </label>
                <label htmlFor="yearlyPeriod">
                <input type='radio' id="yearPeriod" name="incomePeriod" value='yearly' required/>
                yearly
                </label>

                <label htmlFor="tagetincome">How much are you looking to earn from your investments
                  <div>
                   <input type='number' id="incomeTarget" name="incomeTarget" required/> every {'Month'}
                  </div>
                </label>

                <p>What currency would your like to earn your investment income</p>
                <label htmlFor="incomeNGN">
                  <input type='radio' id="incomeNGN" name="incomeCurr" value='NGN' required/>
                  Nigerian Naira
                </label>
                <label htmlFor="incomeUSD">
                <input type='radio' id="incomeUSD" name="incomeCurr" value='USD' required/>
                US Dollars
                </label>
  
                <button type="submit">Submit</button>
              </div>
              </form>
            </div>
            <div className={Styles.incomeResult}>
              {incomeResult.map(({product, rate, value})=> (
                <div className={Styles.targetResultRow} id={product}>
                  <div className={Styles.targetResultProduct}>
                    <div><div>Company logo</div>{product}</div>
                    <div>{product} Flex Savings</div>
                    <div>{(rate * 100).toFixed(2)}% </div>
                    <div>{value.toLocaleString('en-US',{maximumFractionDigits: 2})}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>                
    </>
  )
}