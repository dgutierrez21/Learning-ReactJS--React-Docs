import { useEffect } from "react";
import { crearConexion } from "./components/chat";

export const ChatRoomApp = () => {
  useEffect(() => {
    const conexion = crearConexion();
    conexion.conectar();

    return () => conexion.desconectar();
  }, []);

  return <h1>Bienvenido a el chat!</h1>;
};
