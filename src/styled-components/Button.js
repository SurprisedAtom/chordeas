import styled from "styled-components";
import { device } from "../utils/deviceSize";

const Button = styled.button`
  background: #7FC1FE;
  color: #ffffff;
  padding: 15px 40px;
  margin: auto;
  border: none;
  /* margin: ${props => props.$margin}; */
  width: 100%;

  &:hover{
    cursor: pointer;
  }

  @media ${device.sm}{
    margin-top: 40px;
  }


`;

export default Button