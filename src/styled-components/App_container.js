import styled from "styled-components";
import { device } from "../utils/deviceSize";

const App_container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  background: red;
  margin: 0 auto;
  background: rgb(81,81,81);
  background: linear-gradient(165deg, rgba(81,81,81,1) 0%, rgba(0,0,0,1) 100%);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: "Jost", sans-serif;
  padding: 0px 10%;

  @media ${device.lg}{
    height: 100%;
  }

`;

export default App_container