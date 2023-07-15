
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Nav ({onClick}) {

  return (
    <nav>
      <ul>
        <li><Link onClick={onClick} href='/blog'><span>Blog</span></Link></li>
        <li><Link onClick={onClick} href={`/investorquiz/`}><span>Investor Personality Quiz</span></Link></li>
        <li><Link onClick={onClick} href="/calculators/"><span>Discovery</span></Link></li>
      </ul>
    </nav>
  )
}