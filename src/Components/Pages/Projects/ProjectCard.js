import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
import { motion } from "framer-motion";
import { projectImageVariants, projectInformationCardVariants } from "./AnimationConfig";
const IMAGE_RIGHT = "25%";
const IMAGE_RIGHT_PORTRAIT = "25%";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  transform: translate(0, -50%);
  padding-left: 3vw;
  left: 0%;
  @media screen and (orientation: portrait) {
    height: 35vh;
  }
`;
const InformationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS["third-blue"]};
  position: relative;
  top: calc(25% - 2vmax);
  justify-content: center;
  flex: 0.35;
  height: 45%;
  z-index: 1;
  padding: 1.25vmax;
  @media screen and (orientation: portrait) {
    min-width: 30vw;
  }
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
  font-size: 2vmax;
`;
const Dot = styled.span`
  background-color: white;
  margin: 0 0.5vmax;
  border-radius: 50%;
  width: 0.3vmax;
  height: 0.3vmax;
`;
const TitleExtension = styled.span`
  color: white;
  font-family: "Pixeboy";
  font-size: 1vmax;
`;
const Detail = styled.span`
  color: ${COLORS["main-gray"]};
  position: relative;
  left: 1vmax;
  font-family: "Prompt";
  font-size: 0.9vmax;
`;
const BulletPointContainer = styled.div`
  color: white;
  display: flex;
  align-items: baseline;
  margin: 1vh;
`;

const BulletPointCircle = styled.div`
  width: 0.4vmax;
  height: 0.4vmax;
  display: inline-block;
  margin-right: 0.8vmax;
  background-color: white;
  border-radius: 50%;
`;
const BulletPointsContainer = styled.div`
  margin-top: 1vh;
`;
const TechnologiesContainer = styled.div`
  flex: 0.5;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TechnologiesTitle = styled.p`
  color: white;
  font-size: 1.3vmax;
  font-family: "Pixeboy";
  margin-bottom: 0.7vh;
  margin-top: 0.3vh;
`;

const Link = styled.a`
  height: fit-content;
  border: 0;
  text-decoration: none;
`;

const ImageContainer = styled(motion.div)`
  flex: 0.65;
  position: relative;
  right: ${IMAGE_RIGHT};
  @media screen and (orientation: portrait) {
    right: ${IMAGE_RIGHT_PORTRAIT};
  }
`;
const ProjectImage = styled.img`
  height: 80%;
  width: calc(90% + ${IMAGE_RIGHT});
  object-fit: cover;
  @media screen and (orientation: portrait) {
    min-width: calc(40vw + ${IMAGE_RIGHT_PORTRAIT});
  }
`;
const BulletPointText = styled.span`
  color: white;
  font-size: 0.8vmax;
`;
const iconProps = {
  color: "white",
  size: "1.8vmax",
};

function ProjectCard(props) {
  return (
    <Container top={props.top}>
      <InformationContainer
        initial={{ opacity: 0 }}
        variants={projectInformationCardVariants}
        custom={props.reverseIndex}
      >
        <TextInformationContainer>
          <TitleIconContainer>
            <TitleContainer>
              {props.projectLink ? (
                <Link target="_blank" href={props.projectLink}>
                  <Title>{props.title}</Title>{" "}
                </Link>
              ) : (
                <Title>{props.title}</Title>
              )}
              <Dot />
              <TitleExtension>{props.titleExt}</TitleExtension>
            </TitleContainer>

            {props.githubLink && (
              <Link target="_blank" href={props.githubLink}>
                <FaGithubSquare color="white" size={"2vmax"} />
              </Link>
            )}
          </TitleIconContainer>
          <Detail>{props.detail}</Detail>
          <BulletPointsContainer>
            {props.bulletPoints &&
              props.bulletPoints.map((bulletPoint, i) => {
                return (
                  <BulletPointContainer key={i}>
                    <BulletPointCircle />
                    <BulletPointText>{bulletPoint}</BulletPointText>
                  </BulletPointContainer>
                );
              })}
          </BulletPointsContainer>
        </TextInformationContainer>
        {/* Hide temporary as most projects only use React */}
        {/* <TechnologiesContainer>
          <TechnologiesTitle>Technologies Used:</TechnologiesTitle>
          <TechIconsContainer>
            {props.technologies &&
              props.technologies.map((IconComp, i) => {
                return (
                  <span key={i}>
                    <IconComp style={{ margin: "0.5vmax" }} {...iconProps} />
                  </span>
                );
              })}
          </TechIconsContainer>
        </TechnologiesContainer> */}
      </InformationContainer>
      <ImageContainer initial={{ opacity: 0 }} custom={props.reverseIndex} variants={projectImageVariants}>
        {props.projectLink ? (
          <Link target="_blank" href={props.projectLink}>
            <ProjectImage src={props.projectImage} />
          </Link>
        ) : (
          <ProjectImage src={props.projectImage} />
        )}
      </ImageContainer>
    </Container>
  );
}
export default ProjectCard;
