import React from "react";

const Sort = ({ onSortedCategory }) => {
  return (
    <>
      <select onChange={onSortedCategory}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </>
  );
};

export default Sort;
