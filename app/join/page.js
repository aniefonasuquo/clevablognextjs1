import Joinform from "./signup"
import style from './style.module.css'
import Image from "next/image"
import logo from './../../public/logos/logo-main.png'
import pic from './joinimage.webp'


export default function Join () {

  return (
    <div className={style.pagecontainer}>
      <div className={style.left}>
        <Image src={pic} alt="join-image" sizes="100vw" fill={true}></Image>
        <div className={style.deets}>

        </div>
      </div>
      <div className={style.right}>
        <Joinform></Joinform>
      </div>
    </div>
  )

}