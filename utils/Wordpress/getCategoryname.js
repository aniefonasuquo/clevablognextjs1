export async function getCatNames (categories) {
  const catnames = []
  for (let cat of categories) {
    cat = await fetch(`https://blog.cleva.ng/wp-json/wp/v2/categories/${cat}`, { next: { Cache: 'no-store' } }).then(res => res.json())

    catnames.push(cat.name)    
  }
  
  return catnames
} 