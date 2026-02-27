import {Header} from "@/components";
import {Form} from "@/components/Form/Form.tsx";
import {News, Card} from "@/Pages";
import {useState} from "react";
import Router, {type RouteComponent} from "./Router";

const TypedCard = Card as RouteComponent;

export function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const routes = {
    "/": News,
    "/news/:id": TypedCard,
    "*": () => <div>404 Page Not Found</div>,
  };

  return (
    <>
      <Header onOpenForm={() => setIsFormOpen(true)} />
      {isFormOpen && <Form onClose={() => setIsFormOpen(false)} />}
      <Router routes={routes} />
    </>
  )
}