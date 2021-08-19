import styles from './hamburger.module.scss'

export const Hamburger = ({ open, setOpen }) => {
  return (
    <div className={`${styles.hamburgerWrapper} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
      <div />
      <div />
    </div>
  )
}

export default Hamburger;