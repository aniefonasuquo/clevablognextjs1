'use client'

import {useEffect, useState } from "react"
import styles from './style.module.css'
import Link from "next/link"
import { Suspense } from "react"
import { Raleway  } from 'next/font/google'
import Image from "next/image"
import { wpm } from "@/utils/wpm/wpm"


const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default function Allposts ({ posts }) {
  
  const [limit, setLimit] = useState(9)

  function loadMorePosts (e) {
    e.preventDefault()

    setLimit(prev => prev + 9)
  }

  return (
    <div>
    <div className={styles.categorypost}>  
        {posts.slice(0,limit).map(({title, content, slug, userID}) => (
          <div key={userID} className={styles.articleframe}>
            <div className={styles.imgwrap}>
              <Suspense fallback={<>loading</>}>
                <Link href={`/blog/posts/${slug}`}> 
                  <Image sizes="100vw" src={"/../public/investimg.jpg"} fill={true}/> 
                </Link>
              </Suspense>
            </div>
            <div>  
              <Suspense>
                <Link href={`/blog/category/${slug}`}><button className={styles.category}>Category</button></Link>            
              </Suspense>
              <Suspense fallback={<>loading</>}>
                <Link href={`/blog/posts/${slug}`}><p>{title.rendered}</p></Link>
              </Suspense>
              <span>{wpm(content.rendered)} mins read</span>
            </div>
          </div>
        ))}
    </div>
    <div className={styles.button}>
      <button onClick={loadMorePosts}>More Posts</button>  
    </div>
    </div>
  )
}