import { useImmer } from "use-immer";

let siguienteId = 3;
const listaInicial = [
  { id: 0, titulo: "Big Bellies", visto: false },
  { id: 1, titulo: "Lunar Landscape", visto: false },
  { id: 2, titulo: "Terracotta Army", visto: true },
];

export const BucketList = () => {
  const [lista, actualizarLista] = useImmer(listaInicial);

  function handleAlternar(ilustracionId, siguienteVisto) {
    actualizarLista((draft) => {
      const ilustracion = draft.find((a) => a.id === ilustracionId);
      ilustracion.visto = siguienteVisto;
    });
  }

  return (
    <>
      <h1>Lista de deseos de arte</h1>
      <h2>Mi lista de arte para ver:</h2>

      <ElementoLista ilustraciones={lista} onAlternar={handleAlternar} />
    </>
  );
};

function ElementoLista({ ilustraciones, onAlternar }) {
  return (
    <ul>
      {ilustraciones.map((ilustracion) => (
        <li key={ilustracion.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={ilustracion.visto}
              onChange={(e) => onAlternar(ilustracion.id, e.target.checked)}
            />
            {ilustracion.titulo}
          </label>
        </li>
      ))}
    </ul>
  );
}
