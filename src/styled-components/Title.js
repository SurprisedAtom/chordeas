import styled from "styled-components";
import { device } from "../utils/deviceSize";

const Title = styled.h1`
  color: #ffffff;
  padding: 10px 0px;
  display: block;
  font-size: ${props => props.$size};
  text-align: ${props => props.$align};
  ${props => props.$blue &&`
    color: #7FC1FE;
  `}

  span{
    color: #7FC1FE;
    font-weight: 400;
  }

  @media ${device.md} {
    font-size: 22px;
    line-height: 2.5 rem;
    text-align: center;
    
  }



  

`;

export default Title