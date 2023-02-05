import { ContadorApp } from "./contador/ContadorApp"
import { Contador02App } from "./contador02/Contador02App"
import { Contador03App } from "./contador03/Contador03App"

export const ConservarYReiniciarElEstado = () => {
  return (
    <>
    <ContadorApp/>
    <div className="separator bg-danger"></div>
    <Contador02App/>
    <div className="separator bg-danger"></div>
    <Contador03App/>
    </>
  )
}
