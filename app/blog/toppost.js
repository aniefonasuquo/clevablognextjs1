import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './page.module.css'
import slugify from "slugify"
import Link from "next/link"
import { wpm } from "@/utils/wpm/wpm"
import HtmlParser from "react-html-parser"
import { getCatNames } from "@/utils/Wordpress/getCategoryname"
import { getdata } from "@/utils/Wordpress/getposts"

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
        <div>
          <Link href={`/blog/category/${categoryName[0]}`}>
            <button className={styles.category}>{categoryName[0]}</button>
          </Link>
        </div>
          <Link href={`/blog/posts/${post.slug}`}>
            <h1>{post.title.rendered}</h1>
          </Link>
        {HtmlParser(post.excerpt.rendered)}
        <span>{wpm(post.content.rendered)} mins read</span>
      </div>
    </div>
  )
}