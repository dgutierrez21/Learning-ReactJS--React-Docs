const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export const ShoppingList = () => {
  const listItems = products.map(({ id, isFruit, title }) => (
    <li key={id} style={{ color: isFruit ? "magenta" : "darkgreen" }}>
      {title}
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};
