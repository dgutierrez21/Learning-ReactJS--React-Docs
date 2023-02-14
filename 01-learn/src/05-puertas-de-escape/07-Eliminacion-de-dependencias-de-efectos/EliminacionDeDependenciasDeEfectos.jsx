import { ChatApp } from "./chatApp/ChatApp";
import { ChatApp02 } from "./chatApp02/ChatApp02";

const EliminacionDeDependenciasDeEfectos = () => {
  return <>
  <ChatApp/>
  <div className="separator"></div>
  <ChatApp02/>
  </>;
};

export default EliminacionDeDependenciasDeEfectos;
