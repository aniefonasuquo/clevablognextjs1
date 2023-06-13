
import { cookies } from 'next/headers';

export default async function PersonalityPage ({params}) {
  
  console.log(params)

  return (
    <>
      {params.personality}
    </>
  )
}

