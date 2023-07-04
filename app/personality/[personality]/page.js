
import { cookies } from 'next/headers';
import Image from 'next/image';
import img from './../../../public/archetypes/female/builder.png'
import styles from './styles.module.css'
import Chart from './chart';
import SocialSharing from '@/utils/share/page';


export default async function PersonalityPage ({params}) {

  const pronsandcons = [
    {archetype: "Boss",
      pros: ['Risk seeking investor','Analytical'],
      cons: ['Overconfidence','Reckless trading'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "scientist",
      pros: ['Analytical','Long term investor'],
      cons: ['Ignoring qualitative factors like market sentiment'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Builder",
      pros: ['patient investor'],
      cons: ['May only invest in safe assets'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Soldier",
      pros: ['Comfortable with risk'],
      cons: ['Excessive trading','Trying to time market prices'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Custodian",
      pros: ['long term/patient investing'],
      cons: ['Extremely conservative with risk','Slow to respond to changing investment factors'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },

  ]


  const emotion = pronsandcons.find((pro)=> pro.archetype === params.personality)

  const gender = cookies().get('gender').value
  const willigness = cookies().get('willigness').value
  const capacity = cookies().get('capacity').value

  // const img = "/public/archetypes/female/builder.png"

  return (
    <>
      <div className={styles.container}>
        <div className={styles.resultImage}>
            <div>
              <h1>{params.personality}</h1>
              <div className={styles.social}>
                <p>Share</p>
                <div><SocialSharing></SocialSharing></div>
              </div>  
            </div>
            <div>
              <p>You are a high earner, who likes to venture into uncharted terrority. Your ability to take risk could be a gift and a curse, which could lead to blind investing and overconfidence.</p>
              <p>You should take care to be more analytical before making investing decisions. As a risk taker, your past wins might give the illusion of infailability, be careful of blind spots and chasing highs when investing</p>
            </div>
          
          {gender && (<div style={{position: 'relative', width: '400px', height: '400px'} }>
          <Image style={{position: 'absolute'}} src={img} fill='true' sizes='100vw'/>
          </div>)}
        </div>
        <div className={styles.resultDetails}>
            <div>
            <div className={styles.resultIcons}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="gold"><path d="m29.962 22.725-1.586-5.549A3.013 3.013 0 0 0 25.491 15h-1.752l-1.491-4.843A3.152 3.152 0 0 0 19.222 8h-6.444a3.152 3.152 0 0 0-3.026 2.157L8.261 15H6.509a3.013 3.013 0 0 0-2.885 2.176l-1.586 5.549A1 1 0 0 0 3 24h26a1 1 0 0 0 .962-1.275Zm-18.3-11.981A1.141 1.141 0 0 1 12.778 10h6.444a1.14 1.14 0 0 1 1.114.745L21.646 15H10.354Zm4.96 6.432L16 19.359l-.624-2.183c-.018-.061-.045-.117-.067-.176h1.381c-.021.059-.049.115-.066.176ZM4.326 22l1.222-4.275A1 1 0 0 1 6.509 17h5.982a1 1 0 0 1 .961.726L14.674 22Zm13 0 1.222-4.275a1 1 0 0 1 .961-.725h5.982a1 1 0 0 1 .961.726L27.674 22Z" data-name="Layer 2" fill="#34a853" class="color000000 svgShape"></path></svg>
              <h3>Financial Capacity</h3>
              </div>

              <div className={styles.bar}>
                <div style={{width: `${capacity == 'low-capacity'? '20%' : capacity == 'high-capacity'? '90%' : '50%'}`}}></div>
              </div>
              
              <p>{capacity}</p>
            </div>
            <div>
              <div className={styles.resultIcons}>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="danger"><path d="M1.04999,29.75c0.67999,1.08997,1.85999,1.75,3.15002,1.75h23.59998c1.29004,0,2.47003-0.66003,3.15002-1.75c0.66998-1.10004,0.72998-2.45001,0.15997-3.60004l-11.81-23.60999C18.66998,1.28998,17.40997,0.5,16,0.5s-2.66998,0.78998-3.29999,2.03998l-11.81,23.60999C0.32001,27.31,0.38,28.64996,1.04999,29.75z M17.5,10.45996v9.53003c0,0.83002-0.66998,1.5-1.5,1.5s-1.5-0.66998-1.5-1.5v-9.53003c0-0.82996,0.66998-1.5,1.5-1.5S17.5,9.63,17.5,10.45996z M14.5,25.45996V24.37c0-0.83002,0.66998-1.5,1.5-1.5s1.5,0.66998,1.5,1.5v1.08997c0,0.82001-0.66998,1.5-1.5,1.5S14.5,26.27997,14.5,25.45996z" fill="#34a853" class="color000000 svgShape"></path></svg>
                  <h3>Risk Wiliigness</h3>
                </div>
              <div className={styles.bar}>
                <div style={{width: `${willigness == 'high-willingness'? '90%' : willigness == 'low-willingness'? '20%' : '50%'}`}}> </div>
                </div>
                <p>{willigness}</p>
                
            </div>
            <div>
              <h3>Investing behaviour</h3>
              <h5>Cons</h5>
              {emotion.cons.map((con)=> (<p key={con}>{con}</p>))}
              <h5>pros</h5>
              {emotion.pros.map((pro)=> (<p key={pro}>{pro}</p>))}
            </div>
            <div>
              <h3>Ideal Porfolio Allocation</h3>
              <div className={styles.chart}>
                <Chart equity={50} bonds={20} cash={30}></Chart>  
              </div>
              <div>
                <p>Stocks and equities - {emotion.allocation.equity * 100}%</p>
                <p>Bonds - {emotion.allocation.bonds * 100}%</p>
                <p>Cash and shor term investments - {emotion.allocation.cash* 100}%</p>
              </div>
            </div>

        </div>
      
      </div>
    </>
  )
}

