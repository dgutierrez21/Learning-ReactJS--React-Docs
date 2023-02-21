import { useInputForm } from "../hooks/useInputForm";

export const Form = () => {
  const nombre = useInputForm("Mary"),
    apellido = useInputForm("Poppins");

  return (
    <>
      <label htmlFor="">
        Nombre:
        <input type="text" {...nombre} />
      </label>

      <label htmlFor="">
        Apellido:
        <input type="text" {...apellido} />
      </label>

      <p className="fw-bold">
        Buenos días. {nombre.value} {apellido.value}
      </p>
    </>
  );
};
