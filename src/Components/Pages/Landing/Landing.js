import styled from "styled-components";
import UiContext from "../../../Contexts/UI";
import Background from "../../Background/Background";
import React from "react";
import DoubleText from "../../DoubleText";
import { COLORS } from "../../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import PagesContainer from "../../PagesContainer/PagesContainer";
import { TABS } from "../../../Constants/PAGES";
import { isMobileOnly } from "react-device-detect";
import { AnimationConfig, TextConfig } from "./Config";
import { toast } from "react-toastify";
const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;
const Rocket = styled(motion.img)`
  position: absolute;
  left: 47%;
  bottom: 0%;
  width: ${({ smaller_dimension }) => 0.1 * smaller_dimension}px;
  height: auto;
  cursor: pointer;
  -webkit-transform-origin-y: 5%;
  translate: -50%;
`;
const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    height: 70%;
  }
  @media (max-height: 600px) {
    width: 100%;
    height: 70%;
  }
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
`;
const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const InnerTextContainer = styled.div`
  flex: ${({ flex }) => flex};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-top: ${({ marginTop }) => marginTop};
`;
const NotSupportedContainer = styled.div`
  width: 260px;
  height: 180px;
  position: absolute;
  padding: 30px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${COLORS["secondary-blue"]};
`;

function Landing() {
  const uiContext = React.useContext(UiContext);
  const rocketAnimationController = useAnimation();
  const mainController = useAnimation();
  const pageContentController = useAnimation();
  const [toastId, setToastId] = React.useState();

  const initialSequence = async () => {
    mainController.start("visible");
    pageContentController.start("textAnimation");
    await rocketAnimationController.start(AnimationConfig.rocketAppearAnimation);
    setTimeout(() => {
      const id = toast.info("Hint: Try Clicking the Rocket!", {
        position: "top-center",
        autoClose: false,
        theme: "dark",
      });
      setToastId(id);
    }, 1500);
    await rocketAnimationController.start("idle");
  };
  React.useEffect(() => {
    initialSequence();
  }, []);

  const onClickRocket = () => {
    toast.dismiss(toastId);
    rocketAnimationController.start("rocketClicked");
    mainController.start("rocketClicked");
    pageContentController.start("hidden");
  };

  const renderPage = () => {
    if (isMobileOnly) {
      return (
        <Container initial={"hidden"} variants={AnimationConfig.mainContainerVariants} animate={mainController}>
          <ContentContainer
            initial="visible"
            variants={AnimationConfig.innerContainerVariants}
            animate={pageContentController}
          >
            <Background animate={false} showPlanets={true} />
            <NotSupportedContainer>
              <div style={{ width: "100px", marginBottom: "15px" }}>
                <DoubleText {...TextConfig.NotSupportedTitleProps} />
              </div>
              <br></br>
              <DoubleText {...TextConfig.NotSupportedDetails1Props} />
              <br></br> <br></br>
              <DoubleText {...TextConfig.NotSupportedDetails2Props} />
              <br></br> <br></br>
              <DoubleText {...TextConfig.NotSupportedDetails3Props} />
              <br></br> <br></br>
              <DoubleText {...TextConfig.NotSupportedFinalMsg} />
            </NotSupportedContainer>
          </ContentContainer>
        </Container>
      );
    } else {
      return (
        <Container initial={"hidden"} variants={AnimationConfig.mainContainerVariants} animate={mainController}>
          <ContentContainer
            initial="visible"
            variants={AnimationConfig.innerContainerVariants}
            animate={pageContentController}
          >
            <Background animate={false} showPlanets={true} />
            <TextContainer>
              <InnerTextContainer flex={0.5} marginLeft={"5vw"} marginTop={"5vh"}>
                <DoubleText {...TextConfig.Name} />
              </InnerTextContainer>
              <InnerTextContainer flex={1} marginLeft={"8vw"}>
                <DoubleText {...TextConfig.Hi} />
                <DoubleText {...TextConfig.IamMark} />
                <DoubleText {...TextConfig.SoftwareDeveloper} />
                <DoubleText {...TextConfig.ReactExpert} />
              </InnerTextContainer>
              <InnerTextContainer flex={1} />
            </TextContainer>
          </ContentContainer>

          <Rocket
            animate={rocketAnimationController}
            initial={null}
            variants={AnimationConfig.rocketVariants}
            onTap={onClickRocket}
            src={process.env.PUBLIC_URL + "/Images/Background/Rocket.png"}
            smaller_dimension={uiContext.dimensions.smaller}
          />
          <PagesContainer initialSelectedTab={TABS.ABOUT_ME} />
        </Container>
      );
    }
  };
  return renderPage();
}

export default Landing;
