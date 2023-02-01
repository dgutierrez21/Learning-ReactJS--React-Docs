import { Counter } from "./counter/Counter";
import { Counter02 } from "./counter02/Counter02";
import Form from "./form/Form";
import Form02 from "./form02/Form02";

const ElEstadoComoUnaInstantanea = () => {
  return (
    <>
      <Form />
      <div className="separator"></div>
      <Counter />
      <div className="separator"></div>
      <Counter02 />
      <div className="separator"></div>
      <Form02 />
    </>
  );
};

export default ElEstadoComoUnaInstantanea;
