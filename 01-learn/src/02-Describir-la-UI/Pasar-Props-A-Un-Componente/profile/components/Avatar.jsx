import React from "react";
import { getimageUrl } from "../../../overview/profile/utils";

export const Avatar = ({
  persona = { nombre: "Katsuko Saruhashi", imageId: "YfeOqp2" },
  tamanio,
}) => {
  return (
    <img
      className="avatar"
      src={getimageUrl(persona)}
      alt={persona.nombre}
      width={tamanio}
      height={tamanio}
    />
  );
};
