import { ProductTable } from "./components/ProductTable";
import { SearchBar } from "./components/SearchBar";

import "./style.css";

const FilterableProductTable = ({ productos }) => {
  return (
    <>
      <SearchBar />
      <ProductTable productos={productos} />
    </>
  );
};

export default FilterableProductTable;
