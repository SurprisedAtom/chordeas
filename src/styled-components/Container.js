import styled from "styled-components";
import { device } from "../utils/deviceSize";

const Container = styled.div`
    padding: ${props => props.$padding};
    margin: ${props => props.$margin};
    flex: ${props => props.flex};
    flex-direction: ${props => props.$flexDirection};
    width: ${props => props.$width};
    display: ${props => props.$display};
    justify-content: ${props => props.$justify};
    align-items: ${props => props.$align};
    border-radius: ${props => props.$radius};
    
    div:not(:last-child){
    border-right: ${props => props.$border};
    margin-right: ${props => props.$mr};
    }

    div:first-child{
        padding-left: ${props => props.$paddingleft};
    }

    @media ${device.sm}{
        padding: 0px;
    }

    @media ${device.lg}{
        flex-direction: column;
    }

`;

export default Container