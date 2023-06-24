'use client'
import { useEffect, useState } from 'react'
import styles from './style.module.css'

async function addUser (name, email) {

  const sendpulsekey = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',},
    body: JSON.stringify({
      "grant_type" : 'client_credentials',
      "client_id" : 'bd318f5835c528023a17bc5504c93166',
      "client_secret" : '31e866e0a05bd78a704c0af207e30e71'
   }
  )}).then(data => data.access_token)

  console.log(sendpulsekey)
    
  if (sendpulsekey) { 
  const signup = await fetch(`https://api.sendpulse.com/addressbooks/241130/emails`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${sendpulsekey}`},
    body: JSON.stringify({
      emails:[
         {
            email: email,
            variables:{
               name: name
            }
         }
      ],
      confirmation:"force",
      sender_email:"hello@cleva.ng",
      message_lang:"en"
   })}).then(data => data.status) 
  
   return signup
  
  } else {
    return 400 
   }

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