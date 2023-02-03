import { useImmer } from "use-immer";

let siguienteId = 3;

const listaInicial = [
  { id: 0, titulo: "Big Bellies", visto: false },
  { id: 1, titulo: "Lunar Landscape", visto: false },
  { id: 2, titulo: "Terracotta Army", visto: true },
];

export const BucketList02Emmer = () => {
  const [miLista, actualizarMiLista] = useImmer(listaInicial);
  const [tuLista, actualizarTuLista] = useImmer(listaInicial);

  function handleAlternarMiLista(obraId, siguienteVisto) {
    actualizarMiLista((draft) => {
      const obra = draft.find((o) => o.id === obraId);

      obra.visto = siguienteVisto;
    });

    // actualizarMiLista(
    //   miLista.map((obra) => {
    //     if (obra.id === obraId) {
    //       // Crea un *nuevo* objeto con cambios

    //       return { ...obra, visto: siguienteVisto };
    //     } else {
    //       // No cambia
    //       return obra;
    //     }
    //   })
    // );
  }

  function handleAlternarTuLista(obraId, siguienteVisto) {
    actualizarTuLista((draft) => {
      const obra = draft.find((a) => a.id === obraId);
      obra.visto = siguienteVisto;
    });

    // actualizarTuLista(
    //   tuLista.map((obra) => {
    //     if (obra.id === obraId) {
    //       return { ...obra, visto: siguienteVisto };
    //     } else {
    //       return obra;
    //     }
    //   })
    // );
  }

  return (
    <>
      <h1>Lista de deseos de arte</h1>
      <h2>Mi lista de obras de arte para ver:</h2>

      <ElementoLista obras={miLista} onAlternar={handleAlternarMiLista} />

      <h2>Tu lista de obras de arte para ver:</h2>

      <ElementoLista obras={tuLista} onAlternar={handleAlternarTuLista} />
    </>
  );
};

function ElementoLista({ obras, onAlternar }) {
  return (
    <ul>
      {obras.map((obra) => (
        <li key={obra.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={obra.visto}
              onChange={(e) => {
                onAlternar(obra.id, e.target.checked);
              }}
            />
            {obra.titulo}
          </label>
        </li>
      ))}
    </ul>
  );
}
