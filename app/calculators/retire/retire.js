'use client'
import { useState, useEffect } from "react";
import Finance from "tvm-financejs";
import Styles from './style.module.css'
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";

export default function Retire () {

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
    const button = e.target.id;
    setActive(button)
  }

  const [contriDisplay, setContri]  = useState(monthlypayments);

  useEffect(() =>{

    if (active === 'year') {
      setContri(annaulpayments)
    } else if (active === 'month') {
      setContri(monthlypayments) 
    } else setContri(quarterpayments)

  }, [active])

  return (
    <div className={Styles.retirementContainer} >
      <div className={Styles.input}>               
        <div>
          <p>Select current age and retirement age</p>
          {/* <div className={Styles.slidercontainer}> */}
            <MultiRangeSlider id={Styles.slider}
            min={28}
            max={60}
            onChange={({ min, max }) => 
            {setuserage(min)
              setretireage(max)
            }}>
            </MultiRangeSlider>
          {/* </div> */}
        </div>
    
        <div>
          <p>Estimated monthly basic survival expense (food, energy, clothing, utilities, transportation) </p>
          <input
            name="foodspend"
            type="number"
            onChange={e => setexpenses(e.target.value)}
            value={expenses}
            />
        </div>

        <div>
          <p>Estimated annual rental expenses</p>
          <input
            name="rental"
            type="number"
            onChange={e => setrental(e.target.value)}
            value={rental}
          />
        </div>
          
        <div>
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
  
      <div className={Styles.result}>
        <table className={Styles.resultTable}>
          <tbody>
            <tr>
              <td>Projected portfolio value at retirement</td>
              <td>N{value.toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p>Select preferred frequency</p>
                <div>
                  <button onClick={changeColor} style={{backgroundColor: active == 'month' ? 'navy' : '', color: active == 'month' ? 'white' : ''}} id='month' >Monthly</button>
                  <button onClick={changeColor} style={{backgroundColor: active == 'quarter' ? 'navy' : '', color: active == 'quarter' ? 'white' : ''}} id='quarter'>Quarterly</button>
                  <button onClick={changeColor} style={{backgroundColor: active == 'year' ? 'navy' : '', color: active == 'year' ? 'white' : ''}} id='year'>Annually</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Retirment portfolio contribution</td>
              <td>
                <p>N{contriDisplay.toLocaleString("en-US",{maximumFractionDigits: 2})}</p>
                <p>Every {active}</p>
              </td>
            </tr>
            <tr>
              <td>Total portfolio gain at retirement</td>
              <td>
              N{accruedInterest(active).toLocaleString("en-US",{maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td>Minimum average yearly portfolio return</td>
              <td>
              {averageInvestReturn.toLocaleString('en-US', { style: 'percent' })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}