import Link from "next/link";
import styles from './styles.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import SocialSharing from './../../../utils/share/page'
import { Raleway  } from 'next/font/google'

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
          <Image objectFit="cover" fill='true' src='https://placehold.co/600x400'></Image>
        </div>
          <div className={styles.headright}>
            <div className={styles.textmiddle}>
              <Link href={`/category/${content.tags[0]}`}><span>{content.tags[0]}</span></Link>
              <h1 className={raleway.className}> {content.title}</h1>
              <h4>By {'Author Name'}</h4>
              <h4>{'Published Date'}</h4>
              <p>4 mins read</p>
            </div>
            <SocialSharing></SocialSharing>
          </div>
      </section>

      
      <section className={styles.articlebody}>

        {content.body}
      </section>
  </div>
    
      
  </> )}
