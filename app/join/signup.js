'use client'
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import Spinner from "@/utils/spinner/spinner"

async function addUser (name, email) {

  const sendpulsekey = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    body: JSON.stringify({
      grant_type : 'client_credentials',
      client_id : 'bd318f5835c528023a17bc5504c93166',
      client_secret : '31e866e0a05bd78a704c0af207e30e71'
   }
  )}).then(data => data.json()).then(token => token.access_token)

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
    return sendpulsekey 
   }

}


export default function Joinform () {

  const [submit, setSubmit] = useState('Join')

  async function handleJoin (e) {
    e.preventDefault()
    setSubmit('loading')

    const joinDetails = new FormData(e.target)
    const name = joinDetails.get('joinname')
    const email = joinDetails.get('joinemail')

    const status = await addUser(name, email)
    status == 200? setSubmit('success') : setSubmit('failed')

  }

  // useEffect(()=> {console.log(submit)},[submit])

  return (
    <div>
      <form onSubmit={handleJoin} className={styles.form}>
        <div>
          <h1>Join Cleva</h1>
          <p>Discover and make the right decisions from global wealth opportunites.</p>
        </div>
        <input name="joinname" id="joinname" type='text' placeholder='Name...'></input>
        <input name="joinemail" id="joinemail" type='email' placeholder='Email...'></input>
        <span>Joining Cleva means you are okay with receiving our email newsletters, and product and services information</span>
        <div className={styles.feedback}>
          {submit == 'success' && <p className={styles.Succesfeedback}>Thank you for joining Cleva! You will get an email notification shortly to confirm your registration</p>}
          {submit == 'failed' && <p className={styles.failfeedback}>Oops! something went wrong, unable to join.. Let's give it another shot</p>}
        </div>
        <button type='submit'>
          {submit == 'Join' && 'Join'}
          {submit == 'success' && 'Join'}
          {submit == 'failed' && 'failed'}
          {submit == 'loading' && (<Spinner></Spinner>)}
        </button>
      </form>
    </div> 
  )
}