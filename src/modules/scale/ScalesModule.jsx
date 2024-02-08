import { useState } from "react";

function ScalesModule() {
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
            value="minor-natural"
            checked={selectedScale === "minor-natural"}
            onChange={handleScaleChange}
          />
          Natural Minor Scale
        </label>
        <label>
          <input
            type="radio"
            value="minor-melodic"
            checked={selectedScale === "minor-melodic"}
            onChange={handleScaleChange}
          />
          Melodic Minor
        </label>
        <label>
          <input
            type="radio"
            value="minor-harmonic"
            checked={selectedScale === "minor-harmonic"}
            onChange={handleScaleChange}
          />
          Harmonic Scale
        </label>
      </div>
    </div>
  );
}

export default ScalesModule;
