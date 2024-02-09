import Button from "../../styled-components/Button";
import Container from "../../styled-components/Container";
import Title from "../../styled-components/Title";
import styled from "styled-components";

function chordsOuput(props) {
  let { selectedKey, selectedScale, selectedProgression } = props.chordData;

  // Key: {selectedKey} | Scale: {selectedScale} | Progression:
  //       {selectedProgression}

  const ResultBlock = styled(Container)`
    padding: 10px;
  `;

  return (
    <Container display="flex" justify="space-between" align="center ">
      <Container border="1px solid #ffffff1f" display="flex" paddingleft="0px">
        <ResultBlock>
          <Title size="18px">
            Key: <span>{selectedKey}</span>
          </Title>
        </ResultBlock>
        <ResultBlock>
          <Title size="18px">
            Scale: <span>{selectedScale}</span>
          </Title>
        </ResultBlock>
        <ResultBlock>
          <Title size="18px">
            Progression: <span>{selectedProgression}</span>
          </Title>
        </ResultBlock>
      </Container>
      <Container justify="flex-end" display="flex" flexDirection="column">
        <Button margin="10px 0px">Listen</Button>
        <p>Download midi file</p>
      </Container>
    </Container>
  );
}

export default chordsOuput;
