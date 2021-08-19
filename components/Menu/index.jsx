import styles from './menu.module.scss';
import globalStyles from '../../styles/styles.module.scss';
import Link from 'next/link';

export const Menu = () => {
  const links = [
    'projects',
    'skills',
    'career',
    'contact'
  ]
  
  return (
    <div className={`${styles.menuWrapper}`}>
      <div className={styles.menuItemsOuterWrapper}>
        <ul className={`${styles.menuItemsWrapper} ${globalStyles.navStyle} ${globalStyles.hideMobile}`}>
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
      </div>
    </div>
  )
}

export default Menu;