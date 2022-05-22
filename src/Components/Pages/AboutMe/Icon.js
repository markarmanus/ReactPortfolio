import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";

function Icon(props) {
  const IconContainer = styled.div`
    position: relative;
    text-align: center;
  `;
  const IconProps = {
    size: "50%",
    color: COLORS["main-yellow"],
  };

  const IconTitle = styled.p`
    color: ${COLORS["main-yellow"]};
    font-size: large;
  `;
  const IconComponent = props.iconComponent;
  return (
    <IconContainer>
      <IconComponent {...IconProps} />
      <IconTitle>{props.children}</IconTitle>
    </IconContainer>
  );
}
export default Icon;
