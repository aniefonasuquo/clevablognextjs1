import Link from "next/link";
import Image from 'next/image'
import styles from './styles.module.css'
import { Raleway  } from 'next/font/google'
import { Suspense } from "react";
import Posts from "./posts";
import slugify from "slugify";
import RecomPosts from "./recomposts";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export const getallpost =  async (category) => {
  let Posts = await fetch('https://dummyjson.com/posts').then(res => res.json())

  const {posts} = Posts
  posts.forEach(post => {{post['slug'] = slugify(post.title)}})
  const filteredPost = posts.filter(post => post.tags.includes(category))
  
  return filteredPost
}

export default async function Postpage({ params }) {

  const posts = await getallpost(params.category);

  return (
  <>
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
          <div>
            <h1>{params.category}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <RecomPosts posts={posts}></RecomPosts>
      </div> 
      <Posts posts={posts}></Posts>
    </div>
  </>
  )}
