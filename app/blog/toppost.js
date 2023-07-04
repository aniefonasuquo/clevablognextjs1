import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './page.module.css'
import slugify from "slugify"
import Link from "next/link"
import { wpm } from "@/utils/wpm/wpm"

export const getdata =  async () => {
  let Posts = await fetch('https://dummyjson.com/posts').then(res => res.json())

  const  { posts } = Posts
  posts.forEach(post => {
    {post['slug'] = slugify(post.title)}
  });
  
  return posts[1]
}

export default async function TopPost () {
  
  const post = await getdata();

  return (
    <div className={styles.topDiv}>
      <div className={styles.imageDiv}>
        <Link href={`/blog/posts/${post.slug}`}>
          <Image src={img} sizes='100vw' fill='true' priority></Image>
        </Link>
      </div>
      <div>
        <div>
          <Link href={`/blog/category/${post.tags[0]}`}>
            <button className={styles.category}>{post.tags[0]}</button>
          </Link>
        </div>
          <Link href={`/blog/posts/${post.slug}`}>
            <h1>{post.title}</h1>
          </Link>
        <p>Post snippet</p>
        <span>{wpm(post.body)} mins read</span>
      </div>
    </div>
  )
}