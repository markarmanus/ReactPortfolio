import styled from "styled-components";
import React from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion } from "framer-motion";
import Form from "./Form";
import UiContext from "../../../Contexts/UI";
import { NAVBAR_MAX_WIDTH, NAVBAR_MIN_WIDTH, NAVBAR_WIDTH } from "../../Config";

const Container = styled(motion.div)`
  width: calc(100% - max(${NAVBAR_MIN_WIDTH}, min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH})));
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 0%;
  left: 0%;
  background-color: ${COLORS["main-blue-rgba"](0.4)};
  @media screen and (orientation: portrait) {
    flex-direction: column;
    height: 90%;
    align-self: center;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 3%;
`;
const TitleContainer = styled.div`
  height: 10vmin;
  width: 100%;
`;
const RightContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0 8%;
  align-items: center;
  flex-direction: column;
`;
const earthSize = 60;
const Earth = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Earth.png"});
  width: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  height: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  position: relative;
  background-size: contain;
  top: 80%;
  transform: translate(0%, -100%);
  left: 10%;
  background-repeat: no-repeat;
  @media screen and (orientation: portrait) {
    left: 0%;
  }
`;
const Astronaut = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/AstronautWithSaturn.png"});
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  top: -50%;
  left: 48%;
  width: 50%;
  height: 50%;
`;

const earthVariants = {
  show: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      opacity: {
        delay: 0.5,
        duration: 1,
        ease: "linear",
      },
      scale: {
        delay: 0,
        duration: 1,
        ease: "linear",
      },
    },
  },
  hide: {
    opacity: [1, 0],
    transition: {
      delay: 0,
      duration: 0.2,
    },
  },
};

function Skills(props) {
  const uiContext = React.useContext(UiContext);

  return (
    <Container>
      <LeftContainer>
        <TitleContainer>
          <DoubleText
            offset={4}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"3.5vw"}
            font="Prompt"
            height="100%"
            animationProps={{
              animationColor: COLORS["main-green"],
              translateAnimation: true,
              duration: 0.3,
              scaleAnimation: true,
              absoluteDelay: 0.3,
              opacityAnimation: true,
              delayBetweenLetters: 0.05,
            }}
            text={`Contact Me`}
          />
        </TitleContainer>
        <Form />
      </LeftContainer>
      <RightContainer>
        <Earth initial={{ opacity: 0 }} variants={earthVariants} smaller_dimension={uiContext.dimensions.smaller}>
          <Astronaut />
        </Earth>
      </RightContainer>
    </Container>
  );
}

export default Skills;
