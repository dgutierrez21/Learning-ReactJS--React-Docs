import React from "react";
import { getimageUrl } from "../profile/utils";
import { personas } from "./datos";

import "./styles.css";

export const List = () => {
  const listaElementos = personas.map((persona) => (
    <li key={persona.id}>
      <img src={getimageUrl(persona)} alt={persona.name} />
      <p>
        <b>{persona.name}: </b>
        {persona.profession} known for {persona.accomplishment}
      </p>
    </li>
  ));
  
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listaElementos}</ul>
    </article>
  );
};
