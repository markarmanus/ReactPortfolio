import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { COLORS } from "../Constants/COLOR";
import DoubleText from "./DoubleText";
import { SocialMediaIconsReact } from "social-media-icons-react";
const Container = styled.div`
  width: 200px;
  height: 100%;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 700px) {
    width: 100px;
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
  borderColor: COLORS["secondary-blue"],
  roundness: "5px",
  iconColor: COLORS["secondary-blue"],
  backgroundColor: "white",
  size: "20",
  style: { margin: "0 10px" },
};
function Navbar(props) {
  const uiContext = React.useContext(UiContext);
  return (
    <Container width={props.width} height={props.height}>
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
        <Tab selected={props.selected == 1}>About me</Tab>
        <Tab selected={props.selected == 2}>Skills</Tab>
        <Tab selected={props.selected == 3}>Projects</Tab>
        <Tab selected={props.selected == 4}>Contact</Tab>
      </TabsContainer>
      <IconContainer>
        <SocialMediaIconsReact {...IconProps} icon="facebook" url="https://www.facebook.com/mark.armanus" />
        <SocialMediaIconsReact {...IconProps} icon="github" url="https://github.com/markarmanus" />
        <SocialMediaIconsReact
          {...IconProps}
          icon="linkedin"
          url="https://www.linkedin.com/in/mark-armanious-a6b707150/"
        />
      </IconContainer>
    </Container>
  );
}

export default Navbar;
