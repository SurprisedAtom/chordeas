import { Key } from "tonal";

// This function takes in two arguments ( the musical key, the musical scale) and returns the triads / chords of that scale. The chords data comes from tonal js 

function returnChordsFromScale(selectedKey, selectedScale,){
  let chordInfo;
  let chords;

    if (selectedScale === "Major") {
        chordInfo = Key.majorKey(selectedKey);
        chords = chordInfo.triads;
      } else if (selectedScale === "Natural-Minor") {
        chordInfo = Key.minorKey(selectedKey);
        chords = chordInfo.natural.triads;
      } else if (selectedScale === "Melodic-Minor") {
        chordInfo = Key.minorKey(selectedKey);
        chords = chordInfo.melodic.triads;
      } else if (selectedScale === "Harmonic-Minor") {
        chordInfo = Key.minorKey(selectedKey);
        chords = chordInfo.harmonic.triads;
      }

      return chords
}
export default returnChordsFromScale;