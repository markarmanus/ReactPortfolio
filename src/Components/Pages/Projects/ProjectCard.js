import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${COLORS["third-blue"]};
  display: flex;

  transform: translate(0, -50%);
  left: 0%;
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  height: 100%;
  padding: 15px;
`;
const TechIconsContainer = styled.div`
  flex: 0.4;
`;
const TextInformationContainer = styled.div`
  flex: 0.6;
`;
const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  color: ${COLORS["main-yellow"]};
  font-family: "Pixeboy";
  font-size: 2em;
`;
const TitleExtension = styled.span`
  color: white;
  font-family: "Pixeboy";
  font-size: 1em;
  margin-left: 10px;
`;
const Detail = styled.span`
  color: ${COLORS["main-gray"]};
  margin-left: 15px;
  position: relative;
  top: -5px;
  font-family: "Prompt";
  font-size: 0.9em;
`;
const BulletPointContainer = styled.div`
  color: white;
  margin: 10px 0;
`;
const BulletPointCircle = styled.div`
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  margin-right: 10px;
  background-color: white;
  border-radius: 50%;
`;
const BulletPointsContainer = styled.div`
  margin-top: 20px;
`;
const TechnologiesContainer = styled.div`
  flex: 0.5;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TechnologiesTitle = styled.p`
  color: white;
  font-size: 1.6em;
  font-family: "Pixeboy";
  margin-bottom: 10px;
`;

const Link = styled.a`
  height: fit-content;
`;
const TechIconContainer = styled.span`
  margin: 0.5em 0.5em;
`;
const ImageContainer = styled.div`
  flex: 0.65;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const iconProps = {
  color: "white",
  size: 30,
};
function ProjectCard(props) {
  console.log(props.technologies);
  return (
    <Container top={props.top}>
      <InformationContainer>
        <TextInformationContainer>
          <TitleIconContainer>
            <TitleContainer>
              <Title>{props.title}</Title>
              <TitleExtension>{props.titleExt}</TitleExtension>
            </TitleContainer>

            <Link target="_blank" href={props.githubLink}>
              <FaGithubSquare color="white" size={30} />
            </Link>
          </TitleIconContainer>
          <Detail>{props.detail}</Detail>
          <BulletPointsContainer>
            {props.bulletPoints &&
              props.bulletPoints.map((bulletPoint, i) => {
                return (
                  <BulletPointContainer key={i}>
                    <BulletPointCircle />
                    <span>{bulletPoint}</span>
                  </BulletPointContainer>
                );
              })}
          </BulletPointsContainer>
        </TextInformationContainer>

        <TechnologiesContainer>
          <TechnologiesTitle>Technologies Used:</TechnologiesTitle>
          <TechIconsContainer>
            {props.technologies &&
              props.technologies.map((IconComp, i) => {
                return (
                  <TechIconContainer key={i}>
                    <IconComp {...iconProps} />
                  </TechIconContainer>
                );
              })}
          </TechIconsContainer>
        </TechnologiesContainer>
      </InformationContainer>
      <ImageContainer>
        <ProjectImage src={props.projectImage} />
      </ImageContainer>
    </Container>
  );
}
export default ProjectCard;
