import styles from './contactinfo.module.scss';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';

export const ContactInfo = () => {
  return (
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactWrapper}>
        <FadeInWhenVisible>
            <div className={styles.blurb}>
              Hiya! It looks like you made it to the end of my portfolio. Feel free to contact me via any of these links!
            </div>
          </FadeInWhenVisible>
          <div className={styles.links}>
            <FadeInWhenVisible hover>
              <Link href="https://www.linkedin.com/in/tingyu-pan-9b3948169/">
                <a>
                  <FaLinkedin size={30} />
                </a>
              </Link>
            </FadeInWhenVisible>
            <FadeInWhenVisible hover>
              <Link href="https://github.com/panteneyoo">
                <a>
                  <FaGithub size={30} />
                </a>
              </Link>
            </FadeInWhenVisible>
            <FadeInWhenVisible hover>
              <Link href="mailto:typan95@gmail.com">
                <a>
                  <FaEnvelope size={30} />
                </a>
              </Link>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
  )
}

export default ContactInfo;
