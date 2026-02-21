import styles from './_footer.module.scss'


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <img src='/logo/logo.svg'
             className={styles.logo}
             alt='logo' />
        <div className={styles.footer__container}>
          <h2>Креативное агентство 500na700</h2>
        </div>
      </div>
    </footer>
  )
}