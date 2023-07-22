
import Link from 'next/link'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default function Nav ({onClick}) {

  return (
    <nav>
      <ul>
        <li><Link onClick={onClick} href='/blog'><span className={Satoshi.className}> Blog</span></Link></li>
        <li><Link onClick={onClick} href={`/investorquiz/`}><span className={Satoshi.className}>Investor Personality Quiz</span></Link></li>
        <li><Link onClick={onClick} href="/calculators/"><span className={Satoshi.className}>Discovery</span></Link></li>
      </ul>
    </nav>
  )
}