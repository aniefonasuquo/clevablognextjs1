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

   
  <section className={styles.topDiv}>
    
    <div className={styles.topleft}>
      <div className={styles.featuredimagewrapper}>
      <Link href="/">
        <Image className="featuredimage" layout="fill" objectFit="contain"  src="/../public/img1.jpg" alt="featuredblog"/>
      </Link>
      </div>
      <div className={styles.featuredarticle}>
        <Link href="/">
          <span className={`${raleway.className} ${styles.featuredcategory}`}>Category</span>
         </Link>
        <Link href="/">
          <h4 className={`${styles.featuredtitle} ${raleway.className}`}> Improving Your Investment Return Through Diversifiation </h4>
        </Link>
      </div>
    </div>
    
    <div className={styles.topright}> 
      <h1 className={`${styles.recentposts} ${raleway.className}`}> Recent Posts </h1>
      <div className={styles.recentpostswrapper}>
           {posts.slice(0,4).map(({id, title, tags, slug}) => (
           <div className={styles.article} key={id}>
             <div className={styles.postThumbnail}>
               <Image className={styles.recentpostimg} fill='true' objectFit="contain" src="/../public/img1.jpg" alt=""/>
             </div>
             <div className={`${styles.postdetails}` }>           
               <Link href={`/category/${tags[0]}`}><span className={styles.category}> {tags[0]} </span> </Link>
               <Link href={`/posts/${slug}`}> 
               <p className={`${styles.blogtitle} ${raleway.className}`}> {title} </p> </Link>
             </div>
           </div>
         )
      
         )}
      </div>
    </div>
  </section>

  <section className={styles.categoryblotter}>
    <div className={styles.blotterwrapper}>
        <div className={`${styles.leftsection} ${raleway.className}`}>

          <h1 className={`${styles.categoryheading} ${raleway.className}`}>From Investing</h1>
          <p className={`${styles.categorydesc}`}>  
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero soluta magni facilis, cupiditate recusandae ut eius temporibus quibusdam inventore beatae debitis esse maiores, sequi perspiciatis ullam sunt architecto! Iusto.
          </p>
          <Link href="/"><span className={`${raleway.className} ${styles.button}` }>Read more</span> </Link>

        </div>

        <div className={styles.rightsection}>

          <div className={styles.rightblock}>
            {posts.slice(0,3).map(({id, tags, title, slug}) => (
              <div className={styles.catposts} key={id}>
              <div className={styles.catimgwrapper}>
                <Link href={`/posts/${slug}`}><Image className={styles.catimage} fill='true' src="/../public/img1.jpg" alt=""/> </Link>
              </div>
              <Link className={`${raleway.className}`} href={`/category/${tags[0]}`}><span className={styles.blottercategory}>{tags[0]}</span></Link>     
              <Link href={`/posts/${slug}`}> <p className={`${raleway.className} ${styles.blottertitle}`}>{title}</p></Link>
            </div>
            ))}
          </div>
          <div>
            <Link href="/"> <span className={`${raleway.className}`}>View all</span> </Link>
          </div>
            
        </div>
    </div>

  </section>

  </> )}

export const getdata =  async () => {

  let Posts = await fetch('https://dummyjson.com/posts', { next: { Cache: 'no-store' } }).then(res => res.json())

  return Posts
}
