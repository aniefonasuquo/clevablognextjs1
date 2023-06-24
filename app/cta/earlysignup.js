'use client'

import styles from './styles.module.css'

export default async function Cta() {
  
  
  return (
    <>
    <div className={styles.container}>
    <div>
      <h1>Invest better, join Cleva</h1>
      <p>Gain access to investment opportunities</p>
      <p>Wealth insights and resources</p>
      <p>Early access to the Cleva App</p>
    </div>
    <div>
      <form>
        <input type='email'></input>
        <button type="submit">Join Cleva</button>
      </form>
    </div>
    </div>
    </>
  )
}