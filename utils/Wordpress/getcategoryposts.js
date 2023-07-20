async function getCatID (categoryname) {

  const cat = await fetch(`https://blog.cleva.ng/wp-json/wp/v2/categories`, { next: { Cache: 'no-store' } }).then(res => res.json())
  
  const catiD = cat.find(element => element.name == categoryname)
  
  return catiD
}

export const getCatPosts = async (categoryname) => {
  let Posts = await fetch('https://blog.cleva.ng/wp-json/wp/v2/posts').then(res => res.json())
  
  const catID = await getCatID(categoryname)
  const posts = await Posts.filter(post => post.categories.includes(catID.id))
  return posts
}
