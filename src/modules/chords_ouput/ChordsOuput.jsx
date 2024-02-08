function chordsOuput(props) {
  let { selectedKey, selectedScale, selectedProgression } = props.chordData;

  return (
    <div>
      <div>
        Key: {selectedKey} | Scale: {selectedScale} | Progression:
        {selectedProgression}
      </div>
      <div>
        <button>Listen</button>
        <p>Download as midi file</p>
      </div>
    </div>
  );
}

export default chordsOuput;
