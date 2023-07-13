"use client"

import styles from './style.module.css'
import React, {useState, useEffect, useRef, Suspense} from 'react'
import { processForm } from './handleform'
import { useRouter } from 'next/navigation';
import characters from './characterlineup.png'
import Image from 'next/image'

export default function Archetypes () {

  const router = useRouter()  
  const [questionNo, setquestionNo] = useState(0)
  const [display, setdisplay] = useState(0)

  useEffect((
  )=> {
    setdisplay(questionNo)},[questionNo])

  function nextquestion () {
    setquestionNo((question) => question + 1)
  }

  function prevquestion () {
    setquestionNo((question) => question - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formInput = await processForm(e) ;
    
    const data = await fetch('/api/testform', {
      method: 'POST',
      body: JSON.stringify({data: {
      archetype: formInput.archetype,
      willingness: formInput.willingnessRank,
      capacity: formInput.capacityRank,
      gender: formInput.gender
    }})
  }).then(data => router.push(data.url))

    
  }


  const [age, setAge] = useState(28)
  function showAgeInput (e) {
  setAge(e.target.value)
  }

  return (
    <div className={styles.pagecontainer}>
      {display > 0 && (<div className={styles.progressOut}><div style={{width: `${((display/16)*100)}%`}}></div></div>)}
      
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
        <div className={styles.questioncontainer} >
          <div className={display == 0? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.quizintro}>
              <div className={styles.archetypeImage}>
                <Suspense fallback={<p>loading...</p>}>
                <Image alt='characters' src={characters} sizes='100vw'></Image>
                </Suspense>
              </div>
              <h1><span> Discover You</span></h1>
              <p>
                <span>Understanding how our relationship with money, psychological makeup, amongst others are factors that affect how we make wealth related decisions.</span>
                <span>This quiz aims to understand some of these factors to advise on optimal wealth decision making</span>
              </p>
              <div>
              {display == 0 && (<button className={styles.startquiz} onClick={nextquestion}>{'Take Quiz >>'}</button>)}
            </div>
            </div>

          </div>

            <div className={display == 1? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.ageQuestion}>
              <h1>How old are you?</h1>
              <input onChange={showAgeInput} defaultValue={age} type="range" name="age" id="age"/>
              <div>{age}<span> years old</span></div>
            </div>
            </div>
          
            <div className={display == 2? `${styles.visible}` : `${styles.question}`}>
           
          <div className={styles.radio}>
            <div>How much do you earn in income on average monthly?</div>
            <div>
              <label htmlFor='annualincome1'>
                  <input type='radio' name='annualIncome' value={1} id='annualincome1'/><span>Less N500k</span>
              </label>   
              <label htmlFor='annualincome2'>
                  <input type='radio' name='annualIncome' value={2} id='annualincome2'/><span>More than N500k, less than N1 million</span>
              </label>   
              <label htmlFor='annualincome3'>
                  <input type='radio' name='annualIncome' value={3} id='annualincome3'/><span>More than N1 million, less than N2.5 million</span>
              </label>   
              <label htmlFor='annualincome4'>
                  <input type='radio' name='annualIncome' value={4} id='annualincome4'/><span>More than N2.5m</span>
              </label>   
            </div>
          </div>
          
            </div>
            <div className={display == 3? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
            <div>
              What is your primary income currency?
            </div>
            <div>
            <label htmlFor="NGN">
              <input type="radio" name="incomeCurrency" id="NGN" value={1} required/>
              <span> NGN </span>
            </label>        
            <label htmlFor="USD-GBP-EUR">
              <input type="radio" name="incomeCurrency" id="USD-GBP-EUR" value={2} required/>
              <span> Forex (USD/GBP/EUR) </span>
            </label>
            </div>
            </div>
            </div>

            <div className={display == 4? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
              <div>How long have your been earning from your primary source of income?</div>
              <div>
            <label htmlFor="durationone">
              <input type="radio" name="incomeDuration" id="durationone" required value={1}/>
              <span> less than 5 years </span>
            </label>
            <label htmlFor="durationtwo">
              <input type="radio" name="incomeDuration" id="durationtwo" required value={2}/>
              <span> Over 5 years but less than 10 years </span>
            </label>
            <label htmlFor="durationthree">
              <input type="radio" name="incomeDuration" id="durationthree" required value={3}/>
                <span> Over ten years </span>
            </label>
            </div>
            </div>
            </div>

            <div className={display == 5? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
            <div>
              <p>What is the total value of your financial investments?</p>
              <p>This only includes monies in savings and investment accounts</p>
            </div>
            <div>
            <label htmlFor="5m">
            <input type="radio" name="investmentvalue" id="5m" value={1} />
              <span> less than 1m </span>
            </label>  
            <label htmlFor="10m">
            <input type="radio" name="investmentvalue" id="10m" value={2} />
              <span> greater than 1m  & less than 10m </span>
            </label>  
            <label htmlFor="big">
            <input type="radio" name="investmentvalue" id="big" value={3} />
              <span> greater than 10m </span>
            </label>  
            <label htmlFor="no-invest">
            <input type="radio" name="investmentvalue" id="no-invest" value={3} />
              <span> I have no investments </span>
            </label>
            </div>
            </div>           
            </div>

            <div className={display == 6? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
              <div>
                Select your current source(s) of income? Select more than one if you have multiple sources of income.
              </div>
              <div>
              <label htmlFor="salary">
              <input type="checkbox" name="incomeType" id="salary" value={2}/>
                <span>Salary income</span>
              </label>
              <label htmlFor="business">
              <input type="checkbox" name="incomeType" id="business" value={1}/>
                <span>Business and services income</span>
              </label>
              <label htmlFor="investments">
              <input type="checkbox" name="incomeType" id="investments" value={1}/>
                <span>Investments</span>
              </label>
              <label htmlFor="others">
              <input type="checkbox" name="incomeType" id="others" value={1}/>
                <span>Others</span>
               </label>
             </div>
             </div> 
            </div>    

            <div className={display == 7? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <div>
              I know fairly enough about investing, and always stay updated on latest investment related news and concerns, so,  I attribute my investment  performance to my abilities and luck
            </div>
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
            </div>   
            </div>

            <div className={display == 8? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <div>
              How do you feel about missing out on investment opportunity
            </div>
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
            </div>
            </div>

            <div className={display == 9? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>   
            <div>
              How important is the preservation of your initial investment amount to you, even if it means potentially sacrificing higher returns?
            </div>  
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
            </div>
            </div>

            <div className={display == 10? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}> 
            <div>How comfortable are you with exploring alternative investments or strategies that have higher chance of loss but offer potential higher returns?
            </div>  
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
            </div>
            </div>
        
            <div className={display === 11 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <div>How would you describe your comfort level with uncertainty and potential losses when it comes to investing?</div>  
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
            </div>
            </div>

            <div className={display === 12 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
                <div>Which of the following do your identify most with as your investment orientation?</div>
                <div>
                  <label htmlFor="trading">
                  <input type="radio" name="orientation" id="trading" value={3} required/>
                    <span>Active Trading - Active buying and selling with risk of loss</span>
                  </label>
                  <label htmlFor="growth">
                  <input type="radio" name="orientation" id="growth" value={2} required/>
                    <span>Accumulation - Not bothered about short term losses, consistent growth of porfolio from contributions and returns. </span>
                  </label>
                  <label htmlFor="Hybrid">
                  <input type="radio" name="orientation" id="Hybrid" value={2} required/>
                    <span>Hybrid (Passive and active investing)</span>
                  </label>
                  <label htmlFor="income">
                  <input type="radio" name="orientation" id="income" value={2} required/>
                    <span>Income - preserve the portfolio capital, earn and withdraw returns</span>
                  </label>
                </div>
              </div>
            </div>

            <div className={display === 13 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>      
              <div>What is your preferred investment operation style?</div>
              <div>
                <label htmlFor="DIY">
                <input type="radio" name="operation" id="DIY" value={3} required/>
                  <span>DIY - Select, monitor, trade my investments by myself</span>
                </label>
                <label htmlFor="assisted">
                <input type="radio" name="operation" id="assisted" value={2} required/>
                  <span>Assisted - I would like to work actively with an advisor in making decisions </span>
                </label>
                <label htmlFor="outsourced">
                <input type="radio" name="operation" id="outsourced" value={2} required/>
                  <span> Outsourced - completely hand over investing to an professional </span>
                </label>
              </div>
              </div>  
            </div>

            <div className={display == 14 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>           
              <div>Which do your identify as your style of making investment decisions?</div>
                <div>  
                  <label htmlFor="research">
                  <input type="radio" name="judgement" id="research" value={3} required/>
                    <span> {`I'll do my own research - including reading long pages of financial/investment reports`} </span>
                  </label>
                  <label htmlFor="wordofmouth">
                  <input type="radio" name="judgement" id="wordofmouth" value={2} required/>
                    <span> {`Depending on other people's experience with the investment, regardless if they are professionals`} </span>
                  </label>
                  <label htmlFor="professional">
                  <input type="radio" name="judgement" id="professional" value={2} required/>
                    <span> {`I'll consult an investment professional or savvy individuals to make that decision.`} </span>
                  </label>
                </div>
               </div> 
            </div>

            <div className={display == 15 ? `${styles.visible}` : `${styles.question}`}>
              <div className={styles.radio}>            
              <div>
                How would you react if a significant portion of your investment portfolio declined in value over a short period?
              </div>
              <div>
                <label htmlFor="sell">
                <input type="radio" name="lossReaction" id="sell" value={1} required/>
                  <span> Sell </span>
                </label>
                <label htmlFor="buymore">
                <input type="radio" name="lossReaction" id="buymore" value={3} required/>
                  <span> consider buying more </span>
                </label>
                <label htmlFor="hold">
                <input type="radio" name="lossReaction" id="hold" value={2} required/>
                  <span> Hold and wait it out </span>
                </label>
              </div>
              </div>
          </div>

          <div className={display == 16 ? `${styles.visible}` : `${styles.question}`}>
              <div className={styles.radio}>            
              <div>
                Gender?
              </div>
              <div>
                <label htmlFor="male">
                <input type="radio" name="gender" id="male" value='male' required/>
                  <span>Male</span>
                </label>
                <label htmlFor="female">
                <input type="radio" name="gender" id="female" value='female' required/>
                  <span>Female</span>
                </label>
              </div>
              </div>
              </div>
              <div className={styles.controls}>      
            {display > 0 && (<button className={styles.prevbutton} onClick={prevquestion}>previous</button>)}
            {display < 16 && display > 0 && (<button className={styles.nextbutton}onClick={nextquestion}>next</button>)}
            {display == 16 && (<button className={styles.submit} type="submit">Submit</button>)}
          </div>
            </div>

        
        </form>

        </div>
      </div>
  
   )}