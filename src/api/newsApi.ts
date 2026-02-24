import type {NewsItem} from "@/types/newsTypes.ts";

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3002"

export const URL = `${BASE_URL}/news`

const newsApi = {
  getAll: (): Promise<NewsItem[]> => fetch(URL).then((res) => res.json())
}

export default newsApi