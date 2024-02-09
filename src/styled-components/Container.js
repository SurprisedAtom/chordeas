import styled from "styled-components";

const Container = styled.div`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    flex: ${props => props.flex};
    flex-direction: ${props => props.flexDirection};
    width: ${props => props.width};
    display: ${props => props.display};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};

    div:not(:last-child){
    border-right: ${props => props.border};
    }

    div:first-child{
        padding-left: ${props => props.paddingleft};
    }


`;

export default Container