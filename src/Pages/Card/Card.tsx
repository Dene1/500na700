import styles from './_card.module.scss'
import {Footer} from "@/components"
import {useEffect, useState} from "react";
import {newsApi} from "@/api";
import type {NewsItem} from "@/types/newsTypes.ts";

interface CardProps {
  params: {
    id: string;
  };
}

export const Card = (props: CardProps) => {
  const {params} = props
  const newId = params.id

  const [news, setNews] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    newsApi
      .getById(newId)
      .then((newData) => {
        setNews(newData);
        setHasError(false);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (hasError || !news) {
    return <div>Task Not found</div>;
  }

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