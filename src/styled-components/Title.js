import styled from "styled-components";

const Title = styled.h1`
  color: #ffffff;
  padding: 10px 0px;
  display: block;
  font-size: ${props => props.size};

  span{
    color: #7FC1FE;
    font-weight: 400;
  }

`;

export default Title