import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
const Container = styled.div`
  width: 100%;
  height: 80%;
  margin: 10px;
  padding: 20px;
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
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold && "bold"};
`;
const BulletPoint = styled.p`
  color: ${COLORS["main-yellow"]};
  display: inline;
  font-size: ${(props) => props.fontSize};
`;
const PointCircle = styled.div`
  width: 6px;
  margin-right: 5px;
  transform: translate(-50%, -50%);
  display: inline-block;
  height: 6px;
  background-color: ${COLORS["main-yellow"]};
  border-radius: 50%;
`;
const BulletPointContainer = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
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
