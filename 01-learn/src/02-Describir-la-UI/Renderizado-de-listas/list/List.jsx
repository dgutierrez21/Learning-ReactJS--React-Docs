import { getimageUrl } from "../../overview/profile/utils";

const personas = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
  () => {
    console.log("Hola mundo");
  },
];

const personas2 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export const List = () => {
  const listaElementos = personas.map((persona) => <li>{persona}</li>);

  const chemist = personas2.filter(
    (persona) => persona.profession === "chemist"
  );

  const chemistListaElementos = chemist.map((persona) => (
    <li>
      <img src={getimageUrl(persona)} alt={persona.name} />

      <p>
        <b>{persona.name}: </b>
        {persona.profession} known for {persona.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <ul>{listaElementos}</ul>

      <ul>{chemistListaElementos}</ul>
    </>
  );
};
