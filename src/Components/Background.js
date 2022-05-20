import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
const Container = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/LandingBackground.png"});
  width: 100%;
  height: 100%;
`;
const earthSize = 45;
const Earth = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Earth.png"});
  width: ${({ smallerDimension }) => (earthSize / 100) * smallerDimension}px;
  height: ${({ smallerDimension }) => (earthSize / 100) * smallerDimension}px;
  position: relative;
  background-size: contain;
  top: 90%;
  transform: translate(0%, -100%);
  left: 10%;
  background-repeat: no-repeat;
`;
const Astronaut = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Astronaut.png"});
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  top: -7%;
  left: 48%;
  width: 40%;
  height: 40%;
`;
const Moon = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Moon.png"});
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  top: -40%;
  left: 5%;
  width: 65%;
  height: 65%;
`;
function Background() {
  const uiContext = React.useContext(UiContext);
  return (
    <Container>
      <Earth smallerDimension={uiContext.dimensions.smaller}>
        <Astronaut />
        <Moon />
      </Earth>
    </Container>
  );
}

export default Background;
