import styled from "styled-components";
import React, { useEffect } from "react";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import DotWithText from "../../DotWithText";
import { PROJECTS } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import { NAVBAR_MAX_WIDTH, NAVBAR_WIDTH } from "../../Config";
const DOTS_INTERVAL = 100 / (PROJECTS.length + 1);
const Container = styled(motion.div)`
  width: calc(100% - min(${NAVBAR_WIDTH}, ${NAVBAR_MAX_WIDTH}));
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
  padding-right: 10%;
  position: relative;
  top: -10%;
`;
const Rocket = styled(motion.img)`
  position: absolute;
  left: 15%;
  top: 90%;
  width: 5%;
  height: auto;
  cursor: ${(props) => (props.clicked ? "default" : "pointer")};
  -webkit-transform-origin-y: 5%;
  z-index: 1;
`;
const Bar = styled.div`
  width: 10px;
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
  width: 90%;
  transform-origin: top;
`;

function Projects(props) {
  const rocketController = useAnimation();
  const projectCardsController = useAnimation();
  const [clickedRocket, setClickedRocket] = React.useState(false);
  const progressBar = React.useRef(null);
  const rocketRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const rocketY = useMotionValue(0);
  const getRocketAnimation = {
    idle: () => {
      return {
        rotateX: [0, 20, 0],
        rotateZ: [0, 5, 0, -5, 0],
        transition: {
          rotateX: { duration: 1, ease: "linear", delay: 1, repeat: "Infinity" },
          rotateZ: { duration: 1, ease: "linear", delay: 1, repeat: "Infinity" },
        },
      };
    },
    generateStop: (newY, delay) => {
      return {
        y: newY,
        rotateX: [0, 20, 0, 0],
        rotateZ: [0, 5, 0, -5, 0],
        transition: {
          y: { duration: 2, delay: delay },
          rotateX: { duration: 1, ease: "linear", delay: delay, repeat: 1 },
          rotateZ: { duration: 1, ease: "linear", delay: delay, repeat: 1 },
        },
      };
    },
    stop: () => {
      return {
        rotateX: [null, 0],
        rotateZ: [null, 0],
        transition: {
          rotateX: { duration: 2, ease: "easeIn" },
          rotateZ: { duration: 2, ease: "easeIn" },
        },
      };
    },
  };
  const initialSequence = async () => {
    await rocketController.start(getRocketAnimation.idle());
  };
  const onTapRocket = async () => {
    if (clickedRocket) return;
    setClickedRocket(true);
    const barHeight = progressBar.current.offsetHeight;
    const stops = PROJECTS.map((_, i) => (-1 * (i + 1) * DOTS_INTERVAL * barHeight) / 100);
    projectCardsController.start(projectCardsAnimation);
    for (let i = 0; i < stops.length; i++) {
      await rocketController.start(getRocketAnimation.generateStop(stops[i], i === 0 ? 0 : 0.75));
    }
    await rocketController.start(getRocketAnimation.stop());
  };
  const scrollToRocket = () => {
    const rect = rocketRef.current.getBoundingClientRect();
    containerRef.current.scroll({
      top: containerRef.current.scrollTop + rect.top - window.innerHeight / 2,
    });
  };
  const projectCardsAnimation = (i) => {
    return {
      opacity: [0, 1],
      scale: [0, 1.1, 1],
      transition: {
        duration: 0.75,
        delay: 2 + (i - 1) * 2.75,
      },
    };
  };
  useEffect(() => {
    initialSequence();
    scrollToRocket();
    rocketY.onChange(() => {
      scrollToRocket();
    });
  }, []);
  const dotProperties = {
    margin: "0 -30px",
    textOnRight: true,
    radius: "2em",
    left: "50%",
    bgColor: COLORS["main-yellow"],
  };
  const generateDots = () => {
    return PROJECTS.map((projectData, i) => {
      const top = (i + 1) * DOTS_INTERVAL + "%";
      return <DotWithText key={i} {...dotProperties} title={projectData.date} top={top} />;
    });
  };
  const generateProjectCards = () => {
    return PROJECTS.map((projectData, i) => {
      const top = (i + 1) * DOTS_INTERVAL + "%";
      return (
        <ProjectCardContainer
          initial={{ opacity: 0, scale: 0 }}
          animate={projectCardsController}
          custom={PROJECTS.length - i}
          key={i}
          top={top}
        >
          <ProjectCard {...projectData} />
        </ProjectCardContainer>
      );
    });
  };
  return (
    <Container animate={{ scrollMarginTop: 0 }} ref={containerRef}>
      <InnerContainer height={PROJECTS.length * 120}>
        <FlexContainer>
          <RocketBarContainer>
            <Bar ref={progressBar}>
              {generateDots()}
              <DotWithText {...dotProperties} top="100%" />
            </Bar>
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
