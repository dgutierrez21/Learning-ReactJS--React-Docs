import { BucketList } from "./bucketList/BucketList";
import { CampoTexto } from "./campoTexto/CampoTexto";
import { CheckBox } from "./checkbox/CheckBox";
import { Contador } from "./Contador";
import { Contador02 } from "./contador02/Contador02";
import { Contador03 } from "./contador03/Contador03";
import { CountLabelApp } from "./countLabel/CountLabelApp";
import { FormObj } from "./formObj/FormObj";
import { FormObjAni } from "./formObjAni/formObjAni";
import { Formulario } from "./formulario/Formulario";
import { KeyReset } from "./keyReset/KeyReset";
import { TaskApp } from "./taskApp/TaskApp";

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
      <div className="separador"></div>
      <FormObj />
      <div className="separador"></div>
      <FormObjAni />
      <div className="separador"></div>
      <TaskApp />
      <div className="separador"></div>
      <BucketList />
      <div className="separador"></div>
      <KeyReset />
      <div className="separador"></div>
      <CountLabelApp />
    </div>
  );
};

export default UseState;
