'use client'

import {useEffect, useState } from "react"
import styles from './style.module.css'
import Link from "next/link"
import { Suspense } from "react"
import { Raleway  } from 'next/font/google'
import Image from "next/image"

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
        {posts.slice(0,limit).map(({title, tags, slug, userID}) => (
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
                <Link href={`/blog/category/${tags[0]}`}><button className={styles.category}>{tags[0]}</button></Link>            
              </Suspense>
              <Suspense fallback={<>loading</>}>
                <Link href={`/blog/posts/${slug}`}><p>{title}</p></Link>
              </Suspense>
              <span>1 mins read</span>
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