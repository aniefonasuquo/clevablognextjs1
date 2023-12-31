import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './page.module.css'
import Link from "next/link"
import slugify from "slugify"
import { wpm } from "@/utils/wpm/wpm"
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


export const getdata =  async () => {
  let Posts = await fetch('https://dummyjson.com/posts').then(res => res.json())

  const  { posts } = Posts
  posts.forEach(post => {
    {post['slug'] = slugify(post.title)}
  });
  
  return posts.slice(1,4)
}

export default async function RecentPost () {

  const post = await getdata();

  return (
    <div className={styles.recentPosts}>
    {post.map(({title, tags, id, slug, body}) => (
      <div className={styles.recentPostCard} key={id}>
        <div className={styles.imageDiv}>
          <Link href={`/blog/posts/${slug}`}>
            <Image src={img} sizes='100vw' fill='true' priority></Image>
          </Link>
        </div>
        <div>
          <Link href={`/blog/category/${tags[0]}`}>
            <span className={Satoshi.className}>{tags[0].toUpperCase()}</span>
          </Link>
          <Link href={`blog/post/${slug}`}>
            <h1 className={Satoshi.className}>{title}</h1>
          </Link>
          <span className={Satoshi.className}>{wpm(body)} mins read</span>
        </div>
      </div>
    ))}
    </div>
  )
}