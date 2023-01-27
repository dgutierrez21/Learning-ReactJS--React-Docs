import React from "react";
import { Profile } from "./profile/Profile";
import { Profile02 } from "./profile02/Profile02";

export const PasarPropsAUnComponente = () => {
  return (
    <>
      <Profile
        persona={{ nombre: "Lin Lanying", imageId: "1bX5QH6" }}
        tamanio={100}
        tema={{ backgroundColor: "red" }}
      />
      <div className="separator"></div>
      <Profile02 />
    </>
  );
};
