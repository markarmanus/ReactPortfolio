import styled from "styled-components";
import React from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion } from "framer-motion";
import { biggestIcon, technologies } from "./TechnologiesConfig";
import { NAVBAR_MAX_WIDTH, NAVBAR_WIDTH } from "../../Config";

const Container = styled(motion.div)`
  width: calc(100% - min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH}));
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0%;
  left: 0%;
  background-color: ${COLORS["main-blue-rgba"](0.4)};
`;

const LeftContainer = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 0.4;
  padding-left: 3%;
`;
const TitleContainer = styled.div`
  height: 8vmin;
`;
const RightContainer = styled.div`
  flex: 0.6;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  flex-direction: column;
`;
const Description = styled.p`
  color: white;
  font-family: "Puritan";
  font-size: 1.4vmax;
`;
const Quote = styled.p`
  color: ${COLORS["main-yellow"]};
  font-family: "Puritan";
  font-size: 1.2vmax;
`;
const TechContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  -webkit-perspective-origin-x: 0%;
  -webkit-transform-origin-x: 0%;
  align-items: center;
`;
const TechBar = styled(motion.div)`
  display: inline-block;
  width: ${(props) => props.width};
  height: 1.1vh;
  -webkit-perspective-origin-x: 0%;
  -webkit-transform-origin-x: 0%;
  background-color: ${(props) => props.color};
`;
const TechImage = styled.img`
  width: ${(props) => props.size}vh;
  height: auto;
`;
const TechImageContainer = styled.div`
  width: ${biggestIcon + "vh"};
`;
const loadInAnimation = (i) => {
  return {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      delay: 0.5 + 0.15 * i,
      ease: "linear",
      duration: 0.4,
    },
  };
};
const disappearAnimation = {
  opacity: [1, 0],
  transition: {
    delay: 0,
    duration: 0.1,
  },
};

const containerVariants = {
  show: loadInAnimation,
  hide: disappearAnimation,
};

function Skills(props) {
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
            text={`Technical Skills`}
          />
        </TitleContainer>

        <Description>
          Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor
          activities, TV series and English literature. A family person and father of two fractious boys.
          <br></br>
          <br></br> Well-organised person, problem solver, independent employee with high attention to detail. Fan of
          MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,
        </Description>
        <Quote>Quote: “Programming is a social activity.” - Uncle Bob</Quote>
      </LeftContainer>
      <RightContainer>
        {technologies.map((tech, i) => {
          return (
            <TechContainer key={i} custom={i} variants={containerVariants}>
              <TechImageContainer>
                <TechImage size={tech.size} src={tech.imgSrc} />
              </TechImageContainer>
              <TechBar color={tech.color} width={tech.experience} />
            </TechContainer>
          );
        })}
      </RightContainer>
    </Container>
  );
}

export default Skills;
