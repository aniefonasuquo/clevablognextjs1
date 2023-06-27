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
            <Link href={`/blog/posts/${slug}`}> 
              <Suspense fallback={<>loading</>}>
                <Image sizes="100vw" src={"/../public/investimg.jpg"} width={100} height={100}/> 
              </Suspense>
            </Link>
          </div>
          <Suspense>
            <Link href={`/blog/category/${tags[0]}`}><h3 className={raleway.className}>{tags[0]}</h3></Link>            
          </Suspense>
          <Suspense fallback={<>loading</>}>
            <Link href={`/blog/posts/${slug}`}><h3 className={raleway.className}>{title}</h3></Link>
          </Suspense>
        </div>
        ))}
    </div>
    <div  className={styles.button}>

    <button onClick={loadMorePosts}>More Posts</button>  
    </div>
    </div>
  )
}