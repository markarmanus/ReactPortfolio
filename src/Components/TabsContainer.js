import styled from "styled-components";
import React from "react";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { TABS } from "../Constants/TABS";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { NAVBAR_WIDTH } from "./Config";

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: end;
  align-content: flex-end;
  margin: auto;
  position: relative;
  padding-left: ${NAVBAR_WIDTH};
`;

function TabsContainer(props) {
  return (
    <Container>
      {props.tabToRender === TABS.ABOUT_ME && <AboutMe />}
      {props.tabToRender === TABS.CONTACT && <Contact />}
      {props.tabToRender === TABS.PROJECTS && <Projects />}
      {props.tabToRender === TABS.SKILLS && <Skills />}
    </Container>
  );
}

export default TabsContainer;
