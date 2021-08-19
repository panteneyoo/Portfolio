import Iframe from 'react-iframe';
import styles from '../FeaturedProject/featuredproject.module.scss';
import useWindowSize from '../../../lib/hooks/window-size';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';

export const RaidenProject = () => {
  const isMobile = useWindowSize();

  return (
    <div>
      { isMobile 
      ? (
        <div className={styles.mobileImageWrapper}>
          <div className={styles.verticalSpace} />
          <FadeInWhenVisible>
          <Iframe
                src="/images/RaidenGame.mp4"
                height="400px"
              />
          </FadeInWhenVisible>
          <div className={styles.verticalSpace} />
        </div>
      )
      : (
        <FadeInWhenVisible>
          <div className={`${styles.wrapper} `}>
            <div className={`${styles.iframeWrapper} `}>
              <Iframe
                src="/images/RaidenGame.mp4"
                width="1200px"
                height="600px"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      )
    }
    </div>
  )
}

export default RaidenProject;