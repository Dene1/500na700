import {Header} from "@/components";
import {Form} from "@/components/Form/Form.tsx";
import {News, Card} from "@/Pages";
import {useState} from "react";

export function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const isNewsPage = window.location.pathname.startsWith('/news/') &&
    window.location.pathname !== '/news'

  return (
    <>
      <Header onOpenForm={() => setIsFormOpen(true)} />
      {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
      {isNewsPage ? <Card /> : <News />}
    </>
  )
}