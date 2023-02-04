import { FeedbackForm } from "./feedback-form/FeedbackForm";
import { Form } from "./form/Form";
import { Menu } from "./menu/Menu";
import { MoviendoPunto } from "./moviendo-punto/MoviendoPunto";
import { PlanDeViaje } from "./plan-de-viaje/PlanDeViaje";

const ElegirLaEstructuraDelEstado = () => {
  return (
    <>
      <MoviendoPunto />
      <div className="separator"></div>
      <FeedbackForm />
      <div className="separator"></div>
      <Form />
      <div className="separator"></div>
      <Menu />
      <div className="separator"></div>
      <PlanDeViaje />
    </>
  );
};

export default ElegirLaEstructuraDelEstado;
