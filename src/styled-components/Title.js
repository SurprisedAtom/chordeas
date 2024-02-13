import styled from "styled-components";

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

`;

export default Title