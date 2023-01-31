import { Imagen } from "./cpimagen/Imagen";
import Gallery from "./gallery/Gallery";

const RenderizadoYConfirmacion = () => {
  return (
    <>
      <Imagen />
      <div className="separator"></div>
      <Gallery />
    </>
  );
};

export default RenderizadoYConfirmacion;
