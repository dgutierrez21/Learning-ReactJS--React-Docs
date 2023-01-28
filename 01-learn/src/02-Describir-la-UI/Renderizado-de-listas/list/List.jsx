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

export const List = () => {
  const listaElementos = personas.map((persona) => <li>{persona}</li>);
  return (
    <>
      <ul>{listaElementos}</ul>
    </>
  );
};
