import Link from "next/link";
import styles from './styles.module.css'
import Image from 'next/image'
import Share from './../../../../utils/share/page'
import img from './../../../../public/investimg.jpg'
import Content from "./content";
import { getAllPosts } from "@/utils/Wordpress/getallposts";
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../../../../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default async function Post({ params }) {

  const post = (await getAllPosts()).find(post => post.slug == params.slug)

  return (
    <div className={styles.pagecontainer}>     
      <div className={styles.articlehead}>
        <div className={styles.headpic}>
          <Image fill={true} src={img} sizes='100vw' ></Image>
        </div>
        <div className={styles.headright}>
          <Link href={`/blog/category/${post.categorynames[0]}`}><span className={Satoshi.className}>{post.categorynames[0].toUpperCase()}</span></Link>
          <h1 className={Satoshi.className}>{post.title.rendered}</h1>
          <span className={Satoshi.className}>Publushed Date: {post.date}</span>
          <span className={Satoshi.className}>4 mins read</span>
          <div><span className={Satoshi.className}>Share this article</span><Share size='20px' color='rgb(17, 30, 72)' title={''}></Share></div>
        </div>
      </div>
      <div className={styles.articlebody}>
        <Content article={post.content.rendered}></Content>
      </div>
      <div className={styles.blogcta}>
          <div>
            <h1 className={Satoshi.className}>Take complete control of your wealth.</h1>
            <span className={Satoshi.className}>Cleva helps individual make the right wealth decisions by providing the required information and advise on global opportunities that match your unique investing goals and status.</span>
          </div>
          <form>
            <input  className={Satoshi.className} placeholder="Email address..." type="text"/>
            <button type="submit"><span className={Satoshi.className}>Sign Up</span><svg fill="rgb(2,4,37)" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
c49.899,49.92,115.456,74.859,181.013,74.859s131.115-24.939,181.013-74.859C536.709,337.095,536.709,174.663,436.891,74.866z
			 M341.211,319.879c-11.797,0-21.333-9.557-21.333-21.333v-76.501l-134.251,134.25c-4.16,4.16-9.621,6.251-15.083,6.251
			c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l134.251-134.251h-76.501
			c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h128c2.773,0,5.547,0.576,8.149,1.643
			c5.227,2.155,9.387,6.315,11.541,11.541c1.088,2.603,1.643,5.376,1.643,8.149v128h0
			C362.544,310.322,353.008,319.879,341.211,319.879z"/></g></g></svg></button>
          </form>
        </div>
      <section className={styles.related}>
          <h1 className={Satoshi.className}>Related Reads</h1>
          <div>
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Link href="/">
                  <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                </Link>
              </div>
              <div>
                <Link href={`/`}><span className={Satoshi.className}>Category</span></Link>            
                <Link href={`/`}><h1 className={Satoshi.className}>Making Long Term Returns</h1></Link>
                <span className={Satoshi.className}>1 mins read</span>
              </div>
            </div>          
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Link href="/">
                  <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                </Link>
              </div>
              <div>
                <Link href={`/`}><span className={Satoshi.className}>Category</span></Link>            
                <Link href={`/`}><h1 className={Satoshi.className}>Making Long Term Returns</h1></Link>
                <span className={Satoshi.className}>1 mins read</span>
              </div>
            </div>          
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Link href="/">
                  <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                </Link>
              </div>
              <div>
                <Link href={`/`}><span className={Satoshi.className}>Category</span></Link>            
                <Link href={`/`}><h1 className={Satoshi.className}>Making Long Term Returns</h1></Link>
                <span className={Satoshi.className}>1 mins read</span>
              </div>
            </div>          
          </div>
        </section>
    </div>    
  )}
