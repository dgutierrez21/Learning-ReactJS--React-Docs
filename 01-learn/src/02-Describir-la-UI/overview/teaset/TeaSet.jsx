export const TeaSet = () => {
  return (
    <>
      <Taza />
      <Taza />
      <Taza />

      <div className="my-5"></div>

      <Taza2 invitado={1} />
      <Taza2 invitado={2} />
      <Taza2 invitado={3} />
    </>
  );
};

let invitado = 0;

function Taza() {
  console.log(invitado);
  // Malo: ¡cambiar una variable preexistente!
  invitado = invitado + 1;

  return <h2>Taza de té para invitado #{invitado}</h2>;
}

function Taza2({ invitado }) {
  return <h2>Taza de té para invitado #{invitado}</h2>;
}
