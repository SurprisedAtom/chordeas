import styled from "styled-components";

const Container = styled.div`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    flex: ${props => props.flex};
    flex-direction: ${props => props.flexDirection};
`;

export default Container