import React, { useState } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import Sort from "./Sort";

export default function DisplayContainer({ hogData }) {
  const [hogCategory, setHogCategory] = useState(hogData);
  const cardList = hogCategory.map((hog) => <Cards key={hog.name} hog={hog} />);

  function onSelectedCategory(event) {
    const category = event.target.value;
    if (category === "All") {
      setHogCategory(hogData);
    } else if (category === "greased") {
      const greasedHogs = hogData.filter((hog) => hog.greased);
      setHogCategory(greasedHogs);
    } else if (category === "dry") {
      const dryHogs = hogData.filter((hog) => !hog.greased);
      setHogCategory(dryHogs);
    }
  }

  function onSortedCategory(event) {
    const category = event.target.value;
    if (category === "name") {
      const sortedNames = [...hogData].sort((a, b) =>
        a.hog.name.localeCompare(b.hog.name)
      );
      setHogCategory(sortedNames);
    } else if (category === "weight") {
      const sortedWeight = [...hogData].sort(
        (a, b) => a.hog.weight - b.hog.weight
      );
      setHogCategory(sortedWeight);
    }
  }

  return (
    <div>
      <div className="filter">
        Filter: <Filter onSelectedCategory={onSelectedCategory} /> Sort:{" "}
        <Sort onSortedCategory={onSortedCategory} />
      </div>
      {cardList}
    </div>
  );
}
