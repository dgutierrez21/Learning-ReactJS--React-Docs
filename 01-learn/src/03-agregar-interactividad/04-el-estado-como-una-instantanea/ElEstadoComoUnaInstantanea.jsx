import { Counter } from "./counter/Counter";
import Form from "./form/Form";

const ElEstadoComoUnaInstantanea = () => {
  return (
    <>
      <Form />
      <div className="separator"></div>
      <Counter />
    </>
  );
};

export default ElEstadoComoUnaInstantanea;
