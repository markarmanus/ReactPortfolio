import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { motion } from "framer-motion";
import { COLORS } from "../Constants/COLOR";

const Container = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/LandingBackground.png"});
  width: 100%;
  position: absolute;
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

const BlueBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: ${COLORS["main-blue"]};
`;
const variants = {
  visible: { opacity: 1, transition: { duration: 4 } },
  hidden: { opacity: 0, transition: { duration: 6 } },
};

function Background(props) {
  const uiContext = React.useContext(UiContext);
  return (
    <BlueBackground>
      <Container variants={variants}>
        {props.showPlanets && (
          <Earth smallerDimension={uiContext.dimensions.smaller}>
            <Astronaut />
            <Moon />
          </Earth>
        )}
      </Container>
    </BlueBackground>
  );
}

export default Background;
