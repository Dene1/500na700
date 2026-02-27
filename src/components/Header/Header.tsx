import styles from './_header.module.scss'
import {Button, RouterLink} from "@/components"

interface HeaderProps {
  onOpenForm?: () => void
}

export const Header = ({onOpenForm}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <RouterLink to='/'
                    aria-label='На главную страницу'
                    className={styles.header__logo}>
          <img src='/logo/logo.svg'
               className={styles.logo}
               alt='logo' />
        </RouterLink>

        <div className={styles.header__container}>
          <Button content='Связаться с нами'
                  variant='whiteFont'
                  onClick={onOpenForm} />
        </div>
      </div>
    </header>
  )
}