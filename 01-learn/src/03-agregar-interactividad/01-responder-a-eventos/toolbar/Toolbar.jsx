export const Toolbar = () => {
  return (
    <>
      <BotonAlerta mensaje="Reproduciendo Música">
        Reproducir Música
      </BotonAlerta>

      <BotonAlerta mensaje="Subiendo Imagen">Subir imagen</BotonAlerta>
    </>
  );
};

function BotonAlerta({ mensaje, children }) {
  return (
    <button className="btn btn-primary me-3" onClick={() => alert(mensaje)}>
      {children}
    </button>
  );
}
