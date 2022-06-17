import styled from "styled-components";
import React, { useEffect } from "react";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import DotWithText from "../../DotWithText";
import { PROJECTS } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import { NAVBAR_MAX_WIDTH, NAVBAR_MIN_WIDTH, NAVBAR_WIDTH } from "../../Config";
import { rocketAnimations } from "./AnimationConfig";

// Distance between dots
const DOTS_INTERVAL = 100 / (PROJECTS.length + 1);

const Container = styled(motion.div)`
  width: calc(100% - max(${NAVBAR_MIN_WIDTH}, min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH})));
  height: 100%;
  position: relative;
  top: 0%;
  left: 0%;
  background-color: ${COLORS["main-blue-rgba"](0.4)};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}%;
`;
const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const RocketBarContainer = styled.div`
  flex: 0.2;
`;
const ProjectBoxesContainer = styled.div`
  flex: 0.8;
  position: relative;
  top: -10%;
`;
const Rocket = styled(motion.img)`
  position: absolute;
  left: 15%;
  top: 90%;
  width: 5vw;
  height: auto;
  cursor: ${(props) => (props.clicked ? "default" : "pointer")};
  -webkit-transform-origin-y: 5%;
  z-index: 1;
`;
const Bar = styled.div`
  width: 0.8vw;
  background-color: ${COLORS["main-yellow"]};
  height: 100%;
  position: absolute;
  left: 15.1%;
  top: -10%;
  transform: translate(-50%);
`;
const ProjectCardContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => props.top};
  width: 95%;
  transform-origin: top;
`;

function Projects() {
  const rocketController = useAnimation();
  const projectCardsController = useAnimation();
  const [clickedRocket, setClickedRocket] = React.useState(false);
  const progressBar = React.useRef(null);
  const rocketRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const rocketY = useMotionValue(0);

  const initialSequence = async () => {
    await rocketController.start(rocketAnimations.idle());
  };

  const startRocketAnimation = async () => {
    const barHeight = progressBar.current.offsetHeight;
    // stops is an array of new y location to go to.
    const stops = PROJECTS.map((_, i) => (-1 * (i + 1) * DOTS_INTERVAL * barHeight) / 100);
    projectCardsController.start("rocketClicked");
    for (let i = 0; i < stops.length; i++) {
      const delay = i === 0 ? 0 : 0.75; // if first no delay
      await rocketController.start(rocketAnimations.generateStop(stops[i], delay));
    }
    await rocketController.start(rocketAnimations.stop());
  };

  const onTapRocket = async () => {
    if (clickedRocket) return;
    setClickedRocket(true);
    startRocketAnimation();
  };

  const scrollToRocket = () => {
    const rect = rocketRef.current.getBoundingClientRect();
    containerRef.current.scroll({
      top: containerRef.current.scrollTop + rect.top - window.innerHeight / 2,
    });
  };

  useEffect(() => {
    initialSequence();
    scrollToRocket();
    rocketY.onChange(() => {
      scrollToRocket();
    });
  }, []);

  const generateDots = () => {
    const dotProperties = {
      margin: "0 -2vw",
      textOnRight: true,
      radius: "2vw",
      left: "50%",
      bgColor: COLORS["main-yellow"],
    };
    const allDots = PROJECTS.map((projectData, i) => {
      const top = (i + 1) * DOTS_INTERVAL + "%";
      return <DotWithText fontSize={"1.3vw"} key={i} {...dotProperties} title={projectData.date} top={top} />;
    });
    allDots.push(<DotWithText {...dotProperties} key={PROJECTS.length + 1} top="100%" />);
    return allDots;
  };
  const generateProjectCards = () => {
    return PROJECTS.map((projectData, i) => {
      const top = (i + 1) * DOTS_INTERVAL + "%";
      return (
        <ProjectCardContainer animate={projectCardsController} key={i} top={top}>
          <ProjectCard reverseIndex={PROJECTS.length - i} {...projectData} />
        </ProjectCardContainer>
      );
    });
  };
  return (
    <Container animate={{ scrollMarginTop: 0 }} ref={containerRef}>
      <InnerContainer height={PROJECTS.length * 120}>
        <FlexContainer>
          <RocketBarContainer>
            <Bar ref={progressBar}>{generateDots()}</Bar>
            <Rocket
              ref={rocketRef}
              initial={{ translateX: "-50%", translateY: "-50%" }}
              animate={rocketController}
              style={{ y: rocketY }}
              clicked={clickedRocket}
              onTap={onTapRocket}
              src={process.env.PUBLIC_URL + "/Images/Background/Rocket.png"}
            />
          </RocketBarContainer>
          <ProjectBoxesContainer>{generateProjectCards()}</ProjectBoxesContainer>
        </FlexContainer>
      </InnerContainer>
    </Container>
  );
}

export default Projects;
