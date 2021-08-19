import styles from './hero.module.scss';
import globalStyles from '../../styles/styles.module.scss';
import Image from 'next/image';

const name = 'Tingyu Pan';

export const Hero = () => {
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.heroWrapper}>
        <div>
          <div className={styles.animate__fadeIn}>
          <h1 className={`${styles.heroStyle} ${styles.firstName}`}>
            TINGYU
            <span className={globalStyles.hideDesktop}>
              {' PAN'}
            </span>
          </h1>
          </div>
          <div className={styles.animate__fadeInLeft}>
            <h3 className={`${globalStyles.subtitleStyle} `}>Junior Software Developer @_nology</h3>
          </div>
          <div className={`${styles.animate__delay} ${globalStyles.delay}`}>
            <h3 className={`${globalStyles.subtitleStyle} ${styles.secondSubtitle}`}>Former AI Data Collection Specialist</h3>
          </div>
          <div className={`${styles.animate__deelay} ${globalStyles.delay}`}>
            <h3 className={`${globalStyles.subtitleStyle} ${styles.thirdSubtitle}`}>and fresh grad @ANU</h3>
          </div>
        </div>
        <div className={`${globalStyles.hideMobile} ${styles.portraitWrapper} ${styles.animate__fadeIn} `} >
          <h1 className={`${styles.heroStyle} ${styles.lastName}`}>PAN</h1>
            <img src="/images/potrait.jpeg" className={`${styles.portrait} ${globalStyles.hideMobile}`}
              height={400} width={400}
              alt={name}
            />
        </div>
      </div>
    </div>
  )
}

export default Hero;