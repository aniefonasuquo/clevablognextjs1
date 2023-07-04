
import Link from "next/link";
import Image from 'next/image'
import styles from './style.module.css'
import { Raleway  } from 'next/font/google'
import { Suspense } from "react";
import slugify from "slugify";
import Allposts from "./allposts";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export const getdata =  async () => {

  let Posts = await fetch('https://dummyjson.com/posts').then(res => res.json())

  const {posts} = Posts
  posts.forEach(post => {{post['slug'] = slugify(post.title)}})
  
  return posts
}

export default async function Archives() {
  
  const posts = await getdata();

  return (

  <div className={styles.pagecontainer}>
    <div className={styles.wrapper}>
      <div className={styles.recommendedPosts}>
        <h1 className={`${styles.sideheading}`}>Recommended</h1>
        <div className={styles.recomArticleframe}>
          <div className={styles.imgwrap}>
            <Suspense fallback={<>loading</>}>
              <Link href="/">
                <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
              </Link>
            </Suspense>
          </div>
          <div>
            <Suspense>
              <Link href={`/`}><button className={styles.category}>Category</button></Link>            
            </Suspense>
            <Suspense fallback={<>loading</>}>
              <Link href={`/`}><p>Making Long Term Returns</p></Link>
            </Suspense>
            <span>1 mins read</span>
          </div>
        </div>
      </div>
      <div>
      <h1>All Posts</h1>
        <Allposts posts={posts}></Allposts>
      </div>
    </div>
  </div>
  )}
