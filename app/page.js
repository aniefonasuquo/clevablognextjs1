import Link from 'next/link'
import styles from './style.module.css'
import Image from 'next/image'
import globe from './../public/landingimages/globex.png'
import pie from './../public/landingimages/pie-chart.png'
import income from './../public/landingimages/productimg2.png'
import allocation from './../public/landingimages/productimg1.png'
import personality from './../public/landingimages/personality.jpg'
import productimg from './../public/landingimages/productimg3.png'

export default function Landing () {

  return (<div className={styles.container}>
  
    <div className={styles.heroanim}>
      <div className={styles.herocontainer}>
        <div className={styles.heroheading}>
          <h1>
            <span>Your Wealth Advisor on the Go</span>
          </h1>
        </div>
        <div className={styles.herodetail}>
          <span>Discover and make the wealth decisions that suit your unique characteristics.</span>
          <span>Cleva is a wealth adviser than helps individuals make suitable investment and financial decisions from current and emerging global opportunities.</span>
        </div>
        <Link href='/join'>
          <div className={styles.herocta}>
            <span>Join Cleva</span>
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
          <span>
            know the right choices, specific to your investment goals and desires.
          </span>
        </div>
        <div className={styles.topDetails}>

        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span>Purchase House</span>
              <span>Baby's Tuition Fund</span>
              <span>Supplement income</span>
              <span>One year target savings</span>
              <span>Save 10% of my income</span>
              <span>Investment war chest</span>
              <span>Fund lifestyle</span>
            </div>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span>Buy new car</span>
              <span>Plan retirement</span>
              <span>Grow portfolio</span>
              <span>Target the best returns</span>
              <span>Invest in real estate</span>
              <span>Invest in US Stock</span>
              <span>Outperform US Markets</span>
            </div>
          </div>          
        </div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span>Buy PS5</span>
              <span>Family Holiday</span>
              <span>Optimise portfolio returns</span>
              <span>College Fund</span>
              <span>Summer vacation</span>
              <span>Invest in tech</span>
              <span>Earn foreign currency</span>
              <span>Kid's trust fund</span>
              <span>Increase income</span>
            </div>
          </div>
        </div>

    </div>
    <Link href='/join'>
          <div className={styles.discovercta}>
            <span>Discover Opportunities</span><svg fill="rgb(2,4,37)" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>lens</title>
<path d="M0 13.024q0-2.624 1.024-5.056t2.784-4.16 4.16-2.752 5.056-1.056q2.656 0 5.056 1.056t4.16 2.752 2.784 4.16 1.024 5.056q0 3.616-1.984 6.816l7.072 7.040q0.864 0.896 0.864 2.144t-0.864 2.112-2.144 0.864-2.112-0.864l-7.040-7.040q-3.2 1.952-6.816 1.952-2.656 0-5.056-1.024t-4.16-2.784-2.784-4.128-1.024-5.088zM4 13.024q0 2.464 1.216 4.544t3.296 3.264 4.512 1.216q1.824 0 3.488-0.704t2.88-1.92 1.92-2.88 0.736-3.52-0.736-3.52-1.92-2.848-2.88-1.92-3.488-0.736q-2.432 0-4.512 1.216t-3.296 3.296-1.216 4.512z"></path>
</svg></div>
        </Link>
  </section>
  <section className={styles.limitless}>
    <div className={styles.limitlessheading}>
      <span>Limit your wealth to nothing</span>
    </div>
    <div className={styles.limitlessdescription}>
      <div>
        <div className={styles.limitlessdescriptiontop}>
          <div>
            <Image src={globe} width={100} height={100} sizes='100vw'></Image>
          </div>
          <div>Global Opportunities</div>
        </div>
        <div className={styles.limitlessdescriptiondown}>
          <span>Hedge currency, inflation and geographical</span>
          <span>Earn foreign exchange income.</span>
          <span>Globalise your wealth portfolio.</span>
        </div>
      </div>
      <div>
        <div className={styles.limitlessdescriptiontop}>
          <div>
            <Image src={pie} width={100} height={100} sizes='100vw'></Image>
          </div>
          <div>Diverse Investment Categories</div>
        </div>
        <div className={styles.limitlessdescriptiondown}>
          <span>Reallocate between asset classes</span>
          <span>Optimise portfolio through diversification</span>
          <span>Take advantage of all opportunities</span>
        </div>
      </div>
    </div>
  </section>
  <section className={styles.information}>
    <div className={styles.informationheading}>
      <span>All the information you need to make the Cleva decisions</span>
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
    <div><h1>Never Miss an Opportunity</h1></div>
    <div>
      <span>Join our email newsletters and receive insights and guidiance on wealth opportunities.</span> 
      <span>Get update on our products and offerings.</span> 
      <span>Get early access to the Cleva mobile app</span> 
     </div>
    <div>
      <form>
        <input type='email' placeholder='Your Email Address...'></input>
        <button type='submit'><span>Join Cleva</span><svg fill="rgb(2,4,37)" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.755 511.755"><g><g><path d="M436.891,74.866c-99.819-99.819-262.208-99.819-362.027,0c-99.819,99.797-99.819,262.229,0,362.027
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