import { AboutPage } from "./components/AboutPage";

const Button = () => {
  return <button>Yo soy un botón</button>;
};

const OverView = () => {
  return (
    <div>
      <h1>Bienvenido/a a mi app</h1>
      <Button />

      <div className="separator"></div>

      <AboutPage/>

      <div className="separator"></div>
      
    </div>
  );
};

export default OverView;
