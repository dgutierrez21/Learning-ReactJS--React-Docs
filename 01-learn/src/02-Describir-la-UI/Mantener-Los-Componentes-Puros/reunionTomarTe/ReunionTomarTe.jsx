export const ReunionTomarTe = () => {
  let tazas = [];

  for (let i = 1; i < 13; i++) {
    tazas.push(<Taza key={i} invitado={i} />);
  }
  return tazas;
};

function Taza({ invitado }) {
  return <h2>Taza de té para invitado #{invitado}</h2>;
}
