'use client'

import styles from './styles.module.css'
import React, { useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { useRouter } from 'next/navigation';
import { processForm } from '../investor-personality-test/handleform';


function SocialSharing() {

  const [amount, setamount] = useState(0.00)

  // function setInput (e) {

  // }
  // // .toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2})

  const [text, setText] = useState(0)
  function prevText () {
    setText(text - 1)
  }
  function nextText () {
    setText(text + 1)
  }

  const router = useRouter()

  const handleSubmit = async (e) => {
    
    const formInput = await processForm(e) ;
    
    const data = await fetch('/api/testform', {
      method: 'POST',
      body: JSON.stringify({data: {
      archetype: formInput.archetype,
      willingness: formInput.willingnessRank,
      capacity: formInput.capacityRank
    }})
  })

    router.push(data.url)
  }


  return (
    <>

    {/* <div className={styles.pieChartContainer}>
    <h1ieChart className={styles.pieChart}
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
  </div> */}
    <div className={styles.pagecontainer}>
    
    {/* <div>{text}</div> */}
    <div>{ text == 0 && (<button onClick={nextText} type="Start">Start</button>)}</div>
    <div className={styles.formcontainer}>
    
    <form onSubmit={handleSubmit}>
    <div>
      {text == 1 && (<div>
        <h1>Please select your age</h1>
        <input type="range" name="age" id="age"/>
        </div>)}
    </div>
      
    <div className={styles.multichoiceContainter}>
    {text == 2 && (<div>
      <h1>How much do you earn annually?</h1>   
        <label htmlFor="income1">
        <input type="radio" name="annualIncome" value='1' id='income1' required />
          <div>
          <span> Below 499k </span>
          </div>
        </label>
        <label htmlFor="income2">
        <input type="radio" name="annualIncome" value='2' id='income2' required/>
        <div><span> 500k to 1m </span></div>
        </label>        
        <label htmlFor="income3">
          <input type="radio" name="annualIncome" value='3' id='income3' required />
          <div><span> above 1m to 2.5m </span></div>
        </label>
        <label htmlFor="income4">
          <input type="radio" name="annualIncome" value='4' id='income4' required/>
          <div><span> Below 2.5m </span></div>
        </label>
    </div>)} 
    </div>
      {/* <!-- Income Currency --> */}
    <div className={styles.multichoiceContainter}>
      {text == 3 && (<div>
        <h1>What currency do you primary earn</h1>
          <label htmlFor="NGN">
            <input type="radio" name="incomeCurrency" id="NGN" value={1} required/>
            <div>
            <span> NGN </span>
            </div>    
          </label>        
          <label htmlFor="USD-GBP-EUR">
            <input type="radio" name="incomeCurrency" id="USD-GBP-EUR" value={2} required/>
            <div>
            <span> Forex (USD/GBP/EUR) </span>
            </div>
          </label>
      </div>)} 
    </div>    
  {/*   <!-- income duration --> */}
    <div className={styles.multichoiceContainter}>
      {text == 4 && (<div>
      <h1>What is the total value of all your investments</h1>
        <label htmlFor="durationone">
        <input type="radio" name="incomeDuration" id="durationone" required value={1}/>
          <div><span> less than 5 years </span></div>
        </label>
        <label htmlFor="durationtwo">
        <input type="radio" name="incomeDuration" id="durationtwo" required value={2}/>
          <div><span> Over 5 years but less than 10 years </span></div>      
        </label>
        <label htmlFor="durationthree">
        <input type="radio" name="incomeDuration" id="durationthree" required value={3}/>
          <div>
          <span> Over ten years </span>
          </div>
        </label>
      </div>)}
    </div>
{/*   <!-- portfolio value --> */}
    <div className={styles.multichoiceContainter}>
    {text == 5 && (<div>
      <h1>What is the total value of all your investments</h1>
        <label htmlFor="5m-invest">
        <input required type="radio" name="investmentvalue" id="5m-invest" value={1} />
          <div>
            <span> less than 1m </span>
          </div>
        </label>  
        <label htmlFor="10m-invest">
        <input required type="radio" name="investmentvalue" id="10m-invest" value={2} />
          <div>
            <span> greater than 1m  & less than 10m </span>
          </div>      
        </label>  
        <label htmlFor="big-invest">
        <input required type="radio" name="investmentvalue" id="big-invest" value={3} />
          <div>
            <span> greater than 10m </span>
          </div>      
        </label>  
        <label htmlFor="noinvest">
        <input required type="radio" name="investmentvalue" id="noInvestment" value={3} />
          <div>
            <span> I have no investments </span>
          </div>      
        </label>   
      </div>
      )}
    </div>
           
{/*   <!-- Income categories --> */}

      <div className={styles.multichoiceContainter}>
        {text == 6 && (<div>
        <h1>Kindly select your source(s) of income</h1>
          <label htmlFor="salary">
          <input type="checkbox" name="incomeType" id="salary" required value={2}/>
            <div>
              <span>Salary income</span>
            </div>
          </label>
          <label htmlFor="business">
          <input type="checkbox" name="incomeType" id="business" required value={1}/>
            <div>
              <span>Business and services income</span>
            </div>
          </label>
          <label htmlFor="investments">
          <input type="checkbox" name="incomeType" id="investments" required value={1}/>
            <div>
              <span>Investments</span>
            </div>
          </label>
          <label htmlFor="others">
          <input type="checkbox" name="incomeType" id="others"  required value={1}/>
            <div>
            <span>Others</span>
            </div>
            <input type="text" name="others" id="others" placeholder="please specify your other income source category"/>
          </label>
        </div>)}
      </div>    
          
      <div className={styles.circleOptionContainer}>
      {text == 7 && (<div>    
      <h1>
        I know fairly enough about investing, and always stay updated on latest investment related news and concerns, so,  I attribute my investment  performance to my abilities and luck
      </h1>
      <div>
        <label>
          <input className={styles.ranking} type="radio" name="confidence" value={1} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="confidence" value={2} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="confidence" value={3} required/>
          <div id={styles.small} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="confidence" value={4} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="confidence" value={5} required/>
          <div id={styles.big} className={styles.circle}></div>
          </label>
      </div>    
        
        <br/>
      </div>)}    
      </div>
      
      <div className={styles.circleOptionContainer}>
        {text == 8 && (<div>    
        <h1>How do you feel about missing out on investment opportunity</h1>
        <div>
        <label>
          <input className={styles.ranking} type="radio" name="fomo" value={1} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="fomo" value={2} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="fomo" value={3} required/>
          <div id={styles.small} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="fomo" value={4} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="fomo" value={5} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        </div>  
        </div>)}
      </div>
    
    <div className={styles.circleOptionContainer}>
    {text == 9 && (<div>       
      <h1>
        How important is the preservation of your initial investment amount to you, even if it means potentially sacrificing higher returns?
      </h1>
      <div>
        <label>
          <input className={styles.ranking} type="radio" name="preserve" value={1} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="preserve" value={2} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="preserve" value={3} required/>
          <div id={styles.small} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="preserve" value={4} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="preserve" value={5} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
      </div>  
            </div>)}
    </div>
    
    <div className={styles.circleOptionContainer}>
    {text == 10 && (<div>    
      <h1>How comfortable are you with exploring alternative investments or strategies that have higher chance of loss but offer potential higher returns?
      </h1>
      <div>
        <label>
          <input className={styles.ranking} type="radio" name="aversion" value={1} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="aversion" value={2} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="aversion" value={3} required/>
          <div id={styles.small} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="aversion" value={4} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="aversion" value={5} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
      </div>  
      </div>)}
    </div>
    
    <div className={styles.circleOptionContainer}>
    {text == 11 && (<div>
            
      <h1>
        How would you describe your comfort level with uncertainty and potential losses when it comes to investing?    
      </h1>
      <div>
        <label>
          <input className={styles.ranking} type="radio" name="uncertainty" value={1} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="uncertainty" value={2} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="uncertainty" value={3} required/>
          <div id={styles.small} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="uncertainty" value={4} required/>
          <div id={styles.mid} className={styles.circle}></div>
        </label>
        <label>
          <input className={styles.ranking} type="radio" name="uncertainty" value={5} required/>
          <div id={styles.big} className={styles.circle}></div>
        </label>
      </div>    
            </div>)}
    </div>
    
    
    <div className={styles.multichoiceContainter}>
    {text == 12 && (<div>
        <h1>Investment Orientation </h1>
            <label htmlFor="trading">
            <input type="radio" name="orientation" id="trading" value={3} required/>
              <div div>
                <span> Active Trading - Active buying and selling with risk of loss </span>
              </div>
            </label>
            <label htmlFor="growth">
            <input type="radio" name="orientation" id="growth" value={2} required/>
              <div>
                  <span> Accumulation - Not bothered about short term losses, consistent growth of porfolio from contributions and returns </span>
              </div>
            </label>
            <label htmlFor="Hybrid">
            <input type="radio" name="orientation" id="Hybrid" value={2} required/>
              <div>
                <span> Hybrid (Passive and active investing) </span>
              </div>
            </label>
            <label htmlFor="income">
            <input type="radio" name="orientation" id="income" value={2} required/>
              <div>
                  <span> Income - preserve the portfolio capital, earn returns and withdraw returns </span>
              </div>
            </label>
        </div>)}
    </div>
    
    <div className={styles.multichoiceContainter}>
    {text == 13 && (<div>
      <h1>How can you you tell that an investment is profitable</h1>      
          <label htmlFor="DIY">
          <input type="radio" name="operation" id="DIY" value={3} required/>
            <div>
                <span> DIY - Select, monitor, trade my investments by myself </span>
            </div>
          </label>
          <label htmlFor="assisted">
          <input type="radio" name="operation" id="assisted" value={2} required/>
            <div>
                <span> Assisted - I would like to work actively with an advisor in making decisions </span>
            </div>
          </label>
          <label htmlFor="outsourced">
          <input type="radio" name="operation" id="outsourced" value={2} required/>
            <div>
                <span> Outsourced - completely hand over investing to an professional </span>
            </div>
          </label>
            </div>)}
    </div>
      
    <div className={styles.multichoiceContainter}>
    {text == 14 && (<div>
        <h1>How can you you tell that an investment is profitable</h1>
          <label htmlFor="research">
          <input type="radio" name="judgement" id="research" value={3} required/>
            <div>  
                <span> {`I'll do my own research - including reading long pages of financial/investment reports`} </span>
            </div>
          </label>
          <label htmlFor="wordofmouth">
          <input type="radio" name="judgement" id="wordofmouth" value={2} required/>
            <div>
                <span> {`Depending on other people's experience with the investment, regardless if they are professionals`} </span>
            </div>
          </label>
          <label htmlFor="professional">
          <input type="radio" name="judgement" id="professional" value={2} required/>
            <div>
                <span> {`I'll consult an investment professional or savvy individuals to make that decision.`} </span>
            </div>
          </label>
            </div>)}
    </div>
    
    <div className={styles.multichoiceContainter}>
    {text == 15 && (<div>
        <h1>How would you react if a significant portion of your investment portfolio declined in value over a short period?</h1>
          <label htmlFor="sell">
          <input type="radio" name="lossReaction" id="sell" value={1} required/>
            <div>
                <span> Sell </span>
            </div>
          </label>
          <label htmlFor="buymore">
          <input type="radio" name="lossReaction" id="buymore" value={3} required/>
            <div>
                <span> consider buying more </span>
            </div>
          </label>
          <label htmlFor="hold">
          <input type="radio" name="lossReaction" id="hold" value={2} required/>
            <div>
                <span> Hold and wait it out </span>
            </div>
          </label>
          </div>)}
    </div> 

    <div className={styles.formnavigation}>    
      <div>{ text > 1 && (<button className={styles.prevbutton} onClick={prevText}>previous</button>)}</div>
      <div>{ text < 15 && text > 0 && (<button className={styles.nextbutton}onClick={nextText}>next</button>)}
      { text == 15 && (<button className={styles.submit} type="submit">Submit</button>)}</div>
    </div>
    </form>

    </div>
    
    </div>
    </>
  )
}

export default SocialSharing;
