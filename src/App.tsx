import {Header} from "@/components";
import {Form} from "@/components/Form/Form.tsx";
import {News, Card} from "@/Pages";
import {useState} from "react";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const isNewsPage = window.location.pathname.startsWith('/news/') &&
    window.location.pathname !== '/news'

  const handleCloseForm = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsFormOpen(false)
      setIsClosing(false)
    }, 100)
  }

  return (
    <>
      <Header onOpenForm={() => setIsFormOpen(true)} />
      <main className='main'>
        {isFormOpen && (
          <Form
            onClose={handleCloseForm}
            isClosing={isClosing}
          />
        )}
        {isNewsPage ? <Card /> : <News />}
      </main>
    </>
  )
}

export default App