/* eslint-disable react/prop-types */
import { songsInfo } from "../../utils";
import SongCard from "./SongCard";
import SongsContainer from "../../styled-components/SongsContainer.styles";
import Heading from "../../styled-components/Heading.styles";

function PopularSongs() {
  return (
    <>
      <Heading size="15px" mt="40px">
        Progressions for popular songs:
      </Heading>
      <SongsContainer>
        {songsInfo.map((data, key) => (
          <SongCard data={data} key={key} />
        ))}
      </SongsContainer>
    </>
  );
}

export default PopularSongs;
