import React from "react";

function ChooseScale() {
  const [selectedScale, setSelectedScale] = useState("No key selected");

  const handleScaleChange = (event) => {
    setSelectedScale(event.target.value);
  };

  return (
    <div>
      <h2>
        Which scale would you like the progression in?
        {selectedScale != "No key selected" ? selectedScale : ""}
      </h2>
      <div>
        <label>
          <input
            type="radio"
            value="major"
            checked={selectedScale === "major"}
            onChange={handleScaleChange}
          />
          Major Scale
        </label>

        <label>
          <input
            type="radio"
            value="minor"
            checked={selectedScale === "minor"}
            onChange={handleScaleChange}
          />
          Minor Scale
        </label>
      </div>
    </div>
  );
}

export default ChooseScale;
