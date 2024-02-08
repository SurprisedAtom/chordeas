import styled from "styled-components";

const SongCardContainer = styled.div`
background-image: url(${props => props.background}),linear-gradient(176deg, rgb(92 169 255 / 74%) 0%, rgb(0 0 0) 100%);
background-color: #00000077;
background-position: center;
background-size: cover;
background-blend-mode: multiply;
padding: 10px;
font-size: 16px;
min-height: 12em;
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-grow: 1;

&:hover{
    cursor: pointer;
    background-color: transparent;
    box-shadow:inset 0px 0px 0px 1px #f2f2f2;
}
`

export default SongCardContainer