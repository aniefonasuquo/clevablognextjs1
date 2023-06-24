import Joinform from "./signup"
import style from './style.module.css'



export default function Join () {

  return (
    <div className={style.pagecontainer}>
      <div className={style.left}>
        <h1>Cleva helps you choose what investments that suit your </h1>
      </div>
      <div className={style.right}>
        
        <div><Joinform></Joinform></div>
      </div>
    </div>
  )

}