import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import AboutMe from "./AboutMe";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Rocket = styled(motion.img)`
  position: absolute;
  left: 47%;
  bottom: 0%;
  width: ${({ smallerDimension }) => 0.1 * smallerDimension}px;
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
const InnerTextContainer = styled.div`
  flex: ${({ flex }) => flex};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-top: ${({ marginTop }) => marginTop};
`;
const flyUpAnimation = {
  rotateZ: [null, 0],
  translateY: [null, -1080],
  transition: {
    rotateZ: { ease: "linear", duration: 1, repeat: 0 },
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
  const [clickedRocket, setClickedRocket] = React.useState(false);
  const controls = useAnimation();
  const sequence = async () => {
    if (!clickedRocket) {
      // on Mount Animation (hides rocket before starting)
      await controls.start({
        translateY: [200, 20],
        transition: { duration: 4 },
      });
    }
    await controls.start(clickedRocket ? flyUpAnimation : idleAnimation);
  };
  React.useEffect(() => {
    sequence();
  }, [clickedRocket]);

  return (
    <Container>
      <Background showPlanets={true} />

      <Rocket
        animate={controls}
        onTap={() => setClickedRocket(true)}
        src={process.env.PUBLIC_URL + "/Images/Background/Rocket.png"}
        smallerDimension={uiContext.dimensions.smaller}
      />
      <TextContainer>
        <InnerTextContainer flex={0.5} marginLeft={"10vmin"} marginTop={"5vh"}>
          <DoubleText
            offset={7}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"12vmin"}
            font="Pixeboy"
            height="100%"
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
            text="Hi,"
          />
          <DoubleText
            offset={7}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"10vmin"}
            height="10vmin"
            font="Pixeboy"
            text="I'am Mark,"
          />
          <DoubleText
            offset={7}
            firstColor={COLORS["main-black"]}
            secondColor={COLORS["main-yellow"]}
            size={"10vmin"}
            height="10vmin"
            font="Pixeboy"
            text="Software Developer"
          />
          <DoubleText
            offset={0}
            firstColor={COLORS["main-green"]}
            secondColor={COLORS["main-green"]}
            size={"3vmin"}
            height="10vmin"
            font="Pixeboy"
            text="React - React Native Expert"
          />
        </InnerTextContainer>
        <InnerTextContainer flex={1} />
      </TextContainer>
      <AboutMe clickedRocket={clickedRocket} />
    </Container>
  );
}

export default Landing;
