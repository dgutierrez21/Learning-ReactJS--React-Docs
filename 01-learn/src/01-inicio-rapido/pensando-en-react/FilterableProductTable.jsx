import { useState } from "react";
import { ProductTable } from "./components/ProductTable";
import { SearchBar } from "./components/SearchBar";

import "./style.css";

const FilterableProductTable = ({ productos }) => {
  const [textoFiltrado, setTextoFiltrado] = useState("hello");
  const [soloEnStock, setSoloEnStock] = useState(true);
  return (
    <>
      <SearchBar textoFiltrado={textoFiltrado} soloEnStock={soloEnStock} />
      <ProductTable
        textoFiltrado={textoFiltrado}
        soloEnStock={soloEnStock}
        productos={productos}
      />
    </>
  );
};

export default FilterableProductTable;

// Paso 4: Identifique dónde debe vivir su estado
// Después de identificar los datos de estado mínimo de la aplicación, debes identificar qué componente es responsable de cambiar este estado o es el propietario del estado. Recuerde: React utiliza un flujo de datos unidireccional, pasando datos por la jerarquía de componentes del componente primario al secundario. Puede que no esté claro de inmediato qué componente debe poseer qué estado. Esto puede ser un desafío si eres nuevo en este concepto, ¡pero puedes resolverlo siguiendo estos pasos!

// Para cada parte del estado de la aplicación:

// 1. Identifique cada componente que representa algo basado en ese estado.
// 2. Encuentre su componente padre común más cercano, un componente por encima de todos ellos en la jerarquía.
//3.  Decidir dónde debe vivir el estado:
// 1. A menudo, puede poner el estado directamente en su padre común.
// 2. También puede poner el estado en algún componente por encima de su padre común.
// 3. Si no puede encontrar un componente en el que tenga sentido poseer el estado, cree un nuevo componente únicamente para mantener el estado y agréguelo en algún lugar de la jerarquía por encima del componente padre común.

// En el paso anterior, encontró dos partes de estado en esta aplicación: el texto de entrada de búsqueda y el valor de la casilla de verificación. En este ejemplo, siempre aparecen juntos, por lo que es más fácil pensar en ellos como una sola pieza de estado.

// Ahora repasemos nuestra estrategia para este estado:

// 1. Identifique los componentes que utilizan el estado:
// ---ProductTable necesita filtrar la lista de productos en función de ese estado (texto de búsqueda y valor de casilla de verificación).
// ---SearchBar debe mostrar ese estado (texto de búsqueda y valor de casilla de verificación).

// 2Encuentra a su padre común: El primer componente primario que comparten ambos componentes es FilterableProductTable.

// 3. Decidir dónde reside el estado: mantendremos el texto del filtro y los valores de estado comprobados en FilterableProductTable.

// Por lo tanto, los valores de estado vivirán en FilterableProductTable.
