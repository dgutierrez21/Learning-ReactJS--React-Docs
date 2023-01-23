import React from "react";

export const SearchBar = ({
  textoFiltrado,
  soloEnStock,
  alCambiarTextoFiltrado,
  alCambiarSoloEnStock,
}) => {
  return (
    <>
      <form action="#">
        <input
          type="text"
          placeholder="Search..."
          value={textoFiltrado}
          onChange={(e) => alCambiarTextoFiltrado(e.target.value)}
        />
        <label htmlFor="">
          <input
            type="checkbox"
            checked={soloEnStock}
            onChange={(e) => alCambiarSoloEnStock(e.target.checked)}
          />
          Solo productos en stock
        </label>
      </form>
    </>
  );
};

// Paso 3: Buscar la representación mínima pero completa del estado de la interfaz de usuario

// Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. Usarás el estado para esto.

// Piensa en el estado como el conjunto mínimo de datos cambiantes que tu aplicación necesita recordar. El principio más importante para estructurar el estado es mantenerlo seco (No te repitas). Averigüe la representación mínima absoluta del estado que necesita su aplicación y calcule todo lo demás a petición. Por ejemplo, si está creando una lista de compras, puede almacenar los elementos como una matriz en estado. Si también desea mostrar el número de elementos de la lista, no almacene el número de elementos como otro valor de estado; en su lugar, lea la longitud de la matriz.

// Ahora piense en todos los datos en esta aplicación de ejemplo:

// La lista original de productos
// El texto de búsqueda introducido por el usuario
// El valor de la casilla de verificación
// La lista filtrada de productos
// ¿Cuáles de estos son estado? Identifique los que no son:

// ¿Se mantiene sin cambios con el tiempo? Si es así, no es estado.
// ¿Se transmite de un padre a través de accesorios? Si es así, no es estado.
// ¿Puede calcularlo en función del estado existente o de los accesorios de su componente? Si es así, ¡definitivamente no es estado!
// Lo que queda es probablemente el estado.

// Repasémoslos uno por uno de nuevo:

// La lista original de productos se pasa como accesorios, por lo que no es estado.
// El texto de búsqueda parece ser de estado, ya que cambia con el tiempo y no se puede calcular a partir de nada.
// El valor de la casilla de verificación parece ser el estado, ya que cambia con el tiempo y no se puede calcular a partir de nada.
// La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola de acuerdo con el texto de búsqueda y el valor de la casilla de verificación.
// ¡Esto significa que solo el texto de búsqueda y el valor de la casilla de verificación son estado! ¡Muy bien hecho!

// ...Paso 4: Identifique dónde debe vivir su estado
// Tenga en cuenta que la edición del formulario aún no funciona. Hay un error de consola en el sandbox anterior que explica por qué:

// Console
// You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.

// En el espacio aislado anterior, ProductTable y SearchBar leen los accesorios filterText e inStockOnly para representar la tabla, la entrada y la casilla de verificación.

// Sin embargo, aún no ha agregado ningún código para responder a las acciones del usuario, como escribir. Este será tu paso final.

// Paso 5: Agregar flujo de datos inverso
// Actualmente, la aplicación se representa correctamente con accesorios y estado que fluyen por la jerarquía. Pero para cambiar el estado de acuerdo con la entrada del usuario, deberá admitir que los datos fluyan de la otra manera: los componentes del formulario en lo profundo de la jerarquía deben actualizar el estado en FilterableProductTable.

// React hace explícito este flujo de datos, pero requiere un poco más de escritura que el enlace de datos bidireccional. Si intenta escribir o marcar la casilla en el ejemplo anterior, verá que React ignora su entrada. Esto es intencional. Al escribir <input value={filterText} />, ha establecido que el value prop de la input sea siempre igual al estado filterText pasado desde FilterableProductTable. Dado que el estado filterText nunca se establece, la entrada nunca cambia.

// Desea que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos cambios. El estado es propiedad de FilterableProductTable, por lo que solo él puede llamar a setFilterText y setInStockOnly. Para permitir que SearchBar actualice el estado de FilterableProductTable, debe pasar estas funciones a SearchBar:

// Dentro de SearchBar, añadirás el manejador del evento onChange y modificarás el estado del padre desde allí

// ¡Ahora la aplicación funciona totalmente!
