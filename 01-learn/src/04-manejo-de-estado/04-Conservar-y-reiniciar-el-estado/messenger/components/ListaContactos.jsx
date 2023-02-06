export const ListaContactos = ({
  contactoSeleccionado,
  contactos,
  onSeleccionar,
}) => {
  return (
    <section className="lista-contacto">
      <ul className="me-3">
        {contactos.map((contacto) => (
          <li className="d-block" key={contacto.id}>
            <button
              onClick={() => onSeleccionar(contacto)}
              className="btn btn-primary w-100"
            >
              {contacto.nombre}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
