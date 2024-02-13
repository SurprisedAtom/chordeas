import Container from "../../styled-components/Container";
import { returnChordsFromScale, romanToDigits } from "../../utils";
import { Chord } from "tonal";
import ChordDisplay from "../chord_display/ChordDisplay";
import Keyboard from "../keyboard/Keyboard";

function ChordVisualization(props) {
  let progressionResult = [];
  let allNotes = [];
  let { selectedKey, selectedScale, selectedProgression } = props.chordData;
  let progression = selectedProgression.toUpperCase().split("-");
  let chords = returnChordsFromScale(selectedKey, selectedScale);

  progression.map((x) => {
    let chordDigit = romanToDigits(x);
    let chord = chords[chordDigit - 1];
    let notes = Chord.get(chord).notes;
    allNotes.push(allNotes);
    progressionResult.push({ roman: x, chordName: chord, chordNotes: notes });
  });

  //{chordName: "C" , chordNotes: ['C', 'E', 'G'], roman:"I"}
  console.log(progressionResult);

  return (
    <Container
      $display="flex"
      $justify="space-between"
      $mr="20px"
      $margin="40px 0px 0px 0px"
    >
      {progressionResult.map((item, key) => {
        return (
          <ChordDisplay
            key={key}
            chordName={item.chordName}
            chordNotes={item.chordNotes}
            roman={item.roman}
          />
        );
      })}
    </Container>
  );
}

export default ChordVisualization;
