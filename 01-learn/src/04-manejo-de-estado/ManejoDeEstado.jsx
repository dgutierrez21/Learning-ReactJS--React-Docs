import ElegirLaEstructuraDelEstado from "./02-Elegir-la-estructura-del-Estado/ElegirLaEstructuraDelEstado";
import CompartirEstadosEntreComponentes from "./03-Compartir-estados-entre-componentes/CompartirEstadosEntreComponentes";
import { ConservarYReiniciarElEstado } from "./04-Conservar-y-reiniciar-el-estado/ConservarYReiniciarElEstado";
import ReaccionarALasEntradasConElEstado from "./07-Ampliación-con-Reducer-y-Context/ReaccionarALasEntradasConElEstado";

const ManejoDeEstado = () => {
  return (
    <>
      {/* <ReaccionarALasEntradasConElEstado /> */}
      {/* <ElegirLaEstructuraDelEstado/> */}
      {/* <CompartirEstadosEntreComponentes /> */}
      <ConservarYReiniciarElEstado />
    </>
  );
};

export default ManejoDeEstado;
