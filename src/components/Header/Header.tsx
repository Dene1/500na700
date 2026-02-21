import styles from './_header.module.scss'
import {Button} from "@components"

interface HeaderProps {
  onOpenForm?: () => void
}

export const Header = ({onOpenForm}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a href='/'
           aria-label='На главную страницу'
           className={styles.header__logo}>
          <img src='/logo/logo.svg'
               className={styles.logo}
               alt='logo' />
        </a>

        <div className={styles.header__container}>
          <Button content='Связаться с нами'
                  variant='whiteFont'
                  onClick={onOpenForm} />
        </div>
      </div>
    </header>
  )
}