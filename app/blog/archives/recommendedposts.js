import Link from 'next/link'
import styles from './style.module.css'
import Image from 'next/image'
import localfont from 'next/font/local'
import { getCatNames } from '@/utils/Wordpress/getCategoryname'
import testimg from './../../../public/investimg.jpg'

const Satoshi = localfont({
  src: './../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default async function AllRecomPosts ({posts}) {

  const catname = await getCatNames(posts)

  return(
    <div className={styles.recommendedPostsContainer}>
    <h1 className={Satoshi.className}>Recommended</h1>
    <div className={styles.recompostcard}>  
      {posts.slice(0,5).map(({title, slug, categorynames, id}) => (
        <div className={styles.recomposts} key={id}>
          <div className={styles.recomimgwrap}>
            <Link href="/">
              <Image fill={true} sizes="100vw" src={testimg}></Image>
            </Link>
          </div>
          <div>
            <Link href={`/blog/category/${categorynames[0]}`}><span className={Satoshi.className}>{categorynames[0].toUpperCase()}</span></Link>            
            <Link href={`/`}><h1 className={Satoshi.className}>{title.rendered}</h1></Link>
            <span className={Satoshi.className}>1 mins read</span>
          </div>
        </div>
        ))}
       </div> 
    </div>
  )

}