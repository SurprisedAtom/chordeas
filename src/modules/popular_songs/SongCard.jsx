import { useNavigate } from "react-router-dom";
import SongCardContainer from "./SongCardStyles";

function SongCard(props) {
  const navigate = useNavigate();

  let { title, artist, key, scale, chordProgression, cover } = props.data;

  const generateChord = () => {
    navigate(`/result/${key}/${scale}/${chordProgression}`);
  };

  return (
    <SongCardContainer $background={cover} onClick={generateChord}>
      <p>
        <span>{title}</span> by {artist}
      </p>
      <p>
        <span>Key:</span> {key}
      </p>
      <p>
        <span>Scale:</span> {scale}
      </p>
      <p>
        <span>Progression:</span> {chordProgression}
      </p>
    </SongCardContainer>
  );
}

export default SongCard;
