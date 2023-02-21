import { useEstadoEnLinea } from "../hooks/useEstadoEnLinea";

export const StatusBar = () => {
  const estaEnlinea = useEstadoEnLinea();
  return (
    <>
      <h1>{estaEnlinea ? "✅ En Línea" : "❌ Desconectado"}</h1>
    </>
  );
};
