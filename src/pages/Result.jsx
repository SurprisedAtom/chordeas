import { ChordsOuput, ChordVisualization } from "../modules";
import { useParams } from "react-router-dom";

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
    <div className="app-body">
      <ChordsOuput chordData={chordData} />
      <ChordVisualization chordData={chordData} />
    </div>
  );
}

export default Result;
