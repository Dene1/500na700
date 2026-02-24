import type {NewsItem} from "@/types/newsTypes.ts";

const URL: string = import.meta.env.VITE_API_URL || "http://localhost:3002/news"

const newsApi = {
  getAll: (): Promise<NewsItem[]> => fetch(URL).then((res) => res.json())
}

export default newsApi