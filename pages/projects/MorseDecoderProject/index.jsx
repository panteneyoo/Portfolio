import Iframe from 'react-iframe';
import styles from '../FeaturedProject/featuredproject.module.scss';
import useWindowSize from '../../../lib/hooks/window-size';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';

export const MorseDecoderProject = () => {
  const isMobile = useWindowSize();

  return (
    <div>
      { isMobile 
      ? (
        <div className={styles.mobileImageWrapper}>
          <div className={styles.verticalSpace} />
          <FadeInWhenVisible>
          <Iframe
                src="https://panteneyoo.github.io/MorseDecoder"
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
                src="https://panteneyoo.github.io/MorseDecoder"
                width="1200px"
                height="800px"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      )
    }
    </div>
  )
}

export default MorseDecoderProject;