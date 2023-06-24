'use client'

import styles from './styles.module.css'
import React, { useEffect, useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { useRouter } from 'next/navigation';
import { processForm } from '../investorquiz/handleform';
import { Varela   } from 'next/font/google'
import { element } from 'prop-types';

const varela = Varela ({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

function Investorquiz() {
  const [text, setText] = useState(0)
  
  const router = useRouter()
  const checkedid = []

  const [isChecked, setIsChecked] = useState([]);
  const [answered, setAnswered] = useState([1])


  const answers = {}
  
  const handleInputChange = (event) => {
    
    const id = event.target.id
    
    const newarray = [...isChecked]
    const answer = [...answered]
    
    // if (newarray.includes(id)) {
    //   // if current list of selected answers includes selected answer, remove answer from list.
    //   const checkedid = newarray.indexOf(id)
    //   newarray.splice(checkedid, 1)
    //   // Set list of selected answers
    //   setIsChecked(newarray)
      

    //   // Remove question number from list of answered questions when selected
    //   answer.indexOf(text)
    //   answer.splice(text)

      
      console.log(isChecked)
    // } else {
      // If checked item is not already included in list of checked answers, add it to list.
      newarray.push(id)
      // Set list of checked answers
      setIsChecked(newarray)

      console.log(isChecked)

      // add answer number to list of answered question when checked
      answer.push(text)
    // }
    
    // set list of answered questions
    setAnswered(answer)

    // Add selected item to form answers
    answers[event.target.name] = event.target.value

  }

  function prevText () {  
    setText(text - 1)
  }

  function nextText () {
    // if current question is selected, go to next question
    if (answered.includes(text)) {
      setText(text + 1)
    }
  }

  function enterTest () {
    setText(text + 1)
  }

  const [age, setAge] = useState(28)
  function showAgeInput (e) {
    setAge(e.target.value)
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
  })

    router.push(data.url)
  }


  return (
    <>
    {text > 0 && (<div className={styles.progressOut}><div style={{width: `${((text/16)*100)}%`}}></div></div>)}
    <div className={styles.pagecontainer}>

      <div className={`${styles.quizintro} ${varela.className}`}>
        {text == 0 && (<div>
          <h1>Discover You</h1>
          <p>Making sense of your wealth journey begins with clarifying what type of investor your your are</p>
          <p> This quiz helps you determine what type of investors you are based on your biodata, financial status, emotional responses investing related changes.
          </p>
          <div>{text == 0 && (<button onClick={enterTest} type="button">Take quiz</button>)}</div>
        </div>)}
      </div>

      <div className={styles.formcontainer}>
        {/* <form onSubmit={handleSubmit}> */}
          <div className={styles.questionContainer}>
            <div>
              {text == 1 && (<div className={styles.ageQuestion}>
                <h1>How old are you?</h1>
                <input onChange={showAgeInput} defaultValue={age} type="range" name="age" id="age"/>
                <div>{age}<span> years old</span></div>
                </div>)}     
            </div>
          </div>   
            
            <div className={styles.formnavigation}>    
              <div>{text > 1 && (<button type='button' className={styles.prevbutton} onClick={prevText}>previous</button>)}</div>
              <div>{text < 16 && text > 0 && (<button className={styles.nextbutton}onClick={nextText}>next</button>)}</div>
              <div>{text == 16 && (<button className={styles.submit} type="submit">Submit</button>)}</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Investorquiz;
