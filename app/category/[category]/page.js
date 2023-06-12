import Link from "next/link";
import Image from 'next/image'
import styles from './styles.module.css'
import { Raleway  } from 'next/font/google'

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default async function Homepage({ params }) {

  return (
<>
    <div className={styles.wrapper}>
      
      <div className={styles.categorypost}>
        <div className={styles.articleframe}>
          <div className={styles.imgwrap}>
            <Link href="/"> 
            <Image className={styles.catimg} sizes="100vw" src={"/../public/investimg.jpg"} fill='true'/> 
            </Link>
          </div>
          <Link href="/"><h3 className={raleway.className}> Title </h3></Link>
        </div>
      </div>

      <div className={styles.rightsection}>
        <div className={styles.categorydesc}>
          <h2 className={`${styles.sideheading} ${raleway.className}`}>Category</h2>
          <p className={`${styles.catdesc}`}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
        </div>
        <div className={styles.recommendedpost}>
          <h2 className={`${styles.sideheading} ${raleway.className}`}>Recommended posts</h2>
          <div className={styles.sidearticle}> 
            <div className={styles.imageandtext} >
              <div className={styles.recomimgwrap}>
                <Link href="/">
                  <Image className={styles.recomimg} src={"/../public/investimg.jpg"} fill='true'></Image>
                </Link>
              </div>
              <div className={styles.recominfo}>
                <Link href={"/"}><span className={styles.recomcat}>category</span></Link>
                <div className={styles.recomtitlecontainer}>
                <Link href="/">
                  <h4 className={`${styles.recomtitle} ${raleway.className}`}> Finding the optimal investment portfolio </h4>
                </Link>
                </div>
                
              </div>
              

              
            </div>
          </div>
        </div>
      </div>
    
    </div>
</>
  )}
