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
    <>
    <div className={styles.recommendedpost}>
      <h2 className={`${styles.sideheading} ${raleway.className}`}>Recommended posts</h2>
      <div className={styles.sidearticle}>
        {recompost.slice(0,4).map(({title, slug, id}) => (
            <div key={id} className={styles.imageandtext}>
            <div className={styles.recomimgwrap}>
              <Link href={`/blog/posts/${slug}`}>
                <Suspense fallback={<>loading</>}>
                  <Image className={styles.recomimg} width={100} height={100} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                </Suspense>
              </Link>
            </div>
            <div className={styles.recominfo}>
              <Suspense fallback={<>loading</>}>
                <div className={styles.recomtitlecontainer}>
                  <Link href={`/blog/posts/${slug}`}>
                    <h4 className={`${styles.recomtitle} ${raleway.className}`}>{title}</h4>
                  </Link>
                </div>
              </Suspense> 
            </div>
          </div>              
        ))}
      </div>
    </div>
    </>
  )

}