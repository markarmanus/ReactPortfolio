import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
const Container = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  display: block;
  position: relative;
`;

const Layer = styled.p`
  font-family: ${({ props }) => props.font};
  font-size: ${({ props }) => props.size};
  color: ${({ color }) => color};
  position: absolute;
  top: ${({ offset }) => offset || 0}px;
  left: ${({ offset }) => offset || 0}px;
  margin: 0;
`;

function DoubleText(props) {
  const uiContext = React.useContext(UiContext);

  return (
    <Container width={props.width} height={props.height}>
      <Layer offset={props.offset} color={props.firstColor} props={props}>
        {props.text}
      </Layer>
      <Layer color={props.secondColor} props={props}>
        {props.text}
      </Layer>
    </Container>
  );
}

export default DoubleText;
