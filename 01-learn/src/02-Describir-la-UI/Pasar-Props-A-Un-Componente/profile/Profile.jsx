import React from "react";
import { Avatar } from "./components/Avatar";

export const Profile = (props) => {
  return (
    <>
      <Avatar {...props} />
      <Avatar
        persona={{ nombre: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        tamanio={100}
      />
      <Avatar
        persona={{ nombre: "Aklilu Lemma", imageId: "OKS67lh" }}
        tamanio={50}
      />
      <Avatar tamanio={120} />
    </>
  );
};
