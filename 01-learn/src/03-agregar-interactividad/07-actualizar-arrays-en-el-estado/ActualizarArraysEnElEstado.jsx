import CounterList from "./counterList/CounterList";
import { List } from "./list/List";
import { List02 } from "./list02/List02";
import { ShapeEditor } from "./shapeEditor/ShapeEditor";

const ActualizarArraysEnElEstado = () => {
  return (
    <>
      <List />
      <div className="separator"></div>
      <List02 />
      <div className="separator"></div>
      <ShapeEditor />
      <div className="separator"></div>
      <CounterList/>
    </>
  );
};

export default ActualizarArraysEnElEstado;
