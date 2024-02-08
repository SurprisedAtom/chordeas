/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import App_container from "../styled-components/app-container";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import Button from "../styled-components/Button";
import Title from "../styled-components/Title";
import Container from "../styled-components/Container";
import Dropdown from "../styled-components/Dropdown";
import PopularSongs from "../modules/popular_songs/PopularSongs";

function Main() {
  const navigate = useNavigate();

  //get value from dropdows

  const [keyValue, setKeyValue] = useState("");
  const [scaleValue, setScaleValue] = useState("");
  const [progressionValue, setProgressionValue] = useState("");

  const handleKeySelectChange = (event) => {
    const newValue = event.target.value;
    setKeyValue(newValue);
  };
  const handleScaleSelectChange = (event) => {
    const newValue = event.target.value;
    setScaleValue(newValue);
  };
  const handleProgressionSelectChange = (event) => {
    const newValue = event.target.value;
    setProgressionValue(newValue);
  };

  // send data using params

  const generateChord = () => {
    navigate(`/result/${keyValue}/${scaleValue}/${progressionValue}`);
  };

  const Flex = styled.div`
    display: flex;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
  `;

  return (
    <App_container>
      <Nav />
      <Title>Generate chords in the key and scale of your choosing</Title>
      <Flex padding="20px 0px">
        <div>
          <p>
            Use the options below to generate chords in any scale and key. You
            can use the popular progressions box to generate chords using
            popular progression.
          </p>
        </div>
        <Container padding="0px 0px 0px 40px">
          <Button onClick={generateChord}>Generate</Button>
        </Container>
      </Flex>
      <Flex margin="40px 0px 0px 0px">
        <Container flex="1">
          <p>Select a key: {keyValue}</p>
          <Dropdown
            name="key"
            id="key"
            value={keyValue}
            onChange={handleKeySelectChange}
          >
            <option value="C">C</option>
            <option value="Db">Db</option>
            <option value="D">D</option>
            <option value="Eb">Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Gb">Gb</option>
            <option value="G">G</option>
            <option value="Ab">Ab</option>
            <option value="A">A</option>
            <option value="Bb">Bb</option>
            <option value="B">B</option>
          </Dropdown>
        </Container>
        <Container flex="1">
          <p>Select a scale: {scaleValue} </p>
          <Dropdown
            name="scale"
            id="scale"
            value={scaleValue}
            onChange={handleScaleSelectChange}
          >
            <option value="Major">Major</option>
            <option value="Natural-Minor">Natural Minor</option>
            <option value="Melodic-Minor">Melodic Minor</option>
            <option value="Harmonic-Minor">Harmonic Minor</option>
          </Dropdown>
        </Container>
        <Container flex="1">
          <p>Select a progression: {progressionValue}</p>
          <Dropdown
            name="chordProgression"
            id="chordProgression"
            value={progressionValue}
            onChange={handleProgressionSelectChange}
          >
            <option value="I-IV-V">I - IV - V</option>
            <option value="VI-IV-I-V">VI - IV - I - V</option>
            <option value="I-V-VI-IV">I - V - VI - IV</option>
            <option value="II-V-I">II - V - I</option>
            <option value="I-VI-IV-V">I - VI - IV - V</option>
          </Dropdown>
        </Container>
      </Flex>
      <PopularSongs />
    </App_container>
  );
}

export default Main;
