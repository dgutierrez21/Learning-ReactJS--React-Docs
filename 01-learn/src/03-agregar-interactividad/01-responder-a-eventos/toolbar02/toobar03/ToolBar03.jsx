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

      <Boton onClick={() => alert("Subiendo imagen")}>SP | Subir Imagen</Boton>
      <Boton onClick={() => alert("Reproduciendo película")}>
        SP | Reproducir película
      </Boton>
    </div>
  );
};

function Boton({ onClick, children }) {
  return (
    <button
      className="btn btn-primary ms-3"
      onClick={(e) => {
        e.stopPropagation();

        onClick();
      }}
    >
      {children}
    </button>
  );
}
