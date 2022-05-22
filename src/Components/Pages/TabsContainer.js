import styled from "styled-components";
import UiContext from "../../Contexts/UI";
import Background from "../Background";
import React from "react";
import DoubleText from "../DoubleText";
import { COLORS } from "../../Constants/COLOR";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../Navbar";
import AboutMe from "./AboutMe/AboutMe";
import { TABS } from "../../Constants/PAGES";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  justify-content: end;
  align-content: flex-end;
  margin: auto;
  position: relative;
  padding-left: ${({ navBarWidth }) => navBarWidth.default};
  @media (max-width: 1000px) {
    width: ${({ navBarWidth }) => navBarWidth["1000px"]};
  }
  @media (max-width: 700px) {
    width: ${({ navBarWidth }) => navBarWidth["700px"]};
  }
`;

function TabsContainer(props) {
  const uiContext = React.useContext(UiContext);
  const controls = useAnimation();

  React.useEffect(() => {});
  const variants = {
    show: { scaleX: 1, originX: "0%", transition: { scaleX: { duration: 1, delay: 1.75 }, originX: { duration: 0 } } },
    hide: { scaleX: 0, originX: "100%", transition: { scaleX: { duration: 1 }, originX: { duration: 0 } } },
  };
  return (
    <Container navBarWidth={props.navBarWidth} variants={variants}>
      {props.selectedTab === TABS.ABOUT_ME && <AboutMe />}
      {props.selectedTab === TABS.CONTACT && <Contact />}
      {props.selectedTab === TABS.PROJECTS && <Projects />}
      {props.selectedTab === TABS.SKILLS && <Skills />}
    </Container>
  );
}

export default TabsContainer;
