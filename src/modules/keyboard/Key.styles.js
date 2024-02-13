import styled from "styled-components";

const Key = styled.section`

border-radius:4px;


${props => props.$black &&`
    background-color: ${props.theme.black};
    width: 15px;
    height: 70px;
    margin-left: -7.5px;
    margin-right: -7.5px;
    z-index: 2;
    border-radius: 0px 0px 4px 4px!important;
  `}
  
  ${props => props.$white &&`
    background-color: ${props.theme.white};
    width: 30px;
    margin-right: 1px;
  `}

${props => props.$blue &&`
    background-color: ${props.theme.blue}!important;
  `}



  

   


`

export default Key;