const getAllApiPosts =  async () => {
  let Posts = await fetch('https://blog.cleva.ng/wp-json/wp/v2/posts').then(res => res.json())

  return Posts
}

async function getAllApiCategories (id) {

  return await fetch(`https://blog.cleva.ng/wp-json/wp/v2/categories/${id}`, { next: { Cache: 'no-store' } }).then(res => res.json())

}

export const getAllPosts = async () => {

  
  const posts = await getAllApiPosts() //array of all posts
  const newpost = []
  for (let post of posts) { // one post
    const categories = post.categories // post cat array
    const catnames = []
    for (let id of categories) {

      const catobj = await getAllApiCategories(id)
      const catname = catobj.name
      catnames.push(catname)
    }
    
    post['categorynames'] = catnames
    newpost.push(post)
  }

  return newpost
}


