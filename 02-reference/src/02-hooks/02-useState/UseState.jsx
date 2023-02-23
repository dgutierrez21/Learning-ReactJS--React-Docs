import { CampoTexto } from "./campoTexto/CampoTexto";
import { Contador } from "./Contador";

const UseState = () => {
  return (
    <div className="p-4">
      <Contador />
      <div className="separador"></div>
      <CampoTexto />
    </div>
  );
};

export default UseState;
