import styled from "styled-components";
import React from "react";
import { COLORS } from "../Constants/COLOR";
import DoubleText from "./DoubleText";
import { TABS } from "../Constants/TABS";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { NAVBAR_MIN_WIDTH, NAVBAR_MAX_WIDTH, NAVBAR_WIDTH } from "./Config";

const Container = styled.div`
  min-width: ${NAVBAR_MIN_WIDTH};
  width: ${NAVBAR_WIDTH};
  max-width: ${NAVBAR_MAX_WIDTH};
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
  font-size: 1.2vmax;
  font-family: "Poly";
  height: 3.5vh;
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
  size: "1.3vmax",
};
const Link = styled.a`
  height: fit-content;
`;
const CopyRight = styled.p`
  color: ${COLORS["main-yellow"]};
  margin: 10px 5%;
  font-family: "Poly";
  font-size: 0.65vmax;
  text-align: center;
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
          size={"5vmax"}
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
      <CopyRight>
        Handcrafted By<br></br> Mark Armanious © 2022{" "}
      </CopyRight>
    </Container>
  );
}

export default Navbar;
