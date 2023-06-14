import Link from "next/link";
import styles from './page.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import { Varela   } from 'next/font/google'
import img from './../public/investimg.jpg'

const monteserrat = Varela ({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default async function Homepage() {

  const {posts} = await getdata();

  posts.forEach(post => {
    {post['slug'] = slugify(post.title)}
  });

  return (<div className={`${styles.pagecontainer}`}>
  <section className={styles.topDiv}>  
    <div className={styles.topleft}>
      <div className={styles.featuredimagewrapper}>
        <Link href="/">
          <Image className="featuredimage" fill="true" sizes="100vw" src={img} alt="featuredblog"/>
        </Link>
      </div>
      <div className={styles.featuredarticle}>
        <Link href="/">
          <span className={`${styles.featuredcategory}`}>Category</span>
         </Link>
        <Link href="/">
          <h2 className={`${styles.featuredtitle} ${monteserrat.className}`}> Improving Your Investment Return Through Diversifiation </h2>
        </Link>
      </div>
    </div>
    
    <div className={styles.topright}> 
      <div><h1 className={`${monteserrat.className} ${styles.recentPost}` }>Recent Posts</h1></div>
      <div className={styles.recentpostswrapper}>
          {posts.slice(0,4).map(({id, title, tags, slug}) => (
          <div className={styles.rArticle} key={id}>
            <div className={styles.rArticleImg}>
              <Image fill='true' sizes="100vw" src={img} alt=""/>
            </div>
            <div className={styles.rArticleDetails}>           
              <Link href={`/category/${tags[0]}`}><span>{tags[0]}</span></Link>
              <Link href={`/posts/${slug}`}><h2 className={monteserrat.className}>{title}</h2></Link>
            </div>
          </div>
          ))}
      </div>
    </div>
  </section>

  <section className={styles.blotterwrapper}>
    <div className={`${styles.leftsection} ${monteserrat.className}`}>
      <h1 className={`${styles.categoryheading} ${monteserrat.className}`}>From Investing</h1>
      <p className={`${styles.categorydesc}`}>  
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero soluta magni facilis, cupiditate recusandae ut eius temporibus quibusdam inventore beatae debitis esse maiores, sequi perspiciatis ullam sunt architecto! Iusto.
      </p>
      <div>
      <Link href="/"><div className={styles.button}>Read more</div></Link>
      </div> 
    </div>
    <div className={styles.blotterPostWrapper}>
      {posts.slice(0,3).map(({id, tags, title, slug}) => (
        <div className={styles.blotterPost} key={id}>
          <div className={styles.blotterPostImg}>
            <Link href={`/posts/${slug}`}><Image sizes="100vw" className={styles.catimage} fill='true' src={img} alt=""/> </Link>
          </div>
          <div>
            <Link className={`${monteserrat.className}`} href={`/category/${tags[0]}`}><span className={styles.blottercategory}>{tags[0]}</span></Link>     
            <Link href={`/posts/${slug}`}> <h2 className={`${monteserrat.className} ${styles.blottertitle}`}>{title}</h2></Link>
          </div>
        </div>
      ))}
    </div>
  </section>

  </div> )}

export const getdata =  async () => {

  let Posts = await fetch('https://dummyjson.com/posts', { next: { Cache: 'no-store' } }).then(res => res.json())

  return Posts
}
