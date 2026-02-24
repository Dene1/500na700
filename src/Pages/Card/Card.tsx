import styles from './_card.module.scss'
import {Footer} from "@/components"
import type {NewsItem} from "@/types/newsTypes"

interface CardProps {
  news: NewsItem
}

export const Card = ({news}: CardProps) => {
  if (!news) return null

  return (
    <>
      <section className={styles.card}>
        <div>
          <img src={news.img}
               alt={news.title} />
        </div>

        <div className={styles.card__content}>
          <h1 className={styles.card__title}>{news.title}</h1>
          <div className={styles.card__date}>{news.date}</div>
          <h3 className={styles.card__subtitle}>{news.subtitle}</h3>
          <p className={styles.card__description}>{news.description}</p>
        </div>
      </section>
      <Footer />
    </>
  )
}