import { useContext } from "react";
import { levelContext } from "../levelContext";

export const Section = ({ children }) => {
  const nivel = useContext(levelContext);
  return (
    <section className="border border-2 p-3">
      <levelContext.Provider value={nivel + 1}>
        {children}
      </levelContext.Provider>
    </section>
  );
};
