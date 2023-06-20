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
import retireimage from './../../public/retire.jpg'
import { error } from "logrocket";

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
      }

      const [calcimage, setcalcimage] = useState()
      const [calcdetails, setcalcdetails] = useState({})
      const [calcdisplay, setCalc] = useState('retire')
      
      
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
      
  useEffect(()=>{
    const calc = calcDB.find((calc) => calc.type == calcdisplay)
    calc ? setcalcdetails(calc)  : console.log(error)
  })



  return (
    <>
      <div className={Styles.pagecontainer}></div>  
          <div className={Styles.topheading}> 
            <p className={`${raleway.className}`}> Discover the best investment decision for you </p> 
          </div> 

          <div className={Styles.bodycontainer}>
            <div className={Styles.up}>
              <button id='retire' className={calcdisplay == 'retire'? `${Styles.selected}` : Styles.calselect} onClick={changeDisplay}>Retirement</button>
              <button id='target' className={calcdisplay == 'target'? Styles.selected : Styles.calselect} onClick={changeDisplay}>Target Investment</button>
              <button id='income' className={calcdisplay == 'income'? Styles.selected : Styles.calselect} onClick={changeDisplay}>Income Portfolio</button>
              <button id='equity' className={calcdisplay == 'equity'? Styles.selected : Styles.calselect}>Stock Porfolio</button>
            </div>
            <div className={Styles.down} >
              <div className={Styles.calcInfo}>
                <div><Image src={calcdetails.image} objectFit="cover" fill={true} sizes='100vw'></Image></div>
                <div><p>{calcdetails.details}</p></div>
              </div>
              <div className={Styles.calculators}>
              
              <div className={calcdisplay == 'target' ? Styles.active : Styles.invisible}>
                <div className={Styles.targetcontainer}> 
                <div className={Styles.targetinput}>
                  <form onSubmit={handlesubmit}>
                    <div className={Styles.targetCurr}>
                      <p>Select currency</p>
                      <label htmlFor="targetNGN">
                        <input value='NGN' type="radio" id='targetNGN' name='targetcurr'/>
                        <p>NGN</p>
                      </label>
                      <label htmlFor="targetUSD">
                        <input value='USD' type="radio" id='targetUSD' name='targetcurr'/>
                        <p>USD</p>
                      </label>
                    </div>
                      
                    <div className={Styles.targetAmount}>
                      <p>Select amount</p>
                      <div className={Styles.inputAmount}>
                        <span className={Styles.amountcurr}>{selectcurr}</span>
                        <input type='number'  name="targetamount" placeholder="Target Amount"/>
                      </div>
                  
                    </div>

                    <div className={Styles.targetdate}>
                      <p>Choose target date</p>
                      <input type="date" className={Styles.targetdate} name="targetdate" placeholder="Choose Target Date" required/> 
                    </div>
      
                    <button type="submit" className={Styles.targetSubmit}> Submit </button>
                </form>
              </div>
        
              <div className={Styles.targetresult}>
                <div>
                  <div>
                    <p>Target Value</p>
                    <h1>N{targetamount.toLocaleString('en-us', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</h1>
                  </div>

                  <div>
                    <p>Duration</p>
                    <h1>{targetdate <= 365 ? `${targetdate}days` : targetdate < 729 ? `1year ${targetdate - 365}days` : `${Math.ceil(targetdate/365)}years ${targetdate - (Math.ceil(targetdate/365) * 365)}days`}</h1>
                  </div>
                </div>
          
          
                <div className={Styles.targetResultBody}>
                  <div className={Styles.targetTableHeading}>
                    <div>Product</div>
                    <div>Rate</div>
                    <div>Periodic Contribution</div>
                    <div>Total Contribution</div>
                    <div>Return</div>
                  </div>
              
                  <div className={Styles.targetResultList}>
                    {Targetresult.map(({product, rate, payments})=> (
                    <div className={Styles.targetResultRow} id={product}>
                      <div className={Styles.targetResultProduct}>
                        <div>logo</div>
                        <div>{product} Flex Savings</div>
                        <h>{(rate * 100).toFixed(2)}% </h>
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
                            <div>
                              {(Object.values(e)[1]).toLocaleString("en-us", {minimumFractionDigits: 2,maximumFractionDigits: 2,})}
                            </div>
                            <div>
                              {(targetamount - (Object.values(e)[1])).toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}
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
            </div>        
      
            {/* Retirement  */}
            <div className={calcdisplay == 'retire' ? Styles.active : Styles.invisible}>
            <div className={Styles.retirementContainer} >
              <div className={Styles.retireInputCard}>
                <h1> </h1>                   
                <div>
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
                </div>
              </div>
            
              < div className={Styles.RetireResultsdisplay}>
                <div>
                    <p>Projected portfolio value at retirement</p> 
                    <h2>N{value.toLocaleString('en-US', {maximumFractionDigits: 2})}</h2>                       
                </div>
                <div>
                  <p>Select preferred frequency</p>
                  <div id={Styles.buttonSwitch}>
                    <button onClick={changeColor} className={Styles.buttons} style={{backgroundColor: 'rgba(24,40,102,255)', color: 'white'}} id='month'>Monthly</button>
                    <button onClick={changeColor} className={Styles.buttons} id='quarter'>Quarterly</button>
                    <button onClick={changeColor} className={Styles.buttons} id='year'>Annually</button>
                  </div>
                </div>
                  <div>
                    <div>
                      <p>Retirment portfolio contribution</p>
                      <h2>N{contriDisplay.toLocaleString("en-US",{maximumFractionDigits: 2})}</h2>
                      <p>Every {active}</p>

                    </div>               
                  </div>

                  <div>
                    <p>Total portfolio gain at retirement</p>
                    <h2> N{accruedInterest(active).toLocaleString("en-US",{maximumFractionDigits: 2})}</h2>
                  </div>

                  <div>
                    <p>Minimum average yearly portfolio return</p>
                    <h2>{averageInvestReturn.toLocaleString('en-US', { style: 'percent' })}</h2>
                  </div>
                
                  <div className={Styles.pieChartContainer}>
                    {/* <PieChart className={Styles.pieChart} */}
                    {/* data={[ */}
                    {/* { title: 'One', value: 10, color: '#E38627' }, */}
                    {/* { title: 'Two', value: 15, color: '#C13C37' }, */}
                    {/* { title: 'Three', value: 20, color: '#6A2135' },]}/>; */}
                  </div>
              </div>
            </div>
            </div>

            {/* Income Portfolio  */}
            <div className={calcdisplay == 'income'? Styles.active : Styles.invisible}>
            <div className={Styles.incomeContainer}>
              <div className={Styles.incomeInput}>
                <form onSubmit={getIncomeRecom}>
                  <div>
                    <p>How often would you receive your investment income</p>
                    <label htmlFor="monthPeriod">
                    <input type='radio' id="monthPeriod" name="incomePeriod" value='monthly' required/>
                    <span>Monthly</span>
                    </label>
                    <label htmlFor="quarterPeriod">
                    <input type='radio' id="quarterPeriod" name="incomePeriod" value='quartely' required/>
                    <span>Quarterly</span>
                    </label>
                    <label htmlFor="yearPeriod">
                    <input type='radio' id="yearPeriod" name="incomePeriod" value='yearly' required/>
                    <span>Yearly</span>
                    </label>
                  </div>

                  <div>
                    <p htmlFor="tagetincome">How much are you looking to earn from your investments
                      <div>
                       <input type='number' id="incomeTarget" name="incomeTarget" required/> every {'Month'}
                      </div>
                    </p>
                  </div>
                  <div>
                    <p>What currency would your like to earn your investment income</p>
                    <label htmlFor="incomeNGN">
                      <input type='radio' id="incomeNGN" name="incomeCurr" value='NGN' required/>
                      <span>Nigerian Naira</span>
                    </label>
                    <label htmlFor="incomeUSD">
                    <input type='radio' id="incomeUSD" name="incomeCurr" value='USD' required/>
                    <span>US Dollars</span>
                    </label>
                  </div>

                    <button type="submit">Submit</button>
                </form>
              </div>

              <div className={Styles.incomeResult}>
                {incomeResult.map(({product, rate, value})=> (
                  <div className={Styles.incomeResultRow} id={product}>
                      <div>Company logo</div>
                      <div>{product} Flex Savings</div>
                      <div>{(rate * 100).toFixed(2)}%</div>
                      <div>{value.toLocaleString('en-US',{maximumFractionDigits: 2})}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
         </div>  
        </div>               
  </>
  )
}