import { Form } from "./form/Form";
import { SaveButton } from "./saveButton/SaveButton";
import { StatusBar } from "./statusBar/StatusBar";

const ReutilizacionDeLaLogicaConGanchosPersonalizados = () => {
  return (
    <>
      <StatusBar />
      <div className="separator"></div>
      <SaveButton />
      <div className="separator"></div>
      <Form />
    </>
  );
};

export default ReutilizacionDeLaLogicaConGanchosPersonalizados;
