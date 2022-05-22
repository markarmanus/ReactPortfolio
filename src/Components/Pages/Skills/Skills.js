import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import { biggestIcon, technologies } from "./TechnologisConfig";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0%;
  left: 0%;
  background-color: ${COLORS["main-blue-rgba"](0.4)};
`;

const BottomRightContainer = styled.div`
  flex: 1.2;
  padding-right: 5%;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 65%;
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
  flex: 0.75;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  align-items: center;

  flex-direction: column;
`;
const Description = styled.p`
  color: white;
  font-family: "Puritan";
  font-size: 23px;
`;
const Quote = styled.p`
  color: ${COLORS["main-yellow"]};
  font-family: "Puritan";
  font-size: 18px;
`;

const TopRightHalf = styled(BottomRightContainer)`
  justify-content: flex-end;
  padding-bottom: 6%;
  flex: 0.6;
`;

const TechContainer = styled(motion.div)`
  width: 100%;
  display: flex;

  align-items: center;
`;
const TechBar = styled(motion.div)`
  display: inline-block;
  width: ${(props) => props.width};
  height: 1.1vh;
  background-color: ${(props) => props.color};
`;
const TechImage = styled.img`
  width: ${(props) => props.size}vh;
  height: auto;
`;
const TechImageContainer = styled.div`
  width: ${biggestIcon + "vh"};
`;
function Skills(props) {
  const initialSequence = async () => {};
  useEffect(() => {
    initialSequence();
  }, []);

  return (
    <Container>
      <LeftContainer>
        <TitleContainer>
          <DoubleText
            offset={4}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"6vmin"}
            font="Prompt"
            height="100%"
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
            <TechContainer>
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