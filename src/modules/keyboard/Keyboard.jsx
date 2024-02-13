import React from "react";
import styled from "styled-components";
import KeyboardContainer from "./Keyboard.styles";
import Key from "./Key.styles";

function Keyboard(props) {
  let chords = props.notes;
  let painoData = [
    { note: "C", bg: "$white", isNote: false, isFlat: false },
    {
      note: "Db",
      noteAlternative: "C#",
      bg: " $black",
      isNote: false,
      isFlat: true,
    },
    {
      note: "D",
      noteAlternative: "none",
      bg: "$white",
      isNote: false,
      isFlat: false,
    },
    {
      note: "Eb",
      noteAlternative: "D#",
      bg: " $black",
      isNote: false,
      isFlat: true,
    },
    {
      note: "E",
      noteAlternative: "none",
      bg: "$white",
      isNote: false,
      isFlat: false,
    },
    {
      note: "F",
      noteAlternative: "none",
      bg: "$white",
      isNote: false,
      isFlat: false,
    },
    {
      note: "Gb",
      noteAlternative: "F#",
      bg: "$black",
      isNote: false,
      isFlat: true,
    },
    {
      note: "G",
      noteAlternative: "none",
      bg: "$white",
      isNote: false,
      isFlat: false,
    },
    {
      note: "Ab",
      noteAlternative: "G#",
      bg: "$black",
      isNote: false,
      isFlat: true,
    },
    {
      note: "A",
      noteAlternative: "none",
      bg: "$white",
      isNote: false,
      isFlat: false,
    },
    {
      note: "Bb",
      noteAlternative: "A#",
      bg: "$black",
      isNote: false,
      isFlat: true,
    },
    { note: "B", bg: "$white", isNote: false, isFlat: false },
  ];

  return (
    <KeyboardContainer>
      {painoData.map((x, key) => {
        if (x.isFlat === false) {
          return (
            <>
              {!chords.includes(x.note) ? (
                <Key key={key} $white />
              ) : (
                <Key key={key} $white $blue />
              )}
            </>
          );
        } else {
          if (!chords.includes(x.note) && !chords.includes(x.noteAlternative)) {
            return <Key key={key} $black />;
          } else {
            return <Key key={key} $black $blue />;
          }
        }
      })}
    </KeyboardContainer>
  );
}

export default Keyboard;
