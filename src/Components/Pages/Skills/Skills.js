import styled from "styled-components";
import React from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion } from "framer-motion";
import { biggestIcon, technologies } from "./TechnologiesConfig";
import { NAVBAR_MAX_WIDTH, NAVBAR_MIN_WIDTH, NAVBAR_WIDTH } from "../../Config";

const Container = styled(motion.div)`
  width: calc(100% - max(${NAVBAR_MIN_WIDTH}, min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH})));
  height: 100%;
  display: flex;
  justify-content: center;
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
  @media screen and (orientation: portrait) {
    width: 90%;
  }
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
  height: 1.1vmin;
  -webkit-perspective-origin-x: 0%;
  -webkit-transform-origin-x: 0%;
  background-color: ${(props) => props.color};
`;
const TechImage = styled.img`
  width: ${(props) => props.size}vmin;
  height: auto;
`;
const TechImageContainer = styled.div`
  width: ${biggestIcon + "vmin"};
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
            offset={0.35}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"3.5vmax"}
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
          Through my role as architecture lead, i have developed a strong in depth understanding of React/Native. Using
          component design patterns and SOLID principles in building solutions allows for building performant and
          scalable products.
          <br></br>
          <br></br> Along with that i have build and designed many scalable, reliable and available systems in the
          backend considering all the trade-offs of different approaches.
          <br></br>
          <br></br>During my leadership of the devops team i have worked with release and automation pipelines in all
          different layers of software. This has developed my skills devops technologies including but not limited to,
          Iac, containerization, unit testing and CICD.
        </Description>
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
