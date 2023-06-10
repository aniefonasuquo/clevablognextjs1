import styles from './styles.module.css'

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cleva Blog',
  description: 'Cleva Blog',
}
 
export default function ArticleLayout({ children }) {
 return (<>
  <div className={styles.articlebuttom}>
  {children}  
  </div>        
  </>
  )
}

export const getdata =  async () => {

  const Posts = await fetch('https://dummyjson.com/posts', {method: "GET"}).then(res => res.json())
  return Posts;

}