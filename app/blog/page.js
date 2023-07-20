import styles from './page.module.css'
import { Varela   } from 'next/font/google'
import Link from 'next/link'
import RecentPost from './recentpostscard'
import TopPost from './toppost'
import CategoryBlotter from './categoryblotter'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


export default async function BlogHome() {
  
  return (
    <div className={styles.pagecontainer}>
      <div className={styles.top}>
        <TopPost></TopPost>
      </div>
      <div className={styles.recent}>
        <RecentPost></RecentPost>
        <div className={styles.recentButton}>
          <Link href={'/blog/archives'}>
            <button className={Satoshi.className}>More Posts</button>
          </Link>
        </div>
      </div>
      <div>
        <CategoryBlotter category='Investing'></CategoryBlotter>
      </div>
      <div>
        {/* <CategoryBlotter category='Investment'></CategoryBlotter> */}
      </div>

    </div>
  )
}

