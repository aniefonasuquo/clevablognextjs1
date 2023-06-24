'use client'
import { useEffect, useState } from 'react'
import styles from './style.module.css'

async function addUser (name, email) {

  const signup = await fetch('/api/adduser', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({data: {
          name: name,
          email: email,}})
  }).then(data => data.status)

  return signup
}


export default function Joinform () {

  const [submit, setSubmit] = useState('submit')

  async function handleJoin (e) {
    e.preventDefault()
    setSubmit('loading')

    const joinDetails = new FormData(e.target)
    const name = joinDetails.get('joinname')
    const email = joinDetails.get('joinemail')

    const status = await addUser(name, email)
    console.log(status)
    status == 200? setSubmit('success') : setSubmit('submit')

  }

  useEffect(()=> {console.log(submit)},[submit])

  return (
    <div>
    <form onSubmit={handleJoin} className={styles.form}>
      <label htmlFor="joinname">
        <p>Name</p>
        <input name="joinname" id="joinname" type='text' placeholder='John Appleseed'></input>
      </label>
      <label htmlFor="joinemail">
        <p>Email</p>
        <input name="joinemail" id="joinemail" type='email' placeholder='example@email.com'></input>
      </label>
      <button type='submit'>{submit == 'submit' ? 'Submit' : 'success'}</button>
    </form>
    <div>{submit == 'success' && <div>Thank you for joining Cleva! You will get an email notification shortly to confirm your registration</div>}</div>
    </div> 
  )
}