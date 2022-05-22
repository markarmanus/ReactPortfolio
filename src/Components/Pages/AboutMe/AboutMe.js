import styled from "styled-components";
import UiContext from "../../../Contexts/UI";
import Background from "../../Background";
import React from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../../Navbar";
import DotWithText from "../../DotWithText";
import Card from "../../Card";
import { AiOutlineFieldTime, AiOutlineCoffee } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import Icon from "./Icon";
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
const Rectangle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  transform: translate(0, -50%);
  top: 50%;
  background-color: ${(props) => props.bgColor};
`;

const BottomRightContainer = styled.div`
  flex: 1;
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
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
const CardsContainer = styled.div`
  width: 90%;
  flex: 1.3;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const TopRightHalf = styled(BottomRightContainer)`
  justify-content: flex-end;
  padding-bottom: 6%;
  flex: 0.6;
`;
function AboutMe(props) {
  const dotSize = "25px";
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
            text={`Me, Myself & I`}
          />
        </TitleContainer>

        <Description>
          Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor
          activities, TV series and English literature. A family person and father of two fractious boys.
          <br></br>
          <br></br> Well-organised person, problem solver, independent employee with high attention to detail. Fan of
          MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,
        </Description>
        <Quote>Faviroute Quete: “Programming is a social activity.” - Uncle Bob</Quote>
      </LeftContainer>
      <RightContainer>
        <TopRightHalf>
          <CardsContainer style={{ flex: 0.5 }}>
            <Card
              title="Bachelor Of Science - Honours"
              details={[
                { fontSize: "20px", text: "Memorial University Of Newfoundland", bold: true },
                { fontSize: "16px", text: "Sept 2016 - Apr 2021" },
              ]}
              bulletPoints={[
                "Graduated With Honours",
                "Research In Evolutionary Machine Learning To Create Semester University Schedule",
              ]}
            />
          </CardsContainer>
        </TopRightHalf>
        <BottomRightContainer>
          <div style={{ width: "100%", flex: 0.5 }}>
            <div style={{ position: "relative", width: "100%" }}>
              <DotWithText title="Sept 2016" left="0%" radius={dotSize} bgColor={COLORS["main-yellow"]} />
              <DotWithText title="Heyorca - Jan 2018" left="25%" radius={dotSize} bgColor={COLORS["main-yellow"]} />
              <DotWithText title="Mysa - Jan 2020" left="50%" radius={dotSize} bgColor={COLORS["main-yellow"]} />
              <DotWithText title="Graduation - Apr 2021" left="80%" radius={dotSize} bgColor={COLORS["main-yellow"]} />
              <Rectangle width="100%" height="6px" bgColor={COLORS["main-yellow"]} />
              <DotWithText title="Present" left="100%" radius={dotSize} bgColor={COLORS["main-yellow"]} />
            </div>
          </div>
          <CardsContainer>
            <Card
              title="Web Developer"
              details={[
                { fontSize: "20px", text: "Heyorca", bold: true },
                { fontSize: "16px", text: "Jan 2018 - Oct 2019" },
              ]}
              bulletPoints={[
                "Worked Heavily With PHP, Laravel, AWS and React",
                "Member of the Devops team to create Internal dev tools",
              ]}
            />
            <Card
              title="Intermediate Software Developer"
              details={[
                { fontSize: "20px", text: "App Architecture Lead", bold: true },
                { fontSize: "20px", text: "Mysa Thermostat", bold: true },
                { fontSize: "16px", text: "Jan 2020 - Present" },
              ]}
              bulletPoints={[
                "Worked as something and bla",
                "App Arch we 7agat kter yala edenea b2a",
                "Employe of the Week ",
              ]}
            />
          </CardsContainer>
          <div style={{ width: "90%", flex: 1.5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "5%" }}>
              <Icon iconComponent={BsCodeSlash} bold={"8000+"} title={"Lines Of Code"} />
              <Icon iconComponent={AiOutlineFieldTime} bold={"8000+"} title={"Hours"} />
              <Icon iconComponent={AiOutlineCoffee} bold={"8000+"} title={"Cups of Coffee"} />
            </div>
          </div>
        </BottomRightContainer>
      </RightContainer>
    </Container>
  );
}

export default AboutMe;
