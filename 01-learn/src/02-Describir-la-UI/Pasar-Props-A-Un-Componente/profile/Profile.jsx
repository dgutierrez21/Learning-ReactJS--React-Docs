import React from "react";
import { Avatar } from "./components/Avatar";

export const Profile = () => {
  return (
    <>
      <Avatar
        persona={{ nombre: "Lin Lanying", imageId: "1bX5QH6" }}
        tamanio={100}
      />
      <Avatar
        persona={{ nombre: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        tamanio={100}
      />
      <Avatar
        persona={{ nombre: "Aklilu Lemma", imageId: "OKS67lh" }}
        tamanio={50}
      />
    </>
  );
};
