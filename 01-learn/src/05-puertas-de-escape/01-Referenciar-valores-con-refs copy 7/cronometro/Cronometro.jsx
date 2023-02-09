import { useRef, useState } from "react";

export const Cronometro = () => {
  const [horaDeInicio, setHoraDeInicio] = useState(null);
  const [ahora, setAhora] = useState(null);

  const refIntervalo = useRef(null);

  function handleEmpezar() {
    // empieza a contar
    setHoraDeInicio(Date.now());
    setAhora(Date.now());

    // setInterval(() => {
    //   // Actualiza el tiempo actual cada 10 milisegundos.
    //   setAhora(Date.now());
    // }, 10);

    clearInterval(refIntervalo.current);

    refIntervalo.current = setInterval(() => {
      // Actualiza el tiempo actual cada 10 milisegundos.
      setAhora(Date.now());
    }, 10);
  }

  function handleDetener() {
    clearInterval(refIntervalo.current);
  }

  let segundoTranscurridos = 0;
  if (horaDeInicio != null && ahora != null) {
    segundoTranscurridos = (ahora - horaDeInicio) / 1000;
  }

  return (
    <>
      <h1>Tiempo transcurrido: {segundoTranscurridos.toFixed(3)}</h1>
      <button onClick={handleEmpezar} className="btn btn-primary">
        Iniciar
      </button>
      <button onClick={handleDetener} className="btn btn-primary ms-3">
        Detener
      </button>
    </>
  );
};
