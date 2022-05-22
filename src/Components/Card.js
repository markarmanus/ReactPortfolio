import styled from "styled-components";
import { COLORS } from "../Constants/COLOR";
const Container = styled.div`
  width: 100%;
  height: 90%;
  margin: 10px;
  padding: 5px 15px;
  background-color: ${COLORS["secondary-blue"]};
`;
const Title = styled.p`
  color: ${COLORS["main-yellow"]};
  font-size: large;
  font-weight: bold;
  font-family: "Puritan";
  margin-bottom: 2px;
`;
const Detail = styled.p`
  margin: 0;
  color: white;
  font-weight: ${(props) => props.bold && "bold"};
`;
const BulletPoint = styled.p`
  color: ${COLORS["main-yellow"]};
  display: inline;
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
      <Title>{props.title}</Title>
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
            <BulletPoint>{point}</BulletPoint>
          </BulletPointContainer>
        ))}
    </Container>
  );
}
export default Card;
