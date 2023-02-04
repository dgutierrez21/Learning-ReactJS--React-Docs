import { useState } from "react";
import { planDeViajeInicial } from "./lugares";

export const PlanDeViaje = () => {
  const [plan, setPlan] = useState(planDeViajeInicial);

  function handleCompletado(padreId, hijoId) {
    const padre = plan[padreId];
    // Crea una nueva versión del lugar padre
    // que no incluya este ID hijo.

    const siguientePadre = {
      ...padre,
      childIds: padre.childIds.filter((id) => id !== hijoId),
    };
    // Actualizar el objeto de estado raíz...

    setPlan({
      ...plan,
      // ...para que tenga el padre actualizado.
      [padreId]: siguientePadre,
    });
  }
  const root = plan[0];
  const IdsPlaneta = root.childIds;

  return (
    <>
      <h2>Lugares a visitar</h2>

      <ol>
        {IdsPlaneta.map((id) => (
          <ArbolDeLugar
            key={id}
            id={id}
            lugarPorId={plan}
            padreId={0}
            onCompletado={handleCompletado}
          />
        ))}
      </ol>
    </>
  );
};

function ArbolDeLugar({ id, lugarPorId, padreId, onCompletado }) {
  const lugar = lugarPorId[id];

  const idsHijos = lugar.childIds;

  return (
    <>
      <li className="d-block my-3">
        {lugar.title}
        <button
          className="btn btn-primary ms-3"
          onClick={() => onCompletado(padreId, id)}
        >
          Completar
        </button>
        {idsHijos.length > 0 && (
          <ol>
            {idsHijos.map((idHijo) => (
              <ArbolDeLugar
                key={idHijo}
                id={idHijo}
                lugarPorId={lugarPorId}
                onCompletado={onCompletado}
                padreId={id}
              />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
