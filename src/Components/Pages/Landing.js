import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import PagesContainer from "../PagesCotnainer";
import { TABS } from "../../Constants/PAGES";

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
  @media (max-height: 800px) {
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
const flyUpAnimation = {
  rotateZ: [0, 5, 0, -5, 0],
  rotateX: [0, 20, 0],
  translateY: [null, -1080],
  transition: {
    rotateZ: { ease: "linear", duration: 1, repeat: 3 },
    rotateX: { duration: 0.75, repeat: 4 },
    translateY: { ease: "easeOut", duration: 3, repeat: 0 },
  },
};
const idleAnimation = {
  rotateZ: [0, 5, 0, -5, 0],
  translateY: [20, 80, 20],
  transition: {
    rotateZ: { ease: "linear", duration: 1, repeat: "Infinity" },
    translateY: { ease: "linear", duration: 3, repeat: "Infinity" },
  },
};
function Landing() {
  const uiContext = React.useContext(UiContext);
  const rocketAnimationController = useAnimation();
  const mainController = useAnimation();
  const pageContentController = useAnimation();
  const initialSequence = async () => {
    mainController.start("visible");
    // on Mount Animation (hides rocket before starting)
    pageContentController.start("textAnimation");
    await rocketAnimationController.start({
      translateY: [200, 20],
      transition: { duration: 4 },
    });
    await rocketAnimationController.start("idle");
  };
  React.useEffect(() => {
    initialSequence();
  });
  const onClickRocket = () => {
    rocketAnimationController.start("rocketClicked");
    mainController.start("rocketClicked");
    pageContentController.start("hidden");
  };
  const rocketVariants = {
    idle: idleAnimation,
    rocketClicked: flyUpAnimation,
  };
  const mainContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.7 } },
  };
  const contentVariants = {
    hidden: { opacity: 0, transition: { delay: 0.5, duration: 2 } },
    visible: { opacity: 1 },
  };
  return (
    <Container initial={"hidden"} variants={mainContainerVariants} animate={mainController}>
      <ContentContainer initial="visible" variants={contentVariants} animate={pageContentController}>
        <Background animate={false} showPlanets={true} />
        <TextContainer>
          <InnerTextContainer flex={0.5} marginLeft={"10vmin"} marginTop={"5vh"}>
            <DoubleText
              offset={7}
              firstColor={COLORS["main-black"]}
              secondColor={COLORS["main-yellow"]}
              size={"12vmin"}
              font="Pixeboy"
              height="100%"
              animationProps={{
                animationColor: COLORS["main-green"],
                translateAnimation: true,
                duration: 0.3,
                scaleAnimation: true,
                absoluteDelay: 1,
                opacityAnimation: true,
                delayBetweenLetters: 0.05,
              }}
              text="Mark Armanious"
            />
          </InnerTextContainer>
          <InnerTextContainer flex={1} marginLeft={"15vmin"}>
            <DoubleText
              offset={7}
              firstColor={COLORS["main-black"]}
              secondColor={COLORS["main-green"]}
              size={"10vmin"}
              height="10vmin"
              font="Pixeboy"
              animationProps={{
                animationColor: COLORS["main-yellow"],
                duration: 0.3,
                scaleAnimation: true,
                absoluteDelay: 1.7,
                opacityAnimation: true,
                delayBetweenLetters: 0.04,
              }}
              text="Hi,"
            />
            <DoubleText
              offset={7}
              firstColor={COLORS["main-black"]}
              secondColor={COLORS["main-yellow"]}
              size={"10vmin"}
              height="10vmin"
              animationProps={{
                animationColor: COLORS["main-green"],
                duration: 0.3,
                scaleAnimation: true,
                absoluteDelay: 1.9,
                opacityAnimation: true,
                delayBetweenLetters: 0.04,
              }}
              font="Pixeboy"
              text="I'am Mark,"
            />
            <DoubleText
              offset={7}
              firstColor={COLORS["main-black"]}
              secondColor={COLORS["main-yellow"]}
              size={"10vmin"}
              animationProps={{
                animationColor: COLORS["main-yellow"],
                duration: 0.3,
                scaleAnimation: true,
                absoluteDelay: 2.2,
                opacityAnimation: true,
                delayBetweenLetters: 0.04,
              }}
              height="10vmin"
              font="Pixeboy"
              text="Software Developer"
            />
            <DoubleText
              offset={0}
              firstColor={COLORS["main-green"]}
              secondColor={COLORS["main-green"]}
              animationProps={{
                animationColor: COLORS["main-yellow"],
                duration: 0.3,
                scaleAnimation: true,
                absoluteDelay: 2.2,
                opacityAnimation: true,
                delayBetweenLetters: 0.02,
              }}
              size={"3vmin"}
              height="10vmin"
              font="Pixeboy"
              text="React - React Native Expert"
            />
          </InnerTextContainer>
          <InnerTextContainer flex={1} />
        </TextContainer>
      </ContentContainer>

      <Rocket
        animate={rocketAnimationController}
        initial={null}
        variants={rocketVariants}
        onTap={onClickRocket}
        src={process.env.PUBLIC_URL + "/Images/Background/Rocket.png"}
        smaller_dimension={uiContext.dimensions.smaller}
      />

      <PagesContainer initialSelectedTab={TABS.ABOUT_ME} />
    </Container>
  );
}

export default Landing;
