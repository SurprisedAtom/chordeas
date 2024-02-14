import KeyboardContainer from "./Keyboard.styles";
import Key from "./Key.styles";

function Keyboard({ notes, keyBoardOrder }) {
  return (
    <KeyboardContainer>
      {keyBoardOrder.map((x, key) => {
        if (x.isFlat === false) {
          return (
            <>
              {!notes.includes(x.note) ? (
                <Key key={key} $white />
              ) : (
                <Key key={key} $white $blue />
              )}
            </>
          );
        } else {
          if (!notes.includes(x.note) && !notes.includes(x.noteAlternative)) {
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
