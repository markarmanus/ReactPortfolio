import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
//Pixeboy
const FirstLayer = styled.p``;
const SecondLayer = styled.p``;
function DoubleText(props) {
  const uiContext = React.useContext(UiContext);

  return (
    <Container>
      <p>{props.text}</p>
    </Container>
  );
}

export default DoubleText;
