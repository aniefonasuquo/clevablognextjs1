'use client'

import styles from './style.module.css'

export default function Radio ({questions}) {
  
  return (
      <> 
        {questions.map(question => (
          <div className={styles.radio} id={question.name}>
            <div>{question.question}</div>
            <div>  
            {question.options.map(option => (
                <label  htmlFor={option.name}>
                  <input type="radio" name={question.name} value={option.value} id={option.name}/><p>{option.name}</p>
                </label>
            ))}     
            </div>
          </div>
          ))}
      </>
  )

}