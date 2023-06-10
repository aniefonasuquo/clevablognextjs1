'use client'

import styles from './style.module.css'

export default async function CalcOptions ({option, detail, onClick}) {

  return (
    <>
      <div onclick={onClick} className={styles.targetOption}> 
        <p> {option} </p>
        <p> {detail} </p>
      </div>
    </>
  )
}