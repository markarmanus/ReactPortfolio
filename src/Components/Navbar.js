import styled from "styled-components";
import React from "react";
import { COLORS } from "../Constants/COLOR";
import DoubleText from "./DoubleText";
import { TABS } from "../Constants/PAGES";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { CUSTOM_NAV_BAR_WIDTHS, NAV_BAR_WIDTH } from "./Config";

const Container = styled.div`
  width: ${NAV_BAR_WIDTH.default};
  ${CUSTOM_NAV_BAR_WIDTHS.map((width) => {
    return `@media (max-width: ${width}) {
      width: ${NAV_BAR_WIDTH[width]};
    }`;
  })}
  height: 100%;
  flex-direction: column;
  display: flex;
  position: absolute;
  left: 0%;
  top: 0%;
  background-color: ${COLORS["secondary-blue"]};
`;

const Tab = styled.p`
  color: ${(props) => (props.selected ? COLORS["main-yellow"] : "white")};
  font-size: 1.5em;
  font-family: "Poly";
  height: 50px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  width: 100%;
  border-bottom: 1px ${COLORS["main-yellow"]} solid;
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  &:hover {
    color: ${COLORS["main-yellow"]};
  }
  margin: 0;
  align-items: center;
`;
const InitialsContainer = styled.div`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const IconContainer = styled.div`
  flex: 1;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  align-self: center;
`;
const TabsContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const IconProps = {
  color: "white",
  size: 30,
};
const Link = styled.a`
  height: fit-content;
`;
function Navbar(props) {
  return (
    <Container>
      <InitialsContainer>
        <DoubleText
          offset={8}
          firstColor={COLORS["main-brown"]}
          width={"80%"}
          secondColor={COLORS["main-yellow"]}
          animationProps={{
            duration: 0.9,
            repeat: "Infinity",
            absoluteDelay: 2,
            animationColor: COLORS["main-green"],
            delayBetweenLetters: 0.02,
          }}
          size={"7em"}
          font="Pixeboy"
          height="100%"
          text="M.A"
        />
      </InitialsContainer>
      <TabsContainer>
        <Tab
          disabled={props.disabled}
          onClick={() => props.onSelectTab(TABS.ABOUT_ME)}
          selected={props.currentSelectedTab === TABS.ABOUT_ME}
        >
          About me
        </Tab>
        <Tab
          disabled={props.disabled}
          onClick={() => props.onSelectTab(TABS.SKILLS)}
          selected={props.currentSelectedTab === TABS.SKILLS}
        >
          Skills
        </Tab>
        <Tab
          disabled={props.disabled}
          onClick={() => props.onSelectTab(TABS.PROJECTS)}
          selected={props.currentSelectedTab === TABS.PROJECTS}
        >
          Projects
        </Tab>
        <Tab
          disabled={props.disabled}
          onClick={() => props.onSelectTab(TABS.CONTACT)}
          selected={props.currentSelectedTab === TABS.CONTACT}
        >
          Contact
        </Tab>
      </TabsContainer>
      <IconContainer>
        <Link target="_blank" href="https://www.linkedin.com/in/mark-armanious-a6b707150/">
          <FaLinkedin {...IconProps} />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/mark.armanus">
          <FaFacebookSquare className="icon-link" {...IconProps} />
        </Link>
        <Link target="_blank" href="https://github.com/markarmanus">
          <FaGithubSquare {...IconProps} />
        </Link>
      </IconContainer>
    </Container>
  );
}

export default Navbar;
