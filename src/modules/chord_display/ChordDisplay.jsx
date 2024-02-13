import React from "react";
import Container from "../../styled-components/Container";
import Title from "../../styled-components/Title";
import ChordDisplayCard from "./ChordDisplay.styles";
import Keyboard from "../keyboard/Keyboard";

function ChordDisplay({ chordName, chordNotes, roman }) {
  return (
    <Container $width="100%" $padding="20px 0px">
      <Title $blue $size="22px" $align="center">
        {roman}
      </Title>
      <ChordDisplayCard
        $diplay="flex"
        $border="1px solid #ffffff"
        $radius="6px"
      >
        <Title $size="22px">{chordName}</Title>
        <p>{chordNotes.toString()}</p>
        <Keyboard notes={chordNotes} />
      </ChordDisplayCard>
    </Container>
  );
}

export default ChordDisplay;
