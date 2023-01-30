export const Toolbar02 = () => {
  return (
    <>
      <BotonPlay nombrePelicula="Rápidos y Furiosos 9" />

      <BotonSubir />

      <ToolbarEJ02
        onPlayMovie={() => alert("Reproduciendo película")}
        onUploadImage={() => alert("Subiendo imagen")}
      />
    </>
  );
};

function Boton({ onSmash, children }) {
  return (
    <button className="btn btn-primary me-3" onClick={onSmash}>
      {children}
    </button>
  );
}

function BotonSubir() {
  return <Boton onSmash={() => alert("Subiendo imagen")}>Subir Imagen</Boton>;
}

function BotonPlay({ nombrePelicula }) {
  function handlePlayClick() {
    alert(`Reproduciendo ${nombrePelicula}`);
  }

  return <Boton onSmash={handlePlayClick}>Reproducir "{nombrePelicula}"</Boton>;
}

export const ToolbarEJ02 = ({ onPlayMovie, onUploadImage }) => {
  return (
    <>
      <Boton onSmash={onPlayMovie}>Reproducir película</Boton>

      <Boton onSmash={onUploadImage}>Subir imagen</Boton>
    </>
  );
};
