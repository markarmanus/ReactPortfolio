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
    top: 100%;
    left: 50%;
    width: max-content;
  `;
  const CircleTitleContainer = styled.div`
    transform: translate(-50%, -50%);
    left: ${(props) => props.left};
    top: 50%;
    position: absolute;
    display: inline-block;
  `;
  return (
    <CircleTitleContainer left={props.left}>
      <Circle {...props} />
      <CircleTitle>{props.title}</CircleTitle>
    </CircleTitleContainer>
  );
}
export default DotWithText;
