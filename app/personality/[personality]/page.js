import { cookies } from 'next/headers';
import Image from 'next/image';
// import img from './../../../public/archetypes/female/builder.png'

export default async function PersonalityPage ({params}) {
  
  console.log(params)
  const gender = cookies().get('gender').value
  const willigness = cookies().get('willigness').value
  const capacity = cookies().get('capacity').value

  const img = "/public/archetypes/female/builder.png"
  console.log(img)

  return (
    <>
      {params.personality}
      <div style={{position: 'relative', width: '400px', height: '400px'} }>
       {gender && (<div>
        <Image style={{position: 'absolute'}} src={`${img}`} fill='true' sizes='100vw'/>
      </div>)}
      </div>
      
      {willigness}
      {capacity}
    </>
  )
}

