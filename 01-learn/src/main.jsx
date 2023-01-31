import React from "react";
import ReactDOM from "react-dom/client";
import { InicioRapido } from "./01-inicio-rapido/inicioRapido";
import { DescribirLaUI } from "./02-Describir-la-UI/DescribirLaUI";
import AgregarInteractividad from "./03-agregar-interactividad/AgregarInteractividad";
import "./index.css";

/*----> */ ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <InicioRapido /> */}
    {/* <DescribirLaUI/> */}
    <AgregarInteractividad />
  </React.StrictMode>
);
