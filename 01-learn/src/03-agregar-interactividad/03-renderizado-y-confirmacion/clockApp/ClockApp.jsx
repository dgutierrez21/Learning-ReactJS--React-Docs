import { useEffect } from "react";
import { useState } from "react";
import { Clock } from "./components/Clock";

function useTiempo() {
  const [tiempo, setTiempo] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTiempo(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return tiempo;
}

const ClockApp = () => {
  const tiempo = useTiempo();

  return (
    <>
      <Clock tiempo={tiempo.toLocaleTimeString()} />
    </>
  );
};

export default ClockApp;
