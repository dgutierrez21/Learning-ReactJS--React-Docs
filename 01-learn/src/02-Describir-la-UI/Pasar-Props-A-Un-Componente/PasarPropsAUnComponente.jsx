import React from "react";
import { Profile } from "./profile/Profile";

export const PasarPropsAUnComponente = () => {
  return (
    <Profile
      persona={{ nombre: "Lin Lanying", imageId: "1bX5QH6" }}
      tamanio={100}
      tema={{ backgroundColor: "red" }}
    />
  );
};
