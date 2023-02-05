import { ContadorApp } from "./contador/ContadorApp"
import { Contador02App } from "./contador02/Contador02App"

export const ConservarYReiniciarElEstado = () => {
  return (
    <>
    <ContadorApp/>
    <div className="separator bg-danger"></div>
    <Contador02App/>
    </>
  )
}
