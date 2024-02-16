import React from "react";
import Flex from "../../styled-components/Flex";
import { Dropdown, Option } from "../../styled-components/Dropdown";
import Container from "../../styled-components/Container";

function MainInputs({
  setKey,
  setScale,
  setProgression,
  keyValue,
  scaleValue,
  progressionValue,
}) {
  return (
    <Flex $margin="40px 0px 0px 0px" $mr="10px" $align="end">
      <Container $width="100%">
        <p>Select a key: {keyValue}</p>
        <Dropdown name="key" id="key" value={keyValue} onChange={setKey}>
          <Option value="">Please select a key</Option>
          <Option value="C">C</Option>
          <Option value="Db">Db</Option>
          <Option value="D">D</Option>
          <Option value="Eb">Eb</Option>
          <Option value="E">E</Option>
          <Option value="F">F</Option>
          <Option value="Gb">Gb</Option>
          <Option value="G">G</Option>
          <Option value="Ab">Ab</Option>
          <Option value="A">A</Option>
          <Option value="Bb">Bb</Option>
          <Option value="B">B</Option>
        </Dropdown>
      </Container>
      <Container $width="100%">
        <p>Select a scale: {scaleValue} </p>
        <Dropdown
          name="scale"
          id="scale"
          value={scaleValue}
          onChange={setScale}
        >
          <Option value="">Please select a scale</Option>
          <Option value="Major">Major</Option>
          <Option value="Natural-Minor">Natural Minor</Option>
          <Option value="Melodic-Minor">Melodic Minor</Option>
          <Option value="Harmonic-Minor">Harmonic Minor</Option>
        </Dropdown>
      </Container>
      <Container $width="100%">
        <p>Select a progression: {progressionValue}</p>
        <Dropdown
          name="chordProgression"
          id="chordProgression"
          value={progressionValue}
          onChange={setProgression}
        >
          <Option value="">Please select a progression</Option>
          <Option value="I-IV-V">I - IV - V</Option>
          <Option value="VI-IV-I-V">VI - IV - I - V</Option>
          <Option value="I-V-VI-IV">I - V - VI - IV</Option>
          <Option value="II-V-I">II - V - I</Option>
          <Option value="I-VI-IV-V">I - VI - IV - V</Option>
        </Dropdown>
      </Container>
    </Flex>
  );
}

export default MainInputs;
