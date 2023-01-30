export const Toolbar02 = () => {
  return (
    <>
      <BotonPlay nombrePelicula="Rápidos y Furiosos 9" />

      <BotonSubir />
    </>
  );
};

function Boton({ onClick, children }) {
  return (
    <button className="btn btn-primary me-3" onClick={onClick}>
      {children}
    </button>
  );
}

function BotonSubir() {
  return <Boton onClick={() => alert("Subiendo imagen")}>Subir Imagen</Boton>;
}

function BotonPlay({ nombrePelicula }) {
  function handlePlayClick() {
    alert(`Reproduciendo ${nombrePelicula}`);
  }

  return <Boton onClick={handlePlayClick}>Reproducir "{nombrePelicula}"</Boton>;
}
