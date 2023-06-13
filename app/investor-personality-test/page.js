'use client'

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { processForm } from './handleform';

export default async function testForm () {

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
    <div className={styles.formcontainer}>
    
    <form onSubmit={handleSubmit}>
      <div>
        <div><input type="range" name="age" id="age"/>Age</div>
      </div>
      {/* Annual Income  */}
      <div className={styles.annualIncome}>
      <div>
        <div>
          <label htmlFor="income1">
          <input type="radio" name="annualIncome" value='1' id='income1' required />
            <span> Below 499k </span>
          </label>
        </div>
        <div>
          <label htmlFor="income2">
          <input type="radio" name="annualIncome" value='2' id='income2' required/>
            <span> 500k to 1m </span>
          </label>        
        </div>
        <div>
          <label htmlFor="income3">
          <input type="radio" name="annualIncome" value='3' id='income3' required />
            <span> above 1m to 2.5m </span>
          </label>
        </div>
        <div>
          <label htmlFor="income4">
          <input type="radio" name="annualIncome" value='4' id='income4' required/>
            <span> Below 2.5m </span>
          </label>
        </div>
      </div> 
      </div>
    
      <br/>
      {/* <!-- Income Currency --> */}
      <div>
      <div>
        <div>
          <input type="radio" name="incomeCurrency" id="NGN" value={1} required/>
          <label htmlFor="NGN">
            <span> NGN </span>
          </label>        
        </div>
        
        <div>
          <input type="radio" name="incomeCurrency" id="USD-GBP-EUR" value={2} required/>
          <label htmlFor="USD-GBP-EUR">
            <span> Forex (USD/GBP/EUR) </span>
          </label>
        </div>
      </div> 
      </div>
    
      <br/>
    
  {/*   <!-- income duration --> */}
      <div>
        <div>

        <div>
          <input type="radio" name="incomeDuration" id="durationone" required value={1}/>
          <label htmlFor="durationone">
            <span> less than 5 years </span>
          </label>
        </div>
        <div>
          <input type="radio" name="incomeDuration" id="durationtwo" required value={2}/>
          <label htmlFor="durationthree">
            <span> Over 5 years but less than 10 years </span>
          </label>
        </div>      
        <div>
          <input type="radio" name="incomeDuration" id="durationthree" required value={3}/>
          <label htmlFor="durationthree">
            <span> Over ten years </span>
          </label>
        </div>
        </div>
      </div>
      <br/>
{/*   <!-- portfolio value --> */}
      <div className={styles.investmentvalueshow} >
      
          <div>
            
            <div>
              <input type="radio" name="investmentvalue" id="5m-invest" value={1} />
              <label htmlFor="{5}m-invest">
                <span> less than 1m </span>
              </label>  
            </div>
            <div>
              <input type="radio" name="investmentvalue" id="10m-invest" value={2} />
              <label htmlFor="{1}0m-invest">
                <span> greater than 1m  & less than 10m </span>
              </label>  
            </div>      
            <div>
              <input type="radio" name="investmentvalue" id="big-invest" value={3} />
              <label htmlFor="big-invest">
                <span> greater than 10m </span>
              </label>  
            </div>      
            <div>
              <input type="radio" name="investmentvalue" id="noInvestment" value={3} />
              <label htmlFor="big-invest">
                <span> I have no investments </span>
              </label>  
            </div>      
            <br/> 
          </div>
          
          </div>
           
{/*   <!-- Income categories --> */}

      <div className={styles.incomeSources}>
      <div>
            
        <div>
          <input type="checkbox" name="incomeType" id="salary" value={2}/>
          <label htmlFor="salary">
            <span>Salary income</span>
          </label>
        </div>
        <div>
          <input type="checkbox" name="incomeType" id="business" value={1}/>
          <label htmlFor="business">
            <span>Business and services income</span>
          </label>
        </div>
        <div>
          <input type="checkbox" name="incomeType" id="investments" value={1}/>
          <label htmlFor="investments">
            <span>Investments</span>
          </label>
        </div>
        <div>
          <input type="checkbox" name="incomeType" id="others" value={1}/>
          <label htmlFor="others">
            <span>Others</span>
          </label>
          <input type="text" name="others" id="others" placeholder="please specify your other income source category"/>
        </div>
          </div>
      </div>    
    
      <div id="known-confidence"></div>
      <div>
            
      <div>
        I know fairly enough about investing, and always stay updated on latest investment related news and concerns, so,  I attribute my investment  performance to my abilities and luck
    </div>    
      <fieldset className={styles.fieldset}>
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
        <br/>
      </fieldset>
            </div>    
      
      <br/>
      
      <div>

      <div>
            
      <div>
        How do you feel about missing out on investment opportunity
      </div>  
      <fieldset className={styles.fieldset}>
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
        <br/>
      </fieldset >
            </div>
      </div>
    
    <div>
    <div>
            
      <div>
        How important is the preservation of your initial investment amount to you, even if it means potentially sacrificing higher returns?
      </div>  
      <fieldset className={styles.fieldset}>
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
        <br/>
      </fieldset>
            </div>
    </div>
    
    <div>
    (<div>    
      <div>How comfortable are you with exploring alternative investments or strategies that have higher chance of loss but offer potential higher returns?
      </div>  
      <fieldset className={styles.fieldset}>
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
        <br/>
      </fieldset>
      </div>
    </div>
    
    <div>
    <div>
            
      <div>
        How would you describe your comfort level with uncertainty and potential losses when it comes to investing?    
      </div>  
      <fieldset className={styles.fieldset}>
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
        <br/>
      </fieldset>
            </div>
    </div>
    
    
    <div>
    <div>
            
      <div className={styles.questionBlock}> Investment Orientation 
          <div>
            <input type="radio" name="orientation" id="trading" value={3} required/>
            <label htmlFor="trading">
              <span> Active Trading - Active buying and selling with risk of loss </span>
            </label>
          </div>
          <div>
            <input type="radio" name="orientation" id="growth" value={2} required/>
            <label htmlFor="growth">
              <span> Accumulation - Not bothered about short term losses, consistent growth of porfolio from contributions and returns </span>
            </label>
          </div>
          <div>
            <input type="radio" name="orientation" id="Hybrid" value={2} required/>
            <label htmlFor="Hybrid">
              <span> Hybrid (Passive and active investing) </span>
            </label>
          </div>
          <div>
            <input type="radio" name="orientation" id="income" value={2} required/>
            <label htmlFor="income">
              <span> Income - preserve the portfolio capital, earn returns and withdraw returns </span>
            </label>
          </div>
        <br/>
      </div>
            </div>
    </div>
    
    <div>
    <div>
            
      <div className={styles.questionblock}> Investment operations 
        <div>
          <input type="radio" name="operation" id="DIY" value={3} required/>
          <label htmlFor="DIY">
            <span> DIY - Select, monitor, trade my investments by myself </span>
          </label>
        </div>
        <div>
          <input type="radio" name="operation" id="assisted" value={2} required/>
          <label htmlFor="assisted">
            <span> Assisted - I would like to work actively with an advisor in making decisions </span>
          </label>
        </div>
        <div>
          <input type="radio" name="operation" id="outsourced" value={2} required/>
          <label htmlFor="outsourced">
            <span> Outsourced - completely hand over investing to an professional </span>
          </label>
        </div>
    
        <br/>
      </div>
            </div>
    </div>
      
    <div>
    <div>
            
      <div className={styles.questionblock}> 
        How can you you tell that an investment is profitable
        <div>  
          <input type="radio" name="judgement" id="research" value={3} required/>
          <label htmlFor="research">
            <span> {`I'll do my own research - including reading long pages of financial/investment reports`} </span>
          </label>
        </div>
        <div>
          <input type="radio" name="judgement" id="wordofmouth" value={2} required/>
          <label htmlFor="wordofmouth">
            <span> {`Depending on other people's experience with the investment, regardless if they are professionals`} </span>
          </label>
        </div>
        <div>
          <input type="radio" name="judgement" id="professional" value={2} required/>
          <label htmlFor="professional">
            <span> {`I'll consult an investment professional or savvy individuals to make that decision.`} </span>
          </label>
        </div>
    
        <br/>
      </div>
            </div>
    </div>
    
    <div>
    <div>
            
      <div className={styles.questionblock}>
          How would you react if a significant portion of your investment portfolio declined in value over a short period?
        <div>
          <input type="radio" name="lossReaction" id="sell" value={1} required/>
          <label htmlFor="sell">
            <span> Sell </span>
          </label>
        </div>
        <div>
          <input type="radio" name="lossReaction" id="buymore" value={3} required/>
          <label htmlFor="buymore">
            <span> consider buying more </span>
          </label>
        </div>
        <div>
          <input type="radio" name="lossReaction" id="hold" value={2} required/>
          <label htmlFor="hold">
            <span> Hold and wait it out </span>
          </label>
        </div>
    
        <br/>
      </div>
            </div>
    </div>
    
      <button type="submit">Submit</button>
    
  </form>

  </div>    
  )
}

