import SongCardContainer from "./SongCardStyles";

function SongCard(props) {
  let { title, artist, key, chordProgression, cover } = props.data;
  console.log(cover);
  return (
    <SongCardContainer background={cover}>
      <p>
        <span>{title}</span> by {artist}
      </p>
      <p>
        <span>Key:</span> {key}
      </p>
      <p>
        <span>Progression:</span> {chordProgression}
      </p>
    </SongCardContainer>
  );
}

export default SongCard;
