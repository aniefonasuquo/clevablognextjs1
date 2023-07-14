

import Link from "next/link";
import styles from './style.module.css'
import Image from 'next/image'
import slugify from 'slugify'
import { Varela   } from 'next/font/google'
import img from './../public/investimg.jpg'
import Cta from "./cta/earlysignup";
import world from './../public/landingimages/globe2.png';
import hand from './../public/landingimages/2.jpg';
import block from './../public/landingimages/block.webp';
import neural from './../public/landingimages/neural.png';
import speed from './../public/landingimages/speed.png';
import risk from './../public/landingimages/risks.png';

export default async function Homepage() {

  return ( 
  <div className={styles.container}>
    <div className={styles.top}>
      <h1>
        <span>Dream.</span>
        <span>Discover.</span>
        <span>Decide.</span>
      </h1>
      <h2>
        <span>Make the best wealth decisions from global opportunities.</span>
      </h2>
      <div>
        <Link href='/join'><button>Join Cleva</button></Link>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.circleContainer}>
        <span className={styles.circle}>1</span>
        <h1><span>Dream</span></h1>
        <h2>
          <span>Best opportunities for your dreams</span>
        </h2>
        <p>
          <span>Wealth strategies that factor key elements of your aspirations performance better. Cleva provides suitable investment opportunities that put you first.</span>
        </p>
      </div>
      <div className={styles.topDetails}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div>
              <span>Purchase House</span>
              <span>Baby's Tuition Fund</span>
              <span>Summer vaction in ibiza</span>
              <span>One year target savings</span>
              <span>Save 10% of my income</span>
              <span>Earn additional income</span>
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
    </div>
    <div className={styles.section}>
      <div className={styles.circleContainer}>
        <span className={styles.circle}>2</span>
        <h1><span>Discover</span></h1>
        <h2>
          <span></span>
        </h2>
        <p>
          <span>Hedge currency, inflation and geographical risks with opportunities in various economies.</span>
        </p>
      </div>
     
      <div className={styles.moreDetails}>
          <div className={styles.prop}>
            <div className={styles.propImage}><Image src={world} sizes="100vw" fill={true}></Image></div>
            <div  className={styles.propdeets}>
              <div><svg id="Layer_1" height="40" fill="silver" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m13 16a8 8 0 1 0 -8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1 -6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773a11.992 11.992 0 0 1 -8.907 5.166v2.061h4a1 1 0 0 1 0 2h-10a1 1 0 0 1 0-2h4v-2.051a11.994 11.994 0 0 1 -8.257-19.586 1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z"/></svg></div>
                <h1>Global wealth opportunities</h1>
              <div>
                <p>Hedge currency, inflation and geographical risks with opportunities in various economies. Borderless opportunities to maximise your investment performance</p>
              </div>
            </div>           
          </div>
          <div className={styles.prop}>
            <div className={styles.propImage}><Image src={hand} sizes="100vw" fill={true}></Image></div>
            <div className={styles.propdeets}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40" fill="silver"><path d="M23.393,19.789l-1.325-.756c.278-.621,.432-1.309,.432-2.033s-.155-1.411-.432-2.033l1.325-.756c.24-.137,.323-.442,.186-.682s-.443-.324-.682-.186l-1.326,.757c-.816-1.142-2.101-1.928-3.571-2.075v-1.525c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.525c-1.47,.147-2.754,.933-3.571,2.075l-1.326-.757c-.241-.138-.546-.054-.682,.186-.137,.24-.054,.545,.186,.682l1.325,.756c-.278,.621-.432,1.309-.432,2.033s.155,1.411,.432,2.033l-1.325,.756c-.24,.137-.323,.442-.186,.682,.092,.162,.261,.252,.435,.252,.084,0,.169-.021,.248-.066l1.326-.757c.816,1.142,2.101,1.928,3.571,2.075v1.525c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.525c1.47-.147,2.754-.933,3.571-2.075l1.326,.757c.078,.045,.164,.066,.248,.066,.174,0,.342-.09,.435-.252,.137-.24,.054-.545-.186-.682Zm-5.893,1.211c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4ZM9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S6.243,1,9,1Zm.088,13.486c.013,.276-.2,.51-.476,.523-4.269,.204-7.612,3.713-7.612,7.991v.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-.5c0-4.812,3.762-8.761,8.564-8.99,.26-.015,.51,.199,.523,.476Z"/></svg>
                </div>
                  <h1>Personalised investing</h1>
                  <div>
                <p>Improve your investment performance using strategies modelled after your unique investing factors such as income level, risk tolerance and liquisity preferenece etc.</p>
              </div>
            </div>
            
          </div>
          <div className={styles.prop}>
          <div className={styles.propImage}><Image src={block} sizes="100vw" fill={true}></Image></div>
            <div className={styles.propdeets}>
              <div><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40" fill="silver"> <path d="m11,1h-6.5C2.019,1,0,3.019,0,5.5v3.5c0,1.103.897,2,2,2h9c1.103,0,2-.897,2-2V3c0-1.103-.897-2-2-2Zm1,8c0,.552-.449,1-1,1H2c-.551,0-1-.448-1-1v-3.5c0-1.93,1.57-3.5,3.5-3.5h6.5c.551,0,1,.448,1,1v6Zm7.5-6h-2.5c-1.103,0-2,.897-2,2v13c0,1.103.897,2,2,2h2.5c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,12.5c0,1.93-1.57,3.5-3.5,3.5h-2.5c-.551,0-1-.448-1-1V5c0-.552.449-1,1-1h2.5c1.93,0,3.5,1.57,3.5,3.5v8Zm-12-2.5h-7c-1.103,0-2,.897-2,2v3.5c0,2.481,2.019,4.5,4.5,4.5h4.5c1.103,0,2-.897,2-2v-6c0-1.103-.897-2-2-2Zm1,8c0,.552-.449,1-1,1h-4.5c-1.93,0-3.5-1.57-3.5-3.5v-3.5c0-.552.449-1,1-1h7c.551,0,1,.448,1,1v6Z"/></svg>
            </div>
              <h1>Diverse investment categories</h1>
            <div>
              <p>
                Optimise returns, and take advantage of various asset classes. From real estate to alternatives.
              </p>
            </div>
            </div>
          </div>
      </div>
    </div>
    <div className={styles.section}>
      
      <div className={styles.circleContainer}>
        <span className={styles.circle}>3</span>
        <h1><span>Decide</span></h1>
        <h2>
          <span>All the tools to make smart investing decisions</span>
        </h2>
        <p>
          <span>Bye to long research and consideration time that comes with making investment decisions, our algorithm produces results that fits your objectives.</span>
        </p>
      </div>

      <div className={styles.decideGrid}>
        <div className={styles.decideItem}>
          <div className={styles.decideImage}>
            <Image src={risk} sizes="100vw" fill={true}></Image>
          </div>
          <div className={styles.decidedeets}>
            <h1>Risk</h1>
            <span>Understand associated risks before making investments.</span>
          </div>
        </div>
        <div className={styles.decideItem}>
          <div className={styles.decideImage}>
            <Image src={speed} sizes="100vw" fill={true}></Image>
          </div>
          <div className={styles.decidedeets}>
            <h1>Performance</h1>
            <span>find investments that maximise your returns.</span>
          </div>
        </div>
        <div className={styles.decideItem}>
          <div className={styles.decideImage}>
            <Image src={neural} sizes="100vw" fill={true}></Image>
          </div>
          <div className={styles.decidedeets}>
            <h1>Algo-advisory</h1>
            <span>Our propietary algorithms help make expert decisions is no time.</span>
          </div>
        </div>

      </div>

    </div>

  </div>)}

