import { useEffect, useState } from "react";
import Itemtile from "../../components/itemtile/Itemtile";
import { musical_keys } from "../../utils";
import { useNavigate, useSearchParams } from "react-router-dom";

function KeysModule() {
  const [chosenKey, setChosenKey] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  //set Musical Key default
  useEffect(() => {
    if (searchParams.has("setMusicalKey")) {
      setChosenKey(searchParams.get("setMusicalKey"));
      let newPath = "/selectscale?setMusicalKey=" + chosenKey;
      navigate(newPath);
    } else {
      setChosenKey("No key selected");
    }
  });

  const handleKeyClick = (index) => {
    let musicalKey = musical_keys[index];
    setChosenKey(musicalKey);
    searchParams.set("setMusicalKey", musicalKey);
  };

  return (
    <div>
      <h2>
        Which key would you like the chords to be in?
        {chosenKey}
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

export default KeysModule;
