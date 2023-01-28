export const RecetaApp = () => {
  return (
    <>
      <section>
        <h1>Receta de Chai especiado</h1>
        <h2>Para Dos</h2>
        <Receta bebedores={2} />
        <h2>Para una reunión</h2>
        <Receta bebedores={4} />
      </section>
    </>
  );
};

function Receta({ bebedores }) {
  return (
    <ol>
      <li>Hervir {bebedores} tazas de agua.</li>

      <li>
        Añadir {bebedores} cucharadas de té y {(0, 5 * bebedores)} cucharadas de
        especias.
      </li>

      <li>
        Añadir {(0, 5 * bebedores)} tazas de leche a hervir y azúcar al gusto.
      </li>
    </ol>
  );
}
