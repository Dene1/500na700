import {Header} from "@/components";
import {Form} from "@/components/Form/Form.tsx";
import {News, Card} from "@/Pages";
import {useState} from "react";
import useNews from "@/hooks/useNews.ts";

function App() {
  const {news} = useNews()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const path = window.location.pathname
  const isNewsPage = path.startsWith('/news/') && path !== '/news'
  const newsId = isNewsPage ? path.split('/')[2] : null

  const currentNews = newsId
    ? news.find(item => item.id.toString() === newsId.toString())
    : null

  console.log('App:', {newsId, currentNews})

  return (
    <>
      <Header onOpenForm={() => setIsFormOpen(true)} />
      {isFormOpen && (<Form onClose={() => setIsFormOpen(false)} />)}
      {newsId && currentNews ? <Card news={currentNews} /> : <News />}
    </>
  )
}

export default App