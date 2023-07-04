import Joinform from "./signup"
import style from './style.module.css'
import Image from "next/image"
import logo from './../../public/logos/logo-main.png'

export default function Join () {

  return (
    <div className={style.pagecontainer}>
      <div className={style.left}>
        <h1>Discover the best opportunities that suit your</h1>
        <h1>Lifestyle</h1>
      </div>
      <div className={style.right}>
        <div>
          <div className={style.logowrap}>
            <Image alt="clevaLogo" src={logo} fill={true} sizes="100vw"></Image>
          </div>
        </div>
        <Joinform></Joinform>
      </div>
    </div>
  )

}