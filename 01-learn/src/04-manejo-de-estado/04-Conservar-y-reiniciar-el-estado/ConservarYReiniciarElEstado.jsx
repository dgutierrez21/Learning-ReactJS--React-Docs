import { ContadorApp } from "./contador/ContadorApp";
import { Contador02App } from "./contador02/Contador02App";
import { Contador03App } from "./contador03/Contador03App";
import { Contador04App } from "./contador04/Contador04App";

export const ConservarYReiniciarElEstado = () => {
  return (
    <>
      <ContadorApp />
      <div className="separator bg-danger"></div>
      <Contador02App />
      <div className="separator bg-danger"></div>
      <Contador03App />
      <div className="separator bg-danger"></div>
      <Contador04App />
    </>
  );
};
