import styles from './page.module.css'
import { Varela   } from 'next/font/google'
import Link from 'next/link'
import RecentPost from './recentpostscard'
import TopPost from './toppost'
import CategoryBlotter from './categoryblotter'


const varela = Varela ({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default function BlogHome() {
  
  return (
    <div className={styles.pagecontainer}>
      <div className={styles.top}>
        <TopPost></TopPost>
      </div>
      <div className={styles.recent}>
        <RecentPost></RecentPost>
        <div className={styles.recentButton}>
          <Link href={'/blog/archives'}>
            <button>More Posts</button>
          </Link>
        </div>
      </div>
      <CategoryBlotter category='french'></CategoryBlotter>
      <CategoryBlotter category='history'></CategoryBlotter>

    </div>
  )
}

