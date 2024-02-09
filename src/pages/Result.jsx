import { ChordsOuput, ChordVisualization } from "../modules";
import { useParams } from "react-router-dom";
import App_container from "../styled-components/App_container";
import Nav from "../components/nav/Nav";

function Result() {
  // const location = useLocation();
  const params = useParams();
  const { key, scale, progression } = useParams();
  console.log(params);
  // const { key, scale, progression } = location.state;
  const chordData = {
    selectedKey: key,
    selectedScale: scale,
    selectedProgression: progression,
  };

  return (
    <App_container>
      <Nav />
      <ChordsOuput chordData={chordData} />
      <ChordVisualization chordData={chordData} />
    </App_container>
  );
}

export default Result;
