import { ResponderAEventos } from "./01-responder-a-eventos/ResponderAEventos";
import ElEstadoLaMemoriaDeUnComponente from "./02-el-estado--la-memoria-de-un-componente/ElEstadoLaMemoriaDeUnComponente";
import RenderizadoYConfirmacion from "./03-renderizado-y-confirmacion/RenderizadoYConfirmacion";
import ElEstadoComoUnaInstantanea from "./04-el-estado-como-una-instantanea/ElEstadoComoUnaInstantanea";
import PonerEnColaUnaSerieDeActualizacionesDeEstado from "./05-poner-en-cola-una-serie-de-actualizaciones-de-estado/PonerEnColaUnaSerieDeActualizacionesDeEstado";

const AgregarInteractividad = () => {
  return (
    <>
      {/* <ResponderAEventos /> */}
      {/* <ElEstadoLaMemoriaDeUnComponente /> */}
      {/* <RenderizadoYConfirmacion /> */}
      {/* <ElEstadoComoUnaInstantanea /> */}
      <PonerEnColaUnaSerieDeActualizacionesDeEstado />
    </>
  );
};

export default AgregarInteractividad;
