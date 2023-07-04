'use client'

import {useEffect, useState } from "react"
import styles from './styles.module.css'
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


export default function RecomPosts ({ posts }) {

  const recompost = posts

  return (
    <div className={styles.recommendedPost}>
      <h1>Recommended</h1>
      <div>
        {recompost.slice(0,4).map(({title, slug, id}) => (
          <div key={id} className={styles.recomArticleframe}>
            <div className={styles.recomimgwrap}>
              <Suspense fallback={<>loading</>}>
                <Link href={`/blog/posts/${slug}`}>
                  <Image sizes="100vw" fill={true} src={"/../public/investimg.jpg"}></Image>
                </Link>
              </Suspense>
            </div>
            <div>
              <Suspense fallback={<>loading</>}>
                <Link href={`/blog/posts/${slug}`}><p>{title}</p></Link>
              </Suspense>
              <span>1 mins read</span>
            </div>
          </div>              
        ))}
      </div>
    </div>
  )

}