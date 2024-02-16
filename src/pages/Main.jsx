/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import App_container from "../styled-components/App_container";
import Button from "../styled-components/Button";
import Title from "../styled-components/Title";
import Container from "../styled-components/Container";
import PopularSongs from "../modules/popular_songs/PopularSongs";
import Flex from "../styled-components/Flex";
import MainInputs from "../modules/main_inputs/MainInputs";
import Nav from "../modules/nav/Nav";

function Main() {
  const navigate = useNavigate();

  //get value from dropdows

  const [keyValue, setKeyValue] = useState("C");
  const [scaleValue, setScaleValue] = useState("Major");
  const [progressionValue, setProgressionValue] = useState("I-IV-V");

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

  return (
    <App_container>
      <Nav />
      <Title>Generate chords in the key and scale of your choosing</Title>
      <Flex $padding="20px 0px">
        <div>
          <p>
            Use the options below to generate chords in any scale and key. You
            can use the popular progressions box to generate chords using
            popular progression.
          </p>
        </div>
        <Container
          $display="flex"
          $justify="flex-end"
          $padding="0px 0px 0px 40px"
        >
          <Button onClick={generateChord}>Generate</Button>
        </Container>
      </Flex>
      <MainInputs
        setKey={handleKeySelectChange}
        setScale={handleScaleSelectChange}
        setProgression={handleProgressionSelectChange}
        keyValue={keyValue}
        scaleValue={scaleValue}
        progressionValue={progressionValue}
      />
      <PopularSongs />
    </App_container>
  );
}

export default Main;
