'use client'

import {useEffect, useState } from "react"
import styles from './styles.module.css'
import Link from "next/link"
import { Suspense } from "react"
import { Raleway  } from 'next/font/google'
import Image from "next/image"
import { wpm } from "@/utils/wpm/wpm"
import testimg from './../../../../public/investimg.jpg'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default function RecomPosts ({ posts }) {

  return (
    <div className={styles.recommendedPostsContainer}>
      <h1>Recommended</h1>
      <div className={styles.recompostcard}>
        {posts.slice(0,5).map(({title, slug, id, content}) => (
          <div key={id} className={styles.recomposts}>
            <div className={styles.recomimgwrap}>
              <Link href={`/blog/posts/${slug}`}>
                <Image sizes="100vw" fill={true} src={testimg}></Image>
              </Link>
            </div>
            <div>
              <Link href={`/blog/posts/${slug}`}><h1 className={Satoshi.className}>{title.rendered}</h1></Link>
              <span className={Satoshi.className}>{wpm(content.rendered)} mins read</span>
            </div>
          </div>              
        ))}
      </div>
    </div>
  )

}