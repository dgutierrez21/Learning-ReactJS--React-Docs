import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ productos }) => {
  const filas = [];
  let ultimaCategoria = null;

  productos.forEach((producto) => {
    if (producto.category !== ultimaCategoria) {
      filas.push(
        <ProductCategoryRow
          key={producto.category}
          categoria={producto.category}
        />
      );

      
    }
    
    filas.push(<ProductRow key={producto.name} producto={producto} />);

    ultimaCategoria = producto.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>

      <tbody>{filas}</tbody>
    </table>
  );
};
