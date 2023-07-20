import Link from "next/link";
import styles from './styles.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import Share from './../../../../utils/share/page'
import { Raleway  } from 'next/font/google'
import img from './../../../../public/investimg.jpg'
import { Suspense } from "react";
import Content from "./content";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})
 
async function getPost() {
  const posts  = await fetch('https://blog.cleva.ng/wp-json/wp/v2/posts', { next: { Cache: 'no-store' } }).then(res => res.json());

  return posts;
}

async function getCatNames (categories) {
  const catnames = []
  for (let cat of categories) {
    cat = await fetch(`https://blog.cleva.ng/wp-json/wp/v2/categories/${cat}`, { next: { Cache: 'no-store' } }).then(res => res.json())

    catnames.push(cat.name)    
  }
  
  return catnames
} 


export default async function Post({ params }) {

  const posts = await getPost();
  const post = await posts.find(post => post.slug == params.slug)
  const categories = await getCatNames(post.categories) 
  const date = post.date;

  return (
    <>
    <div className={styles.pagecontainer}>     
      <div className={styles.articlehead}>
        <div className={styles.headpic}>
          <Image fill={true} src={img} sizes='100vw' ></Image>
        </div>
        <div className={styles.headright}>

          <Link href={`/blog/category/${categories[0]}`}><button className={styles.category}>{categories[0]}</button></Link>
          <h1 className={raleway.className}> {post.title.rendered}</h1>
          <p>Publushed Date: {date}</p>
          <span>4 mins read</span>
          <div>Share this article <Share size='20px' color='rgb(17, 30, 72)' title={''}></Share></div>
        </div>
      </div>
      <div className={styles.articlebody}>
        <Content article={post.content.rendered}></Content>
      </div>
      <div className={styles.blogcta}>
          <p>Join Cleva</p>
          <form>

            <input placeholder="Email address..." type="text"></input>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      <section className={styles.related}>
          <h1>Related Reads</h1>
          <div>
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Suspense fallback={<>loading</>}>
                  <Link href="/">
                    <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                  </Link>
                </Suspense>
              </div>
              <div>
                <Suspense>
                  <Link href={`/`}><button className={styles.category}>Category</button></Link>            
                </Suspense>
                <Suspense fallback={<>loading</>}>
                  <Link href={`/`}><p>Making Long Term Returns</p></Link>
                </Suspense>
                <span>1 mins read</span>
              </div>
            </div>          
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Suspense fallback={<>loading</>}>
                  <Link href="/">
                    <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                  </Link>
                </Suspense>
              </div>
              <div>
                <Suspense>
                  <Link href={`/`}><button className={styles.category}>Category</button></Link>            
                </Suspense>
                <Suspense fallback={<>loading</>}>
                  <Link href={`/`}><p>Making Long Term Returns</p></Link>
                </Suspense>
                <span>1 mins read</span>
              </div>
            </div>
            <div className={styles.relatedframe}>
              <div className={styles.imgwrap}>
                <Suspense fallback={<>loading</>}>
                  <Link href="/">
                    <Image fill={true} sizes="100vw" src={"/../public/investimg.jpg"}></Image>
                  </Link>
                </Suspense>
              </div>
              <div>
                <Suspense>
                  <Link href={`/`}><button className={styles.category}>Category</button></Link>            
                </Suspense>
                <Suspense fallback={<>loading</>}>
                  <Link href={`/`}><p>Making Long Term Returns</p></Link>
                </Suspense>
                <span>1 mins read</span>
              </div>
            </div>
          </div>
        </section>
    </div>    
    </> 
  )}
