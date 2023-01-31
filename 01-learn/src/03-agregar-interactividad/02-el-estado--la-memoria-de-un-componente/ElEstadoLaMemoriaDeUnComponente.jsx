import Gallery from "./gallery/Gallery";

const ElEstadoLaMemoriaDeUnComponente = () => {
  return (
    <>
      <Gallery />
      <div className="separator"></div>
      <Gallery />
    </>
  );
};

export default ElEstadoLaMemoriaDeUnComponente;
