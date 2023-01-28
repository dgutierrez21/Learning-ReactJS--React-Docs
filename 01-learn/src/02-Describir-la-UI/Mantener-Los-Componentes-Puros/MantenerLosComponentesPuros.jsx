import React from "react";
import { RecetaApp } from "./receta/Receta";
import { ReunionTomarTe } from "./reunionTomarTe/ReunionTomarTe";
import { Teaset } from "./teaset/Teaset";

export const MantenerLosComponentesPuros = () => {
  return (
    <>
      <RecetaApp />
      <div className="separator"></div>
      <Teaset />
      <div className="separator"></div>
      <ReunionTomarTe />
    </>
  );
};
