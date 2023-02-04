import { FeedbackForm } from "./feedback-form/FeedbackForm";
import { MoviendoPunto } from "./moviendo-punto/MoviendoPunto";

const ElegirLaEstructuraDelEstado = () => {
  return (
    <>
      <MoviendoPunto />
      <div className="separator"></div>
      <FeedbackForm />
    </>
  );
};

export default ElegirLaEstructuraDelEstado;
