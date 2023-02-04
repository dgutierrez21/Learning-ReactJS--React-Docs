import { FeedbackForm } from "./feedback-form/FeedbackForm";
import { Form } from "./form/Form";
import { MoviendoPunto } from "./moviendo-punto/MoviendoPunto";

const ElegirLaEstructuraDelEstado = () => {
  return (
    <>
      <MoviendoPunto />
      <div className="separator"></div>
      <FeedbackForm />
      <div className="separator"></div>
      <Form />
    </>
  );
};

export default ElegirLaEstructuraDelEstado;
