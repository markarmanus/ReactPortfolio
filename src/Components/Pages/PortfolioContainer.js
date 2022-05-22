import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React, { useState } from "react";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "../Navbar";
import TabsContainer from "./TabsContainer";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const PleaseHoldTight = styled.p`
  font-family: "Poly";
  width: fit-content;
  color: ${COLORS["main-yellow"]};
  margin: 0;
  font-weight: bold;
`;
const ContentContainer = styled(motion.div)`
  height: 100%;
  position: absolute;
  width: 100%;
`;
const Rocket = styled(motion.img)`
  top: 50%;
  left: -20%;
  transform: translate(0, -50%);
  width: ${({ smallerDimension }) => 0.2 * smallerDimension}px;
  height: auto;
`;
const RocketContainer = styled(motion.div)`
  position: absolute;
  -webkit-transform-origin-y: 5%;
  top: 50%;
  left: 0%;
`;
const TextContainer = styled(motion.div)`
  position: absolute;
  transform: translate(20%, -50%);
  top: 60%;
`;
function PortfolioContainer(props) {
  const uiContext = React.useContext(UiContext);
  const controller1 = useAnimation();
  const controller2 = useAnimation();
  const rocketController = useAnimation();
  const textController = useAnimation();
  const [active, setActive] = useState(0);
  const [selectedTab, setSelectedTab] = useState(props.initialSelectedTab);
  const variants = {
    hidden: { translateY: uiContext.dimensions.height },
    rocketClicked: {
      translateY: [uiContext.dimensions.height, 0],
      transition: { delay: 0.5, duration: 3, ease: "easeOut" },
    },
  };
  const textAnimation = {
    opacity: [0, 1, 0],
    transition: { duration: 2, delay: 0.4, times: [0, 0.35, 0.65, 1] },
  };
  const rocketAnimation = {
    translateX: [-100, uiContext.dimensions.width / 2, uiContext.dimensions.width / 2, uiContext.dimensions.width],
    rotateX: [0, 20, 0],
    rotateZ: [0, 5, 0, -5, 0],
    transition: {
      translateX: { duration: 2, times: [0, 0.35, 0.65, 1], delay: 0.4 },
      rotateX: { duration: 0.75, repeat: 4 },
      rotateZ: { duration: 0.75, repeat: 4, ease: "linear" },
    },
  };

  const sequence = async () => {
    if (active == 0) {
      controller1.start("hide");
      rocketController.start(rocketAnimation);
      textController.start(textAnimation);
      controller2.start("show");
      setActive(1);
    } else {
      controller1.start("show");
      rocketController.start(rocketAnimation);
      textController.start(textAnimation);
      controller2.start("hide");
      setActive(0);
    }
  };
  const onSelectTab = (tab) => {
    if (tab === selectedTab) return;
    sequence();
    setTimeout(() => {
      setSelectedTab(tab);
    }, 1400);
  };
  const navBarWidth = {
    default: "200px",
    "1000px": "150px",
    "700px": "100px",
  };
  return (
    <Container variants={variants}>
      <Background animate={true}></Background>
      <ContentContainer animate={controller1} initial="show">
        <TabsContainer navBarWidth={navBarWidth} selectedTab={selectedTab} />
      </ContentContainer>
      <RocketContainer initial={{ translateX: -100 }} animate={rocketController}>
        <Rocket
          src={process.env.PUBLIC_URL + "/Images/Background/Rocket-Right.png"}
          smallerDimension={uiContext.dimensions.smaller}
        />
        <TextContainer initial={{ opacity: 0 }} animate={textController}>
          <PleaseHoldTight>Please Hold Tight</PleaseHoldTight>
        </TextContainer>
      </RocketContainer>

      <ContentContainer animate={controller2} initial="hide">
        <TabsContainer navBarWidth={navBarWidth} selectedTab={selectedTab} />
      </ContentContainer>

      <Navbar navBarWidth={navBarWidth} onSelectTab={onSelectTab} selectedTab={selectedTab} />
    </Container>
  );
}

export default PortfolioContainer;
