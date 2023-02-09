import { Contador } from "./contador/Contador";
import { Cronometro } from "./cronometro/Cronometro";

export const ReferenciarValoresConRefs = () => {
  return (
    <>
      <Contador />
      <div className="separator"></div>
      <Cronometro />
    </>
  );
};
