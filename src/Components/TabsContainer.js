import styled from "styled-components";
import React from "react";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { TABS } from "../Constants/PAGES";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { CUSTOM_NAV_BAR_WIDTHS, NAV_BAR_WIDTH } from "./Config";

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: end;
  align-content: flex-end;
  margin: auto;
  position: relative;
  padding-left: ${NAV_BAR_WIDTH.default};
  ${CUSTOM_NAV_BAR_WIDTHS.map((width) => {
    return `@media (max-width: ${width}) {
      padding-left: ${NAV_BAR_WIDTH[width]};
    }`;
  })}
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
