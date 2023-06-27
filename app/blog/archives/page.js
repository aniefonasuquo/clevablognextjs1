
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
    <div>
      <h1>All Posts</h1>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.rightsection}>
        <div className={styles.recommendedpost}>
          <h2 className={`${styles.sideheading} ${raleway.className}`}>Recommended posts</h2>
          <div className={styles.sidearticle}> 
            <div className={styles.imageandtext} >
              <div className={styles.recomimgwrap}>
                <Link href="/">
                  <Suspense fallback={<>loading</>}>
                    <Image className={styles.recomimg} width={100} height={100} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                  </Suspense>
                </Link>
              </div>
              <div className={styles.recominfo}>
                <Link href={"/"}><span className={styles.recomcat}>category</span></Link>
                <Suspense fallback={<>loading</>}>
                  <div className={styles.recomtitlecontainer}>
                    <Link href="/">
                      <h4 className={`${styles.recomtitle} ${raleway.className}`}> Finding the optimal investment portfolio </h4>
                    </Link>
                  </div>
                </Suspense> 
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div >
        <Allposts posts={posts}></Allposts>
      </div>

    </div>
  </div>
  )}
