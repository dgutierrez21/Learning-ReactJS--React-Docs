import { AboutPage } from "./components/AboutPage";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { CounterButton } from "./components/CounterButton";
import { Profile } from "./components/Profile";
import { ShoppingList } from "./components/ShoppingList";

const handleClick = () => {
  alert("Hello world");
};

const Button = () => {
  return <button onClick={handleClick}>Yo soy un botón</button>;
};

const OverView = () => {
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

      <CounterButton />
      <CounterButton />

      <div className="separator"></div>
    </div>
  );
};

export default OverView;
