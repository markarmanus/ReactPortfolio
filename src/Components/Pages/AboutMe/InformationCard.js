import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
const Container = styled.div`
  width: 100%;
  margin: 0 10px;
  padding: 1vw;
  background-color: ${COLORS["secondary-blue"]};
`;
const Title = styled.p`
  color: ${COLORS["main-yellow"]};
  font-weight: bold;
  font-family: "Puritan";
  margin-bottom: 2px;
  margin-top: 0;
  font-size: ${(props) => props.fontSize};
`;
const Detail = styled.p`
  margin: 0;
  color: white;
  font-size: ${(props) => `min(${props.fontSize},1.7vh)`};
  font-weight: ${(props) => props.bold && "bold"};
`;
const BulletPoint = styled.p`
  color: ${COLORS["main-yellow"]};
  display: inline-block;
  margin: 0;
  font-size: ${(props) => `min(${props.fontSize},2vh)`};
`;
const PointCircle = styled.div`
  width: 0.5vh;
  margin-right: 5px;
  transform: translate(-50%, -50%);
  display: inline-block;
  height: 0.5vh;
  background-color: ${COLORS["main-yellow"]};
  border-radius: 50%;
`;
const BulletPointContainer = styled.div`
  margin-bottom: 0.5vh;
  margin-top: 0.5vh;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
function Card(props) {
  return (
    <Container>
      <Title fontSize={props.titleFontSize}>{props.title}</Title>
      {props.details &&
        props.details.map((detail, i) => (
          <Detail key={i} {...detail}>
            {detail.text}
          </Detail>
        ))}
      {props.bulletPoints &&
        props.bulletPoints.map((point, i) => (
          <BulletPointContainer key={i}>
            <PointCircle />

            <BulletPoint fontSize={props.bulletPointFontSize}>{point}</BulletPoint>
          </BulletPointContainer>
        ))}
    </Container>
  );
}
export default Card;
