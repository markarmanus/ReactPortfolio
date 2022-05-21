import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../Navbar";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

function PortfolioContainer(props) {
  const uiContext = React.useContext(UiContext);
  const controls = useAnimation();
  const sequence = async () => {
    if (props.clickedRocket) {
      controls.start({
        translateY: [0, -1 * uiContext.dimensions.height],
        transition: { delay: 0.5, duration: 3, ease: "easeOut" },
      });
      controls.start("visible");
    }
  };
  React.useEffect(() => {
    sequence();
  });

  return (
    <Container initial="hidden" animate={controls}>
      <Background />
      <Navbar />
    </Container>
  );
}

export default PortfolioContainer;
