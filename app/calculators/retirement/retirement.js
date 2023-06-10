'use client'

import Styles from './style.module.css'
import Rangeslider from './multiRangeSlider/MultiRangeSlider'

export default async function Retirement () {
  return (
    <>
      <div className={Styles.retirement} >
              <div className={Styles.inputdisplay}>
                      
              <h2>Select current age and retirement age</h2>
              <div className={Styles.rangeslider}>
              <Rangeslider className={Styles.rangeslider}
                min={0}
                max={100}
                onChange={({ min, max }) => 
                {setuserage(min)
                 setretireage(max)
                 console.log(`min = ${min}, max = ${max}`)}}>
              </Rangeslider>
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
                  
            <div className={Styles.resultsdisplay}>
              <div>
                retirement portfolio value {value.toLocaleString('en-US')} by your retirement age of {retireage}
              </div>
                <br />
              <div>Investment strategy</div>
                <br />
              <div>Annually {annaulpayments}</div>
                <br />
              <div>Bi-annually {semipayments}</div>
                <br />
              <div>quarterly {quarterpayments}</div>
                <br />
              <div>monthly {monthlypayments}</div>
            </div>   

          </div>
    </>
  )
}