import styled from "styled-components";
import { useCountUp } from "react-countup";
import React, { useEffect, useRef } from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import DotWithText from "../../DotWithText";
import Card from "./InformationCard";
import { AiOutlineFieldTime, AiOutlineCoffee } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { NAVBAR_MAX_WIDTH, NAVBAR_MIN_WIDTH, NAVBAR_WIDTH } from "../../Config";

const Container = styled(motion.div)`
  width: calc(100% - max(${NAVBAR_MIN_WIDTH}, min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH})));
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  top: 0%;
  left: 0%;
  background-color: ${COLORS["main-blue-rgba"](0.4)};
  @media screen and (orientation: portrait) {
    flex-direction: column;
    height: 90%;
    align-self: center;
  }
`;
const Rectangle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  transform: translate(0, -50%);
  top: 50%;
  position: absolute;
  background-color: ${(props) => props.bgColor};
`;

const BottomRightContainer = styled.div`
  flex: 1.2;
  padding-right: 5%;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 90%;
`;
const AnimatedCard = styled(motion.div)`
  width: 100%;
  display: flex;
`;
const LeftContainer = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 0.4;
  padding-left: 3%;
  @media screen and (orientation: portrait) {
    flex: 0.2;
    padding: 0 3%;
  }
`;
const TitleContainer = styled.div`
  height: 8vmin;
`;
const RightContainer = styled.div`
  flex: 0.6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (orientation: portrait) {
    flex: 0.8;
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
const Rocket = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 50%;
  width: 12%;
  height: auto;
  cursor: ${(props) => (props.clicked ? "default" : "pointer")};
  transform: translate(-50%, -50%);
  -webkit-transform-origin-y: 5%;
  z-index: 1;
`;
const CardsContainer = styled.div`
  width: 95%;
  flex: 1.3;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const TopRightHalf = styled(BottomRightContainer)`
  justify-content: flex-end;
  padding-bottom: 10%;
  flex: 0.6;
`;
const Numbers = styled.div`
  font-weight: bold;
  font-size: 1.2vmax;
`;
const IconContainer = styled.div`
  position: relative;
  text-align: center;
`;
const IconProps = {
  size: "50%",
  color: COLORS["main-yellow"],
};

const IconTitle = styled.div`
  color: ${COLORS["main-yellow"]};
  font-size: 1.2vmax;
  display: inline;
