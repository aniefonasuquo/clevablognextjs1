'use client'

import {useEffect, useState } from "react"
import styles from './style.module.css'
import Link from "next/link"
import { Suspense } from "react"
import Image from "next/image"
import { wpm } from "@/utils/wpm/wpm"
import localfont from 'next/font/local'
import testimg from './../../../public/investimg.jpg'

const Satoshi = localfont({
  src: './../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})


export default function Allposts ({ posts }) {
  
  const [limit, setLimit] = useState(9)

  function loadMorePosts (e) {
    e.preventDefault()

    setLimit(prev => prev + 9)
  }

  return (
    <div className={styles.allpostcontainer}>
      <h1 className={Satoshi.className}>All Posts</h1>
      <div className={styles.allpost}>  
        {posts.slice(0,limit).map(({title, categorynames, content, slug, id}) => (
          <div key={id} className={styles.articleframe}>
            <div className={styles.imgwrap}>
              <Link href={`/blog/posts/${slug}`}> 
                <Image sizes="100vw" src={testimg} fill={true}/> 
              </Link>
            </div>
            <div>
              <Link href={`/blog/category/${categorynames[0]}`}><span className={Satoshi.className}>{categorynames[0].toUpperCase()}</span></Link>            
                <Link href={`/blog/posts/${slug}`}><h1 className={Satoshi.className}>{title.rendered}</h1></Link>
              <span className={Satoshi.className}>{wpm(content.rendered)} mins read</span>
            </div>
          </div>
        ))}
    </div>   
    <button onClick={loadMorePosts}>More Posts</button>     
    </div>
  )
}