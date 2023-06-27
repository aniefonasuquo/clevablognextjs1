import Link from "next/link";
import styles from './styles.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import Share from './../../../../utils/share/page'
import { Raleway  } from 'next/font/google'
import img from './../../../../public/investimg.jpg'


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


  return (<>
  <div className={styles.pagecontainer}> 
      
      <section className={styles.articlehead}>
        <div className={styles.blogpic}>
          <Image objectFit="cover" fill='true' src={img} sizes="100vw"></Image>
        </div>
          <div className={styles.headright}>
            {/* <div className={styles.textmiddle}> */}
              <span><Link href={`/blog/category/${content.tags[0]}`}>{content.tags[0]}</Link></span>
              <h1 className={raleway.className}> {content.title}</h1>
              <p>By {'Author Name'}</p>
              <p>{'Published Date'}</p>
              <p>4 mins read</p>
            {/* </div> */}
            <Share></Share>
          </div>
      </section>

      
      <section className={styles.articlebody}>

        {content.body}
      </section>
  </div>
    
      
  </> )}
