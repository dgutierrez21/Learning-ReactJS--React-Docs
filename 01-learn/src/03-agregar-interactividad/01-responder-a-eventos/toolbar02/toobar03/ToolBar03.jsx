export const ToolBar03 = () => {
  return (
    <div
      className="p-3 bg-black rounded"
      onClick={() => alert("Haz hecho click en el Toolbar")}
    >
      <button
        className="btn btn-primary me-3"
        onClick={() => alert("Reproduciendo película")}
      >
        Reproducir película
      </button>

      <button
        className="btn btn-primary"
        onClick={() => alert("Subiendo imagen")}
      >
        Subir imagen
      </button>
    </div>
  );
};
