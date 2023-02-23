import { CampoTexto } from "./campoTexto/CampoTexto";
import { CheckBox } from "./checkbox/CheckBox";
import { Contador } from "./Contador";
import { Contador02 } from "./contador02/Contador02";
import { Contador03 } from "./contador03/Contador03";
import { Formulario } from "./formulario/Formulario";

const UseState = () => {
  return (
    <div className="p-4">
      <Contador />
      <div className="separador"></div>
      <CampoTexto />
      <div className="separador"></div>
      <CheckBox />
      <div className="separador"></div>
      <Formulario />
      <div className="separador"></div>
      <Contador02 />
      <div className="separador"></div>
      <Contador03 />
    </div>
  );
};

export default UseState;
