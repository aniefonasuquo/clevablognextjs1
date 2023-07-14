
import { cookies } from 'next/headers';
import Image from 'next/image';
import fembuild from './../../../public/archetypes/female/builder.png'
import femcustod from './../../../public/archetypes/female/custodian.png'
import femboss from './../../../public/archetypes/female/entrepreneur.png'
import femscien from './../../../public/archetypes/female/scientist.png'
import femliet from './../../../public/archetypes/female/lieutenant.png'
import manliet from './../../../public/archetypes/male/lieutenant.png'
import manboss from './../../../public/archetypes/male/entrepreneur.png'
import mancust from './../../../public/archetypes/male/custodian.png'
import mansci from './../../../public/archetypes/male/scientist.png'
import manbuild from './../../../public/archetypes/male/builder.png'
import styles from './styles.module.css'
import Chart from './chart';
import SocialSharing from '@/utils/share/page';


export default async function PersonalityPage ({params}) {

  const pronsandcons = [
    {archetype: "Boss",
      description: ['You are an above average earner, who love the thrill of an adventure. Your ability to take risk could be a gift and a curse, which could lead to blind investing and overconfidence.', 'You should take care to be more objective when making investing decisions. As a risk taker, your past wins might give the illusion of infailability, be careful of blind spots and chasing highs when investing.'],
      pros: ['Risk seeking investor','Analytical'],
      cons: ['Overconfidence','Reckless trading'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Scientist",
    description: ["Analytical and methodic, you take your time to get all the facts before making and investment. You are aware of the volatility of investments, and take good measure to understand what's under the hood", 'Because you have a framework in hand, you might be caught in the trap of overanalysing, and miss out of short term opportunities. You tend to ignore factoring the sentiments that drive investments, leading to wrong decisions'],
      pros: ['Analytical','Long term investor'],
      cons: ['Ignoring qualitative factors like market sentiment'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Builder",
    description: ["Your financial status greatly influences your investing decisions, making your opt for safe investment that may not maximise your returns. Your financial status greatly influences your investing decisions, making your opt for safe investment that may not maximise your returns.", 'However, you tend to be overconservative and shy away from risky investments. Try making more efforts toward seeking reasonable risk and optimising your returns ' ],
      pros: ['patient investor'],
      cons: ['May only invest in safe assets'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Soldier",
    description: ["Your high ambition is accompanied with risk seeking behaviour which does not consider your financial status, you are always on the prowl for the next best opppotuniy", 'These attributes leave you subsceptible to investment scam and bubbles that could lead to financial fataility as you may not have enough cushion for severe losses. Be careful to seek advise from informed persons before making investment decisions' ],
      pros: ['Comfortable with risk'],
      cons: ['Excessive trading','Trying to time market prices', 'short term mindset'],
      advice: ['avoid deviatiing from your set allocation', 'Go the extra-mile to analyse an investment before commiting'],
    allocation: {equity: 0.6, bonds: 0.2, cash: 0.1, alternative: 0.1}
  },
    {archetype: "Custodian",
      description: ["Your are an above average earner, earnings are from less risky endeavours, as such have a preference for 'what you know", "Because investment factors change, you may miss opportunities by holding onto investments that may not be worthwhile. You should seek advise from informed persons on safe ways of diversifiying your investments and optimising your returns" ],
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

  console.log(params.personality)
  console.log(gender)

  let img = '';

  switch (gender) {
    case 'female':
      switch (params.personality) {
        case 'Boss':
          img = femboss 
          break;
        case 'Scientist':
          img = femscien 
          break;
        case 'Lieutenant':
          img = femliet
          break;
        case 'Custodian':
          img = femcustod 
          break;
        case 'Builder':
          img = fembuild 
          break;     
        default:
          img = fembuild
          break;
      }
    default:
      switch (params.personality) {
        case 'Boss':
          img = manboss 
          break;
        case 'Scientist':
          img = mansci 
          break;
        case 'Lieutenant':
          img = manliet
          break;
        case 'Custodian':
          img = mancust 
          break;
        case 'Builder':
          img = manbuild 
          break;     
        default:
          img = manbuild
          break;
      }
      break;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.right}>
            <div>
              <h1>{params.personality}</h1>
              <div className={styles.social}>
                <p>Share your result</p>
                <div><SocialSharing></SocialSharing></div>
              </div>  
            </div>
            <div>
              <p>{emotion.description[0]}</p>
              <p>{emotion.description[1]}</p>
            </div>
          
          {gender && (<div className={styles.imgcontainer}>
          <Image src={img} fill='true' sizes='100vw'/>
          </div>)}
        </div>
        <div className={styles.resultDetails}>
            <div>
            <div className={styles.resultIcons}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(24, 40, 102)' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M16,12.5v.5h-1v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5,.673-1.5,1.5,0,.876,.627,1.612,1.493,1.751l3.173,.51c1.353,.217,2.334,1.369,2.334,2.739,0,1.378-1.122,2.5-2.5,2.5h-1v2h-1v-2h-1c-1.378,0-2.5-1.122-2.5-2.5v-.5h1v.5c0,.827,.673,1.5,1.5,1.5h3c.827,0,1.5-.673,1.5-1.5,0-.876-.627-1.612-1.493-1.751l-3.173-.51c-1.353-.217-2.334-1.369-2.334-2.739,0-1.378,1.122-2.5,2.5-2.5h1v-2h1v2h1c1.378,0,2.5,1.122,2.5,2.5Zm6.974,5.75c0,3.17-2.58,5.75-5.75,5.75H6.724c-3.17,0-5.75-2.58-5.75-5.75C.974,13.043,5.297,6.494,10.292,5.233c-1.41-.831-3.292-2.378-3.292-4.733V0h10V.5c0,2.358-1.906,3.906-3.332,4.736,4.989,1.268,9.306,7.811,9.306,13.014ZM11.975,4.962c.736-.305,3.613-1.64,3.985-3.962h-7.921c.367,2.321,3.207,3.655,3.936,3.962Zm9.999,13.288c0-5.324-4.85-12.187-9.974-12.25-5.124,.064-10.026,6.926-10.026,12.25,0,2.619,2.131,4.75,4.75,4.75h10.5c2.619,0,4.75-2.131,4.75-4.75Z"/></svg>

              <h3>Financial Capacity</h3>
              </div>

              <div className={styles.bar}>
                <div style={{width: `${capacity == 'low-capacity'? '20%' : capacity == 'high-capacity'? '90%' : '50%'}`}}></div>
              </div>
              
              <p>{capacity}</p>
            </div>
            <div>
              <div className={styles.resultIcons}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='rgb(24, 40, 102)'  data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M11.5,14.5V6.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V14.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5Zm.5,2.5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm11.61,3.07c-.64,1.23-1.99,1.93-3.71,1.93H4.1c-1.71,0-3.07-.7-3.71-1.93-.65-1.24-.47-2.87,.48-4.24L9.3,2.43c.62-.9,1.63-1.43,2.7-1.43s2.08,.53,2.69,1.41l8.44,13.43c.95,1.37,1.13,2.99,.48,4.23Zm-1.31-3.67s0-.01-.01-.02L13.86,2.96c-.42-.61-1.1-.96-1.86-.96s-1.44,.36-1.87,.98L1.71,16.38c-.75,1.08-.91,2.31-.43,3.23,.47,.9,1.47,1.39,2.82,1.39h15.81c1.35,0,2.35-.49,2.82-1.39,.48-.91,.32-2.14-.42-3.21Z"/></svg>
                  <h3>Risk Wiliigness</h3>
                </div>
              <div className={styles.bar}>
                <div style={{width: `${willigness == 'high-willingness'? '90%' : willigness == 'low-willingness'? '20%' : '50%'}`}}> </div>
                </div>
                <p>{willigness}</p>
                
            </div>
            <div>
              <div className={styles.resultIcons}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill='rgb(24, 40, 102)' viewBox="0 0 24 24" width="30" height="30"><path d="M23.393,19.789l-1.325-.756c.278-.621,.432-1.309,.432-2.033s-.155-1.411-.432-2.033l1.325-.756c.24-.137,.323-.442,.186-.682s-.443-.324-.682-.186l-1.326,.757c-.816-1.142-2.101-1.928-3.571-2.075v-1.525c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.525c-1.47,.147-2.754,.933-3.571,2.075l-1.326-.757c-.241-.138-.546-.054-.682,.186-.137,.24-.054,.545,.186,.682l1.325,.756c-.278,.621-.432,1.309-.432,2.033s.155,1.411,.432,2.033l-1.325,.756c-.24,.137-.323,.442-.186,.682,.092,.162,.261,.252,.435,.252,.084,0,.169-.021,.248-.066l1.326-.757c.816,1.142,2.101,1.928,3.571,2.075v1.525c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.525c1.47-.147,2.754-.933,3.571-2.075l1.326,.757c.078,.045,.164,.066,.248,.066,.174,0,.342-.09,.435-.252,.137-.24,.054-.545-.186-.682Zm-5.893,1.211c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4ZM9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S6.243,1,9,1Zm.088,13.486c.013,.276-.2,.51-.476,.523-4.269,.204-7.612,3.713-7.612,7.991v.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-.5c0-4.812,3.762-8.761,8.564-8.99,.26-.015,.51,.199,.523,.476Z"/></svg>
                <h3>Investing behaviour</h3>
              </div>
              <h5>Cons</h5>
              {emotion.cons.map((con)=> (<p key={con}>{con}</p>))}
              <h5>pros</h5>
              {emotion.pros.map((pro)=> (<p key={pro}>{pro}</p>))}
            </div>
            <div>
              <div className={styles.resultIcons}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='rgb(24, 40, 102)' data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M11.91,24c-1.51,0-3.02-.29-4.49-.89-2.96-1.19-5.34-3.58-6.53-6.54C-.46,13.23-.26,9.65,1.44,6.49,3.22,3.18,6.44,.78,10.05,.05c.71-.14,1.45,.04,2.02,.51,.59,.48,.93,1.2,.93,1.96V11h8.5c.76,0,1.47,.34,1.96,.93,.47,.57,.65,1.31,.51,2.02-.73,3.61-3.14,6.83-6.44,8.61-1.78,.96-3.68,1.44-5.61,1.44ZM10.53,1c-.09,0-.18,0-.28,.03C6.92,1.7,3.96,3.92,2.32,6.96c-1.56,2.89-1.74,6.17-.5,9.24,1.09,2.71,3.27,4.89,5.98,5.98,3.07,1.24,6.35,1.06,9.25-.5,3.05-1.64,5.27-4.6,5.94-7.93,.08-.42-.03-.85-.3-1.19-.29-.36-.72-.56-1.18-.56H12.5c-.28,0-.5-.22-.5-.5V2.51c0-.46-.2-.89-.56-1.18-.26-.22-.58-.33-.91-.33Z"/></svg>
                <h3>Ideal Porfolio Allocation</h3>
              </div>
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

