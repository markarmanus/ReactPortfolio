import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Rocket = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 30%);
  bottom: 0%;
  width: ${({ smallerDimension }) => (10 / 100) * smallerDimension}px;
  height: auto;
`;
const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
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
function Landing() {
  const uiContext = React.useContext(UiContext);
  return (
    <Container>
      <Background />
      <Rocket
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
    </Container>
  );
}

export default Landing;
