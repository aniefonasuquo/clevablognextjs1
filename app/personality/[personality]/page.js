
import { cookies } from 'next/headers';

export default async function PersonalityPage () {
  
  const archetype = cookies().get('archetype',)
  // const body = await useRequestBody();
  console.log(archetype)
  
  return (
    <>
      {archetype.value}
    </>
  )
}

