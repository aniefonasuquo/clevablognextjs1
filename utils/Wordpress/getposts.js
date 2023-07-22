export const getdata =  async () => {
  
  let Posts = await fetch('https://blog.cleva.ng/wp-json/wp/v2/posts').then(res => res.json())  
  
  return Posts
}
