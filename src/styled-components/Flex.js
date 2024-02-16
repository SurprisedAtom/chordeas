import styled from "styled-components";
import { device } from "../utils/deviceSize";

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
    align-items: ${(props) => props.$align};
    width: 100%;

    div:not(:last-child) {
      margin-right: 20px;
    }

    @media ${device.sm} {
            
      div:not(:last-child) {
      margin-right: 0px;
    }

      text-align: center;
      flex-direction: column;
      
    }

  `;

  export default Flex