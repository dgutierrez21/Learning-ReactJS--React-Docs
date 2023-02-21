import { useState } from "react";

export const useInputForm = (valorInicial) => {
  const [valor, setValor] = useState(valorInicial);

  function handleCambiar(e) {
    setValor(e.target.value);
  }

  const propsInput = {
    value: valor,
    onChange: handleCambiar,
  };

  return propsInput;
};
