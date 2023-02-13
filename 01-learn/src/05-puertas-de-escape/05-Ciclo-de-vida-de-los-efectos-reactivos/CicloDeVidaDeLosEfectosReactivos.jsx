import { ChatApp } from "./chatApp/ChatApp";
import { ChatApp02 } from "./chatApp02/ChatApp02";
import { ChatApp03 } from "./chatApp03/ChatApp03";

export const CicloDeVidaDeLosEfectosReactivos = () => {
  return (
    <>
      <ChatApp />
      <div className="separator"></div>
      <ChatApp02 />
      <div className="separator"></div>
      <ChatApp03 />
    </>
  );
};
