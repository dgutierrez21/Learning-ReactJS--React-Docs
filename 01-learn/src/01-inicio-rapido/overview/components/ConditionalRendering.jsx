import { AdminPanel } from "./conditionalRendering/AdminPanel";
import { LoginForm } from "./conditionalRendering/LoginForm";

export const ConditionalRendering = () => {
  // puede usar una instrucción if para incluir condicionalmente JSX:

  const estaRegistrado = true;

  let contenido;
  if (estaRegistrado) {
    contenido = <AdminPanel />;
  } else {
    contenido = <LoginForm />;
  }

  return (
    <>
      <h1>Está registrado: {String(estaRegistrado)}</h1>
      {contenido}
      {/* Si prefiere un código más compacto, puede utilizar el operador ? A
      diferencia de if, funciona dentro de JSX: */}
      {estaRegistrado ? <AdminPanel /> : <LoginForm />}
      {/* Cuando no necesite la rama else, también puede usar una sintaxis lógica && más corta.: */}
      {estaRegistrado && <AdminPanel />}

      {/* Todos estos enfoques también funcionan para especificar atributos
      condicionalmente. */}
    </>
  );
};
