import React from "react";
import { getimageUrl } from "../../../overview/profile/utils";

export const Avatar = ({
  persona = { nombre: "Katsuko Saruhashi", imageId: "YfeOqp2" },
  tamanio,
  tema = { backgroundColor: "black" },
}) => {
  return (
    <img
      style={tema}
      className="avatar p-2"
      src={getimageUrl(persona)}
      alt={persona.nombre}
      width={tamanio}
      height={tamanio}
    />
  );
};
