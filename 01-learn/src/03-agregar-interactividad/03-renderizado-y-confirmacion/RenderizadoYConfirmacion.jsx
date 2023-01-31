import ClockApp from "./clockApp/ClockApp";
import { Imagen } from "./cpimagen/Imagen";
import Gallery from "./gallery/Gallery";

const RenderizadoYConfirmacion = () => {
  return (
    <>
      <Imagen />
      <div className="separator"></div>
      <Gallery />
      <div className="separator"></div>
      <ClockApp />
    </>
  );
};

export default RenderizadoYConfirmacion;
