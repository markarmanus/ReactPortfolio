import styled from "styled-components";
import UiContext from "../Contexts/UI";
import Background from "./Background";
import React, { useEffect, useState } from "react";
import { COLORS } from "../Constants/COLOR";
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import TabsContainer from "./TabsContainer";
import { debounce } from "../Helpers/UI";

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
  width: ${({ smaller_dimension }) => 0.2 * smaller_dimension}px;
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
  const firstTabContainerController = useAnimation();
  const secondTabContainerController = useAnimation();
  const rocketController = useAnimation();
  const navBarAnimationController = useAnimation();
  const [tabs, setTabs] = useState({
    first: props.initialSelectedTab,
    second: null,
  });
  const textController = useAnimation();
  const [active, setActive] = useState(0);
  const [selectedTab, setSelectedTab] = useState(props.initialSelectedTab);
  const [disabled, setDisabled] = useState(false);
  const variants = {
    hidden: { translateY: uiContext.dimensions.height },
    rocketClicked: {
      translateY: [uiContext.dimensions.height, 0],
      transition: { delay: 0.5, duration: 3, ease: "easeOut" },
    },
  };
  useEffect(() => {
    navBarAnimationController.start("textAnimation");
  }, []);
  const firstTextAnimation = {
    opacity: [0, 1],
    transition: { duration: 0.75, delay: 0.4 },
  };
  const secondTextAnimation = {
    opacity: [1, 0],
    transition: { duration: 1.75, delay: 0 },
  };

  const fistRocketAnimation = {
    translateX: [-100, uiContext.dimensions.width / 2],
    rotateX: [0, 20, 0],
    rotateZ: [0, 5, 0, -5, 0],
    transition: {
      translateX: { duration: 0.5, delay: 0.4 },
      rotateX: { duration: 0.75, repeat: 1, ease: "linear" },
      rotateZ: { duration: 0.75, repeat: 1, ease: "linear" },
    },
  };
  const secondRocketAnimation = {
    translateX: [uiContext.dimensions.width / 2, uiContext.dimensions.width],
    rotateX: [null, 20, 0],
    rotateZ: [null, 5, 0, -5, 0],
    transition: {
      translateX: { duration: 0.5, delay: 0 },
      rotateX: { duration: 0.75, repeat: 2, delay: 0, ease: "linear" },
      rotateZ: { duration: 0.75, repeat: 2, delay: 0, ease: "linear" },
    },
  };
  const sequence = async (tab) => {
    if (active == 0) {
      setSelectedTab(tab);
      setTabs({
        first: tabs.first,
        second: tab,
      });
      firstTabContainerController.start("hide");
      textController.start(firstTextAnimation);
      await rocketController.start(fistRocketAnimation);
      rocketController.start(secondRocketAnimation);
      textController.start(secondTextAnimation);
      secondTabContainerController.start("textAnimation");
      await secondTabContainerController.start("show").then(() => setDisabled(false));
      setActive(1);
    } else {
      setTabs({
        first: tab,
        second: tabs.second,
      });
      setSelectedTab(tab);
      secondTabContainerController.start("hide");
      textController.start(firstTextAnimation);
      await rocketController.start(fistRocketAnimation);
      rocketController.start(secondRocketAnimation);
      textController.start(secondTextAnimation);
      firstTabContainerController.start("textAnimation");
      await firstTabContainerController.start("show").then(() => setDisabled(false));
      setActive(0);
    }
  };

  const onSelectTab = (tab) => {
    if (tab === selectedTab) return;
    if (disabled) return;
    setDisabled(true);
    sequence(tab);
  };
  const nav_bar_width = {
    default: "200px",
    "1000px": "150px",
    "700px": "100px",
  };

  return (
    <Container variants={variants}>
      <Background animate={true}></Background>
      <ContentContainer animate={firstTabContainerController} initial="show">
        <TabsContainer nav_bar_width={nav_bar_width} selectedTab={tabs.first} />
      </ContentContainer>
      <RocketContainer initial={{ translateX: -100 }} animate={rocketController}>
        <Rocket
          src={process.env.PUBLIC_URL + "/Images/Background/Rocket-Right.png"}
          smaller_dimension={uiContext.dimensions.smaller}
        />
        <TextContainer initial={{ opacity: 0 }} animate={textController}>
          <PleaseHoldTight>Please Hold Tight</PleaseHoldTight>
        </TextContainer>
      </RocketContainer>

      <ContentContainer animate={secondTabContainerController} initial="hide">
        <TabsContainer nav_bar_width={nav_bar_width} selectedTab={tabs.second} />
      </ContentContainer>
      <motion.div animate={navBarAnimationController}>
        <Navbar nav_bar_width={nav_bar_width} disabled={disabled} onSelectTab={onSelectTab} selectedTab={selectedTab} />
      </motion.div>
    </Container>
  );
}

export default PortfolioContainer;
