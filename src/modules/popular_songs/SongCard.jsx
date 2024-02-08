import SongCardContainer from "./SongCardStyles";

function SongCard(props) {
  let { title, artist, key, chordProgression, cover } = props.data;
  console.log(cover);
  return (
    <SongCardContainer background={cover}>
      <div>
        {title} by {artist}
      </div>
      <p>Key: {key}</p>
      <p>Progression: {chordProgression}</p>
    </SongCardContainer>
  );
}

export default SongCard;