`;
const popInAnimation = {
  scale: [0, 1.15, 1],
  opacity: [0, 1],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};
function AboutMe(props) {
  const rocketController = useAnimation();
  const graduationCardController = useAnimation();
  const mysaCardController = useAnimation();
  const heyorcaCardController = useAnimation();
  const progressBar = useRef(null);
  const [clickedRocket, setClickedRocket] = React.useState(false);
  const getRocketAnimation = {
    idle: () => {
      return {
        rotateX: [0, 20, 0],
        rotateZ: [0, 5, 0, -5, 0],
        transition: {
          rotateX: { duration: 0.75, ease: "linear", delay: 1, repeat: "Infinity" },
          rotateZ: { duration: 0.75, ease: "linear", delay: 1, repeat: "Infinity" },
        },
      };
    },
    toHeyOrca: (width) => {
      return {
        x: [0, 0.25 * width],
        transition: {
          x: { duration: 0.75 },
        },
      };
    },
    toMysa: (width) => {
      return {
        x: 0.5 * width,
        transition: {
          x: { duration: 0.75, delay: 0.1 },
        },
      };
    },
    toGraduation: (width) => {
      return {
        x: 0.75 * width,
        transition: {
          x: { duration: 0.75, delay: 0.1 },
        },
      };
    },
    toStop: (width) => {
      return {
        x: width,
        transition: {
          x: { duration: 0.75, delay: 0.1 },
        },
      };
    },
    stop: () => {
      return {
        rotateX: [null, 0],
        rotateZ: [null, 0],
        transition: {
          rotateX: { duration: 0.75, ease: "linear" },
          rotateZ: { duration: 0.75, ease: "linear" },
        },
      };
    },
  };
  const initialSequence = async () => {
    await rocketController.start(getRocketAnimation.idle());
  };
  useEffect(() => {
    initialSequence();
  }, []);
  const linedOfCodeRef = React.useRef(null);
  const hoursRef = React.useRef(null);
  const cupsOfCoffeeRef = React.useRef(null);
  const { start: startHours, pauseResume: pauseResumeHours } = useCountUp({
    ref: hoursRef,
    start: 0,
    end: 8000,
    startOnMount: false,
    suffix: "+",
    duration: 10,
  });
  const { start: startCoffee, pauseResume: pauseResumeCoffee } = useCountUp({
    ref: cupsOfCoffeeRef,
    start: 0,
    end: 1500,
    suffix: "+",
    duration: 10,
    startOnMount: false,
  });
  const { start: startLines, pauseResume: pauseResumeLines } = useCountUp({
    ref: linedOfCodeRef,
    start: 0,
    end: 1000000,
    suffix: "+",
    startOnMount: false,
    duration: 10,
  });
  const startNumbers = () => {
    startLines();
    startHours();
    startCoffee();
  };
  const pauseResumeNumbers = () => {
    pauseResumeLines();
    pauseResumeCoffee();
    pauseResumeHours();
  };
  const onClickRocket = async () => {
    if (clickedRocket) return;
    setClickedRocket(true);
    const barWidth = progressBar.current.offsetWidth;
    startNumbers();
    await rocketController.start(getRocketAnimation.toHeyOrca(barWidth));
    pauseResumeNumbers();
    await heyorcaCardController.start(popInAnimation);
    pauseResumeNumbers();
    await rocketController.start(getRocketAnimation.toMysa(barWidth));
    pauseResumeNumbers();
    await mysaCardController.start(popInAnimation);
    pauseResumeNumbers();
    await rocketController.start(getRocketAnimation.toGraduation(barWidth));
    pauseResumeNumbers();
    await graduationCardController.start(popInAnimation);
    pauseResumeNumbers();
    await rocketController.start(getRocketAnimation.toStop(barWidth));
    await rocketController.start(getRocketAnimation.stop());
  };

  const dotSize = "1.8vmax";
  const dotFontSize = "1vmax";
  const dotTextMargin = "3vh 0";
  return (
    <Container>
      <LeftContainer>
        <TitleContainer>
          <DoubleText
            offset={4}
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
        <Quote>Favorite Quote: “Programming is a social activity.” - Uncle Bob</Quote>
      </LeftContainer>
      <RightContainer>
        <TopRightHalf>
          <CardsContainer style={{ flex: 0.5 }}>
            <AnimatedCard initial={{ opacity: 0, scale: 0 }} animate={graduationCardController}>
              <Card
                title="Computer Science - Honours"
                titleFontSize="1.1vmax"
                bulletPointFontSize="0.9vmax"
                details={[
                  { fontSize: "0.8vmax", text: "Memorial University Of Newfoundland", bold: true },
                  { fontSize: "0.7vmax", text: "Sept 2016 - Apr 2021" },
                ]}
                bulletPoints={[
                  "Graduated With Honours",
                  "Research In Evolutionary Machine Learning To Create Semester University Schedule",
                ]}
              />
            </AnimatedCard>
          </CardsContainer>
        </TopRightHalf>
        <BottomRightContainer>
          <div style={{ width: "90%", flex: 0.6 }}>
            <div style={{ position: "relative", width: "100%" }}>
              <Rocket
                initial={{ translateX: "-50%", translateY: "-50%" }}
                animate={rocketController}
                clicked={clickedRocket}
                onTap={onClickRocket}
                src={process.env.PUBLIC_URL + "/Images/Background/Rocket-Right.png"}
              />
              <DotWithText
                fontSize={dotFontSize}
                title="Sept 2016"
                left="0%"
                radius={dotSize}
                margin={dotTextMargin}
                bgColor={COLORS["main-yellow"]}
              />
              <DotWithText
                fontSize={dotFontSize}
                title="Heyorca - Jan 2018"
                left="25%"
                radius={dotSize}
                margin={dotTextMargin}
                bgColor={COLORS["main-yellow"]}
              />
              <DotWithText
                fontSize={dotFontSize}
                title="Mysa - Jan 2020"
                left="50%"
                radius={dotSize}
                margin={dotTextMargin}
                bgColor={COLORS["main-yellow"]}
              />
              <DotWithText
                fontSize={dotFontSize}
                title="Graduation - Apr 2021"
                left="75%"
                radius={dotSize}
                margin={dotTextMargin}
                bgColor={COLORS["main-yellow"]}
              />
              <Rectangle ref={progressBar} width="100%" height="0.5vmax" bgColor={COLORS["main-yellow"]} />
              <DotWithText
                fontSize={dotFontSize}
                title="Present"
                left="100%"
                radius={dotSize}
                margin={dotTextMargin}
                bgColor={COLORS["main-yellow"]}
              />
            </div>
          </div>
          <CardsContainer>
            <AnimatedCard initial={{ opacity: 0, scale: 0 }} animate={heyorcaCardController}>
              <Card
                title="Web Developer"
                titleFontSize="1.1vmax"
                bulletPointFontSize="0.9vmax"
                details={[
                  { fontSize: "0.8vmax", text: "Heyorca", bold: true },
                  { fontSize: "0.7vmax", text: "Jan 2018 - Oct 2019" },
                ]}
                bulletPoints={[
                  "Worked Heavily With PHP, Laravel, AWS and React",
                  "Member of the Devops team to create Internal dev tools",
                ]}
              />
            </AnimatedCard>
            <AnimatedCard initial={{ opacity: 0, scale: 0 }} animate={mysaCardController}>
              <Card
                title="Intermediate Software Developer"
                titleFontSize="1.1vmax"
                bulletPointFontSize="0.9vmax"
                details={[
                  { fontSize: "0.8vmax", text: "App Architecture Lead", bold: true },
                  { fontSize: "0.8vmax", text: "Mysa Thermostat", bold: true },
                  { fontSize: "0.7vmax", text: "Jan 2020 - Present" },
                ]}
                bulletPoints={[
                  "Worked as something and bla",
                  "App Arch we 7agat kter yala edenea b2a",
                  "Employe of the Week ",
                ]}
              />
            </AnimatedCard>
          </CardsContainer>
          <div style={{ width: "90%", flex: 1.3 }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "5%" }}>
              <IconContainer>
                <BsCodeSlash {...IconProps} />
                <IconTitle>
                  <Numbers ref={linedOfCodeRef}>0</Numbers> Lines Of Code
                </IconTitle>
              </IconContainer>
              <IconContainer>
                <AiOutlineFieldTime {...IconProps} />
                <IconTitle>
                  <Numbers ref={hoursRef}>0</Numbers> Professional Work Hours
                </IconTitle>
              </IconContainer>
              <IconContainer>
                <AiOutlineCoffee {...IconProps} />
                <IconTitle>
                  <Numbers ref={cupsOfCoffeeRef}>0</Numbers> Cups of Coffee
                </IconTitle>
              </IconContainer>
            </div>
          </div>
        </BottomRightContainer>
      </RightContainer>
    </Container>
  );
}

export default AboutMe;
