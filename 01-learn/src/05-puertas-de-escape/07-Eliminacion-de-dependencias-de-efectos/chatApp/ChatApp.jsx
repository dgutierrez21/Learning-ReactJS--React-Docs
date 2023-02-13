import { useEffect, useState } from "react";
import { crearConexion } from "../../05-Ciclo-de-vida-de-los-efectos-reactivos/chatApp/chat";


const urlServidor = "https://localhost:1234";

export const ChatApp = () => {
  const [salaId, setSalaId] = useState("general");
  const [mostrando, setMostrando] = useState(false);
  return (
    <>
      <label htmlFor="salas">
        Elige la sala de chat:
        <select
          className="ms-2"
          value={salaId}
          onChange={(e) => setSalaId(e.target.value)}
          name="salas"
          id="salas"
        >
          <option value="general">general</option>
          <option value="viajes">viajes</option>
          <option value="musica">musica</option>
        </select>
      </label>

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
  }, [salaId]);

  return <h1>¡Bienvenido a la sala {salaId}!</h1>;
}
