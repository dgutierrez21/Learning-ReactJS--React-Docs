import { useContext } from "react";
import { levelContext } from "../levelContext";

export const Heading = ({ children }) => {
  const nivel = useContext(levelContext);

  switch (nivel) {
    case 1:
      return <h1>{children}</h1>;

      break;
    case 2:
      return <h2>{children}</h2>;

      break;
    case 3:
      return <h3>{children}</h3>;

      break;
    case 4:
      return <h4>{children}</h4>;

      break;
    case 5:
      return <h5>{children}</h5>;

      break;
    case 6:
      return <h6>{children}</h6>;

      break;

    default:
      throw Error("Nivel desconocido: " + nivel);
  }
};
