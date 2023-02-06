import { useState } from "react";
import { Chat } from "./components/Chat";
import { ListaContactos } from "./components/ListaContactos";

const contactos = [
  { id: 0, nombre: "Taylor", email: "taylor@mail.com" },
  { id: 1, nombre: "Alice", email: "alice@mail.com" },
  { id: 2, nombre: "Bob", email: "bob@mail.com" },
];

export const Messenger = () => {
  const [con, setPara] = useState(contactos[0]);

  return (
    <div className="d-flex">
      <ListaContactos
        contactos={contactos}
        contactoSeleccionado={con}
        onSeleccionar={(contacto) => setPara(contacto)}
      />
      <Chat key={con.id} contacto={con} />
    </div>
  );
};
