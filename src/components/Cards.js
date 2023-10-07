import React, { useState } from "react";

export default function Cards({ hog }) {
  const specialty = hog.specialty;
  const weight = hog.weight;
  const greased = hog.greased ? "greased" : "not greased"
  const medal = hog["highest medal achieved"];
  const additionalInfo = (
    <div>
      <li>{specialty}</li>
      <li>{weight}</li>
      <li>{greased}</li>
      <li>{medal}</li>
    </div>
  );

  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="pigTile" onClick={handleClick}>
      <h3>{hog.name}</h3>
      <img src={hog.image} />
      {showInfo && additionalInfo}
    </div>
  );
}
