import { forwardRef, useRef } from "react";

// function MiInput(props) {
//   return <input {...props} />;
// }

const MiInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export const Form02 = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <MiInput ref={inputRef} />
      <button onClick={handleClick} className="btn btn-primary ms-3">
        Enfocar el input
      </button>
    </>
  );
};
