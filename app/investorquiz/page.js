"use client"

import styles from './style.module.css'
import React, {useState, useEffect, useRef, Suspense} from 'react'
import { processForm } from './handleform'
import { useRouter } from 'next/navigation';
import characters from './characterlineup.png'
import Image from 'next/image'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


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

    const formvalid = e.target
    console.log(formvalid)
    
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
        <div className={styles.questioncontainer}>
          <div className={display == 0? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.quizintro}>
              <div className={styles.archetypeImage}>
                <Suspense fallback={<p>loading...</p>}>
                <Image alt='characters' src={characters} sizes='100vw'></Image>
                </Suspense>
              </div>
              <h1 className={Satoshi.className}>Discover You</h1>
              <div>
                <p className={Satoshi.className}>Many factors determine our investment outcome, understanding how your financial status, pyschological makeup, risk aversion affect our decisions when investing could help in making better choices.</p>
                <p>This quiz aims to determine how these factors affect our investments, and advises on the optimal strategy for success.</p>
              </div>
              <div>{display == 0 && (<button className={styles.startquiz} onClick={nextquestion}><span className={Satoshi.className}>Take Quiz</span><svg fill="rgb(2,4,37)" height="30px" width="30px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M21.7,16.7l-4,4C17.5,20.9,17.3,21,17,21s-0.5-0.1-0.7-0.3
c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l4,4
	c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.1,0.5,0,0.8C21.9,16.5,21.8,16.6,21.7,16.7z"/></svg></button>)}</div>
            </div>
          </div>

            <div className={display == 1? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.ageQuestion}>
              <h1 className={Satoshi.className}>How old are you?</h1>
              <input onChange={showAgeInput} defaultValue={age} type="range" name="age" id="age"/>
              <div><span className={Satoshi.className}>{age} years old</span></div>
            </div>
            </div>
          
            <div className={display == 2? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
              <h1 className={Satoshi.className}>How much do you earn in income on average monthly?</h1>
              <div>
                <label htmlFor='annualincome1'>
                    <input type='radio' name='annualIncome' value={1} id='annualincome1'/><span className={Satoshi.className}>Below N500k</span>
                </label>   
                <label htmlFor='annualincome2'>
                    <input type='radio' name='annualIncome' value={2} id='annualincome2'/><span className={Satoshi.className}>Above N500k, below N1 million</span>
                </label>   
                <label htmlFor='annualincome3'>
                    <input type='radio' name='annualIncome' value={3} id='annualincome3'/><span className={Satoshi.className}>Above N1 million, below N2.5 million</span>
                </label>   
                <label htmlFor='annualincome4'>
                    <input type='radio' name='annualIncome' value={4} id='annualincome4'/><span className={Satoshi.className}>Above N2.5m</span>
                </label>   
              </div>
            </div>
            </div>

            <div className={display == 3? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
            <h1 className={Satoshi.className}>What is your primary income currency?</h1>
            <div>
            <label htmlFor="NGN">
              <input type="radio" name="incomeCurrency" id="NGN" value={1} required/>
              <span className={Satoshi.className}>NGN</span>
            </label>        
            <label htmlFor="USD-GBP-EUR">
              <input type="radio" name="incomeCurrency" id="USD-GBP-EUR" value={2} required/>
              <span className={Satoshi.className}>Forex (USD/GBP/EUR)</span>
            </label>
            </div>
            </div>
            </div>

            <div className={display == 4? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
              <h1 className={Satoshi.className}>How long have your been earning from your primary source of income?</h1>
              <div>
            <label htmlFor="durationone">
              <input type="radio" name="incomeDuration" id="durationone" required value={1}/>
              <span className={Satoshi.className}> less than 5 years </span>
            </label>
            <label htmlFor="durationtwo">
              <input type="radio" name="incomeDuration" id="durationtwo" required value={2}/>
              <span className={Satoshi.className}>Over 5 years but less than 10 years </span>
            </label>
            <label htmlFor="durationthree">
              <input type="radio" name="incomeDuration" id="durationthree" required value={3}/>
                <span className={Satoshi.className}>Over ten years </span>
            </label>
            </div>
            </div>
            </div>

            <div className={display == 5? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
            <h1 className={Satoshi.className}>What is the total value of your financial investments?. This only includes monies in savings and investment accounts</h1>
            <div>
            <label htmlFor="5m">
            <input type="radio" name="investmentvalue" id="5m" value={1} />
              <span className={Satoshi.className}>Less than 1m </span>
            </label>  
            <label htmlFor="10m">
            <input type="radio" name="investmentvalue" id="10m" value={2} />
              <span className={Satoshi.className}>Greater than 1m  & less than 10m </span>
            </label>  
            <label htmlFor="big">
            <input type="radio" name="investmentvalue" id="big" value={3} />
              <span className={Satoshi.className}>Greater than 10m </span>
            </label>  
            <label htmlFor="no-invest">
            <input type="radio" name="investmentvalue" id="no-invest" value={3} />
              <span className={Satoshi.className}>I have no investments </span>
            </label>
            </div>
            </div>           
            </div>

            <div className={display == 6? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
              <h1 className={Satoshi.className}>Select your current source(s) of income? Select more than one if you have multiple sources of income.</h1>
              <div>
              <label htmlFor="salary">
              <input type="checkbox" name="incomeType" id="salary" value={2}/>
                <span className={Satoshi.className}>Salary income</span>
              </label>
              <label htmlFor="business">
              <input type="checkbox" name="incomeType" id="business" value={1}/>
                <span className={Satoshi.className}>Business and services income</span>
              </label>
              <label htmlFor="investments">
              <input type="checkbox" name="incomeType" id="investments" value={1}/>
                <span className={Satoshi.className}>Investments</span>
              </label>
              <label htmlFor="others">
              <input type="checkbox" name="incomeType" id="others" value={1}/>
                <span className={Satoshi.className}>Others</span>
               </label>
             </div>
             </div> 
            </div>    

            <div className={display == 7? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <h1 className={Satoshi.className}>I know fairly enough about investing, and always stay updated on latest investment related news and concerns, so,  I attribute my investment  performance to my abilities and luck</h1>
            <div>
              <div className={styles.rankingcontainer}>    
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
              <div>
                <span className={Satoshi.className}>Highly Disagree</span>
                <span className={Satoshi.className}>Highly Agree</span>
              </div>
            </div> 
            </div>   
            </div>

            <div className={display == 8? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <h1>I feel bad when I miss out on an investment opportunity?</h1>
            <div>
              <div className={styles.rankingcontainer}>
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
              <div>
              <span className={Satoshi.className}>Highly Disagree</span>
              <span className={Satoshi.className}>Highly Agree</span>
                </div>  
              
            </div>
            </div>
            </div>

            <div className={display == 9? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>   
            <h1 className={Satoshi.className}>How important is the preservation of your initial investment amount to you, even if it means potentially sacrificing higher returns?</h1>  
            <div>
              <div className={styles.rankingcontainer}>
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
              <div>
                <span className={Satoshi.className}>Very unimportant</span>
                <span className={Satoshi.className}>Very important</span>
              </div>

            </div>
            </div>
            </div>

            <div className={display == 10? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}> 
            <h1 className={Satoshi.className}>How comfortable are you with exploring alternative investments or strategies that have higher chance of loss but offer potential higher returns?
            </h1>  
            <div>
              <div className={styles.rankingcontainer}>
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
              <div>
                <span className={Satoshi.className}>Very uncomfortable</span>
                <span className={Satoshi.className}>Very Comfortable</span>
              </div>
            </div>
            </div>
            </div>
        
            <div className={display === 11 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.degree}>
            <h1 className={Satoshi.className}>How would you describe your comfort level with uncertainty and porfolio losses when investing?</h1>  
            <div>
              <div className={styles.rankingcontainer}>
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
              <div>
              <span className={Satoshi.className}>Highly uncomfortable</span>
              <span className={Satoshi.className}>Highly comfortable</span>
              </div>

            </div>
            </div>
            </div>

            <div className={display === 12 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>
                <h1 className={Satoshi.className}>Which of the following do your identify most with as your investment orientation?</h1>
                <div>
                  <label htmlFor="trading">
                  <input type="radio" name="orientation" id="trading" value={3} required/>
                    <span className={Satoshi.className}>Active Trading - Active buying and selling with risk of loss</span>
                  </label>
                  <label htmlFor="growth">
                  <input type="radio" name="orientation" id="growth" value={2} required/>
                    <span className={Satoshi.className}>Accumulation - Not bothered about short term losses, consistent growth of porfolio from contributions and returns. </span>
                  </label>
                  <label htmlFor="Hybrid">
                  <input type="radio" name="orientation" id="Hybrid" value={2} required/>
                    <span className={Satoshi.className}>Hybrid (Passive and active investing)</span>
                  </label>
                  <label htmlFor="income">
                  <input type="radio" name="orientation" id="income" value={2} required/>
                    <span className={Satoshi.className}>Income - preserve the portfolio capital, earn and withdraw returns</span>
                  </label>
                </div>
              </div>
            </div>

            <div className={display === 13 ? `${styles.visible}` : `${styles.question}`}>
            <div className={styles.radio}>      
              <h1>What is your preferred investment operation style?</h1>
              <div>
                <label htmlFor="DIY">
                <input type="radio" name="operation" id="DIY" value={3} required/>
                  <span className={Satoshi.className}>DIY - Select, monitor, trade my investments by myself</span>
                </label>
                <label htmlFor="assisted">
                <input type="radio" name="operation" id="assisted" value={2} required/>
                  <span className={Satoshi.className}>Assisted - I would like to work actively with an advisor in making decisions </span>
                </label>
                <label htmlFor="outsourced">
                <input type="radio" name="operation" id="outsourced" value={2} required/>
                  <span className={Satoshi.className}>Outsourced - completely hand over investing to an professional </span>
                </label>
              </div>
              </div>  
            </div>

            <div className={display == 14 ? `${styles.visible}` : `${styles.question}`}>
              <div className={styles.radio}>           
                <h1>Which do your identify as your style of making investment decisions?</h1>
                <div>  
                  <label htmlFor="research">
                  <input type="radio" name="judgement" id="research" value={3} required/>
                    <span className={Satoshi.className}>I'll do my own research - including reading long pages of financial/investment reports.</span>
                  </label>
                  <label htmlFor="wordofmouth">
                  <input type="radio" name="judgement" id="wordofmouth" value={2} required/>
                    <span className={Satoshi.className}>Depending on other people's experience with the investment, regardless if they are professionals.</span>
                  </label>
                  <label htmlFor="professional">
                  <input type="radio" name="judgement" id="professional" value={2} required/>
                    <span className={Satoshi.className}>I'll consult an investment professional or savvy individuals to make that decision.</span>
                  </label>
                </div>
              </div> 
            </div>

            <div className={display == 15 ? `${styles.visible}` : `${styles.question}`}>
              <div className={styles.radio}>            
              <h1 className={Satoshi.className}>How would you react if a significant portion of your investment portfolio declined in value over a short period?</h1>
              <div>
                <label htmlFor="sell">
                <input type="radio" name="lossReaction" id="sell" value={1} required/>
                  <span className={Satoshi.className}>Sell</span>
                </label>
                <label htmlFor="buymore">
                <input type="radio" name="lossReaction" id="buymore" value={3} required/>
                  <span className={Satoshi.className}>Consider buying more</span>
                </label>
                <label htmlFor="hold">
                <input type="radio" name="lossReaction" id="hold" value={2} required/>
                  <span className={Satoshi.className}>Hold and wait it out</span>
                </label>
              </div>
              </div>
          </div>

          <div className={display == 16 ? `${styles.visible}` : `${styles.question}`}>
              <div className={styles.radio}>            
              <h1 className={Satoshi.className}>Gender?</h1>
              <div>
                <label htmlFor="male">
                <input type="radio" name="gender" id="male" value='male' required/>
                  <span className={Satoshi.className}>Male</span>
                </label>
                <label htmlFor="female">
                <input type="radio" name="gender" id="female" value='female' required/>
                  <span className={Satoshi.className}>Female</span>
                </label>
              </div>
              </div>
              </div>
              <div className={styles.controls}>      
            {display > 0 && (<button className={styles.prevbutton} onClick={prevquestion}><span className={Satoshi.className}>Previous</span></button>)}
            {display < 16 && display > 0 && (<button className={styles.nextbutton}onClick={nextquestion}><span className={Satoshi.className}>Next</span></button>)}
            {display == 16 && (<button className={styles.submit} type="submit"><span className={Satoshi.className}>Submit</span></button>)}
          </div>
            </div>

        
        </form>

        </div>
      </div>
  
   )}