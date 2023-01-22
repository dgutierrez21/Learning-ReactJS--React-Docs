import React from "react";

export const SearchBar = () => {
  return (
    <>
      <form action="#">
        <input type="text" placeholder="Search..." />
        <label htmlFor="">
          <input type="checkbox" />
          Solo productos en stock
        </label>
      </form>
    </>
  );
};
