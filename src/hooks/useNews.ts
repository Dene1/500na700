import {useState, useEffect} from "react"
import newsApi from "@/api/newsApi.ts"
import type {NewsItem} from "@/types/newsTypes.ts";

const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    setTimeout(() => {
      newsApi.getAll().then(setNews)
    }, 2000)
  }, [])

  return {
    news
  }
}

export default useNews