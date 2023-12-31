import Image from "next/image"
import img from './../../public/investimg.jpg'
import styles from './styles.module.css'
import Link from "next/link"
import slugify from "slugify"

export const getdata =  async () => {
  let Posts = await fetch('https://dummyjson.com/posts').then(res => res.json())

  const  { posts } = Posts
  posts.forEach(post => {
    {post['slug'] = slugify(post.title)}
  });
  
  return posts
}


export default async function CategoryBlotter ({ category }) {

  const posts = await getdata();
  const catposts = posts.filter((post) => post.tags.includes(category)).slice(0,3)
  
  return (
    <div className={styles.blotter}>
      <div className={styles.blotterinfo}>
        <h1>{category}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero soluta magni facilis, cupiditate recusandae ut eius temporibus quibusdam inventore beatae debitis esse maiores</p>
        <Link href={`/blog/category/${category}`}>
          <button>Read More</button>
        </Link>
      </div>
      <div className={styles.blottercards}>
        {catposts.map(({title, slug, id}) => (
          <div key={id}>
            <div className={styles.imageDiv}>
              <Link href={`blog/posts/${slug}`}>
                <Image src={img} sizes='100vw' fill='true' priority></Image>
              </Link>
            </div>
            <Link href={`/blog/posts/${slug}`}>
              <h1>{title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}