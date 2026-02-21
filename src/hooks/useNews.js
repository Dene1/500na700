import { useState, useEffect } from "react"
import newsApi from "@/api/newsApi.js"

const useNews = () => {
  const [news, setNews] = useState([])

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