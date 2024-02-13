import { ChordsOuput, ChordVisualization } from "../modules";
import { useParams } from "react-router-dom";
import App_container from "../styled-components/App_container";
import Nav from "../components/nav/Nav";
import { returnChordsFromScale } from "../utils";
import MainInputs from "../modules/main_inputs/MainInputs";

function Result() {
  const params = useParams();
  const { key, scale, progression } = useParams();
  const chordData = {
    selectedKey: key,
    selectedScale: scale,
    selectedProgression: progression,
  };

  // console.log("Progression", returnChordsFromScale(key, scale));

  return (
    <App_container>
      <Nav />
      <ChordsOuput chordData={chordData} />
      <ChordVisualization chordData={chordData} />
    </App_container>
  );
}

export default Result;
