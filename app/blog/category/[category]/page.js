import Link from "next/link";
import Image from 'next/image'
import styles from './styles.module.css'
import { Raleway  } from 'next/font/google'
import { Suspense } from "react";
import Posts from "./posts";
import slugify from "slugify";
import RecomPosts from "./recomposts";
import { getAllPosts } from "@/utils/Wordpress/getallposts";
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default async function CategoryArchive({ params }) {
  const posts = await getAllPosts()
  const catPosts = posts.filter(post => post.categorynames[0] == params.category)
  
  return (
  <div className={styles.pagecontainer}>
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <h1 className={Satoshi.className}>{params.category}</h1>
        <span className={Satoshi.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <RecomPosts posts={catPosts}></RecomPosts>
      </div> 
      <Posts posts={catPosts}></Posts>
    </div>
  </div>
  )}
