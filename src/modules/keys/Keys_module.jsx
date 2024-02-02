import React from "react";
import Itemtile from "./components/itemtile/itemtile";
import musical_keys from "../../utils/musical_keys_data";

function Keys_module() {
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
    </div>
  );
}

export default Keys_module;
