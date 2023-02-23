import { CampoTexto } from "./campoTexto/CampoTexto";
import { CheckBox } from "./checkbox/CheckBox";
import { Contador } from "./Contador";
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
    </div>
  );
};

export default UseState;
