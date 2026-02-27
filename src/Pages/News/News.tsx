import styles from './_news.module.scss'
import useNews from '@/hooks/useNews'
import {RouterLink} from "@/components";

interface NewsItem {
  id: string | number
  img: string
  title: string
  description: string
  date: string
}

export const News = () => {
  const {news} = useNews()

  return (
    <section className={styles.news}>
      <h1 className={styles.news__title}>Новости</h1>
      <div className={styles.news__content}>
        {!news || news.length === 0 ? (
          <div className={styles.news__loading}>
            Загрузка...
          </div>
        ) : (
          news.map((item: NewsItem) => (
            <RouterLink key={item.id}
                        to={`/news/${item.id}`}
                        aria-label="News detail page"
                        className={styles.news__container}>
              <img src={item.img}
                   alt={item.title} />
              <div className={styles.news__list}>
                <h2 className={styles.news__container__title}>{item.title}</h2>
                <p className={styles.news__description}>{item.description}</p>
                <div className={styles.news__date}>{item.date}</div>
              </div>
            </RouterLink>
          ))
        )}
      </div>
    </section>
  )
}