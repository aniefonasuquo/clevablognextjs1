import styles from './styles.module.css'

export default function Loading () {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.right}>
            <div className={styles.personality}>
              builder
 
            </div>
            <div className={styles.description}>
              description
            </div>
          
          <div className={styles.imgcontainer}>
            <div className={styles.image}></div>
          </div>
        </div>
        <div className={styles.resultDetails}>
            <div className={styles.capacity}>
              fincap
            </div>
            <div className={styles.willingness}>
              risk will
            </div>
            <div className={styles.behaviour}>
              behaviour
            </div>
            <div className={styles.allocation}>
              allocation
            </div>
        </div>     
      </div>
    </div>
  )
}