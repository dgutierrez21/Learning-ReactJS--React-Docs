import { useEffect, useState } from "react";
import { crearConexion } from "../chatApp/chat";

const salaId = "general";

const urlServidor = "https://localhost:1234";

export const ChatApp03 = () => {
  const [mostrando, setMostrando] = useState(false);
  return (
    <>
      <button
        onClick={() => setMostrando(!mostrando)}
        className="btn btn-primary"
      >
        {mostrando ? "Cerrar Chat" : "Abrir Chat"}
      </button>

      {mostrando && <hr />}

      {mostrando && <SalaDeChat salaId={salaId} />}
    </>
  );
};

function SalaDeChat({ salaId }) {
  useEffect(() => {
    const conexion = crearConexion(urlServidor, salaId);

    conexion.conectar();

    return () => conexion.desconectar();
  }, [salaId, urlServidor]);

  return (
    <>
      <h1>¡Bienvenido a la sala {salaId}!</h1>
    </>
  );
}
