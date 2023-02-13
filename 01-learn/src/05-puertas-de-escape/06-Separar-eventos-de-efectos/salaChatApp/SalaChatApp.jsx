import { useEffect, useState } from "react";
import { crearConexion } from "./chat";
import { mostrarNotificacion } from "./notificacion";

export const SalaChatApp = () => {
  const [salaId, setSalaId] = useState("general");
  const [esOscuro, setEsOscuro] = useState(false);

  return (
    <>
      <label htmlFor="">
        Elige la sala de chat:
        <select
          value={salaId}
          onChange={(e) => setSalaId(e.target.value)}
          name=""
          id=""
        >
          <option value="general">general</option>
          <option value="viajes">viajes</option>
          <option value="musica">musica</option>
        </select>
      </label>

      <label htmlFor="">
        <input
          type="checkbox"
          checked={esOscuro}
          onChange={(e) => setEsOscuro(e.target.checked)}
        />
        Usar tema oscuro
      </label>

      <hr />

      <SalaChat salaId={salaId} tema={esOscuro ? "oscuro" : "claro"} />
    </>
  );
};

const urlServidor = "https://localhost:1234";

function SalaChat({ salaId, tema }) {
  useEffect(() => {
    const conexion = crearConexion(urlServidor, salaId);
    conexion.on("conectado", () => {
      mostrarNotificacion("conectado", tema);
    });

    conexion.conectar();

    return () => conexion.desconectar();
  }, [tema, salaId]);

  return <h1>Bienvenidx a la sala {salaId}!</h1>;
}
