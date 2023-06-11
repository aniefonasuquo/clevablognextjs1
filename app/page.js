import Link from "next/link";
import styles from './page.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import { Raleway  } from 'next/font/google'

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap' 
})

export default async function Homepage() {

  const {posts} = await getdata();

  posts.forEach(post => {
    {post['slug'] = slugify(post.title)}
  });

  return (<>

  <div className={styles.pagecontainter}>

  <section className={styles.topDiv}>
    
    <div className={styles.topleft}>
      <div className={styles.featuredimagewrapper}>
      <Link href="/">
        <Image className="featuredimage" layout="fill" objectFit="contain"  src="https://placehold.co/600x400" alt="featuredblog"/>
      </Link>

      <div className={styles.featuredarticle}>
        <Link href="/">
          <span className={`${styles.featuredcategory}`}>Category</span>
         </Link>
        <Link href="/">
          <h4 className={`${styles.featuredtitle} ${raleway.className}`}> Improving Your Investment Return Through Diversifiation </h4>
        </Link>
      </div>

      </div>

    </div>
    
    <div className={styles.topright}> 
      <h1 className={`${styles.recentposts} ${raleway.className}`}> Recent Posts </h1>
      <div className={styles.recentpostswrapper}>
           {posts.slice(0,4).map(({id, title, tags, slug}) => (
             <div className={styles.rArticle} key={id}>
              <div className={styles.rArticleImg}>
                <Image fill='true' objectFit="cover" src="https://placehold.co/600x400" alt=""/>
              </div>
              <div className={styles.rArticleDetails}>           
                <Link href={`/category/${tags[0]}`}><span className={styles.rArticleCategory}> {tags[0]} </span> </Link>
                <Link href={`/posts/${slug}`}> 
                <p className={`${styles.rArticleTitle} ${raleway.className}`}> {title} </p> </Link>
              </div>
           </div>
         )
      
         )}
      </div>
    </div>
  </section>

  <section className={styles.blotterwrapper}>
        <div className={`${styles.leftsection} ${raleway.className}`}>

          <h1 className={`${styles.categoryheading} ${raleway.className}`}>From Investing</h1>
          <p className={`${styles.categorydesc}`}>  
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero soluta magni facilis, cupiditate recusandae ut eius temporibus quibusdam inventore beatae debitis esse maiores, sequi perspiciatis ullam sunt architecto! Iusto.
          </p>
          <div>
          <Link href="/"><span className={styles.button}>Read more</span></Link>
          </div>
          

        </div>

        <div className={styles.blotterPostWrapper}>
            {posts.slice(0,3).map(({id, tags, title, slug}) => (
              <div className={styles.blotterPost} key={id}>
                <div className={styles.blotterPostImg}>
                  <Link href={`/posts/${slug}`}><Image className={styles.catimage} fill='true' src="https://placehold.co/600x400" alt=""/> </Link>
                </div>
                <div>
                  <Link className={`${raleway.className}`} href={`/category/${tags[0]}`}><p className={styles.blottercategory}>{tags[0]}</p></Link>     
                  <Link href={`/posts/${slug}`}> <p className={`${raleway.className} ${styles.blottertitle}`}>{title}</p></Link>
                </div>
              </div>
            ))}
        </div>
          {/* <div>
            <Link href="/"> <span className={`${raleway.className}`}>View all</span> </Link>
          </div> */}
            
        {/* </div> */}

  </section>
  </div>

  </> )}

export const getdata =  async () => {

  let Posts = await fetch('https://dummyjson.com/posts', { next: { Cache: 'no-store' } }).then(res => res.json())

  return Posts
}
