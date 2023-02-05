import { useState } from "react";

export const Acordion = () => {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>

      <Panel titulo="Acerca de" estaActivo={true}>
        Con unos 2 millones de habitantes, Almaty es la ciudad más grande de
        Kazajstán. De 1929 a 1997 fue su capital.
      </Panel>

      <Panel titulo="Etimología" estaActivo={false}>
        El nombre <span lang="KK-KZ">алма</span> procede de la palabra kazaja
        que significa "manzana" y suele traducirse como "lleno de manzanas". De
        hecho, se cree que la región que rodea Almaty es el hogar ancestral de
        la manzana, y el <i lang="la">Malus sieversii</i> silvestre se considera
        un candidato probable para el ancestro de la manzana doméstica moderna.
      </Panel>
    </>
  );
};

function Panel({ titulo, children, estaActivo }) {
  return (
    <section className="p-3 border border-2 border-danger">
      <h3>{titulo}</h3>
      {estaActivo ? (
        <p>{children}</p>
      ) : (
        <button className="btn btn-primary" onClick={() => setEstaActivo(true)}>
          Mostrar
        </button>
      )}
    </section>
  );
}
