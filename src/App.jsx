import React from "react";
import { useState } from "react";
import Itemtile from "./components/itemtile/itemtile";
import chords from "./chords.json";
import { Key } from "tonal";
import progressions from "./components/itemtile/progressions";

function App() {
  const musical_keys = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
  ];

  const [chosenKey, setChosenKey] = useState("");

  //tonaljs
  console.log(Key.majorKey("C"));

  const handleKeyClick = (index) => {
    setChosenKey(musical_keys[index]);
    console.log(index);
    console.log(musical_keys[index]);
  };

  const handleScaleClick = (index) => {
    setChosenKey(musical_keys[index]);
    console.log(index);
    console.log(musical_keys[index]);
  };

  const [selectedScale, setSelectedScale] = useState("No key selected");

  const handleScaleChange = (event) => {
    setSelectedScale(event.target.value);
  };

  return (
    <>
      <h2>
        Which key would you like the chords to be in?
        {chosenKey != "No key selected" ? chosenKey : "No key selected"}
      </h2>
      <ul style={{ display: "flex", padding: "0px" }}>
        {musical_keys.map((musicalKey, index) => (
          <Itemtile
            key={index}
            prop={musicalKey}
            onClick={() => handleKeyClick(index)}
          />
        ))}
      </ul>
      <h2>
        Which scale would you like the progression in? {selectedScale}{" "}
        {selectedScale != "No key selected" ? "scale" : ""}
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
      <h2>Pick a popular chord progressions:</h2>
      <ul></ul>
    </>
  );
}

export default App;
