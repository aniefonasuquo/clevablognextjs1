import styles from './styles.module.css'
import Image from 'next/image'
import { Varela   } from 'next/font/google'
import Link from 'next/link'
import img from './../../public/investimg.jpg'
import RecentPost from './recentpostscard'
import TopPost from './toppost'
import CategoryBlotter from './categoryblotter'


const varela = Varela ({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default function Investorquiz() {
  
  return (
    <div className={styles.pagecontainer}>
      <div>
        <TopPost></TopPost>
      </div>
      <div className={styles.recentPosts}>
        <div>
          <RecentPost></RecentPost>
        </div>
        <div>
          <Link href={'/blog/archives'}>
            <button>More Posts</button>
          </Link>
        </div>
      </div>
      <div className={styles.categoryBlotters}>
        <CategoryBlotter category='french'></CategoryBlotter>
        <CategoryBlotter category='history'></CategoryBlotter>
      </div>
    </div>
  )
}

