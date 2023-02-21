import { useEstadoEnLinea } from "../hooks/useEstadoEnLinea";

export const SaveButton = () => {
  const estaEnLinea = useEstadoEnLinea();

  function handleGuardarClick() {
    console.log("✅ Progreso Guardado.");
  }

  return (
    <>
      <button
        disabled={!estaEnLinea}
        onClick={handleGuardarClick}
        className="btn btn-primary"
      >
        {estaEnLinea ? "Guardar Progreso" : "Reconectando..."}
      </button>
    </>
  );
};
