import Link from 'next/link'
import styles from './style.module.css'
import Image from 'next/image'
import globe from './../public/landingimages/globex.png'
import pie from './../public/landingimages/pie-chart.png'
import income from './../public/landingimages/productimg2.png'
import productimg from './../public/landingimages/productimg1.png'
import personality from './../public/landingimages/personality.jpg'
import allocation from './../public/landingimages/productimg3.png'
import localfont from 'next/font/local'

const Satoshi = localfont({
  src: './../utils/fonts/Satoshi/Satoshi-Variable.woff2',
  style: 'normal',
  display: 'swap',
})

export default function Landing () {

  return (<div className={styles.container}>
  
    <div className={styles.heroanim}>
      <div className={styles.herocontainer}>
        <div className={styles.heroheading}>
          <h1 className={Satoshi.className}>
            <span className={Satoshi.className}>Your Wealth Advisor on the Go</span>
          </h1>
        </div>
        <div className={styles.herodetail}>
          <span className={Satoshi.className}>Discover and make the wealth decisions that suit your unique characteristics.</span>
          <span className={Satoshi.className}>Cleva helps individuals make the best choice from current and emerging global wealth opportunities.</span>
        </div>
        <Link href='/join'>
          <div className={styles.herocta}>
            <span className={Satoshi.className}>Join Cleva</span>
            <svg fill="rgb(2,4,37)" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
c49.899,49.92,115.456,74.859,181.013,74.859s131.115-24.939,181.013-74.859C536.709,337.095,536.709,174.663,436.891,74.866z
			 M341.211,319.879c-11.797,0-21.333-9.557-21.333-21.333v-76.501l-134.251,134.25c-4.16,4.16-9.621,6.251-15.083,6.251
			c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l134.251-134.251h-76.501
			c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h128c2.773,0,5.547,0.576,8.149,1.643
			c5.227,2.155,9.387,6.315,11.541,11.541c1.088,2.603,1.643,5.376,1.643,8.149v128h0
			C362.544,310.322,353.008,319.879,341.211,319.879z"/></g></g></svg>
          </div>
        </Link>
      </div>
    </div>
    <section className={styles.section_one}>
        <div className={styles.section_one_detail}>
          <span className={Satoshi.className}>
            know the right choices, specific to your investment goals and desires.
          </span>
        </div>
        <div className={styles.topDetails}>

        <div className={styles.marquee}>
          <div className={styles.track}>
            <div >
              <span className={Satoshi.className}>Purchase House</span>
              <span className={Satoshi.className}>Baby's Tuition Fund</span>
              <span className={Satoshi.className}>Supplement income</span>
              <span className={Satoshi.className}>One year target savings</span>
              <span className={Satoshi.className}>Save 10% of my income</span>
              <span className={Satoshi.className}>Investment war chest</span>
              <span className={Satoshi.className}>Fund lifestyle</span>
            </div>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span className={Satoshi.className}>Buy new car</span>
              <span className={Satoshi.className}>Plan retirement</span>
              <span className={Satoshi.className}>Grow portfolio</span>
              <span className={Satoshi.className}>Target the best returns</span>
              <span className={Satoshi.className}>Invest in real estate</span>
              <span className={Satoshi.className}>Invest in US Stock</span>
              <span className={Satoshi.className}>Outperform US Markets</span>
            </div>
          </div>          
        </div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span className={Satoshi.className}>Buy PS5</span>
              <span className={Satoshi.className}>Family Holiday</span>
              <span className={Satoshi.className}>Optimise portfolio returns</span>
              <span className={Satoshi.className}>College Fund</span>
              <span className={Satoshi.className}>Summer vacation</span>
              <span className={Satoshi.className}>Invest in tech</span>
              <span className={Satoshi.className}>Earn foreign currency</span>
              <span className={Satoshi.className}>Kid's trust fund</span>
              <span className={Satoshi.className}>Increase income</span>
            </div>
          </div>
        </div>

    </div>
    <Link href='/join'>
          <div className={styles.discovercta}>
            <span className={Satoshi.className}>Discover Opportunities</span><svg fill="rgb(2,4,37)" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>lens</title>
<path d="M0 13.024q0-2.624 1.024-5.056t2.784-4.16 4.16-2.752 5.056-1.056q2.656 0 5.056 1.056t4.16 2.752 2.784 4.16 1.024 5.056q0 3.616-1.984 6.816l7.072 7.040q0.864 0.896 0.864 2.144t-0.864 2.112-2.144 0.864-2.112-0.864l-7.040-7.040q-3.2 1.952-6.816 1.952-2.656 0-5.056-1.024t-4.16-2.784-2.784-4.128-1.024-5.088zM4 13.024q0 2.464 1.216 4.544t3.296 3.264 4.512 1.216q1.824 0 3.488-0.704t2.88-1.92 1.92-2.88 0.736-3.52-0.736-3.52-1.92-2.848-2.88-1.92-3.488-0.736q-2.432 0-4.512 1.216t-3.296 3.296-1.216 4.512z"></path>
</svg></div>
        </Link>
  </section>
  <section className={styles.limitless}>
    <div className={styles.limitlessheading}>
      <h1 className={Satoshi.className}>Limit your wealth to nothing</h1>
    </div>
    <div className={styles.limitlessdescription}>
      <div>
        <div className={styles.limitlessdescriptiontop}>
          <div>
            <Image src={globe} width={100} height={100} sizes='100vw'></Image>
          </div>
          <div ><h2 className={Satoshi.className}>Global Opportunities</h2></div>
        </div>
        <div className={styles.limitlessdescriptiondown}>
          <span className={Satoshi.className}>Protect your wealth from devaluation and inflation.</span>
          <span className={Satoshi.className}>Earn foreign exchange income.</span>
          <span className={Satoshi.className}>Globalise your wealth portfolio.</span>
        </div>
      </div>
      <div>
        <div className={styles.limitlessdescriptiontop}>
          <div>
            <Image src={pie} width={100} height={100} sizes='100vw'></Image>
          </div>
          <div className={Satoshi.className}><h2 className={Satoshi.className}>Diverse Investment Categories</h2></div>
        </div>
        <div className={styles.limitlessdescriptiondown}>
          <span className={Satoshi.className}>Reallocate between asset classes.</span>
          <span className={Satoshi.className}>Optimise portfolio through diversification.</span>
          <span className={Satoshi.className}>Take advantage of all opportunities.</span>
        </div>
      </div>
    </div>
  </section>
  <section className={styles.information}>
    <div className={styles.informationheading}>
      <h1 className={Satoshi.className}>All the information you need to make the Cleva decisions</h1>
    </div>
    <div className={styles.informationillustration}>
      <div className={styles.productimage}>
        <Image src={income} width={300} height={300} sizes='100vw'></Image>
      </div>
      <div className={styles.productimage}>
        <Image src={personality} width={400} height={400} sizes='100vw'></Image>
      </div>
      <div className={styles.productimage}>
        <Image src={allocation} width={250} height={500} sizes='100vw'></Image>
      </div>
      <div className={styles.productimage}>
        <Image src={productimg} width={300} height={150} sizes='100vw'></Image>
      </div>
    </div>
  </section>
  <section className={styles.signup}>
    <div><h1 className={Satoshi.className}>Never Miss an Opportunity</h1></div>
    <div>
      <span className={Satoshi.className}>Join our email newsletters and receive insights and guidiance on wealth opportunities.</span> 
      <span className={Satoshi.className}>Get update on our products and offerings.</span> 
      <span className={Satoshi.className}>Get early access to the Cleva mobile app</span> 
     </div>
    <div>
      <form>
        <input className={Satoshi.className} type='email' placeholder='Your Email Address...'></input>
        <button type='submit'><span className={Satoshi.className}>Join Cleva</span><svg fill="rgb(2,4,37)" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
c49.899,49.92,115.456,74.859,181.013,74.859s131.115-24.939,181.013-74.859C536.709,337.095,536.709,174.663,436.891,74.866z
			 M341.211,319.879c-11.797,0-21.333-9.557-21.333-21.333v-76.501l-134.251,134.25c-4.16,4.16-9.621,6.251-15.083,6.251
			c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l134.251-134.251h-76.501
			c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h128c2.773,0,5.547,0.576,8.149,1.643
			c5.227,2.155,9.387,6.315,11.541,11.541c1.088,2.603,1.643,5.376,1.643,8.149v128h0
			C362.544,310.322,353.008,319.879,341.211,319.879z"/></g></g></svg></button>
      </form>
    </div>
  </section>
  </div>)
}