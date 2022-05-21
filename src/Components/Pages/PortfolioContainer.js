import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React, { useState } from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../Navbar";
import AboutMe from "./AboutMe";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;

function PortfolioContainer(props) {
  const uiContext = React.useContext(UiContext);

  const variants = {
    hidden: { translateY: uiContext.dimensions.height },
    rocketClicked: {
      translateY: [uiContext.dimensions.height, 0],
      transition: { delay: 0.5, duration: 3, ease: "easeOut" },
    },
  };

  return (
    <Container variants={variants}>
      <Background animate={true}></Background>
      <AboutMe />
      <Navbar />
    </Container>
  );
}

export default PortfolioContainer;
