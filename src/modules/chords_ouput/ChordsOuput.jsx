import Button from "../../styled-components/Button";
import Container from "../../styled-components/Container";
import Title from "../../styled-components/Title";
import ResultBlock from "../../styled-components/Result_block";
import * as Tone from "tone";

function ChordsOuput(props) {
  let { selectedKey, selectedScale, selectedProgression } = props.chordData;

  // const playChord = () => {
  //   Tone.start();
  //   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //   const now = Tone.now();
  //   synth.triggerAttack("C4", now);
  //   synth.triggerAttack("E4", now);
  //   synth.triggerAttack("G4", now);
  //   synth.triggerRelease(["C4", "E4", "G4"], now + 0.1);
  // };

  // Key: {selectedKey} | Scale: {selectedScale} | Progression:
  //       {selectedProgression}
  return (
    <Container $display="flex" $justify="space-between" $align="center ">
      <Container>
        <Container
          $border="1px solid #ffffff1f"
          $display="flex"
          $paddingleft="0px"
        >
          <ResultBlock>
            <Title $size="18px">
              Key: <span>{selectedKey}</span>
            </Title>
          </ResultBlock>
          <ResultBlock>
            <Title $size="18px">
              Scale: <span>{selectedScale}</span>
            </Title>
          </ResultBlock>
          <ResultBlock>
            <Title $size="18px">
              Progression: <span>{selectedProgression}</span>
            </Title>
          </ResultBlock>
        </Container>
      </Container>
      <Container $justify="flex-end" $display="flex" $flexDirection="column">
        <Button $margin="10px 0px">Download as Midi</Button>
      </Container>
    </Container>
  );
}

export default ChordsOuput;
