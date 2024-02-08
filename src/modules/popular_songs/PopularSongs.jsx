/* eslint-disable react/prop-types */
import { songsInfo } from "../../utils";
import Container from "../../styled-components/Container";
import SongCard from "./SongCard";
import SongsContainer from "../../styled-components/SongsContainer.styles";
import Heading from "../../styled-components/Heading.styles";

function PopularSongs() {
  return (
    <>
      <Heading>Progressions for popular songs:</Heading>
      <SongsContainer>
        {songsInfo.map((data, key) => (
          <SongCard data={data} key={key} />
        ))}
      </SongsContainer>
    </>
  );
}

export default PopularSongs;
