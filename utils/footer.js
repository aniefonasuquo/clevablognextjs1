import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialSharing from './social/page'

export default function Footer () {

  return (
    <footer className={style.footer}>
      <div className={style.footerwrapper}>

        <div className={style.topfooter}>
          <div className={style.footerlogowrap}> 
            <Link href="/"> 
              <Image fill={true} src='/../public/logos/logo-white.png' objectFit='scale-down' alt='clevalogo'></Image> 
            </Link>
          </div>
          <div className={style.addresswrap}>
              <span> 281 Ajose Adeogun Str. V/I, <br></br> Lagos, Nigeria </span>
          </div>
        
        </div>

        <div className={style.middlefooter}>
          <p>
            <span>
            Netus auctor velit suspendisse lobortis risus nunc. Semper egestas elit adipiscing cras. Odio integer purus magna viverra facilisis sem viverra malesuada est. Sit integer vel ultrices diam id ultrices dolor purus arcu. Lacus platea at venenatis lorem commodo tellus odio. Maecenas ultrices justo diam rhoncus id morbi. Consequat vitae velit nunc ac vulputate integer. Semper iaculis in arcu nisl et pellentesque feugiat eu sit. Mi fermentum pellentesque mauris elit ornare. Diam pharetra feugiat neque nunc nunc porttitor nulla. Nec scelerisque turpis magna suscipit magnis sed enim lobortis placerat. Nisl id commodo elit egestas ornare. Natoque sed in quis vitae pretium vitae ullamcorper. Viverra tellus diam tortor pellentesque aliquam mauris. Massa consectetur a pellentesque accumsan. Nunc etiam in consequat ac urna orci. Mattis massa erat sapien elit dignissim imperdiet. 
            </span>
          </p>
  
        </div>
        <div className={style.buttomfooter}>
          <div className={style.copywritewrap}>
           ©2023 Cleva Wealth
          </div>
          <div className={style.socialicons}>
          <SocialSharing></SocialSharing>
          </div>
  
        </div>
      </div>

    </footer>
  )
}