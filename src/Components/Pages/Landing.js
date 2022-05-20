import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Rocket = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 30%);
  bottom: 0%;
  width: ${({ smallerDimension }) => (10 / 100) * smallerDimension}px;
  height: auto;
`;
function Landing() {
  const uiContext = React.useContext(UiContext);

  return (
    <Container>
      <Background />
      <Rocket
        src={process.env.PUBLIC_URL + "/Images/Background/Rocket.png"}
        smallerDimension={uiContext.dimensions.smaller}
      />
    </Container>
  );
}

export default Landing;
