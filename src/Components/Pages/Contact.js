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
  justify-content: end;
  align-content: flex-end;
  margin: auto;
  padding-top: 100px;
  position: relative;
`;

function Contact(props) {
  const uiContext = React.useContext(UiContext);

  return (
    <Container>
      <div style={{ display: "flex", height: "50%", width: "100%", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ flex: 1, height: "100px", margin: "10px", backgroundColor: COLORS["main-brown"] }}></div>
        <div style={{ flex: 1, height: "100px", margin: "10px", backgroundColor: COLORS["main-brown"] }}></div>
      </div>
    </Container>
  );
}

export default Contact;
