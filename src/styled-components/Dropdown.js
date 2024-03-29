import styled from "styled-components";
import { device } from "../utils/deviceSize";

export const Option = styled.option`
`


export const Dropdown = styled.select`
    border: 1px solid #ffffff;
    width: 100%;
    padding: 10px 10px;
    margin-top: 10px;
    background-color: grey;
    color: #ffffff;
    border-radius: 2px;

    &:hover{
        cursor: pointer;
    }

    @media ${device.sm}{
        margin-top: 10px;
        margin-bottom: 40px;
    }

    

`;