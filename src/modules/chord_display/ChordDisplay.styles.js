import styled from "styled-components";
import Container from "../../styled-components/Container";

const ChordDisplayCard = styled(Container)`
    border: ${props => props.$border};
    text-align: center;
    padding: 20px;
    justify-content: center;
`

export default ChordDisplayCard;