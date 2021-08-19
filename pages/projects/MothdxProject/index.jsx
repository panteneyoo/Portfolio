import Image from 'next/image';
import styles from '../FeaturedProject/featuredproject.module.scss';
import useWindowSize from '../../../lib/hooks/window-size';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';

export const MothdxProject = () => {
  const isMobile = useWindowSize();

  return (
    <div>
      { isMobile 
      ? (
        <div className={styles.mobileImageWrapper}>
          <div className={styles.verticalSpace} />
          <FadeInWhenVisible>
            <Image
              src="/images/mothdx.png"
              width="400px"
              height="210px"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Image
              src="/images/Postman.png"
              width="400px"
              height="300px"
            />
          </FadeInWhenVisible>
          <div className={styles.verticalSpace} />
        </div>
      )
      : (
        <FadeInWhenVisible>
          <div className={`${styles.wrapper} `}>
            <div className={`${styles.iframeWrapper} `}>
              <Image
                src="/images/mothdx.png"
                width="1200px"
                height="640px"
              />
              <Image
                src="/images/Postman.png"
                width="1200px"
                height="900px"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      )
    }
    </div>
  )
}

export default MothdxProject;