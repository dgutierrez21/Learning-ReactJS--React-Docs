import CounterList from "./counterList/CounterList";
import { List } from "./list/List";
import { List02 } from "./list02/List02";
import { List03 } from "./list03/List03";
import { List04 } from "./list04/List04";
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
      <div className="separator"></div>
      <List03/>
      <div className="separator"></div>
      <List04/>
    </>
  );
};

export default ActualizarArraysEnElEstado;
