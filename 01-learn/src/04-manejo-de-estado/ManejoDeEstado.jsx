import ElegirLaEstructuraDelEstado from "./02-Elegir-la-estructura-del-Estado/ElegirLaEstructuraDelEstado";
import CompartirEstadosEntreComponentes from "./03-Compartir-estados-entre-componentes/CompartirEstadosEntreComponentes";
import { ConservarYReiniciarElEstado } from "./04-Conservar-y-reiniciar-el-estado/ConservarYReiniciarElEstado";
import { ExtraccionDeLaLogicaDeEstadosEnUnReductor } from "./05-Extracción-de-la-lógica-de-estados-en-un-reductor/ExtraccionDeLaLogicaDeEstadosEnUnReductor";
import ReaccionarALasEntradasConElEstado from "./07-Ampliación-con-Reducer-y-Context/ReaccionarALasEntradasConElEstado";

const ManejoDeEstado = () => {
  return (
    <>
      {/* <ReaccionarALasEntradasConElEstado /> */}
      {/* <ElegirLaEstructuraDelEstado/> */}
      {/* <CompartirEstadosEntreComponentes /> */}
      {/* <ConservarYReiniciarElEstado /> */}
      <ExtraccionDeLaLogicaDeEstadosEnUnReductor />
    </>
  );
};

export default ManejoDeEstado;
