import { levelContext } from "../levelContext";

export const Section = ({ nivel, children }) => {
  return (
    <section className="border border-2 p-3">
      <levelContext.Provider value={nivel}>{children}</levelContext.Provider>
    </section>
  );
};
