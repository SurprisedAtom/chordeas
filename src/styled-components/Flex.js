import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    div:not(:last-child) {
      margin-right: ${(props) => props.mr};
    }
  `;

  export default Flex