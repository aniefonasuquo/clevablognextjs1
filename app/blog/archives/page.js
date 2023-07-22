
import Link from "next/link";
import Image from 'next/image'
import styles from './style.module.css'
import { Suspense } from "react";
import slugify from "slugify";
import Allposts from "./allposts";
import AllRecomPosts from "./recommendedposts";
import { getAllPosts } from "@/utils/Wordpress/getallposts";

  export default async function Archives() {

  const posts = await getAllPosts();
  return (

  <div className={styles.pagecontainer}>
    <div className={styles.wrapper}>
      <div>
        <AllRecomPosts posts={posts}></AllRecomPosts>
      </div>
      <div>
        <Allposts posts={posts}></Allposts>
      </div>
    </div>
  </div>
  )}
