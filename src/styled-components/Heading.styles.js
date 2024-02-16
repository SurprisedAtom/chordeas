import styled from "styled-components";
import { device } from "../utils/deviceSize";

const Heading = styled.h2`
    font-size: ${props => props.$size};
    margin-top: ${props => props.$mt};

    @media ${device.sm}{
        text-align: center;
    }

`

export default Heading