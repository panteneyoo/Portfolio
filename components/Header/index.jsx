import styles from './header.module.scss';
import globalStyles from '../../styles/styles.module.scss';
import Link from 'next/link';
import Hamburger from '../Hamburger';
import { useState } from 'react';

export const Header = ({ open, setOpen }) => {
  const links = [
    'projects',
    'skills',
    'career',
    'contact'
  ]

  const [logo, setLogo] = useState("/images/pingu_wave.png");

  return (
    <div>
    <header className={styles.headerWrapper}>
      <div>
        <Link href="/">
          <a 
            onMouseEnter={() => setLogo("/images/pingu_watch.png")} 
            onMouseLeave={() => setLogo("/images/pingu_wave.png")}
          >
            <img src={logo} className={styles.pingu}/>
          </a>
        </Link>
      </div>
      <ul className={`${styles.navWrapper} ${globalStyles.navStyle} ${globalStyles.hideMobile}`}>
        { links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={`/${link}`}>
                  <a>{link}</a>
                </Link>
              </li>
            )}) 
          }
      </ul>
      <div className={`${styles.hamburgerWrapper} ${globalStyles.hideDesktop}`}>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </header>
    </div>
  )
}

export default Header;
