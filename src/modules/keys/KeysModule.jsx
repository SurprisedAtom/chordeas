import { useState } from "react";
import Itemtile from "../../components/itemtile/Itemtile";
import { musical_keys } from "../../utils";

function KeysModule() {
  const [chosenKey, setChosenKey] = useState("");

  const handleKeyClick = (index) => {
    setChosenKey(musical_keys[index]);
    console.log(index);
    console.log(musical_keys[index]);
  };

  return (
    <div>
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
      THis is the keys module
    </div>
  );
}

export default KeysModule;
