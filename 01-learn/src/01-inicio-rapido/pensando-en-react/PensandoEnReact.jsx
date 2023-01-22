import { PRODUCTOS } from "./data";
import FilterableProductTable from "./FilterableProductTable";

const PensandoEnReact = () => {
  return (
    <>
      <FilterableProductTable productos={PRODUCTOS}/>
    </>
  );
};

export default PensandoEnReact;
