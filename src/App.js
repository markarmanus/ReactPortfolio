import Landing from "./Components/Pages/Landing";
import styled from "styled-components";
import React from "react";
import { debounce } from "./Helpers/UI";
const Container = styled.div`
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
`;

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <Container dimensions={dimensions}>
      <Landing />
    </Container>
  );
}

export default App;
