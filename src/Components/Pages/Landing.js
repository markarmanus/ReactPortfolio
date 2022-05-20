import styled from "styled-components";
const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Images/Background/LandingBackground.png"});
  width: 100%;
  height: 100%;
`;

function Landing() {
  return <Background></Background>;
}

export default Landing;
