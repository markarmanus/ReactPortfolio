import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../Navbar";

const Container = styled(motion.div)`
  width: ${(props) => props.width};
  height: 100%;
  justify-content: end;
  align-content: flex-end;
  margin: auto;
  padding-top: 100px;
  position: relative;
`;

function AboutMe(props) {
  const uiContext = React.useContext(UiContext);
  const controls = useAnimation();

  React.useEffect(() => {});

  return (
    <Container width={props.width} layout>
      <div style={{ display: "flex", height: "50%", width: "50%", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ flex: 1, height: "100px", margin: "10px", backgroundColor: COLORS["secondary-blue"] }}></div>
        <div style={{ flex: 1, height: "100px", margin: "10px", backgroundColor: COLORS["secondary-blue"] }}></div>
      </div>
    </Container>
  );
}

export default AboutMe;
