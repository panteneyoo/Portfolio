import Iframe from 'react-iframe';
import styles from './featuredproject.module.scss';
import useWindowSize from '../../../lib/hooks/window-size';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';

export const FeaturedProject = () => {
  const isMobile = useWindowSize();

  return (
    <div>
      { isMobile 
      ? (
        <div className={styles.mobileImageWrapper}>
          <div className={styles.verticalSpace} />
          <FadeInWhenVisible>
          <Iframe
                src="https://nbviewer.jupyter.org/gist/panteneyoo/6dca369e1339602c6ca72dd0eccfba80"
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
                src="https://nbviewer.jupyter.org/gist/panteneyoo/6dca369e1339602c6ca72dd0eccfba80"
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

export default FeaturedProject; 