import { AniadirTarea } from "./components/AniadirTarea";
import { ListaTareas } from "./components/ListaTareas";
import { TareasProvider } from "./ContextTareas";

export const TaskApp = () => {
  return (
    <TareasProvider>
      <h1>Itinerario de Praga</h1>

      <AniadirTarea />

      <ListaTareas />
    </TareasProvider>
  );
};
