import {Header} from "@/components";
import {Form} from "@/components/Form/Form.tsx";
import {News, Card} from "@/Pages";
import {useMemo, useState} from "react";
import useNews from "@/hooks/useNews.ts";

function App() {
  const {news} = useNews()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const newsId = useMemo(() => {
    const path = window.location.pathname
    if (path.startsWith('/news/') && path !== '/news') {
      return path.split('/')[2]
    }
    return null
  }, [])

  const currentNews = useMemo(() => {
    if (newsId && news.length > 0) {
      return news.find(item => item.id === Number(newsId)) || null
    }
    return null
  }, [newsId, news])

  console.log('Рендер App:', {newsId, currentNews: currentNews?.id})

  return (
    <>
      <Header onOpenForm={() => setIsFormOpen(true)} />
      <main className='main'>
        {isFormOpen && (<Form onClose={() => setIsFormOpen(false)} />)}
        {newsId ? <Card news={currentNews} /> : <News />}
      </main>
    </>
  )
}

export default App