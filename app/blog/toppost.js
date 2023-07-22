import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './page.module.css'
import slugify from "slugify"
import Link from "next/link"
import { wpm } from "@/utils/wpm/wpm"
import { getCatNames } from "@/utils/Wordpress/getCategoryname"
import { getdata } from "@/utils/Wordpress/getposts"
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default async function TopPost () {
  
  const data = await getdata();
  const post = data[0]
  const categoryName = await getCatNames(post.categories)


  return (
    <div className={styles.topDiv}>
      <div className={styles.imageDiv}>
        <Link href={`/blog/posts/${post.slug}`}>
          <Image src={img} sizes='100vw' fill='true' priority></Image>
        </Link>
      </div>
      <div className={styles.topdeets}>
          <Link href={`/blog/category/${categoryName[0]}`}>
            <span id='category' className={Satoshi.className}>{categoryName[0].toUpperCase()}</span>
          </Link>
          <Link href={`/blog/posts/${post.slug}`}>
            <h1 className={Satoshi.className}>{post.title.rendered}</h1>
          </Link>
          <div className={Satoshi.className} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
        <span className={Satoshi.className}>{wpm(post.content.rendered)} mins read</span>
      </div>
    </div>
  )
}