import React from "react";
import ReactDOM from "react-dom/client";
import { InicioRapido } from "./01-inicio-rapido/inicioRapido";
import { DescribirLaUI } from "./02-Describir-la-UI/DescribirLaUI";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <InicioRapido /> */}
    <DescribirLaUI/>
  </React.StrictMode>
);
