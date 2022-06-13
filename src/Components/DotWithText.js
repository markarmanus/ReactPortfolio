import styled from "styled-components";

function DotWithText(props) {
  const Circle = styled.div`
    width: ${(props) => props.radius};
    height: ${(props) => props.radius};
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
  `;
  const CircleTitle = styled.p`
    color: ${props.bgColor};
    position: absolute;
    transform: translate(-50%, -50%);
    top: ${(props) => (props.textOnSide ? "50%" : "100%")};
    left: ${(props) => (props.textOnSide ? "-150%" : "50%")};
    width: max-content;
    margin: ${(props) => props.margin || " 20px 0"};
  `;
  const CircleTitleContainer = styled.div`
    transform: translate(-50%, -50%);
    left: ${(props) => props.left};
    top: ${(props) => props.top || "50%"};
    position: absolute;
    display: inline-block;
  `;
  return (
    <CircleTitleContainer top={props.top} left={props.left}>
      <Circle {...props} />
      <CircleTitle margin={props.margin} textOnSide={props.textOnSide}>
        {props.title}
      </CircleTitle>
    </CircleTitleContainer>
  );
}
export default DotWithText;
