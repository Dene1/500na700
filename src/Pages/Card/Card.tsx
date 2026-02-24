import styles from './_card.module.scss'
import useNews from '@/hooks/useNews'
import {Footer} from "@/components"

interface NewsItem {
  id: string | number
  img: string
  title: string
  description: string
  date: string
  subtitle: string
}

export const Card = () => {
  const {news} = useNews()

  const newsId = window.location.pathname.split('/').pop()
  const currentNews = news?.find((item: NewsItem) => String(item.id) === newsId)

  if (!currentNews || news.length === 0) {
    return <div className={styles.card__loading}>Загрузка...</div>
  }

  return (
    <>
      <section className={styles.card}>
        <div>
          <img src={currentNews.img}
               alt={currentNews.title} />
        </div>
        <div className={styles.card__content}>
          <h1 className={styles.card__title}>{currentNews.title}</h1>
          <div className={styles.card__date}>{currentNews.date}</div>
          <h3 className={styles.card__subtitle}>{currentNews.subtitle}</h3>
          <p className={styles.card__description}>{currentNews.description}</p>
        </div>
      </section>
      <Footer />
    </>
  )
}