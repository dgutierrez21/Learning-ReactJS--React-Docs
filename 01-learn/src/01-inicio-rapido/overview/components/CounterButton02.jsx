export const CounterButton02 = ({ count, onClick }) => {
  return (
    <button className="btn btn-primary mx-2" onClick={onClick}>
      Pulsado {count} veces
    </button>
  );
};
