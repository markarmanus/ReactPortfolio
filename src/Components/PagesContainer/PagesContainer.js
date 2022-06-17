import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background/Background";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../Navbar";
import TabsContainer from "../TabsContainer";
import {
  loadingRocketFirstHalf,
  loadingRocketInitial,
  loadingRocketSecondHalf,
  loadingTextFirst,
  loadingTextInitial,
  loadingTextSecond,
  mainContainerVariants,
  tabContainerVariants,
} from "./AnimationConfig";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const PleaseHoldTight = styled.p`
  font-family: "Poly";
  width: fit-content;
  font-size: 1.1vmax;
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
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
function PagesContainer(props) {
  useEffect(() => {
    navBarController.start("textAnimation");
  }, []);

  const uiContext = React.useContext(UiContext);

  const firstTabContainerController = useAnimation();
  const secondTabContainerController = useAnimation();
  const rocketController = useAnimation();
  const navBarController = useAnimation();
  const loadingTextController = useAnimation();

  const [tabs, setTabs] = useState({
    first: props.initialSelectedTab,
    second: null,
  });
  const [active, setActive] = useState(0);
  const [currentSelectedTab, setCurrentSelectedTab] = useState(props.initialSelectedTab);
  const [disabled, setDisabled] = useState(false);

  const switchTabs = async (newTab) => {
    let toHide, toShow;
    // switching from first to second
    if (active === 0) {
      toShow = secondTabContainerController;
      toHide = firstTabContainerController;
      setTabs({
        first: tabs.first,
        second: newTab,
      });
    } else {
      toShow = firstTabContainerController;
      toHide = secondTabContainerController;
      setTabs({
        first: newTab,
        second: tabs.second,
      });
    }
    // Animation Stage 1
    toHide.start("hide");
    loadingTextController.start(loadingTextFirst);
    await rocketController.start(loadingRocketFirstHalf);

    // Animation Stage 2
    rocketController.start(loadingRocketSecondHalf);
    loadingTextController.start(loadingTextSecond);
    toShow.start("textAnimation");
    await toShow.start("show").then(() => setDisabled(false));

    setActive(active === 0 ? 1 : 0);
  };

  const onSelectTab = (newTab) => {
    if (newTab === currentSelectedTab) return;
    if (disabled) return;
    setDisabled(true);
    setCurrentSelectedTab(newTab);
    switchTabs(newTab);
  };

  return (
    <Container variants={mainContainerVariants}>
      <Background animate={true}></Background>
      <ContentContainer animate={firstTabContainerController} variants={tabContainerVariants} initial="show">
        <TabsContainer isActive={true} tabToRender={tabs.first} />
      </ContentContainer>
      <RocketContainer initial={loadingRocketInitial} animate={rocketController}>
        <Rocket
          src={process.env.PUBLIC_URL + "/Images/Background/Rocket-Right.png"}
          smaller_dimension={uiContext.dimensions.smaller}
        />
        <TextContainer initial={loadingTextInitial} animate={loadingTextController}>
          <PleaseHoldTight>Please Hold Tight</PleaseHoldTight>
        </TextContainer>
      </RocketContainer>

      <ContentContainer animate={secondTabContainerController} variants={tabContainerVariants} initial="hide">
        <TabsContainer isActive={true} tabToRender={tabs.second} />
      </ContentContainer>
      <motion.div animate={navBarController}>
        <Navbar disabled={disabled} onSelectTab={onSelectTab} currentSelectedTab={currentSelectedTab} />
      </motion.div>
    </Container>
  );
}

export default PagesContainer;
