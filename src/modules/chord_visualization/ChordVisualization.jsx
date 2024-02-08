import { returnChordsFromScale, romanToDigits } from "../../utils";

function ChordVisualization(props) {
  let progressionResult = [];
  let { selectedKey, selectedScale, selectedProgression } = props.chordData;
  let progression = selectedProgression.toUpperCase().split("-");
  let chords = returnChordsFromScale(selectedKey, selectedScale);

  console.log("chords", chords);

  progression.map((x) => {
    let chordDigit = romanToDigits(x);
    progressionResult.push(chords[chordDigit - 1]);
  });

  return <div></div>;
}

export default ChordVisualization;
