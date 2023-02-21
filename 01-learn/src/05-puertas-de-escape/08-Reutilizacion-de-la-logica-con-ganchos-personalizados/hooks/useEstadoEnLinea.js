import { useEffect, useState } from "react";

export const useEstadoEnLinea = () => {
  const [estaEnlinea, setEstaEnlinea] = useState(true);

  useEffect(() => {
    function handleEnLinea() {
      setEstaEnlinea(true);
    }

    function handleDesconectado() {
      setEstaEnlinea(false);
    }

    window.addEventListener("online", handleEnLinea);
    window.addEventListener("offline", handleDesconectado);

    return () => {
      window.removeEventListener("online", handleEnLinea);
      window.removeEventListener("offline", handleDesconectado);
    };
  }, []);

  return estaEnlinea;
};
