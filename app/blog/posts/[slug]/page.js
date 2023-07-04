import Link from "next/link";
import styles from './styles.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import Share from './../../../../utils/share/page'
import { Raleway  } from 'next/font/google'
import img from './../../../../public/investimg.jpg'
import { Suspense } from "react";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})
 
async function getPost() {
  const { posts } = await fetch('https://dummyjson.com/posts', { next: { Cache: 'no-store' } }).then(res => res.json());
  posts.forEach(post => {
    post['slug'] = slugify(post.title)
  });

  return posts;
}
 

export default async function Post({ params }) {

  const posts = await getPost();
  const content = posts.find(post => post.slug == params.slug)

  return (
    <>
    <div className={styles.pagecontainer}>     
      <section className={styles.articlehead}>
        <div className={styles.blogpic}>
          <Image objectFit="cover" fill='true' src={img} sizes="100vw"></Image>
        </div>
        <div className={styles.headright}>
          <Link href={`/blog/category/${content.tags[0]}`}><button className={styles.category}>{content.tags[0]}</button></Link>
          <h1 className={raleway.className}> {content.title}</h1>
          <span>4 mins read</span>
          <div>Share this article <Share title={content.title}></Share></div>
        </div>
      </section>
      <section className={styles.articlebody}>
        {content.body}
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
      </section>
    </div>    
    </> 
  )}
