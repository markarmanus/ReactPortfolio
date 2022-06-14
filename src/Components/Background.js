import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { motion } from "framer-motion";
import { COLORS } from "../Constants/COLOR";
import { EARTH_SIZE } from "./Config";
import { randomIntFromInterval } from "../Helpers/Math";

const AnimatedContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${COLORS["main-blue"]};
`;

const Earth = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/Earth.png"});
  width: ${({ smaller_dimension }) => (EARTH_SIZE / 100) * smaller_dimension}px;
  height: ${({ smaller_dimension }) => (EARTH_SIZE / 100) * smaller_dimension}px;
  position: relative;
  background-size: contain;
  top: 90%;
  transform: translate(0%, -100%);
  left: 10%;
  background-repeat: no-repeat;
`;
const MoonContainer = styled(motion.div)`
  width: ${({ smaller_dimension }) => (EARTH_SIZE / 100) * smaller_dimension}px;
  height: ${({ smaller_dimension }) => (EARTH_SIZE / 100) * smaller_dimension}px;
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

const Star = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => process.env.PUBLIC_URL + `/Images/Background/Star${props.imageNumber}.png`});
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: rotate(${(props) => props.rotation}deg);
`;

const StarsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;
const variants = {
  hidden: { opacity: 0, transition: { duration: 2 } },
  rocketClicked: { opacity: 1, transition: { duration: 5 } },
};
const generateStars = (screenHeigh, screenWidth) => {
  let stars = [];
  let currentX = 0;
  let currentY = 0;
  const chanceToRenderStar = 0.15;
  const interval = 60;
  const padding = 10;
  while (currentY < screenHeigh) {
    currentX = 0;
    while (currentX < screenWidth) {
      if (Math.random() < chanceToRenderStar) {
        const rotation = randomIntFromInterval(0, 360);
        const imageNumber = randomIntFromInterval(1, 5);
        const width = randomIntFromInterval(10, 35);
        stars.push(
          <Star
            top={currentY}
            rotation={rotation}
            imageNumber={imageNumber}
            left={currentX}
            width={width}
            height={width}
          />
        );
      }
      currentX += randomIntFromInterval(interval, interval + padding);
    }
    currentY += randomIntFromInterval(interval, interval + padding);
  }
  return stars;
};
function Background(props) {
  const uiContext = React.useContext(UiContext);
  const [stars] = React.useState(generateStars(uiContext.dimensions.height, uiContext.dimensions.width));

  return (
    <AnimatedContainer variants={props.animate ? variants : {}}>
      <StarsContainer>{stars}</StarsContainer>
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
  );
}

export default Background;
