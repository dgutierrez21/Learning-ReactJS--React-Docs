import { useState } from "react";
import { AboutPage } from "./components/AboutPage";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { CounterButton } from "./components/CounterButton";
import { CounterButton02 } from "./components/CounterButton02";
import { Profile } from "./components/Profile";
import { ShoppingList } from "./components/ShoppingList";

const handleClick = () => {
  alert("Hello world");
};

const Button = () => {
  return <button onClick={handleClick}>Yo soy un botón</button>;
};

const OverView = () => {
  // estado actual | funcion para actualizar el estado

  const [count, setCount] = useState(0);

  function handleClickBtn() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Bienvenido/a a mi app</h1>
      <Button />

      <div className="separator"></div>

      <AboutPage />

      <div className="separator"></div>

      <Profile />

      <div className="separator"></div>

      <ConditionalRendering />

      <div className="separator"></div>

      <ShoppingList />

      <div className="separator"></div>

      <h1 className="mb-4">Contadores que se actualizan por separado</h1>

      <CounterButton />
      <CounterButton />

      <div className="separator"></div>

      <h1 className="mb-4">Contadores que se actualizan juntos</h1>

      <CounterButton02 count={count} onClick={handleClickBtn} />
      <CounterButton02 count={count} onClick={handleClickBtn} />
    </div>
  );
};

export default OverView;
