export const Teaset = () => {
  return (
    <>
      <Taza />
      <Taza />
      <Taza />
      <h1>-----------</h1>
      <Taza2 invitados={10} />
      <Taza2 invitados={11} />
      <Taza2 invitados={12} />
    </>
  );
};

let invitados = 0;

function Taza() {
  // Mal: ¡Cambiar una variable preexistente!
  invitados = invitados + 1;

  return <h1>Taza de té para invitados #{invitados}</h1>;
}

function Taza2({ invitados }) {
  return <h1>Taza de té para invitados #{invitados}</h1>;
}
