import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './page.module.css'
import Link from "next/link"
import slugify from "slugify"
import { wpm } from "@/utils/wpm/wpm"
import { getCatPosts } from "@/utils/Wordpress/getcategoryposts"
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})



export default async function CategoryBlotter ({category}) {
  const data = await getCatPosts(category)
  const posts = data.slice(0,3)
  
  return (
    <div className={styles.blotter}>
      <div className={styles.blotterinfo}>
        <h1 className={Satoshi.className}>{category}</h1>
        <p className={Satoshi.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero soluta magni facilis, cupiditate recusandae ut eius temporibus quibusdam inventore beatae debitis esse maiores</p>
        <Link href={`/blog/category/${category}`}>
          <button className={Satoshi.className}>Read More</button>
        </Link>
      </div>
      <div className={styles.blotterPosts}>     
        {posts.map(({title, slug, id, content}) => (
          <div className={styles.blotterCard} >
            <div className={styles.imageDiv}>
              <Link href={`blog/posts/${slug}`}>
                <Image src={img} sizes='100vw' fill='true' priority></Image>
              </Link>
            </div>
            <div>
              <Link href={`/blog/posts/${slug}`}>
                <h1>{title.rendered}</h1>
              </Link>
              <span className={Satoshi.className}>{wpm(content.rendered)} mins read</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}