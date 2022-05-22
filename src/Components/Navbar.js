import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { COLORS } from "../Constants/COLOR";
import DoubleText from "./DoubleText";
import { TABS } from "../Constants/PAGES";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Container = styled.div`
  width: ${({ width }) => width.default};
  height: 100%;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: ${({ width }) => width["1000px"]};
  }
  @media (max-width: 700px) {
    width: ${({ width }) => width["700px"]};
  }
  display: flex;
  position: absolute;
  left: 0%;
  top: 0%;
  background-color: ${COLORS["secondary-blue"]};
`;

const Tab = styled.p`
  color: ${(props) => (props.selected ? COLORS["main-yellow"] : "white")};
  font-size: 20px;
  font-family: "Poly";
  height: 60px;
  width: 100%;
  border-bottom: 1px ${COLORS["main-yellow"]} solid;
  display: flex;
  justify-content: center;
  cursor: pointer;
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
  const uiContext = React.useContext(UiContext);
  return (
    <Container width={props.nav_bar_width}>
      <InitialsContainer>
        <DoubleText
          offset={8}
          firstColor={COLORS["main-brown"]}
          width={"65%"}
          secondColor={COLORS["main-yellow"]}
          size={"12vmin"}
          font="Pixeboy"
          height="100%"
          text="M.A"
        />
      </InitialsContainer>
      <TabsContainer>
        <Tab onClick={() => props.onSelectTab(TABS.ABOUT_ME)} selected={props.selectedTab == TABS.ABOUT_ME}>
          About me
        </Tab>
        <Tab onClick={() => props.onSelectTab(TABS.SKILLS)} selected={props.selectedTab == TABS.SKILLS}>
          Skills
        </Tab>
        <Tab onClick={() => props.onSelectTab(TABS.PROJECTS)} selected={props.selectedTab == TABS.PROJECTS}>
          Projects
        </Tab>
        <Tab onClick={() => props.onSelectTab(TABS.CONTACT)} selected={props.selectedTab == TABS.CONTACT}>
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
