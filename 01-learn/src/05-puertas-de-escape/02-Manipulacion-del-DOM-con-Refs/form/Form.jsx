import { useRef } from "react";

export const Form = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick} className="btn btn-primary ms-3">
        Enfocar el input
      </button>
    </>
  );
};
