import styled from "styled-components";
import { device } from "../utils/deviceSize";

const SongsContainer = styled.div`
display: flex;
margin-top: 20px;
div:not(:last-child) {
      margin-right: 20px;
    }

@media ${device.sm} {
    div:not(:last-child) {
      margin-right: 0px;
      margin-top: 20px;
    }
    flex-direction: column;
}



`;

export default SongsContainer