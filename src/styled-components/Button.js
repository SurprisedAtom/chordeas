import styled from "styled-components";

const Button = styled.button`
  background: #7FC1FE;
  color: #ffffff;
  padding: 15px 40px;
  display: block;
  border: none;
  margin: ${props => props.$margin};

  &:hover{
    cursor: pointer;
  }
`;

export default Button