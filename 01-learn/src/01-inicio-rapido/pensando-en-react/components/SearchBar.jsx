import React from "react";

export const SearchBar = () => {
  return (
    <>
      <form action="#">
        <input type="text" placeholder="Search..." />
        <label htmlFor="">
          <input type="checkbox" />
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
