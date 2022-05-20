import Landing from "./Components/Pages/Landing";
import styled from "styled-components";
import React from "react";
import { debounce } from "./Helpers/UI";
import { UIContextProvider } from "./Contexts/UI";
const Container = styled.div`
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
`;
const defaultDimensions = {
  height: window.innerHeight,
  width: window.innerWidth,
  smaller: window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight,
};

function App() {
  const [dimensions, setDimensions] = React.useState(defaultDimensions);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        smaller: window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <UIContextProvider value={{ dimensions }}>
      <Container dimensions={dimensions}>
        <Landing />
      </Container>
    </UIContextProvider>
  );
}

export default App;
