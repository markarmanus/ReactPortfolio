import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { motion } from "framer-motion";
import { COLORS } from "../Constants/COLOR";

const AnimatedContainer = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/LandingBackground.png"});
  width: 100%;
  position: absolute;
  height: 100%;
`;

const earthSize = 45;
const Earth = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Earth.png"});
  width: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  height: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  position: relative;
  background-size: contain;
  top: 90%;
  transform: translate(0%, -100%);
  left: 10%;
  background-repeat: no-repeat;
`;
const MoonContainer = styled(motion.div)`
  width: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  height: ${({ smaller_dimension }) => (earthSize / 100) * smaller_dimension}px;
  position: absolute;
  top: 90%;
  transform: translate(0%, -100%);
  left: 10%;
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

const Moon = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Moon.png"});
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 30%;
  z-index: -100;
`;

const BlueBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: ${COLORS["main-blue"]};
`;
const variants = {
  hidden: { opacity: 0, transition: { duration: 2 } },
  rocketClicked: { opacity: 1, transition: { duration: 5 } },
};
function Background(props) {
  const uiContext = React.useContext(UiContext);
  return (
    <BlueBackground>
      <AnimatedContainer variants={props.animate ? variants : {}}>
        {props.showPlanets && (
          <span>
            <MoonContainer
              initial={{ translateY: "-100%" }}
              animate={{ rotate: ["0deg", "360deg"], transition: { duration: 15, repeat: "Infinity", ease: "linear" } }}
              smaller_dimension={uiContext.dimensions.smaller}
            >
              <Moon />
            </MoonContainer>
            <Earth smaller_dimension={uiContext.dimensions.smaller}>
              <Astronaut />
            </Earth>
          </span>
        )}
      </AnimatedContainer>
    </BlueBackground>
  );
}

export default Background;
